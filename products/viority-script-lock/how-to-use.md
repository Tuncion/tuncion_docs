---
description: 🔧 We recommend using our examples
---

# How to use

{% swagger baseUrl="https://script.viority.eu" path="/api/auth" method="post" summary="Authorize a IPv4 Address" %}
{% swagger-description %}
This endpoint allows you to authorize a IPv4 IP adress to secure your script and prevent leaking.
{% endswagger-description %}

{% swagger-parameter in="header" name="customer_id" type="string" required="false" %}
Your customer ID to authorize you as a customer.
{% endswagger-parameter %}

{% swagger-parameter in="header" name="script_id" type="string" %}
Your script ID to authorize the specific script.
{% endswagger-parameter %}

{% swagger-response status="200" description="The authorization was successful." %}
```
{ 
    name: "SUCCESSFUL_AUTHENTIFICATION",
    message: "Authentication was successful. Thanks for using <SCRIPT-NAME>!",
    IPv4: "<IPv4-ADRESS>",
    links: [{
            docs: "https://docs.viority.eu/script-lock",
            support: "https://discord.gg/323HfHyGW4",
            }],
    }
```
{% endswagger-response %}

{% swagger-response status="401" description="The authorization was not successful." %}
```
{ 
    name: "UNAUTHORIZED_AUTHENTIFICATION",
    message: "<REASON>",
    IPv4: "<IPv4-ADRESS>",
    links: [{
            docs: "https://docs.viority.eu/script-lock",
            support: "https://discord.gg/323HfHyGW4",
            }],
    }
```
{% endswagger-response %}

{% swagger-response status="429" description="You have requested our API too many times in a short time! This is a part or our security system to prevent a DDos attack. First your requests will be slowed down, then you will be completely locked out!" %}
```
Too many requests, please try again later.
```
{% endswagger-response %}
{% endswagger %}

