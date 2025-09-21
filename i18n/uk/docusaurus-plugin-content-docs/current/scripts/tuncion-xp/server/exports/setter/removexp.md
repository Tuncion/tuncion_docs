---
description: 🔧 Доступно з версії 1.0.0!
---

# removeXP

```lua title="Синтаксис експорту"
exports['tuncion_xp']:removeXP(PlayerID, XP, Reason)
```

### ПАРАМЕТР

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Скільки XP слід видалити, наприклад, 50XP</span>
3. Reason <span className="color-blue">(STRING) (НЕОБОВ'ЯЗКОВИЙ)</span> <span className="color-orange">-> Додати причину, наприклад, порушення правил</span>

```lua
exports['tuncion_xp']:removeXP(source, 50) --> Повертає таблицю з інформацією
exports['tuncion_xp']:removeXP(source, 50, 'XYZ') --> Повертає таблицю з інформацією
```