---
description: 🔧 Available since Version 1.0.0!
---

# UpdateAchievementProgress

{% code title="TriggerEvent Syntax" %}
```lua
TriggerServerEvent("viority_menu:server:UpdateAchievementProgress", target, id, task, progress)
```
{% endcode %}

### PARAMETER

1. Target <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Identifier</mark>
2. ID <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Challenge\_ID</mark>
3. Task <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Task Type (e.g. 2 for walk in meter)</mark>
4. Progress <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Current Progress (e.g. 50 = walked 50 meter)</mark>&#x20;

{% hint style="info" %}
Please be careful with this TriggerEvent, you will overwrite the current data!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
TriggerServerEvent("viority_menu:server:UpdateAchievementProgress", "187a7d2f561c7cc06230592de29439f1306480ab", "pilot_ahead", 9, 15)
```
{% endcode %}
