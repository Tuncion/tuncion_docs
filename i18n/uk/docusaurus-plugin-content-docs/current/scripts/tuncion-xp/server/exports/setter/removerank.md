---
description: 🔧 Доступно з версії 1.0.0!
---

# removeRank

```lua title="Синтаксис експорту"
exports['tuncion_xp']:removeRank(PlayerID, Rank, Reason)
```

### ПАРАМЕТР

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Скільки рівнів слід додати, наприклад, 2 рівні</span>
3. Reason <span className="color-blue">(STRING) (НЕОБОВ'ЯЗКОВИЙ)</span> <span className="color-orange">-> Додати причину, наприклад, порушення правил</span>

```lua
exports['tuncion_xp']:removeRank(source, 2) --> Повертає таблицю з інформацією
exports['tuncion_xp']:removeRank(source, 2, 'XYZ') --> Повертає таблицю з інформацією
```