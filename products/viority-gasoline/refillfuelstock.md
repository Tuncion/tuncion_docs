---
description: 🔧 Available since Version 1.0.2!
---

# RefillFuelStock

{% code title="Export Syntax" %}
```lua
exports['viority_gasoline']:RefillFuelStock(GasolineID, FuelType, FuelStock)
```
{% endcode %}

### PARAMETER

1. GasolineID <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> The Gasoline ID</mark>
2. FuelType <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Wanted Fuel Type (SuperPlus, Petrol, Diesel or Kerosene)</mark>
3. FuelStock <mark style="color:blue;">(FLOAT)</mark> <mark style="color:orange;">-> Wanted Fuel Volume e.g. 24.5 for 24.50%</mark>

```lua
exports['viority_gasoline']:RefillFuelStock("senora_freeway", "SuperPlus", 24.5)
```
