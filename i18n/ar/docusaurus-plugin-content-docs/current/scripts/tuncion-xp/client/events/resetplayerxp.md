---
description: 🔧 متاح منذ الإصدار 1.0.1!
---

# resetPlayerXP

**📢 يحدث الحدث عندما يتم إعادة تعيين XP للاعب**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true or false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> الرتبة الحالية للاعب</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> إجمالي XP الحالي للاعب</span>