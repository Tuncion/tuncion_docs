---
description: 🔧 Disponible depuis la version 1.0.1 !
---

# addXP

**📢 L'événement se produit lorsqu'un joueur gagne de l'XP**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(data)
    -- Faites votre magie ici 💫
end)
```

### Renvoie

1. Données <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> vrai ou faux</span>
   1. nouveauRang <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Le joueur a-t-il atteint un nouveau niveau ?</span>
   2. changement <span className="color-blue">(INT)</span> <span className="color-orange">-> Valeur de changement par ex. 5XP</span>