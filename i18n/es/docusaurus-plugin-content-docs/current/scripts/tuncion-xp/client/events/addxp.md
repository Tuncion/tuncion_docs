---
description: 🔧 ¡Disponible desde la versión 1.0.1!
---

# addXP

**📢 El evento ocurre cuando un jugador gana XP**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(data)
    -- Do your magic here 💫
end)
```

### Retorna

1. Data <span className="color-blue">(OBJETO)</span> <span className="color-orange">-> verdadero o falso</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> ¿Ha alcanzado el jugador un nuevo nivel?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Valor de cambio p. ej. 5XP</span>