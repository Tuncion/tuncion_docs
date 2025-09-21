---
description: 🔧 Beschikbaar sinds versie 1.0.1!
---

# removeRank

**📢 Gebeurtenis vindt plaats wanneer de rang van een speler wordt verwijderd**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(data)
    -- Doe hier je magie 💫
end)
```

### Retourneert

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> waar of niet waar</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige rang van de speler</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige totale XP van de speler</span>