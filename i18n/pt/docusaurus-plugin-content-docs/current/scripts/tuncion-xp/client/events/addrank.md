---
description: 🔧 Disponível desde a Versão 1.0.1!
---

# addRank

**📢 O evento ocorre quando o rank de um jogador é adicionado**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(data)
    -- Faça sua mágica aqui 💫
end)
```

### Retornos

1. Data <span className="color-blue">(OBJETO)</span> <span className="color-orange">-> verdadeiro ou falso</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Rank atual dos jogadores</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP total atual dos jogadores</span>