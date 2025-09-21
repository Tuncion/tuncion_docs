---
description: 🔧 ¡Disponible desde la versión 1.0.1!
---

# removeRank

**📢 El evento ocurre cuando se elimina el rango de un jugador**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Retornos

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> verdadero o falso</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Rango actual del jugador</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP total actual del jugador</span>