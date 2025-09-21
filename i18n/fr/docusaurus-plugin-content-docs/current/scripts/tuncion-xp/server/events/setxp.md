---
description: 🔧 Disponible depuis la version 1.0.1 !
---

# setXP

**📢 L'événement se produit lorsqu'XP d'un joueur est défini**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(source, data)
    -- Faites votre magie ici 💫
end)
```

### Retours

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Données <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> vrai ou faux</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Le joueur a-t-il atteint un nouveau niveau ?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP total actuel du joueur</span>