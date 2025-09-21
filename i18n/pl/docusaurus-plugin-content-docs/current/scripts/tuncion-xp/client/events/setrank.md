---
description: 🔧 Dostępne od wersji 1.0.1!
---

# setRank

**📢 Zdarzenie występuje, gdy ranga gracza jest ustawiana**

```lua
RegisterNetEvent("tuncion_xp:log:setRank")
AddEventHandler("tuncion_xp:log:setRank", function(data)
    -- Zrób swoją magię tutaj 💫
end)
```

### Zwraca

1. Data <span className="color-blue">(OBIEKT)</span> <span className="color-orange">-> prawda lub fałsz</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktualna ranga gracza</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktualne całkowite XP gracza</span>