---
description: 🔧 Доступно з версії 1.0.0!
---

# setRank

```lua title="Синтаксис експорту"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### ПАРАМЕТР

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> На який рівень слід встановити, наприклад, рівень 2</span>
3. Reason <span className="color-blue">(STRING) (НЕОБОВ'ЯЗКОВИЙ)</span> <span className="color-orange">-> Додати причину, наприклад, Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Повертає таблицю з інформацією
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Повертає таблицю з інформацією
```