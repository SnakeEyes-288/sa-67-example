package controller

import (
	"encoding/base64"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"github.com/SnakeEyes-288/sa-67-example/config"
	"github.com/SnakeEyes-288/sa-67-example/entity"

	"github.com/google/uuid"

)

type CreatePaymentRequest struct {
	Payment entity.Payment  `json:"payment"` // ต้องใช้ `json` tag เพื่อให้ Bind ได้
	Tickets []entity.Ticket `json:"tickets"`
}

func CreatePayment(c *gin.Context) {
	var request CreatePaymentRequest

	// รับข้อมูล JSON จาก body
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid payment or tickets data"})
		return
	}

	// ตรวจสอบว่ามีการอัปโหลด SlipImage หรือไม่
	if request.Payment.SlipImage != "" {
		// ทำการลบ prefix "data:image/jpeg;base64," และ "data:image/png;base64," ถ้ามี
		if strings.HasPrefix(request.Payment.SlipImage, "data:image/jpeg;base64,") {
			request.Payment.SlipImage = strings.TrimPrefix(request.Payment.SlipImage, "data:image/jpeg;base64,")
		} else if strings.HasPrefix(request.Payment.SlipImage, "data:image/png;base64,") {
			request.Payment.SlipImage = strings.TrimPrefix(request.Payment.SlipImage, "data:image/png;base64,")
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Unsupported image format"})
			return
		}

		// แปลง Base64 เป็นไฟล์
		decodedImage, err := base64.StdEncoding.DecodeString(request.Payment.SlipImage)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid SlipImage data", "details": err.Error()})
			return
		}

		// ตรวจสอบว่า decodedImage มีข้อมูลหรือไม่
		if len(decodedImage) == 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Decoded SlipImage is empty"})
			return
		}

		// ตรวจสอบและสร้างโฟลเดอร์ uploads ถ้ายังไม่มี
		if _, err := os.Stat("uploads"); os.IsNotExist(err) {
			os.Mkdir("uploads", 0755) // สร้างโฟลเดอร์ uploads ถ้ายังไม่มี
		}

		// สร้างชื่อไฟล์ใหม่โดยใช้ UUID และเวลาปัจจุบัน
		newFileName := uuid.New().String() + "_" + time.Now().Format("20060102150405") + ".png"
		filePath := filepath.Join("uploads", newFileName)

		// บันทึกไฟล์สลิปไปยังโฟลเดอร์ "uploads"
		if err := os.WriteFile(filePath, decodedImage, 0644); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to save slip"})
			return
		}

		// อัปเดตสถานะการชำระเงินเป็น 'Paid'
		request.Payment.Status = "Paid"
		request.Payment.SlipImage = filePath
	} else {
		// หากไม่มีการอัปโหลดสลิป ให้สถานะยังคงเป็น 'Pending'
		request.Payment.Status = "Pending"
	}

	// ตรวจสอบฟิลด์ต่างๆ ของ Payment
	if request.Payment.PaymentMethod == "" || request.Payment.Amount <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "PaymentMethod or Amount is missing or invalid"})
		return
	}

	// เริ่มต้นการทำธุรกรรม
	db := config.DB()
	err := db.Transaction(func(tx *gorm.DB) error {
		// บันทึกข้อมูล Payment ลงในฐานข้อมูล
		if err := tx.Create(&request.Payment).Error; err != nil {
			return err
		}

		// บันทึกข้อมูล Tickets โดยเชื่อมโยงกับ Payment ID
		for _, ticket := range request.Tickets {
			ticket.PaymentID = &request.Payment.ID
			if err := tx.Create(&ticket).Error; err != nil {
				return err
			}
		}

		return nil
	})

	// หากเกิดข้อผิดพลาดระหว่างการทำธุรกรรม
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ส่งข้อมูลการชำระเงินกลับในกรณีที่ทำงานสำเร็จ
	c.JSON(http.StatusCreated, gin.H{"data": request.Payment})
}

// GetPaymentsByMemberID ดึงข้อมูลการชำระเงินตาม MemberID
func GetPaymentsByMemberID(c *gin.Context) {
	memberID := c.Param("id") // รับ MemberID จากพารามิเตอร์ใน URL

	var payments []entity.Payment
	db := config.DB()

	// ค้นหาการชำระเงินทั้งหมดที่เชื่อมโยงกับ MemberID
	if err := db.Preload("Tickets").Where("member_id = ?", memberID).Find(&payments).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ไม่พบข้อมูลการชำระเงินสำหรับ MemberID: " + memberID})
		return
	}

	// ส่งข้อมูลการชำระเงินกลับในรูปแบบ JSON
	c.JSON(http.StatusOK, gin.H{"data": payments})
}

