---
description: 🔧 متاح منذ الإصدار 1.0.1!
---

# addXP

**📢 يحدث الحدث عندما يحصل اللاعب على XP**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(data)
    -- قم بسحرك هنا 💫
end)
```

### Returns

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> صحيح أو خطأ</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> هل وصل اللاعب إلى مستوى جديد؟</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> قيمة التغيير مثل 5XP</span>