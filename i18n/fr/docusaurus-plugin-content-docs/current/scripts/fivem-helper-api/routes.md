---
title: Routes
description: ⚙️ Toutes les routes pour l'API Rest
---

Explorez toutes les routes disponibles pour l'**API REST**, chacune nécessitant une authentification via une clé API.  
🔑 Activez votre clé en suivant les directives à [how-to-activate.md](how-to-activate.md)  
❌ Pour les réponses par défaut échouées, consultez [failed-response.md](failed-response.md)  
📝 _**Base-URL :**_ `https://api.fivem-helper.eu`


## 📦 Fraction

### Informations sur la fraction
<span className='api-get'>`GET`</span> `/:fractionid/info`

Obtenez des informations actuelles sur une fraction.

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Réponse `200`**
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

### Mettre à jour le nom de la fraction
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

Mettez à jour le nom actuel de la fraction.

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corps**

| Nom  | Valeur       |
| ---- | ----------- |
| Name | `<NewName>` |

**✅ Réponse `200`**
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

**❌ Réponse `400`**
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

### Mettre à jour le logo de la fraction
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

Mettez à jour le logo actuel de la fraction.

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corps**

| Nom  | Valeur       |
| ---- | ----------- |
| Logo | `<LinkToLogo>` |

**✅ Réponse `200`**
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

**❌ Réponse `400`**
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

## 🤖 Membre de la fraction

### Ajouter un membre de la fraction
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

Ajoutez un nouveau membre à la fraction.

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corps**

| Nom       | Valeur       |
| --------- | ----------- |
| FirstName | `String` |
| LastName  | `String` |


**✅ Réponse `200`**
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

**❌ Réponse `400`**
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

### Expulser un membre de la fraction
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

Expulsez un membre de la fraction.

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corps**

| Nom         | Valeur       |
| ----------- | ----------- |
| KickedById | `String` |

**✅ Réponse `200`**
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

### Informations sur le membre de la fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

Obtenez des informations actuelles sur un membre de la fraction.

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Réponse `200`**
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

**❌ Réponse `401`**
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

**❌ Réponse `404`**
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


### ⏱️ Horloge de pointage

### Dernier pointage du membre de la fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

Obtenez le dernier pointage d'un membre de la fraction.

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Réponse `200`**
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

**❌ Réponse `404`**
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

### Points de passage précédents du membre de la fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

Obtenez les points de passage précédents d'un membre de la fraction (max. 15 points) 

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Réponse `200`**
```json
{
    "status": 200,
    "data": [
        {
            "id": int,
            "stampType": string,
            "stampTime": date (ISO 8601 standard)
        }
        ... max 14 autres points
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Réponse `404`**
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

### Pointage du membre de la fraction
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

Pointage du membre actuel de la fraction

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corps**

| Nom  | Valeur       |
| ---- | ----------- |
| Type | `<IN ou OUT>` |

**✅ Réponse `200`**
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

**❌ Réponse `400`**
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

### 🏖️ Vacances

### Dernières vacances du membre de la fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

Obtenez les dernières vacances d'un membre de la fraction.

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Réponse `200`**
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

**❌ Réponse `404`**
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

### Vacances précédentes du membre de la fraction
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

Obtenez les vacances précédentes d'un membre de la fraction (max. 15 points) 

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Réponse `200`**
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
        ... max 14 autres vacances
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Réponse `404`**
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

### Demander des vacances pour un membre de la fraction
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

Demandez des vacances pour le membre actuel de la fraction.

**🧾 En-têtes**

| Nom           | Valeur              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corps**

| Nom        | Valeur       |
| ---------- | ----------- |
| StartDate | `Date (ISO 8601 Standard)` |
| EndDate   | `Date (ISO 8601 Standard)` |
| Reason    | `String` |

**✅ Réponse `200`**
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

**❌ Réponse `400`**
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