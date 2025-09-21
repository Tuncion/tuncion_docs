---
description: 🔧 Доступно з версії 1.0.0!
---

# setXP

```lua title="Синтаксис експорту"
exports['tuncion_xp']:setXP(PlayerID, XP, Reason)
```

### ПАРАМЕТР

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> На який XP слід встановити, наприклад, 50XP</span>
3. Reason <span className="color-blue">(STRING) (НЕОБОВ'ЯЗКОВИЙ)</span> <span className="color-orange">-> Додати причину, наприклад, Грав 2 години</span>

```lua
exports['tuncion_xp']:setXP(source, 50) --> Повертає таблицю з інформацією
exports['tuncion_xp']:setXP(source, 50, 'XYZ') --> Повертає таблицю з інформацією
```