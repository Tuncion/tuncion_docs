---
description: 🔧 Available since Version 1.0.0!
---

# removeRank

```lua title="Export Syntax"
exports['tuncion_xp']:removeRank(PlayerID, Rank, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> How much level should be added e.g. 2 level</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Add a reason e.g. Rule violation</span>

```lua
exports['tuncion_xp']:removeRank(source, 2) --> Returns table with information
exports['tuncion_xp']:removeRank(source, 2, 'XYZ') --> Returns table with information
```
