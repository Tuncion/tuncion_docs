---
description: 🔧 Available since Version 1.0.2!
---

# CheckCurrentLevel

{% code title="TriggerServerCallback Syntax" %}
```lua
ESX.TriggerServerCallback("viority_playtimereward:server:CheckCurrentLevel", function(response)
    print(response)
end, {id = ID})
```
{% endcode %}

### PARAMETER

1. ID <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Current Source</mark>

### RESPONSE

1. Response <mark style="color:blue;">(OBJECT)</mark>
   1. LEVEL <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Current Level</mark>

{% hint style="info" %}
Please be careful with this TriggerServerCallback!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
ESX.TriggerServerCallback("viority_playtimereward:server:CheckCurrentLevel", function(response)
    print(response.level) -> Example: 5
end, {id = GetPlayerServerId(PlayerId())}) -- For Own Level
```
{% endcode %}
