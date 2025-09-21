---
description: 🔧 Beschikbaar sinds versie 1.0.1!
---

# addRank

**📢 Gebeurtenis vindt plaats wanneer de rang van een speler wordt toegevoegd**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Retourneert

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true of false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige rang van spelers</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige totale XP van spelers</span>