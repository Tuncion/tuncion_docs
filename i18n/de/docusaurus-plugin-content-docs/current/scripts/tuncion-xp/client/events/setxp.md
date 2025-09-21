---
description: 🔧 Verfügbar seit Version 1.0.1!
---

# setXP

**📢 Ereignis tritt auf, wenn die XP eines Spielers festgelegt wird**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(data)
    -- Mach hier deine Magie 💫
end)
```

### Rückgaben

1. Daten <span className="color-blue">(OBJEKT)</span> <span className="color-orange">-> wahr oder falsch</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Hat der Spieler ein neues Level erreicht?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktuelle Gesamt-XP des Spielers</span>