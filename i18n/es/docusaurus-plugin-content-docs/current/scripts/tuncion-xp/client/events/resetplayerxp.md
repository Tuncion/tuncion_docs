---
description: 🔧 ¡Disponible desde la versión 1.0.1!
---

# resetPlayerXP

**📢 El evento ocurre cuando se restablece el XP de un jugador**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(data)
    -- Haz tu magia aquí 💫
end)
```

### Devuelve

1. Data <span className="color-blue">(OBJETO)</span> <span className="color-orange">-> verdadero o falso</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Rango actual del jugador</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Total de XP actual del jugador</span>