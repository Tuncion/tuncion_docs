---
description: 🔧 Доступно с версии 1.0.0!
---

# removeRank

```lua title="Синтаксис экспорта"
exports['tuncion_xp']:removeRank(PlayerID, Rank, Reason)
```

### ПАРАМЕТР

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Сколько уровней должно быть добавлено, например, 2 уровня</span>
3. Reason <span className="color-blue">(STRING) (ОПЦИОНАЛЬНО)</span> <span className="color-orange">-> Укажите причину, например, нарушение правила</span>

```lua
exports['tuncion_xp']:removeRank(source, 2) --> Возвращает таблицу с информацией
exports['tuncion_xp']:removeRank(source, 2, 'XYZ') --> Возвращает таблицу с информацией
```