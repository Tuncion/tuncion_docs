---
description: 🔧 Доступно с версии 1.0.0!
---

# setXP

```lua title="Синтаксис экспорта"
exports['tuncion_xp']:setXP(PlayerID, XP, Reason)
```

### ПАРАМЕТР

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> На какое количество XP должно быть установлено, например, 50XP</span>
3. Reason <span className="color-blue">(STRING) (ОПЦИОНАЛЬНО)</span> <span className="color-orange">-> Укажите причину, например, Играл 2 часа</span>

```lua
exports['tuncion_xp']:setXP(source, 50) --> Возвращает таблицу с информацией
exports['tuncion_xp']:setXP(source, 50, 'XYZ') --> Возвращает таблицу с информацией
```