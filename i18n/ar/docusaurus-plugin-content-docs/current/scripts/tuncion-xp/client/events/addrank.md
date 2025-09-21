---
description: 🔧 متاح منذ الإصدار 1.0.1!
---

# addRank

**📢 يحدث الحدث عندما يتم إضافة رتبة لاعب**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(data)
    -- قم بسحرك هنا 💫
end)
```

### Returns

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> صحيح أو خطأ</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> رتبة اللاعب الحالية</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> إجمالي XP الحالي للاعب</span>