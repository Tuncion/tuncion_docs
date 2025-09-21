---
description: 🔧 Доступно з версії 1.0.1!
---

# removeRank

**📢 Подія відбувається, коли ранг гравця видаляється**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(data)
    -- Do your magic here 💫
end)
```

### Повертає

1. Дані <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true або false</span>
   1. ранг <span className="color-blue">(INT)</span> <span className="color-orange">-> Поточний ранг гравця</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Поточний загальний XP гравця</span>