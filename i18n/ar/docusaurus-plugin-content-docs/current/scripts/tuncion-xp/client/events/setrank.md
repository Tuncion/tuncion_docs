---
description: 🔧 متاح منذ الإصدار 1.0.1!
---

# setRank

**📢 يحدث الحدث عندما يتم تعيين رتبة اللاعب**

```lua
RegisterNetEvent("tuncion_xp:log:setRank")
AddEventHandler("tuncion_xp:log:setRank", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true or false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> رتبة اللاعب الحالية</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> إجمالي XP الحالي للاعب</span>