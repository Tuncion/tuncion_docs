---
description: 🔧 Available since Version 1.0.1!
---

# setXP

&#x20;**📢 Event occurs when a player's XP is set**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <mark style="color:blue;">(OBJECT)</mark> <mark style="color:orange;">-> true or false</mark>
   1. newRank <mark style="color:blue;">(BOOL)</mark> <mark style="color:orange;">-> Has the player reached a new level?</mark>
   2. totalXP <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Players current total XP</mark>

