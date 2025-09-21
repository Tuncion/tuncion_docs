---
description: 🔧 Disponibile dalla versione 1.0.1!
---

# resetPlayerXP

**📢 L'evento si verifica quando l'XP di un giocatore viene azzerato**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(data)
    -- Fai la tua magia qui 💫
end)
```

### Restituisce

1. Data <span className="color-blue">(OGGETTO)</span> <span className="color-orange">-> vero o falso</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Il rango attuale del giocatore</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> L'XP totale attuale del giocatore</span>