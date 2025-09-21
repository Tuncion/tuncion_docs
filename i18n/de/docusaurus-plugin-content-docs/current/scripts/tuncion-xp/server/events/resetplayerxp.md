---
description: 🔧 Verfügbar seit Version 1.0.1!
---

# resetPlayerXP

**📢 Ereignis tritt auf, wenn die XP eines Spielers zurückgesetzt wird**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Gibt zurück

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> SpielerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> wahr oder falsch</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktueller Rang des Spielers</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktuelle Gesamt-XP des Spielers</span>