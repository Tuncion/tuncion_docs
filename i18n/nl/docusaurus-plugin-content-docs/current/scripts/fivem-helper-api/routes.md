---
title: Routes
description: ⚙️ Alle routes voor de Rest-API
---

Verken alle beschikbare routes voor de **REST API**, die allemaal authenticatie via API-sleutel vereisen.  
🔑 Activeer je sleutel volgens de richtlijnen op [how-to-activate.md](how-to-activate.md)  
❌ Voor standaard foutieve reacties, controleer [failed-response.md](failed-response.md)  
📝 _**Basis-URL:**_ `https://api.fivem-helper.eu`


## 📦 Fractie

### Fractie-informatie
<span className='api-get'>`GET`</span> `/:fractionid/info`

Krijg actuele informatie over een fractie.

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Reactie `200`**
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
            "last_update": date (ISO 8601 standaard),
            "created_at": date (ISO 8601 standaard)
    },
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

### Fractienaam bijwerken
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

Werk de huidige fractienaam bij.

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Naam | Waarde       |
| ---- | ----------- |
| Name | `<NewName>` |

**✅ Reactie `200`**
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

**❌ Reactie `400`**
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

### Fractielogo bijwerken
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

Werk het huidige fractielogo bij.

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Naam | Waarde       |
| ---- | ----------- |
| Logo | `<LinkToLogo>` |

**✅ Reactie `200`**
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

**❌ Reactie `400`**
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

## 🤖 Fractielid

### Fractielid toevoegen
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

Voeg een nieuw fractielid toe.

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Naam | Waarde       |
| ---- | ----------- |
| FirstName | `String` |
| LastName | `String` |


**✅ Reactie `200`**
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

**❌ Reactie `400`**
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

### Fractielid schoppen
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

Schop een fractielid.

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Naam | Waarde       |
| ---- | ----------- |
| KickedById | `String` |

**✅ Reactie `200`**
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

### Fractielid informatie
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

Krijg actuele informatie over een fractielid.

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Reactie `200`**
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
          "last_update": date (ISO 8601 standaard),
          "created_at": date (ISO 8601 standaard)
    },
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Reactie `401`**
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

**❌ Reactie `404`**
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


### ⏱️ Stempelklok

### Laatste stempel fractielid
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

Krijg de laatste stempel van een fractielid.

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Reactie `200`**
```json
{
    "status": 200,
    "data": {
        "id": int,
        "stampType": string,
        "stampTime": date (ISO 8601 standaard)
    },
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Reactie `404`**
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

### Vorige stempels fractielid
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

Krijg de vorige stempels van een fractielid (max. 15 stempels) 

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Reactie `200`**
```json
{
    "status": 200,
    "data": [
        {
            "id": int,
            "stampType": string,
            "stampTime": date (ISO 8601 standaard)
        }
        ... max 14 andere stempels
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Reactie `404`**
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

### Fractielid stempelen
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

Stempel het huidige fractielid

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Naam | Waarde       |
| ---- | ----------- |
| Type | `<IN of OUT>` |

**✅ Reactie `200`**
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

**❌ Reactie `400`**
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

### 🏖️ Vakantie

### Laatste vakantie fractielid
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

Krijg de laatste vakantie van een fractielid.

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Reactie `200`**
```json
{
    "status": 200,
    "data": {
        "isActive": boolean,
        "holidayStartDate": date (ISO 8601 standaard),
        "holidayEndDate": date (ISO 8601 standaard),
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

**❌ Reactie `404`**
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

### Vorige vakanties fractielid
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

Krijg de vorige vakanties van een fractielid (max. 15 stempels) 

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Reactie `200`**
```json
{
    "status": 200,
    "data": [
        {
            "isActive": boolean,
            "holidayStartDate": date (ISO 8601 standaard),
            "holidayEndDate": date (ISO 8601 standaard),
            "holidayReason": string
        }
        ... max 14 andere vakanties
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Reactie `404`**
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

### Fractielid vakantie aanvragen
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

Vraag een vakantie aan voor het huidige fractielid.

**🧾 Headers**

| Naam          | Waarde              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Naam | Waarde       |
| ---- | ----------- |
| StartDate | `Datum (ISO 8601 standaard)` |
| EndDate | `Datum (ISO 8601 standaard)` |
| Reason | `String` |

**✅ Reactie `200`**
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

**❌ Reactie `400`**
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