---
title: Routes
description: ⚙️ Todas as Rotas para a Rest-API
---

Explore todas as rotas disponíveis para a **REST API**, cada uma exigindo autenticação via Chave de API.  
🔑 Ative sua chave seguindo as diretrizes em [how-to-activate.md](how-to-activate.md)  
❌ Para respostas padrão de falha, verifique [failed-response.md](failed-response.md)  
📝 _**Base-URL:**_ `https://api.fivem-helper.eu`


## 📦 Fração

### Informações da Fração
<span className='api-get'>`GET`</span> `/:fractionid/info`

Obtenha informações atuais sobre uma fração.

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Resposta `200`**
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

### Atualizar Nome da Fração
<span className='api-patch'>`PATCH`</span> `/:fractionid/name`

Atualize o nome atual da fração.

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valor       |
| ---- | ----------- |
| Name | `<NewName>` |

**✅ Resposta `200`**
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

**❌ Resposta `400`**
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

### Atualizar Logo da Fração
<span className='api-patch'>`PATCH`</span> `/:fractionid/logo`

Atualize o logo atual da fração.

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valor       |
| ---- | ----------- |
| Logo | `<LinkToLogo>` |

**✅ Resposta `200`**
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

**❌ Resposta `400`**
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

## 🤖 Membro da Fração

### Adicionar Membro da Fração
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/addMember`

Adicione um novo membro à fração.

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valor       |
| ---- | ----------- |
| FirstName | `String` |
| LastName | `String` |


**✅ Resposta `200`**
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

**❌ Resposta `400`**
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

### Expulsar Membro da Fração
<span className='api-put'>`PUT`</span> `/:fractionid/:discordid/kickMember`

Expulse um membro da fração.

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valor       |
| ---- | ----------- |
| KickedById | `String` |

**✅ Resposta `200`**
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

### Informações do Membro da Fração
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/info`

Obtenha informações atuais sobre um membro da fração.

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Resposta `200`**
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

**❌ Resposta `401`**
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

**❌ Resposta `404`**
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


### ⏱️ Relógio de Registro

### Último Registro do Membro da Fração
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastStamp`

Obtenha o último registro do membro da fração.

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Resposta `200`**
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

**❌ Resposta `404`**
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

### Registros Anteriores do Membro da Fração
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousStamps`

Obtenha os registros anteriores do membro da fração (máx. 15 registros) 

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Resposta `200`**
```json
{
    "status": 200,
    "data": [
        {
            "id": int,
            "stampType": string,
            "stampTime": date (ISO 8601 standard)
        }
        ... max 14 outros registros
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Resposta `404`**
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

### Registrar Membro da Fração
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/stamp`

Registre o membro atual da fração

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valor       |
| ---- | ----------- |
| Type | `<IN ou OUT>` |

**✅ Resposta `200`**
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

**❌ Resposta `400`**
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

### 🏖️ Férias

### Última Férias do Membro da Fração
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/lastHoliday`

Obtenha as últimas férias do membro da fração.

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Resposta `200`**
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

**❌ Resposta `404`**
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

### Férias Anteriores do Membro da Fração
<span className='api-get'>`GET`</span> `/:fractionid/:discordid/previousHolidays`

Obtenha as férias anteriores do membro da fração (máx. 15 registros) 

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**✅ Resposta `200`**
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
        ... max 14 outras férias
    ],
    "links": [
        {
            "docs": string,
            "support": string
        }
    ]
}
```

**❌ Resposta `404`**
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

### Solicitar Férias do Membro da Fração
<span className='api-post'>`POST`</span> `/:fractionid/:discordid/requestHoliday`

Solicite férias para o membro atual da fração.

**🧾 Cabeçalhos**

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**📦 Corpo**

| Nome | Valor       |
| ---- | ----------- |
| StartDate | `Data (Padrão ISO 8601)` |
| EndDate | `Data (Padrão ISO 8601)` |
| Reason | `String` |

**✅ Resposta `200`**
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

**❌ Resposta `400`**
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