---
description: 🔧 ¡Disponible desde la versión 1.0.1!
---

# addRank

**📢 El evento ocurre cuando se añade el rango de un jugador**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(data)
    -- Do your magic here 💫
end)
```

### Retorna

1. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> verdadero o falso</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Rango actual del jugador</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Total de XP actual del jugador</span>