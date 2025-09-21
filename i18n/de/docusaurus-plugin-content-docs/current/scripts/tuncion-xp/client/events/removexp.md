---
description: 🔧 Verfügbar seit Version 1.0.1!
---

# removeXP

**📢 Ereignis tritt auf, wenn ein Spieler XP verliert**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(data)
    -- Do your magic here 💫
end)
```

### Gibt zurück

1. Daten <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> wahr oder falsch</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Hat der Spieler ein neues Level erreicht?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Änderungswert z.B. 5XP</span>