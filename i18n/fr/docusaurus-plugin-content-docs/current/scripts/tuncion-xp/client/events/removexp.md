---
description: 🔧 Disponible depuis la version 1.0.1 !
---

# removeXP

**📢 L'événement se produit lorsqu'un joueur perd des XP**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(data)
    -- Faites votre magie ici 💫
end)
```

### Retourne

1. Données <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> vrai ou faux</span>
   1. nouveauRang <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Le joueur a-t-il atteint un nouveau niveau ?</span>
   2. changement <span className="color-blue">(INT)</span> <span className="color-orange">-> Valeur de changement par ex. 5XP</span>