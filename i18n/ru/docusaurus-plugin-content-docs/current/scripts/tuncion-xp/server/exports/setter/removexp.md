---
description: 🔧 Доступно с версии 1.0.0!
---

# removeXP

```lua title="Синтаксис экспорта"
exports['tuncion_xp']:removeXP(PlayerID, XP, Reason)
```

### ПАРАМЕТР

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Сколько XP должно быть удалено, например, 50XP</span>
3. Reason <span className="color-blue">(STRING) (ОПЦИОНАЛЬНО)</span> <span className="color-orange">-> Укажите причину, например, нарушение правил</span>

```lua
exports['tuncion_xp']:removeXP(source, 50) --> Возвращает таблицу с информацией
exports['tuncion_xp']:removeXP(source, 50, 'XYZ') --> Возвращает таблицу с информацией
```