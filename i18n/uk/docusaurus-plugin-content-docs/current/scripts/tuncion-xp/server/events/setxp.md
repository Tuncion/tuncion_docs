---
description: 🔧 Доступно з версії 1.0.1!
---

# setXP

**📢 Подія відбувається, коли XP гравця встановлено**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Повертає

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true або false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Чи досяг гравець нового рівня?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Поточний загальний XP гравця</span>