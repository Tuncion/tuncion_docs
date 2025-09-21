---
title: Routes
description: ⚙️ Tutte le rotte per il Rest-API
---

Esplora tutte le rotte disponibili per il **REST API**, ognuna delle quali richiede autenticazione tramite API Key.  
🔑 Attiva la tua chiave seguendo le linee guida su [how-to-activate.md](how-to-activate.md)  
❌ Per le risposte di errore predefinite, controlla [failed-response.md](failed-response.md)  
📝 _**Base-URL:**_ `https://api.fivem-helper.eu`


## 📦 Fractions

### Informazioni sulla Fraction
<span className='api-get'>`GET`</span> `/:fractionid/info`

Ottieni informazioni attuali su una fraction.

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Risposta `200`**
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

### Aggiorna il Nome della Fraction
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

Aggiorna il nome attuale della fraction.

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valore       |
| ---- | ----------- |
| Name | `<NewName>` |

**✅ Risposta `200`**
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

**❌ Risposta `400`**
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

### Aggiorna il Logo della Fraction
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

Aggiorna il logo attuale della fraction.

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valore       |
| ---- | ----------- |
| Logo | `<LinkToLogo>` |

**✅ Risposta `200`**
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

**❌ Risposta `400`**
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

## 🤖 Membro della Fraction

### Aggiungi Membro della Fraction
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

Aggiungi un nuovo membro alla fraction.

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valore       |
| ---- | ----------- |
| FirstName | `String` |
| LastName | `String` |


**✅ Risposta `200`**
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

**❌ Risposta `400`**
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

### Espelli Membro della Fraction
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

Espelli un membro della fraction.

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valore       |
| ---- | ----------- |
| KickedById | `String` |

**✅ Risposta `200`**
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

### Informazioni sul Membro della Fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

Ottieni informazioni attuali su un membro della fraction.

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Risposta `200`**
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

**❌ Risposta `401`**
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

**❌ Risposta `404`**
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


### ⏱️ Timbratura

### Ultima Timbratura del Membro della Fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

Ottieni l'ultima timbratura del membro della fraction.

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Risposta `200`**
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

**❌ Risposta `404`**
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

### Timbrature Precedenti del Membro della Fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

Ottieni le timbrature precedenti del membro della fraction (max. 15 timbrature) 

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Risposta `200`**
```json
{
    "status": 200,
    "data": [
        {
            "id": int,
            "stampType": string,
            "stampTime": date (ISO 8601 standard)
        }
        ... max 14 altre timbrature
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Risposta `404`**
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

### Timbratura del Membro della Fraction
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

Timbra il membro attuale della fraction

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valore       |
| ---- | ----------- |
| Type | `<IN or OUT>` |

**✅ Risposta `200`**
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

**❌ Risposta `400`**
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

### 🏖️ Ferie

### Ultima Ferie del Membro della Fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

Ottieni l'ultima ferie del membro della fraction.

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Risposta `200`**
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

**❌ Risposta `404`**
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

### Ferie Precedenti del Membro della Fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

Ottieni le ferie precedenti del membro della fraction (max. 15 timbrature) 

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Risposta `200`**
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
        ... max 14 altre ferie
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Risposta `404`**
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

### Richiesta di Ferie per il Membro della Fraction
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

Richiedi una ferie per il membro attuale della fraction.

**🧾 Intestazioni**

| Nome          | Valore              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valore       |
| ---- | ----------- |
| StartDate | `Date (ISO 8601 Standard)` |
| EndDate | `Date (ISO 8601 Standard)` |
| Reason | `String` |

**✅ Risposta `200`**
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

**❌ Risposta `400`**
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