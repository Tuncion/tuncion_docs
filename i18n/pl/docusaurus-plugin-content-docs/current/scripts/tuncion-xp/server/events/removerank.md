---
description: 🔧 Dostępne od wersji 1.0.1!
---

# removeRank

**📢 Zdarzenie występuje, gdy ranga gracza jest usuwana**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(source, data)
    -- Zrób swoją magię tutaj 💫
end)
```

### Zwraca

1. Źródło <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Dane <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true lub false</span>
   1. ranga <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktualna ranga gracza</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktualne całkowite XP gracza</span>