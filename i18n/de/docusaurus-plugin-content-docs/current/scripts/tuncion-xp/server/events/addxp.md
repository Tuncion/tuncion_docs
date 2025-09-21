---
description: 🔧 Verfügbar seit Version 1.0.1!
---

# addXP

**📢 Ereignis tritt auf, wenn ein Spieler XP gewinnt**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Gibt zurück

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> SpielerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> wahr oder falsch</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Hat der Spieler ein neues Level erreicht?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Änderungswert z.B. 5XP</span>