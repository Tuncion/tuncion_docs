---
description: 🔧 Available since Version 1.0.0!
---

# setRank

{% code title="Export Syntax" %}
```lua
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```
{% endcode %}

### PARAMETER

1. PlayerID <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> PlayerID</mark>
2. Rank <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> To which level should be set  e.g. level 2</mark>
3. Reason <mark style="color:blue;">(STRING) (OPTIONAL)</mark> <mark style="color:orange;">-> Add a reason e.g. Giveaway XYZ</mark>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Returns table with information
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Returns table with information
```
