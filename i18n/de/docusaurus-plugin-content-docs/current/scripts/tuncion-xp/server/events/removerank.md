---
description: 🔧 Verfügbar seit Version 1.0.1!
---

# removeRank

**📢 Ereignis tritt auf, wenn der Rang eines Spielers entfernt wird**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Gibt zurück

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true oder false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktueller Rang des Spielers</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktuelle Gesamt-XP des Spielers</span>