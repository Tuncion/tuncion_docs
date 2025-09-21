---
description: 🔧 Disponibile dalla versione 1.0.1!
---

# addRank

**📢 L'evento si verifica quando viene aggiunto il rango di un giocatore**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(data)
    -- Fai la tua magia qui 💫
end)
```

### Restituisce

1. Data <span className="color-blue">(OGGETTO)</span> <span className="color-orange">-> vero o falso</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Rango attuale del giocatore</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP totale attuale del giocatore</span>