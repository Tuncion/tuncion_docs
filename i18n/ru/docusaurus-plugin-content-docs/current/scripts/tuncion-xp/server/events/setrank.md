---
description: 🔧 Доступно с версии 1.0.1!
---

# setRank

**📢 Событие происходит, когда ранг игрока установлен**

```lua
RegisterNetEvent("tuncion_xp:log:setRank")
AddEventHandler("tuncion_xp:log:setRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Возвращает

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true или false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Текущий ранг игроков</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Текущий общий XP игроков</span>