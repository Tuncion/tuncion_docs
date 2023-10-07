---
description: 🔧 Available since Version 1.0.0!
---

# UpdateLeasingStatus

{% code title="TriggerEvent Syntax" %}
```lua
TriggerServerEvent("viority_cardealer:server:UpdateVIPLeasing", SecurityToken, target, bool)
```
{% endcode %}

### PARAMETER

1. SecurityToken <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-></mark> [how-to-use-the-event-whitelist.md](../../tutorials/product/how-to-use-the-event-whitelist.md "mention")
2. Target <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Identifier</mark>
3. Bool <mark style="color:blue;">(BOOLEAN)</mark> <mark style="color:orange;">-> true or false?</mark>

{% hint style="info" %}
Please be careful with this TriggerEvent, you will overwrite the current data!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
TriggerServerEvent("viority_cardealer:server:UpdateVIPLeasing", "SECURITYTOKEN", "187a7d2f561c7cc06230592de29439f1306480ab", true)
```
{% endcode %}
