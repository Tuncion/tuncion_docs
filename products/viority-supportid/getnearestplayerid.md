---
description: 🔧 Available since Version 1.0.1!
---

# getNearestPlayerID

{% code title="Export Syntax" %}
```lua
exports['viority_supportid']:getNearestPlayerID(MaxDistance)
```
{% endcode %}

### PARAMETER

1. MaxDistance <mark style="color:blue;">(STRING) (OPTIONAL)</mark> <mark style="color:orange;">-> Max Distance, if not set, 5.0 will be used</mark>

{% code title="Example Export" %}
```lua
exports['viority_supportid']:getNearestPlayerID() --> Returns the SupportID of the nearest player!
```
{% endcode %}

{% hint style="info" %}
It will be return false when no one is around.
{% endhint %}
