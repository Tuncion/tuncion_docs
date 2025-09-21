---
description: 🔧 Disponible depuis la version 1.0.1 !
---

# resetPlayerXP

**📢 L'événement se produit lorsqu'XP d'un joueur est réinitialisé**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(source, data)
    -- Faites votre magie ici 💫
end)
```

### Retourne

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Données <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> vrai ou faux</span>
   1. rang <span className="color-blue">(INT)</span> <span className="color-orange">-> Rang actuel des joueurs</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Total actuel d'XP des joueurs</span>