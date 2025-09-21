---
description: 🔧 Доступно с версии 1.0.1!
---

# addRank

**📢 Событие происходит, когда игроку добавляется ранг**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Возвращает

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true или false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Текущий ранг игрока</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Текущий общий XP игрока</span>