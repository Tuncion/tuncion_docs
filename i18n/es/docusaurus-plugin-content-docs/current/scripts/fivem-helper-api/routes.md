---
title: Routes
description: ⚙️ Todas las rutas para la Rest-API
---

Explora todas las rutas disponibles para la **REST API**, cada una requiriendo autenticación a través de la clave API.  
🔑 Activa tu clave siguiendo las pautas en [how-to-activate.md](how-to-activate.md)  
❌ Para las respuestas fallidas por defecto, consulta [failed-response.md](failed-response.md)  
📝 _**Base-URL:**_ `https://api.fivem-helper.eu`


## 📦 Fracción

### Información de la Fracción
<span className='api-get'>`GET`</span> `/:fractionid/info`

Obtén información actual sobre una fracción.

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Respuesta `200`**
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

### Actualizar Nombre de la Fracción
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

Actualiza el nombre actual de la fracción.

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Cuerpo**

| Nombre | Valor       |
| ---- | ----------- |
| Name | `<NewName>` |

**✅ Respuesta `200`**
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

**❌ Respuesta `400`**
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

### Actualizar Logo de la Fracción
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

Actualiza el logo actual de la fracción.

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Cuerpo**

| Nombre | Valor       |
| ---- | ----------- |
| Logo | `<LinkToLogo>` |

**✅ Respuesta `200`**
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

**❌ Respuesta `400`**
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

## 🤖 Miembro de la Fracción

### Agregar Miembro de la Fracción
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

Agrega un nuevo miembro a la fracción.

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Cuerpo**

| Nombre | Valor       |
| ---- | ----------- |
| FirstName | `String` |
| LastName | `String` |


**✅ Respuesta `200`**
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

**❌ Respuesta `400`**
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

### Expulsar Miembro de la Fracción
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

Expulsa a un nuevo miembro de la fracción.

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Cuerpo**

| Nombre | Valor       |
| ---- | ----------- |
| KickedById | `String` |

**✅ Respuesta `200`**
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

### Información del Miembro de la Fracción
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

Obtén información actual sobre un miembro de la fracción.

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Respuesta `200`**
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

**❌ Respuesta `401`**
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

**❌ Respuesta `404`**
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


### ⏱️ Reloj de Sellos

### Último Sello del Miembro de la Fracción
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

Obtén el último sello del miembro de la fracción.

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Respuesta `200`**
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

**❌ Respuesta `404`**
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

### Sellos Anteriores del Miembro de la Fracción
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

Obtén los sellos anteriores del miembro de la fracción (máx. 15 sellos) 

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Respuesta `200`**
```json
{
    "status": 200,
    "data": [
        {
            "id": int,
            "stampType": string,
            "stampTime": date (ISO 8601 standard)
        }
        ... máximo 14 otros sellos
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Respuesta `404`**
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

### Sello del Miembro de la Fracción
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

Sella al miembro actual de la fracción

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Cuerpo**

| Nombre | Valor       |
| ---- | ----------- |
| Type | `<IN o OUT>` |

**✅ Respuesta `200`**
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

**❌ Respuesta `400`**
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

### 🏖️ Vacaciones

### Última Vacación del Miembro de la Fracción
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

Obtén la última vacación del miembro de la fracción.

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Respuesta `200`**
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

**❌ Respuesta `404`**
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

### Vacaciones Anteriores del Miembro de la Fracción
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

Obtén las vacaciones anteriores del miembro de la fracción (máx. 15 sellos) 

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Respuesta `200`**
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
        ... máximo 14 otras vacaciones
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Respuesta `404`**
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

### Solicitar Vacación del Miembro de la Fracción
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

Solicita una vacación para el miembro actual de la fracción.

**🧾 Encabezados**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Cuerpo**

| Nombre | Valor       |
| ---- | ----------- |
| StartDate | `Date (ISO 8601 Standard)` |
| EndDate | `Date (ISO 8601 Standard)` |
| Reason | `String` |

**✅ Respuesta `200`**
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

**❌ Respuesta `400`**
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