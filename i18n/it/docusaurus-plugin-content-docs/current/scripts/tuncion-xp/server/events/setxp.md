---
description: 🔧 Disponibile dalla versione 1.0.1!
---

# setXP

**📢 L'evento si verifica quando l'XP di un giocatore viene impostato**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(source, data)
    -- Fai la tua magia qui 💫
end)
```

### Restituisce

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true o false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Il giocatore ha raggiunto un nuovo livello?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP totale attuale del giocatore</span>