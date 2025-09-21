---
description: 🔧 Disponível desde a Versão 1.0.1!
---

# setRank

**📢 O evento ocorre quando o rank de um jogador é definido**

```lua
RegisterNetEvent("tuncion_xp:log:setRank")
AddEventHandler("tuncion_xp:log:setRank", function(data)
    -- Do your magic here 💫
end)
```

### Retornos

1. Data <span className="color-blue">(OBJETO)</span> <span className="color-orange">-> verdadeiro ou falso</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Rank atual dos jogadores</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Total atual de XP dos jogadores</span>