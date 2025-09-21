---
description: 🔧 متاح منذ الإصدار 1.0.0!
---

# setRank

```lua title="Export Syntax"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> إلى أي مستوى يجب تعيينه، على سبيل المثال المستوى 2</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> إضافة سبب، على سبيل المثال Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Returns table with information
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Returns table with information
```