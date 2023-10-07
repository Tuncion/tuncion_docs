---
description: 🔧 Available since Version 1.0.0!
---

# CheckAchievementProgress



{% code title="TriggerServerCallback Syntax" %}
```lua
ESX.TriggerServerCallback("viority_menu:server:CheckAchievementProgress", function(response)
    print(response)
end, {id = "ID"})
```
{% endcode %}

1. ID <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Unique Achievement ID</mark>
2. Response <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Invalid returns 0.0</mark>

{% hint style="info" %}
Please be careful with this TriggerServerCallback!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
ESX.TriggerServerCallback("viority_menu:server:CheckAchievementProgress", function(response)
    print(response) -> Example: 23.33
end, {id = "pilot_ahead"})
```
{% endcode %}
