---
description: 🔧 Disponibile dalla versione 1.0.1!
---

# resetPlayerXP

**📢 L'evento si verifica quando l'XP di un giocatore viene azzerato**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(source, data)
    -- Fai la tua magia qui 💫
end)
```

### Restituisce

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true o false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Il rango attuale del giocatore</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> L'XP totale attuale del giocatore</span>