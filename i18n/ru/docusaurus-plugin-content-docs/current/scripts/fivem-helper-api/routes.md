---
title: Routes
description: ⚙️ Все маршруты для Rest-API
---

Изучите все доступные маршруты для **REST API**, каждый из которых требует аутентификации через API Key.  
🔑 Активируйте свой ключ, следуя инструкциям в [how-to-activate.md](how-to-activate.md)  
❌ Для стандартных неудачных ответов проверьте [failed-response.md](failed-response.md)  
📝 _**Базовый URL:**_ `https://api.fivem-helper.eu`


## 📦 Фракция

### Информация о фракции
<span className='api-get'>`GET`</span> `/:fractionid/info`

Получите текущую информацию о фракции.

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Ответ `200`**
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

### Обновить название фракции
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

Обновите текущее название фракции.

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тело**

| Название | Значение       |
| ---- | ----------- |
| Name | `<NewName>` |

**✅ Ответ `200`**
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

**❌ Ответ `400`**
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

### Обновить логотип фракции
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

Обновите текущий логотип фракции.

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тело**

| Название | Значение       |
| ---- | ----------- |
| Logo | `<LinkToLogo>` |

**✅ Ответ `200`**
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

**❌ Ответ `400`**
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

## 🤖 Участник фракции

### Добавить участника фракции
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

Добавьте нового участника фракции.

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тело**

| Название | Значение       |
| ---- | ----------- |
| FirstName | `String` |
| LastName | `String` |


**✅ Ответ `200`**
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

**❌ Ответ `400`**
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

### Исключить участника фракции
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

Исключите участника фракции.

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тело**

| Название | Значение       |
| ---- | ----------- |
| KickedById | `String` |

**✅ Ответ `200`**
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

### Информация об участнике фракции
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

Получите текущую информацию об участнике фракции.

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Ответ `200`**
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

**❌ Ответ `401`**
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

**❌ Ответ `404`**
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


### ⏱️ Часы штамповки

### Последний штамп участника фракции
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

Получите последний штамп участника фракции.

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Ответ `200`**
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

**❌ Ответ `404`**
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

### Предыдущие штампы участника фракции
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

Получите предыдущие штампы участника фракции (макс. 15 штампов) 

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Ответ `200`**
```json
{
    "status": 200,
    "data": [
        {
            "id": int,
            "stampType": string,
            "stampTime": date (ISO 8601 standard)
        }
        ... макс 14 других штампов
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Ответ `404`**
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

### Штамп участника фракции
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

Штамп текущего участника фракции

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тело**

| Название | Значение       |
| ---- | ----------- |
| Type | `<IN or OUT>` |

**✅ Ответ `200`**
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

**❌ Ответ `400`**
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

### 🏖️ Праздник

### Последний праздник участника фракции
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

Получите последний праздник участника фракции.

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Ответ `200`**
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

**❌ Ответ `404`**
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

### Предыдущие праздники участника фракции
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

Получите предыдущие праздники участника фракции (макс. 15 штампов) 

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Ответ `200`**
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
        ... макс 14 других праздников
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Ответ `404`**
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

### Запросить праздник для участника фракции
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

Запросите праздник для текущего участника фракции.

**🧾 Заголовки**

| Название      | Значение            |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Тело**

| Название | Значение       |
| ---- | ----------- |
| StartDate | `Date (ISO 8601 Standard)` |
| EndDate | `Date (ISO 8601 Standard)` |
| Reason | `String` |

**✅ Ответ `200`**
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

**❌ Ответ `400`**
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