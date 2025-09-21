---
description: 🔧 Disponível desde a Versão 1.0.1!
---

# resetPlayerXP

**📢 O evento ocorre quando o XP de um jogador é redefinido**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(data)
    -- Do your magic here 💫
end)
```

### Retornos

1. Data <span className="color-blue">(OBJETO)</span> <span className="color-orange">-> verdadeiro ou falso</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Classificação atual dos jogadores</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Total atual de XP dos jogadores</span>