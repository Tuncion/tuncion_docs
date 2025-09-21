---
description: 🔧 Disponível desde a Versão 1.0.1!
---

# removeRank

**📢 O evento ocorre quando o rank de um jogador é removido**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Retornos

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true ou false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Rank atual dos jogadores</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP total atual dos jogadores</span>