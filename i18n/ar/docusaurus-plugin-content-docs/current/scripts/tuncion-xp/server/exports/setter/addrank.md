---
description: 🔧 متاح منذ الإصدار 1.0.0!
---

# addRank

```lua title="Export Syntax"
exports['tuncion_xp']:addRank(PlayerID, Rank, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> كم مستوى يجب إضافته، مثل 2 مستوى</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> أضف سببًا، مثل Giveaway XYZ</span>

```lua
exports['tuncion_xp']:addRank(source, 2) --> Returns table with information
exports['tuncion_xp']:addRank(source, 2, 'XYZ') --> Returns table with information
```