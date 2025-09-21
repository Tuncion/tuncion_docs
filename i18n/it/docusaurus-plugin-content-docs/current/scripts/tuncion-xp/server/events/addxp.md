---
description: 🔧 Disponibile dalla versione 1.0.1!
---

# addXP

**📢 L'evento si verifica quando un giocatore guadagna XP**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(source, data)
    -- Fai la tua magia qui 💫
end)
```

### Restituisce

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true o false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Il giocatore ha raggiunto un nuovo livello?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Valore di cambiamento es. 5XP</span>