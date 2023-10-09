---
description: 🔧 Available since Version 1.0.1!
---

# setRank

&#x20;**📢 Event occurs when a player's rank is set**

```lua
RegisterNetEvent("tuncion_xp:log:setRank")
AddEventHandler("tuncion_xp:log:setRank", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <mark style="color:blue;">(OBJECT)</mark> <mark style="color:orange;">-> true or false</mark>
   1. rank <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Players current rank</mark>
   2. totalXP <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Players current total XP</mark>

