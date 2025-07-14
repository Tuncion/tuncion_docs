---
description: 🔧 Available since Version 1.0.1!
---

# resetPlayerXP

**📢 Event occurs when a player's XP is reset**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true or false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Players current rank</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Players current total XP</span>

