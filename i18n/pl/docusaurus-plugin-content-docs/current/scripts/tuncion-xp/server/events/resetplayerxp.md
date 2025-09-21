---
description: 🔧 Dostępne od wersji 1.0.1!
---

# resetPlayerXP

**📢 Zdarzenie występuje, gdy XP gracza jest resetowane**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(source, data)
    -- Zrób swoją magię tutaj 💫
end)
```

### Zwraca

1. Źródło <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Dane <span className="color-blue">(OBIEKT)</span> <span className="color-orange">-> prawda lub fałsz</span>
   1. ranga <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktualna ranga graczy</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktualne całkowite XP graczy</span>