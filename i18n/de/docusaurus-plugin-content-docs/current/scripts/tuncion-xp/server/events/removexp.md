---
description: 🔧 Verfügbar seit Version 1.0.1!
---

# removeXP

**📢 Ereignis tritt auf, wenn ein Spieler XP verliert**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Gibt zurück

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true oder false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Hat der Spieler ein neues Level erreicht?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Änderungswert z.B. 5XP</span>