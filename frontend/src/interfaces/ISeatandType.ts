// interfaces/ISeatandType.ts
export interface SeatandTypeInterface {
    SeatNumber: string;
    isAvailable: boolean;
    SeatType?: {
      Name: string;
      Description: string;
    };
    Concert?: {
      Name: string;
      Date: string;
      Venue: string;
    };
  }


  /*{
    "data": [
        {
            "ID": 1,
            "CreatedAt": "2024-09-28T09:39:56.0874701+07:00",
            "UpdatedAt": "2024-09-28T09:39:56.0874701+07:00",
            "DeletedAt": null,
            "Price": 10,
            "PurchaseDate": "2024-09-28T02:39:56.078Z",
            "SeatID": 113,
            "Seat": {
                "ID": 113,
                "CreatedAt": "2024-09-28T09:34:59.856691+07:00",
                "UpdatedAt": "2024-09-28T09:39:56.1311079+07:00",
                "DeletedAt": null,
                "SeatNumber": "E3-C3",
                "IsAvailable": false,
                "SeatTypeID": 4,
                "SeatType": {
                    "ID": 4,
                    "CreatedAt": "2024-09-28T09:34:56.140782+07:00",
                    "UpdatedAt": "2024-09-28T09:34:56.140782+07:00",
                    "DeletedAt": null,
                    "Name": "Economy",
                    "Price": 10,
                    "Description": "ที่นั่งราคาประหยัด",
                    "Seats": null
                },
                "ConcertID": 3,
                "Concert": {
                    "ID": 3,
                    "CreatedAt": "2024-09-28T09:34:56.2042366+07:00",
                    "UpdatedAt": "2024-09-28T09:34:56.2042366+07:00",
                    "DeletedAt": null,
                    "Name": "Concert Three",
                    "Date": "2024-12-28T09:34:56.164373+07:00",
                    "Venue": "เซ็นทรัลเวิลด์",
                    "Seats": null
                }
            },
            "MemberID": 1,
            "Member": {
                "ID": 1,
                "CreatedAt": "2024-09-28T09:34:56.0612616+07:00",
                "UpdatedAt": "2024-09-28T09:34:56.0612616+07:00",
                "DeletedAt": null,
                "Username": "Sa1",
                "Password": "$2a$14$vz2nChhmQ9KVLx5ekb87AeFsfTplyC6C4TWRB4RNl5PvtP.CJujcW",
                "Email": "B6512194@g.sut.ac.th",
                "FirstName": "Sa",
                "LastName": "67",
                "Birthday": "1988-11-12T00:00:00Z",
                "PhoneNumber": "0990399752",
                "Tickets": null,
                "Smss": null
            },
            "PaymentID": 1,
            "Payment": {
                "ID": 1,
                "CreatedAt": "2024-09-28T09:39:56.0228121+07:00",
                "UpdatedAt": "2024-09-28T09:39:56.0228121+07:00",
                "DeletedAt": null,
                "PaymentMethod": "PromptPay",
                "PaymentDate": "2024-09-28T02:39:55.925Z",
                "Status": "Paid",
                "Quantity": 2,
                "Amount": 20,
                "SlipImage": "uploads\\b2db12e8-cd32-4a8d-83ce-e918d2f496b3_20240928093955.png",
                "Tickets": null,
                "ConditionRefunID": 1,
                "ConditionRefun": {
                    "ID": 1,
                    "CreatedAt": "2024-09-28T09:39:55.8546648+07:00",
                    "UpdatedAt": "2024-09-28T09:39:55.8546648+07:00",
                    "DeletedAt": null,
                    "AcceptedTerms": true,
                    "Description": "เงื่อนไขการซื้อบัตรคอนเสิร์ตกรุณาอ่านและยอมรับเงื่อนไขต่อไปนี้ก่อนดำเนินการซื้อบัตร:จำนวนบัตร: ข้าพเจ้าตกลงว่าจะซื้อบัตรไม่เกินจำนวนที่กำหนดต่อการซื้อในหนึ่งครั้ง (เช่น 4 ใบต่อคน) และเข้าใจว่าไม่สามารถซื้อบัตรเพิ่มเติมได้หากเกินจำนวนที่กำหนด\n    การคืนเงินและการยกเลิก: ข้าพเจ้าเข้าใจว่าการซื้อบัตรนี้ไม่สามารถขอคืนเงินหรือแลกเปลี่ยนได้ ยกเว้นในกรณีที่ผู้จัดงานมีการยกเลิกหรือเลื่อนงานเท่านั้น ซึ่งจะมีเงื่อนไขในการคืนเงินตามที่ผู้จัดกำหนด\n    การเลือกที่นั่ง: ข้าพเจ้าเข้าใจว่าการเลือกที่นั่งจะเป็นไปตามระบบที่กำหนด และหากที่นั่งที่เลือกไม่มีให้บริการ ระบบจะทำการเลือกที่นั่งอื่นในระดับราคาเดียวกันให้โดยอัตโนมัติ\n    การชำระเงิน: ข้าพเจ้าตกลงที่จะชำระเงินตามช่องทางที่กำหนด และหากการชำระเงินไม่สำเร็จภายในเวลาที่กำหนด ระบบจะทำการยกเลิกการสั่งซื้อโดยอัตโนมัติ\n    การยืนยันตัวตน: ข้าพเจ้ายอมรับว่าข้อมูลที่ใช้ในการซื้อบัตรเป็นข้อมูลที่ถูกต้องและสามารถตรวจสอบได้ หากมีการตรวจพบว่าข้อมูลไม่ถูกต้อง ทางผู้จัดงานมีสิทธิ์ในการยกเลิกบัตรหรือปฏิเสธการเข้าใช้บริการ\n    การใช้บัตร: ข้าพเจ้าตกลงที่จะใช้บัตรคอนเสิร์ตตามวันที่ เวลา และสถานที่ที่กำหนดเท่านั้น และจะไม่ใช้บัตรเพื่อการซื้อขายต่อในลักษณะที่ผิดกฎหมาย\n    การเข้าชมงาน: ข้าพเจ้าเข้าใจว่าการเข้าชมงานคอนเสิร์ตจะต้องปฏิบัติตามกฎระเบียบของสถานที่จัดงาน และยอมรับความเสี่ยงใดๆ ที่อาจเกิดขึ้นในระหว่างการเข้าร่วมงาน"
                },
                "Refundrequests": null
            }
        },
        {
            "ID": 2,
            "CreatedAt": "2024-09-28T09:39:56.1229947+07:00",
            "UpdatedAt": "2024-09-28T09:39:56.1229947+07:00",
            "DeletedAt": null,
            "Price": 10,
            "PurchaseDate": "2024-09-28T02:39:56.078Z",
            "SeatID": 114,
            "Seat": {
                "ID": 114,
                "CreatedAt": "2024-09-28T09:34:59.9330132+07:00",
                "UpdatedAt": "2024-09-28T09:39:56.2125313+07:00",
                "DeletedAt": null,
                "SeatNumber": "E4-C3",
                "IsAvailable": false,
                "SeatTypeID": 4,
                "SeatType": {
                    "ID": 4,
                    "CreatedAt": "2024-09-28T09:34:56.140782+07:00",
                    "UpdatedAt": "2024-09-28T09:34:56.140782+07:00",
                    "DeletedAt": null,
                    "Name": "Economy",
                    "Price": 10,
                    "Description": "ที่นั่งราคาประหยัด",
                    "Seats": null
                },
                "ConcertID": 3,
                "Concert": {
                    "ID": 3,
                    "CreatedAt": "2024-09-28T09:34:56.2042366+07:00",
                    "UpdatedAt": "2024-09-28T09:34:56.2042366+07:00",
                    "DeletedAt": null,
                    "Name": "Concert Three",
                    "Date": "2024-12-28T09:34:56.164373+07:00",
                    "Venue": "เซ็นทรัลเวิลด์",
                    "Seats": null
                }
            },
            "MemberID": 1,
            "Member": {
                "ID": 1,
                "CreatedAt": "2024-09-28T09:34:56.0612616+07:00",
                "UpdatedAt": "2024-09-28T09:34:56.0612616+07:00",
                "DeletedAt": null,
                "Username": "Sa1",
                "Password": "$2a$14$vz2nChhmQ9KVLx5ekb87AeFsfTplyC6C4TWRB4RNl5PvtP.CJujcW",
                "Email": "B6512194@g.sut.ac.th",
                "FirstName": "Sa",
                "LastName": "67",
                "Birthday": "1988-11-12T00:00:00Z",
                "PhoneNumber": "0990399752",
                "Tickets": null,
                "Smss": null
            },
            "PaymentID": 1,
            "Payment": {
                "ID": 1,
                "CreatedAt": "2024-09-28T09:39:56.0228121+07:00",
                "UpdatedAt": "2024-09-28T09:39:56.0228121+07:00",
                "DeletedAt": null,
                "PaymentMethod": "PromptPay",
                "PaymentDate": "2024-09-28T02:39:55.925Z",
                "Status": "Paid",
                "Quantity": 2,
                "Amount": 20,
                "SlipImage": "uploads\\b2db12e8-cd32-4a8d-83ce-e918d2f496b3_20240928093955.png",
                "Tickets": null,
                "ConditionRefunID": 1,
                "ConditionRefun": {
                    "ID": 1,
                    "CreatedAt": "2024-09-28T09:39:55.8546648+07:00",
                    "UpdatedAt": "2024-09-28T09:39:55.8546648+07:00",
                    "DeletedAt": null,
                    "AcceptedTerms": true,
                    "Description": "เงื่อนไขการซื้อบัตรคอนเสิร์ตกรุณาอ่านและยอมรับเงื่อนไขต่อไปนี้ก่อนดำเนินการซื้อบัตร:จำนวนบัตร: ข้าพเจ้าตกลงว่าจะซื้อบัตรไม่เกินจำนวนที่กำหนดต่อการซื้อในหนึ่งครั้ง (เช่น 4 ใบต่อคน) และเข้าใจว่าไม่สามารถซื้อบัตรเพิ่มเติมได้หากเกินจำนวนที่กำหนด\n    การคืนเงินและการยกเลิก: ข้าพเจ้าเข้าใจว่าการซื้อบัตรนี้ไม่สามารถขอคืนเงินหรือแลกเปลี่ยนได้ ยกเว้นในกรณีที่ผู้จัดงานมีการยกเลิกหรือเลื่อนงานเท่านั้น ซึ่งจะมีเงื่อนไขในการคืนเงินตามที่ผู้จัดกำหนด\n    การเลือกที่นั่ง: ข้าพเจ้าเข้าใจว่าการเลือกที่นั่งจะเป็นไปตามระบบที่กำหนด และหากที่นั่งที่เลือกไม่มีให้บริการ ระบบจะทำการเลือกที่นั่งอื่นในระดับราคาเดียวกันให้โดยอัตโนมัติ\n    การชำระเงิน: ข้าพเจ้าตกลงที่จะชำระเงินตามช่องทางที่กำหนด และหากการชำระเงินไม่สำเร็จภายในเวลาที่กำหนด ระบบจะทำการยกเลิกการสั่งซื้อโดยอัตโนมัติ\n    การยืนยันตัวตน: ข้าพเจ้ายอมรับว่าข้อมูลที่ใช้ในการซื้อบัตรเป็นข้อมูลที่ถูกต้องและสามารถตรวจสอบได้ หากมีการตรวจพบว่าข้อมูลไม่ถูกต้อง ทางผู้จัดงานมีสิทธิ์ในการยกเลิกบัตรหรือปฏิเสธการเข้าใช้บริการ\n    การใช้บัตร: ข้าพเจ้าตกลงที่จะใช้บัตรคอนเสิร์ตตามวันที่ เวลา และสถานที่ที่กำหนดเท่านั้น และจะไม่ใช้บัตรเพื่อการซื้อขายต่อในลักษณะที่ผิดกฎหมาย\n    การเข้าชมงาน: ข้าพเจ้าเข้าใจว่าการเข้าชมงานคอนเสิร์ตจะต้องปฏิบัติตามกฎระเบียบของสถานที่จัดงาน และยอมรับความเสี่ยงใดๆ ที่อาจเกิดขึ้นในระหว่างการเข้าร่วมงาน"
                },
                "Refundrequests": null
            }
        }
    ]
}*/