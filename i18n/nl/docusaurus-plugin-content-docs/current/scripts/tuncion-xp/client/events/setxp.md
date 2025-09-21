---
description: 🔧 Beschikbaar sinds versie 1.0.1!
---

# setXP

**📢 Gebeurtenis die optreedt wanneer de XP van een speler wordt ingesteld**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(data)
    -- Doe hier je magie 💫
end)
```

### Retourneert

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> waar of niet waar</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Heeft de speler een nieuw niveau bereikt?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige totale XP van de speler</span>