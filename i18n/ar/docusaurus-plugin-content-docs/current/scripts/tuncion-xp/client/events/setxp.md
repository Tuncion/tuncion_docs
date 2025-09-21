---
description: 🔧 متاح منذ الإصدار 1.0.1!
---

# setXP

**📢 يحدث الحدث عندما يتم تعيين XP للاعب**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true or false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> هل وصل اللاعب إلى مستوى جديد؟</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> إجمالي XP الحالي للاعب</span>