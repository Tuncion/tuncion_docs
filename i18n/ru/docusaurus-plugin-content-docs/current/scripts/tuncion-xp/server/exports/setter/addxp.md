---
description: 🔧 Доступно с версии 1.0.0!
---

# addXP

```lua title="Синтаксис экспорта"
exports['tuncion_xp']:addXP(PlayerID, XP, Reason)
```

### ПАРАМЕТР

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Сколько XP должно быть добавлено, например, 50XP</span>
3. Reason <span className="color-blue">(STRING) (ОПЦИОНАЛЬНО)</span> <span className="color-orange">-> Добавьте причину, например, Играл 2 часа</span>

```lua
exports['tuncion_xp']:addXP(source, 50) --> Возвращает таблицу с информацией
exports['tuncion_xp']:addXP(source, 50, 'XYZ') --> Возвращает таблицу с информацией
```