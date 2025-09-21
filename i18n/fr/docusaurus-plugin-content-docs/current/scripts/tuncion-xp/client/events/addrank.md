---
description: 🔧 Disponible depuis la version 1.0.1 !
---

# addRank

**📢 L'événement se produit lorsqu'un rang de joueur est ajouté**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(data)
    -- Faites votre magie ici 💫
end)
```

### Renvoie

1. Données <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> vrai ou faux</span>
   1. rang <span className="color-blue">(INT)</span> <span className="color-orange">-> Rang actuel des joueurs</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Total XP actuel des joueurs</span>