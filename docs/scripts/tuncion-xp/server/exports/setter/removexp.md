---
description: 🔧 Available since Version 1.0.0!
---

# removeXP

```lua title="Export Syntax"
exports['tuncion_xp']:removeXP(PlayerID, XP, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> How much XP should be removed e.g. 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Add a reason e.g. Rule violation</span>

```lua
exports['tuncion_xp']:removeXP(source, 50) --> Returns table with information
exports['tuncion_xp']:removeXP(source, 50, 'XYZ') --> Returns table with information
```
