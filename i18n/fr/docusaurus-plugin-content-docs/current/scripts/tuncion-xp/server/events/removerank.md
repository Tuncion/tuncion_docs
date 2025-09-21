---
description: 🔧 Disponible depuis la version 1.0.1 !
---

# removeRank

**📢 L'événement se produit lorsqu'un rang de joueur est supprimé**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Renvoie

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Données <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> vrai ou faux</span>
   1. rang <span className="color-blue">(INT)</span> <span className="color-orange">-> Rang actuel des joueurs</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Total actuel XP des joueurs</span>