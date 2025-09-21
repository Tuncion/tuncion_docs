---
description: 🔧 Beschikbaar sinds versie 1.0.1!
---

# setRank

**📢 Gebeurtenis vindt plaats wanneer de rang van een speler is ingesteld**

```lua
RegisterNetEvent("tuncion_xp:log:setRank")
AddEventHandler("tuncion_xp:log:setRank", function(data)
    -- Do your magic here 💫
end)
```

### Retourneert

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> waar of niet waar</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige rang van de speler</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige totale XP van de speler</span>