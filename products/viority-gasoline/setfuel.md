---
description: 🔧 Available since Version 1.0.0!
---

# SetFuel

{% code title="Export Syntax" %}
```lua
exports['viority_gasoline']:SetFuel(vehicle, amount)
```
{% endcode %}

### PARAMETER

1. Vehicle <mark style="color:blue;">(Entity)</mark> <mark style="color:orange;">-> Required Vehicle Entity</mark>
2. Amount <mark style="color:blue;">(FLOAT)</mark> <mark style="color:orange;">-> Wanted Fuel Volume</mark>

```lua
exports['viority_gasoline']:SetFuel(GetVehiclePedIsIn(PlayerPedId()), 55.5)
```
