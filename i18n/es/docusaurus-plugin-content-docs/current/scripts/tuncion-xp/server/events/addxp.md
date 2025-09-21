---
description: 🔧 ¡Disponible desde la versión 1.0.1!
---

# addXP

**📢 El evento ocurre cuando un jugador gana XP**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Devuelve

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true o false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> ¿Ha alcanzado el jugador un nuevo nivel?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Valor de cambio, por ejemplo, 5XP</span>