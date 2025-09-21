---
description: 🔧 متاح منذ الإصدار 1.0.1!
---

# removeXP

**📢 يحدث الحدث عندما يفقد اللاعب XP**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true or false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> هل وصل اللاعب إلى مستوى جديد؟</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> قيمة التغيير مثل 5XP</span>