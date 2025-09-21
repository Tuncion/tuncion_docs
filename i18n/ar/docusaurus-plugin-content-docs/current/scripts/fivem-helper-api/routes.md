---
title: Routes
description: ⚙️ جميع المسارات لواجهة برمجة التطبيقات REST
---

استكشف جميع المسارات المتاحة لـ **REST API**، كل منها يتطلب مصادقة عبر مفتاح API.  
🔑 قم بتفعيل مفتاحك وفقًا للإرشادات في [how-to-activate.md](how-to-activate.md)  
❌ للتحقق من الاستجابات الفاشلة الافتراضية، تحقق من [failed-response.md](failed-response.md)  
📝 _**Base-URL:**_ `https://api.fivem-helper.eu`


## 📦 Fraction

### معلومات الفصيل
<span className='api-get'>`GET`</span> `/:fractionid/info`

احصل على معلومات حالية حول فصيل.

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "data": {
            "id": int,
            "isActive": int,
            "name": string,
            "img": string,
            "guildId": string,
            "categoryId": string,
            "roleId": string,
            "leaderInboxChannelId": string,
            "stampClockChannelId": string,
            "stampClockMessageId": string,
            "managementChannelId": string,
            "managementMessageId": string,
            "dutyListChannelId": string,
            "dutyListMessageId": string,
            "holidayListChannelId": string,
            "holidayListMessageId": string,
            "internalLogChannelId": string,
            "memberCount": int,
            "complaintCount": int,
            "derankCount": int,
            "gradesCount": int,
            "holidayCount": int,
            "kickCount": int,
            "meetingCount": int,
            "meetingCancellationCount": int,
            "panicCount": int,
            "promotionCount": int,
            "stampCount": int,
            "terminationCount": int,
            "uprankCount": int,
            "warnCount": int,
            "last_update": date (ISO 8601 standard),
            "created_at": date (ISO 8601 standard)
    },
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### تحديث اسم الفصيل
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

قم بتحديث اسم الفصيل الحالي.

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 الجسم**

| الاسم | القيمة       |
| ---- | ----------- |
| Name | `<NewName>` |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `400`**
```json
{
    "status": 400,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### تحديث شعار الفصيل
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

قم بتحديث شعار الفصيل الحالي.

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 الجسم**

| الاسم | القيمة       |
| ---- | ----------- |
| Logo | `<LinkToLogo>` |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `400`**
```json
{
    "status": 400,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

## 🤖 عضو الفصيل

### إضافة عضو فصيل
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

أضف عضوًا جديدًا إلى الفصيل.

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 الجسم**

| الاسم | القيمة       |
| ---- | ----------- |
| FirstName | `String` |
| LastName | `String` |


**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `400`**
```json
{
    "status": 400,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### طرد عضو الفصيل
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

قم بطرد عضو الفصيل.

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 الجسم**

| الاسم | القيمة       |
| ---- | ----------- |
| KickedById | `String` |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### معلومات عضو الفصيل
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

احصل على معلومات حالية حول عضو الفصيل.

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "data": {
          "id": int,
          "userId": string,
          "firstName": string,
          "lastName": string,
          "isLeader": int,
          "gradeId": int,
          "grade": int,
          "gradeLabel": string,
          "dutyTime": int,
          "stampCount": int,
          "holidayCount": int,
          "promotionCount": int,
          "complaintCount": int,
          "meetingCancellationCount": int,
          "panicCount": int,
          "uprankCount": int,
          "derankCount": int,
          "warnCount": int,
          "last_update": date (ISO 8601 standard),
          "created_at": date (ISO 8601 standard)
    },
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `401`**
```json
{
    "status": 401,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `404`**
```json
{
    "status": 404,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```


### ⏱️ ساعة الطوابع

### آخر طابع لعضو الفصيل
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

احصل على آخر طابع لعضو الفصيل.

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "data": {
        "id": int,
        "stampType": string,
        "stampTime": date (ISO 8601 standard)
    },
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `404`**
```json
{
    "status": 404,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### الطوابع السابقة لعضو الفصيل
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

احصل على الطوابع السابقة لعضو الفصيل (حد أقصى 15 طابع) 

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "data": [
        {
            "id": int,
            "stampType": string,
            "stampTime": date (ISO 8601 standard)
        }
        ... max 14 other stamps
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `404`**
```json
{
    "status": 404,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### طابع عضو الفصيل
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

قم بطابع عضو الفصيل الحالي

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 الجسم**

| الاسم | القيمة       |
| ---- | ----------- |
| Type | `<IN or OUT>` |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `400`**
```json
{
    "status": 400,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### 🏖️ عطلة

### آخر عطلة لعضو الفصيل
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

احصل على آخر عطلة لعضو الفصيل.

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "data": {
        "isActive": boolean,
        "holidayStartDate": date (ISO 8601 standard),
        "holidayEndDate": date (ISO 8601 standard),
        "holidayReason": string
    },
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `404`**
```json
{
    "status": 404,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### العطلات السابقة لعضو الفصيل
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

احصل على العطلات السابقة لعضو الفصيل (حد أقصى 15 طابع) 

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "data": [
        {
            "isActive": boolean,
            "holidayStartDate": date (ISO 8601 standard),
            "holidayEndDate": date (ISO 8601 standard),
            "holidayReason": string
        }
        ... max 14 other holidays
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `404`**
```json
{
    "status": 404,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### طلب عطلة لعضو الفصيل
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

اطلب عطلة لعضو الفصيل الحالي.

**🧾 الرؤوس**

| الاسم          | القيمة              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 الجسم**

| الاسم | القيمة       |
| ---- | ----------- |
| StartDate | `Date (ISO 8601 Standard)` |
| EndDate | `Date (ISO 8601 Standard)` |
| Reason | `String` |

**✅ الاستجابة `200`**
```json
{
    "status": 200,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ الاستجابة `400`**
```json
{
    "status": 400,
    "message": string,
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```