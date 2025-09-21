---
description: 🔧 Disponibile dalla versione 1.0.1!
---

# addRank

**📢 L'evento si verifica quando viene aggiunto il rango di un giocatore**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(source, data)
    -- Fai la tua magia qui 💫
end)
```

### Restituisce

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true o false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Rango attuale dei giocatori</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP totale attuale dei giocatori</span>