---
description: 🔧 متاح منذ الإصدار 1.0.1!
---

# removeRank

**📢 يحدث الحدث عندما يتم إزالة رتبة اللاعب**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true or false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> رتبة اللاعب الحالية</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> إجمالي XP الحالي للاعب</span>