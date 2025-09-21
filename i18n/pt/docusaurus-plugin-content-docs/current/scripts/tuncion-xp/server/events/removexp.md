---
description: 🔧 Disponível desde a Versão 1.0.1!
---

# removeXP

**📢 O evento ocorre quando um jogador perde XP**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Retornos

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> verdadeiro ou falso</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> O jogador alcançou um novo nível?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Valor da mudança, ex. 5XP</span>