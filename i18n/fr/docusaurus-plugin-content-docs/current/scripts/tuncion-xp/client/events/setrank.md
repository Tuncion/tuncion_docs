---
description: 🔧 Disponible depuis la version 1.0.1 !
---

# setRank

**📢 L'événement se produit lorsqu'un rang de joueur est défini**

```lua
RegisterNetEvent("tuncion_xp:log:setRank")
AddEventHandler("tuncion_xp:log:setRank", function(data)
    -- Faites votre magie ici 💫
end)
```

### Retourne

1. Données <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> vrai ou faux</span>
   1. rang <span className="color-blue">(INT)</span> <span className="color-orange">-> Rang actuel des joueurs</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Total XP actuel des joueurs</span>