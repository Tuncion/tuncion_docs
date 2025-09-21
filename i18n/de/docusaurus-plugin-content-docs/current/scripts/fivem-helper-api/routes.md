---
title: Routes
description: ⚙️ Alle Routen für die Rest-API
---

Erkunde alle verfügbaren Routen für die **REST API**, die jeweils eine Authentifizierung über den API-Schlüssel erfordern.  
🔑 Aktiviere deinen Schlüssel gemäß den Richtlinien in [how-to-activate.md](how-to-activate.md)  
❌ Für standardmäßige fehlgeschlagene Antworten, siehe [failed-response.md](failed-response.md)  
📝 _**Basis-URL:**_ `https://api.fivem-helper.eu`


## 📦 Fraktion

### Fraktionsinfo
<span className='api-get'>`GET`</span> `/:fractionid/info`

Erhalte aktuelle Informationen über eine Fraktion.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Antwort `200`**
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

### Fraktionsnamen aktualisieren
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

Aktualisiere den aktuellen Fraktionsnamen.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name | Wert         |
| ---- | ------------ |
| Name | `<NewName>`  |

**✅ Antwort `200`**
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

**❌ Antwort `400`**
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

### Fraktionslogo aktualisieren
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

Aktualisiere das aktuelle Fraktionslogo.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name | Wert             |
| ---- | ---------------- |
| Logo | `<LinkToLogo>`   |

**✅ Antwort `200`**
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

**❌ Antwort `400`**
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

## 🤖 Fraktionsmitglied

### Fraktionsmitglied hinzufügen
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

Füge ein neues Fraktionsmitglied hinzu.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name      | Wert       |
| --------- | ----------- |
| FirstName | `String`   |
| LastName  | `String`   |


**✅ Antwort `200`**
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

**❌ Antwort `400`**
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

### Fraktionsmitglied kicken
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

Kicke ein Fraktionsmitglied.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name        | Wert       |
| ----------- | ----------- |
| KickedById | `String`   |

**✅ Antwort `200`**
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

### Fraktionsmitglied Info
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

Erhalte aktuelle Informationen über ein Fraktionsmitglied.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Antwort `200`**
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

**❌ Antwort `401`**
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

**❌ Antwort `404`**
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


### ⏱️ Stempel Uhr

### Fraktionsmitglied letzter Stempel
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

Erhalte den letzten Stempel eines Fraktionsmitglieds.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Antwort `200`**
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

**❌ Antwort `404`**
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

### Fraktionsmitglied vorherige Stempel
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

Erhalte die vorherigen Stempel eines Fraktionsmitglieds (max. 15 Stempel) 

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Antwort `200`**
```json
{
    "status": 200,
    "data": [
        {
            "id": int,
            "stampType": string,
            "stampTime": date (ISO 8601 standard)
        }
        ... max 14 andere Stempel
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Antwort `404`**
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

### Fraktionsmitglied stempeln
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

Stemple das aktuelle Fraktionsmitglied.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name | Wert             |
| ---- | ---------------- |
| Type | `<IN oder OUT>`  |

**✅ Antwort `200`**
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

**❌ Antwort `400`**
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

### 🏖️ Urlaub

### Fraktionsmitglied letzter Urlaub
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

Erhalte den letzten Urlaub eines Fraktionsmitglieds.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Antwort `200`**
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

**❌ Antwort `404`**
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

### Fraktionsmitglied vorherige Urlaube
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

Erhalte die vorherigen Urlaube eines Fraktionsmitglieds (max. 15 Stempel) 

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Antwort `200`**
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
        ... max 14 andere Urlaube
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Antwort `404`**
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

### Fraktionsmitglied Urlaub anfordern
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

Fordere einen Urlaub für das aktuelle Fraktionsmitglied an.

**🧾 Header**

| Name          | Wert               |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Body**

| Name      | Wert                             |
| --------- | -------------------------------- |
| StartDate | `Datum (ISO 8601 Standard)`     |
| EndDate   | `Datum (ISO 8601 Standard)`     |
| Reason    | `String`                         |

**✅ Antwort `200`**
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

**❌ Antwort `400`**
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