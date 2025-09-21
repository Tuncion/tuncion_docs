---
description: 🔧 متاح منذ الإصدار 1.0.0!
---

# setXP

```lua title="Export Syntax"
exports['tuncion_xp']:setXP(PlayerID, XP, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> إلى أي XP يجب تعيينه مثل 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> إضافة سبب مثل لعبت لمدة ساعتين</span>

```lua
exports['tuncion_xp']:setXP(source, 50) --> Returns table with information
exports['tuncion_xp']:setXP(source, 50, 'XYZ') --> Returns table with information
```