---
description: 🔧 Available since Version 1.0.0!
---

# UpdateTransactionData

{% code title="TriggerEvent Syntax" %}
```lua
TriggerEvent("viority_hud:client:UpdateTransactionData", securitytoken, account, isnegative, amount)
```
{% endcode %}

### PARAMETER

1. SecurityToken <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> EventWhitelist in ViorityCore</mark>
2. Account <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> "money" or "bank"?</mark>
3. IsNegative <mark style="color:blue;">(BOOL)</mark> <mark style="color:orange;">-> Is the amount negative -> true or false</mark>
4. Amount <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> How much?</mark>

{% hint style="warning" %}
This Event is only available on client side!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
TriggerEvent("viority_hud:client:UpdateTransactionData", "SECURITYTOKEN", "money", false, 25000)
```
{% endcode %}
