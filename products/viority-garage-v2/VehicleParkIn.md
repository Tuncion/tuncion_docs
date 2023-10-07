---
description: 🔧 Available since Version 2.0.5!
---

# VehicleParkIn

{% code title="TriggerEvent Syntax" %}
```lua
TriggerServerEvent("viority_garage:server:parkinvehicle", SecurityToken, plate, fuel, health)
```
{% endcode %}

### PARAMETER

1. SecurityToken <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-></mark> [how-to-use-the-event-whitelist.md](../../tutorials/product/how-to-use-the-event-whitelist.md "mention")
2. Plate <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Vehicle Plate</mark>
3. Fuel <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Vehicle Fuel Volume</mark>
4. Health <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Vehicle Health</mark>

{% hint style="info" %}
Please be careful with this TriggerEvent, you will overwrite the current data!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
TriggerServerEvent("viority_garage:server:parkinvehicle", "SECURITYTOKEN", "VIORITY", "25.34", "934.44")
```
{% endcode %}
