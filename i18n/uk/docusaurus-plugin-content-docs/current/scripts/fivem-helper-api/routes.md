---
title: Routes
description: ⚙️ Усі маршрути для Rest-API
---

Досліджуйте всі доступні маршрути для **REST API**, кожен з яких вимагає автентифікації через API Key.  
🔑 Активуйте свій ключ, дотримуючись інструкцій у [how-to-activate.md](how-to-activate.md)  
❌ Для стандартних невдалих відповідей перевірте [failed-response.md](failed-response.md)  
📝 _**Базовий URL:**_ `https://api.fivem-helper.eu`


## 📦 Фракція

### Інформація про фракцію
<span className='api-get'>`GET`</span> `/:fractionid/info`

Отримати поточну інформацію про фракцію.

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Відповідь `200`**
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

### Оновити назву фракції
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

Оновити поточну назву фракції.

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тіло**

| Назва | Значення       |
| ----- | -------------- |
| Name  | `<NewName>`    |

**✅ Відповідь `200`**
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

**❌ Відповідь `400`**
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

### Оновити логотип фракції
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

Оновити поточний логотип фракції.

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тіло**

| Назва | Значення       |
| ----- | -------------- |
| Logo  | `<LinkToLogo>` |

**✅ Відповідь `200`**
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

**❌ Відповідь `400`**
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

## 🤖 Член фракції

### Додати члена фракції
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

Додати нового члена фракції.

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тіло**

| Назва      | Значення       |
| ---------- | -------------- |
| FirstName  | `String`       |
| LastName   | `String`       |


**✅ Відповідь `200`**
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

**❌ Відповідь `400`**
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

### Виключити члена фракції
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

Виключити члена фракції.

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тіло**

| Назва      | Значення       |
| ---------- | -------------- |
| KickedById | `String`       |

**✅ Відповідь `200`**
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

### Інформація про члена фракції
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

Отримати поточну інформацію про члена фракції.

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Відповідь `200`**
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

**❌ Відповідь `401`**
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

**❌ Відповідь `404`**
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


### ⏱️ Час штампування

### Останній штамп члена фракції
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

Отримати останній штамп члена фракції.

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Відповідь `200`**
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

**❌ Відповідь `404`**
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

### Попередні штампи члена фракції
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

Отримати попередні штампи члена фракції (макс. 15 штампів) 

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Відповідь `200`**
```json
{
    "status": 200,
    "data": [
        {
            "id": int,
            "stampType": string,
            "stampTime": date (ISO 8601 standard)
        }
        ... макс 14 інших штампів
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Відповідь `404`**
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

### Штамп члена фракції
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

Штампувати поточного члена фракції

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тіло**

| Назва | Значення       |
| ----- | -------------- |
| Type  | `<IN or OUT>`  |

**✅ Відповідь `200`**
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

**❌ Відповідь `400`**
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

### 🏖️ Відпустка

### Остання відпустка члена фракції
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

Отримати останню відпустку члена фракції.

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Відповідь `200`**
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

**❌ Відповідь `404`**
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

### Попередні відпустки члена фракції
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

Отримати попередні відпустки члена фракції (макс. 15 штампів) 

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Відповідь `200`**
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
        ... макс 14 інших відпусток
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Відповідь `404`**
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

### Запит на відпустку члена фракції
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

Запросити відпустку для поточного члена фракції.

**🧾 Заголовки**

| Назва         | Значення           |
| --------------| ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тіло**

| Назва      | Значення       |
| ---------- | -------------- |
| StartDate  | `Date (ISO 8601 Standard)` |
| EndDate    | `Date (ISO 8601 Standard)` |
| Reason     | `String`       |

**✅ Відповідь `200`**
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

**❌ Відповідь `400`**
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