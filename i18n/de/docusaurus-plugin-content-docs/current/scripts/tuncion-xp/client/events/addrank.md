---
description: 🔧 Verfügbar seit Version 1.0.1!
---

# addRank

**📢 Ereignis tritt auf, wenn der Rang eines Spielers hinzugefügt wird**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(data)
    -- Mach hier deine Magie 💫
end)
```

### Gibt zurück

1. Daten <span className="color-blue">(OBJEKT)</span> <span className="color-orange">-> wahr oder falsch</span>
   1. rang <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktueller Rang des Spielers</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktuelle Gesamt-XP des Spielers</span>