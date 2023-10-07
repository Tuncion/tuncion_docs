---
description: 🔧 Available since Version 1.0.0!
---

# GetWantedStars



{% code title="TriggerServerCallback Syntax" %}
```lua
ESX.TriggerServerCallback("viority_hud:server:GetWantedStars", function(response)
    print(response)
end, {identifier = identifier})
```
{% endcode %}

1. Response <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Number of stars (0 - 6)</mark>

{% hint style="info" %}
Please be careful with this TriggerServerCallback!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
ESX.TriggerServerCallback("viority_hud:server:GetWantedStars", function(response)
    print(response) -> Example: 3
end, {identifier = "02159400b329e03d5e4791708d943cea79899230"})
```
{% endcode %}
