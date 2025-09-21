---
description: 🔧 Disponível desde a Versão 1.0.1!
---

# addXP

**📢 O evento ocorre quando um jogador ganha XP**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(data)
    -- Do your magic here 💫
end)
```

### Retornos

1. Data <span className="color-blue">(OBJETO)</span> <span className="color-orange">-> verdadeiro ou falso</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> O jogador alcançou um novo nível?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Valor de mudança, ex. 5XP</span>