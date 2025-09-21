---
description: 🔧 Dostępne od wersji 1.0.1!
---

# addRank

**📢 Zdarzenie występuje, gdy ranga gracza jest dodawana**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(source, data)
    -- Do your magic here 💫
end)
```

### Zwraca

1. Źródło <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Dane <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> prawda lub fałsz</span>
   1. ranga <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktualna ranga gracza</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktualne całkowite XP gracza</span>