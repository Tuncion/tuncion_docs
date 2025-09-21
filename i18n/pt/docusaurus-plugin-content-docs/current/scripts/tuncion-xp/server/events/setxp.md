---
description: 🔧 Disponível desde a Versão 1.0.1!
---

# setXP

**📢 O evento ocorre quando o XP de um jogador é definido**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(source, data)
    -- Do your magic here 💫
end)
```

### Retornos

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true ou false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> O jogador alcançou um novo nível?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP total atual do jogador</span>