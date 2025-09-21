---
title: Routes
description: ⚙️ Wszystkie trasy dla Rest-API
---

Explore all available routes for the **REST API**, each requiring authentication via API Key.  
🔑 Activate your key following the guidelines at [how-to-activate.md](how-to-activate.md)  
❌ For default failed responses, check [failed-response.md](failed-response.md)  
📝 _**Base-URL:**_ `https://api.fivem-helper.eu`


## 📦 Fraction

### Fraction Info
<span className='api-get'>`GET`</span> `/:fractionid/info`

Get current Information about a fraction.

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Response `200`**
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

### Update Fraction Name
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

Update the current fraction name.

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name | Value       |
| ---- | ----------- |
| Name | `<NewName>` |

**✅ Response `200`**
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

**❌ Response `400`**
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

### Update Fraction Logo
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

Update the current fraction logo.

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name | Value       |
| ---- | ----------- |
| Logo | `<LinkToLogo>` |

**✅ Response `200`**
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

**❌ Response `400`**
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

## 🤖 Fraction Member

### Fraction Member Add
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

Add a new fraction member.

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name | Value       |
| ---- | ----------- |
| FirstName | `String` |
| LastName | `String` |


**✅ Response `200`**
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

**❌ Response `400`**
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

### Fraction Member Kick
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

Kick a new fraction member.

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name | Value       |
| ---- | ----------- |
| KickedById | `String` |

**✅ Response `200`**
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

### Fraction Member Info
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

Get current information about a fraction member.

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Response `200`**
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

**❌ Response `401`**
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

**❌ Response `404`**
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


### ⏱️ Stamp Clock

### Fraction Member Last Stamp
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

Get the last fraction member stamp.

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Response `200`**
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

**❌ Response `404`**
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

### Fraction Member Previous Stamps
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

Get the previous fraction member stamps (max. 15 stamps) 

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Response `200`**
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

**❌ Response `404`**
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

### Fraction Member Stamp
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

Stamp the current fraction member

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name | Value       |
| ---- | ----------- |
| Type | `<IN or OUT>` |

**✅ Response `200`**
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

**❌ Response `400`**
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

### 🏖️ Holiday

### Fraction Member Last Holiday
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

Get the last fraction member holiday.

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Response `200`**
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

**❌ Response `404`**
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

### Fraction Member Previous Holidays
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

Get the previous fraction member holiday (max. 15 Stamps) 

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Response `200`**
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

**❌ Response `404`**
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

### Fraction Member Request Holiday
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

Request a holiday for the current fraction member.

**🧾 Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name | Value       |
| ---- | ----------- |
| StartDate | `Date (ISO 8601 Standard)` |
| EndDate | `Date (ISO 8601 Standard)` |
| Reason | `String` |

**✅ Response `200`**
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

**❌ Response `400`**
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