---
description: 🔧 Available since Version 1.0.0!
---

# GetFuel

{% code title="Export Syntax" %}
```lua
exports['viority_gasoline']:GetFuel(vehicle)
```
{% endcode %}

### PARAMETER

1. Vehicle <mark style="color:blue;">(Entity)</mark> <mark style="color:orange;">-> Required Vehicle Entity</mark>

```lua
exports['viority_gasoline']:GetFuel(GetVehiclePedIsIn(PlayerPedId())) --> Fuel Volume!
```
