---
description: 🔧 Beschikbaar sinds versie 1.0.1!
---

# removeRank

**📢 Het evenement vindt plaats wanneer de rang van een speler wordt verwijderd**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Retourneert

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true of false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige rang van de speler</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Huidige totale XP van de speler</span>