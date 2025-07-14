---
description: 🔧 Available since Version 1.0.1!
---

# setXP

**📢 Event occurs when a player's XP is set**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true or false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Has the player reached a new level?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Players current total XP</span>

