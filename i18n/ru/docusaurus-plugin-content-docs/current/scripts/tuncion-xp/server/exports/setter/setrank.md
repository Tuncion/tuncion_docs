---
description: 🔧 Доступно с версии 1.0.0!
---

# setRank

```lua title="Синтаксис экспорта"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### ПАРАМЕТР

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> На какой уровень установить, например, уровень 2</span>
3. Reason <span className="color-blue">(STRING) (ОПЦИОНАЛЬНО)</span> <span className="color-orange">-> Добавьте причину, например, Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Возвращает таблицу с информацией
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Возвращает таблицу с информацией
```