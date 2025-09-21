---
description: 🔧 Disponibile dalla versione 1.0.1!
---

# removeRank

**📢 L'evento si verifica quando il rango di un giocatore viene rimosso**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(source, data)
    -- Fai la tua magia qui 💫
end)
```

### Restituisce

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true o false</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Rango attuale del giocatore</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> XP totale attuale del giocatore</span>