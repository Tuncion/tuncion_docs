---
description: 🔧 Доступно з версії 1.0.1!
---

# addXP

**📢 Подія відбувається, коли гравець отримує XP**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(data)
    -- Do your magic here 💫
end)
```

### Повертає

1. Дані <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true або false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Чи досяг гравець нового рівня?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Значення зміни, наприклад, 5XP</span>