---
description: 🔧 Available since Version 1.0.0!
---

# setRank

```lua title="Export Syntax"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> To which level should be set  e.g. level 2</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Add a reason e.g. Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Returns table with information
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Returns table with information
```
