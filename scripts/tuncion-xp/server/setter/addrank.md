---
description: 🔧 Available since Version 1.0.0!
---

# addRank

{% code title="Export Syntax" %}
```lua
exports['tuncion_xp']:addRank(PlayerID, Rank, Reason)
```
{% endcode %}

### PARAMETER

1. PlayerID <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> PlayerID</mark>
2. Rank <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> How much level should be added e.g. 2 level</mark>
3. Reason <mark style="color:blue;">(STRING) (OPTIONAL)</mark> <mark style="color:orange;">-> Add a reason e.g. Giveaway XYZ</mark>

```lua
exports['tuncion_xp']:addRank(source, 2) --> Returns table with information
exports['tuncion_xp']:addRank(source, 2, 'XYZ') --> Returns table with information
```
