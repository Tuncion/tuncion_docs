---
description: 🔧 Beschikbaar sinds versie 1.0.1!
---

# addXP

**📢 Gebeurtenis vindt plaats wanneer een speler XP verwerft**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(data)
    -- Do your magic here 💫
end)
```

### Retourneert

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true of false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Heeft de speler een nieuw niveau bereikt?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Veranderwaarde bijv. 5XP</span>