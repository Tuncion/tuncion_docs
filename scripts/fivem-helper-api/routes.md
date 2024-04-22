---
description: ⚙️ All Routes for the Rest-API
---

# Routes

Explore all available routes for the **REST API,** each requiring authentication via API Key. \
🔑 Activate your key following the guidelines at [how-to-activate.md](how-to-activate.md "mention")\
❌ For default failed responses, check [failed-response.md](failed-response.md "mention")\
📝 _**Base-URL:**_ `https://api.fivem-helper.eu`



## 📦Fraction

### Fraction Info

<mark style="color:green;">`GET`</mark> `/:fractionid/info`

Get current Information about a Fraction

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**Response**

{% tabs %}
{% tab title="200" %}
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
{% endtab %}
{% endtabs %}



### Update Fraction Name

<mark style="color:purple;">`PATCH`</mark> `/:fractionid/name`

Update the current fraction name

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**Body**

| Name | Value       |
| ---- | ----------- |
| Name | `<NewName>` |

**Response**

{% tabs %}
{% tab title="200" %}
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
{% endtab %}

{% tab title="400" %}
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
{% endtab %}
{% endtabs %}



### Update Fraction Logo

<mark style="color:purple;">`PATCH`</mark> `/:fractionid/logo`

Update the current fraction logo

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**Body**

| Name | Value          |
| ---- | -------------- |
| Logo | `<LinkToLogo>` |

**Response**

{% tabs %}
{% tab title="200" %}
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
{% endtab %}

{% tab title="400" %}
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
{% endtab %}
{% endtabs %}



## 🤖 Fraction Member

### Fraction Member Info

<mark style="color:green;">`GET`</mark> `/:fractionid/:discordid/info`

Get current Information about a Fraction Member

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**Response**

{% tabs %}
{% tab title="200" %}
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
{% endtab %}

{% tab title="401" %}
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
{% endtab %}

{% tab title="404" %}
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
{% endtab %}
{% endtabs %}



### ⏱️ Stamp Clock

### Fraction Member Last Stamp

<mark style="color:green;">`GET`</mark> `/:fractionid/:discordid/lastStamp`

Get the last fraction member stamp&#x20;

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**Response**

{% tabs %}
{% tab title="200" %}
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
{% endtab %}

{% tab title="404" %}
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
{% endtab %}
{% endtabs %}



### Fraction Member Previous Stamps

<mark style="color:green;">`GET`</mark> `/:fractionid/:discordid/previousStamps`

Get the previous fraction member stamps (Max. 15 Stamps)&#x20;

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**Response**

{% tabs %}
{% tab title="200" %}
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
{% endtab %}

{% tab title="404" %}
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
{% endtab %}
{% endtabs %}



### Fraction Member Stamp

<mark style="color:yellow;">`POST`</mark> `/:fractionid/:discordid/stamp`

Stamp the current fraction member

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**Body**

| Name | Value         |
| ---- | ------------- |
| Type | `<IN or OUT>` |

**Response**

{% tabs %}
{% tab title="200" %}
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
{% endtab %}

{% tab title="400" %}
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
{% endtab %}
{% endtabs %}

### 🏖️ Holiday

### Fraction Member Last Holiday

<mark style="color:green;">`GET`</mark> `/:fractionid/:discordid/lastHoliday`

Get the last fraction member holiday

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `<APIKey>`         |

**Response**

{% tabs %}
{% tab title="200" %}
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
{% endtab %}

{% tab title="404" %}
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
{% endtab %}
{% endtabs %}

