---
description: 🔧 Доступно з версії 1.0.1!
---

# addRank

**📢 Подія відбувається, коли до рангу гравця додається новий ранг**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Повертає

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true або false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Поточний ранг гравця</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Поточний загальний XP гравця</span>