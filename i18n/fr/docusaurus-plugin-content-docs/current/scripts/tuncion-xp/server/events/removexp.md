---
description: 🔧 Disponible depuis la version 1.0.1 !
---

# removeXP

**📢 L'événement se produit lorsqu'un joueur perd des XP**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Retours

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Données <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> vrai ou faux</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Le joueur a-t-il atteint un nouveau niveau ?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Valeur de changement par ex. 5XP</span>