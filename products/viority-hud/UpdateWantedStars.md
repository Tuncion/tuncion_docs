---
description: 🔧 Available since Version 1.0.0!
---

# UpdateWantedStars

{% code title="TriggerEvent Syntax" %}
```lua
TriggerEvent("viority_hud:client:UpdateWantedStars", amount)
```
{% endcode %}

### PARAMETER

1. Amount <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Set the Stars (0 - 6)</mark>

{% hint style="warning" %}
This Event is only available on client side!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
TriggerEvent("viority_hud:client:UpdateWantedStars", 4)
```
{% endcode %}
