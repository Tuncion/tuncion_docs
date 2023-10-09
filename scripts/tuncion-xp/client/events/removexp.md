---
description: 🔧 Available since Version 1.0.1!
---

# removeXP

&#x20;**📢 Event occurs when a player loses XP**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(data)
    -- Do your magic here 💫
end)
```

### Returns

1. Data <mark style="color:blue;">(OBJECT)</mark> <mark style="color:orange;">-> true or false</mark>
   1. newRank <mark style="color:blue;">(BOOL)</mark> <mark style="color:orange;">-> Has the player reached a new level?</mark>
   2. change <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Change value e.g. 5XP</mark>

