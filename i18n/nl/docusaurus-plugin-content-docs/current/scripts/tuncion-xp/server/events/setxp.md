---
description: 🔧 Beschikbaar sinds versie 1.0.1!
---

# setXP

**📢 Gebeurtenis vindt plaats wanneer de XP van een speler wordt ingesteld**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Retourneert

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true of false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Heeft de speler een nieuw niveau bereikt?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige totale XP van de speler</span>