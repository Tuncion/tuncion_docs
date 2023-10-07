---
description: 🔧 Available since Version 1.0.0!
---

# CheckCurrentLevel



{% code title="TriggerServerCallback Syntax" %}
```lua
ESX.TriggerServerCallback("viority_menu:server:CheckCurrentLevel", function(response)
    print(response)
end, {})
```
{% endcode %}

1. Response <mark style="color:blue;">(OBJECT)</mark>
   1. ALLXP <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Over All XP</mark>
   2. XP <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Current Level XP</mark>
   3. LEVEL <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Current Level</mark>

{% hint style="info" %}
Please be careful with this TriggerServerCallback!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
ESX.TriggerServerCallback("viority_menu:server:CheckCurrentLevel", function(response)
    print(response.allxp) -> Example: 1875
    print(response.xp) -> Example: 15
    print(response.level) -> Example: 12.06
end, {})
```
{% endcode %}
