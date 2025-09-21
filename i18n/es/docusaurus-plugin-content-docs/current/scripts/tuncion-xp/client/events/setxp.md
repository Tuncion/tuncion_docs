---
description: 🔧 ¡Disponible desde la versión 1.0.1!
---

# setXP

**📢 El evento ocurre cuando se establece el XP de un jugador**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(data)
    -- Do your magic here 💫
end)
```

### Devuelve

1. Data <span className="color-blue">(OBJETO)</span> <span className="color-orange">-> verdadero o falso</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> ¿Ha alcanzado el jugador un nuevo nivel?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP total actual del jugador</span>