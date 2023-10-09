---
description: 🔧 Available since Version 1.0.0!
---

# addXP

{% code title="Export Syntax" %}
```lua
exports['tuncion_xp']:addXP(PlayerID, XP, Reason)
```
{% endcode %}

### PARAMETER

1. PlayerID <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> PlayerID</mark>
2. XP <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> How much XP should be added e.g. 50XP</mark>
3. Reason <mark style="color:blue;">(STRING) (OPTIONAL)</mark> <mark style="color:orange;">-> Add a reason e.g. Played 2 hours</mark>

```lua
exports['tuncion_xp']:addXP(source, 50) --> Returns table with information
exports['tuncion_xp']:addXP(source, 50, 'XYZ') --> Returns table with information
```
