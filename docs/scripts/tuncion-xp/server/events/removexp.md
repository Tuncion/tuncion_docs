---
description: 🔧 Available since Version 1.0.1!
---

# removeXP

**📢 Event occurs when a player loses XP**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Returns

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true or false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Has the player reached a new level?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Change value e.g. 5XP</span>

