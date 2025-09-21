---
description: 🔧 Dostępne od wersji 1.0.1!
---

# setXP

**📢 Zdarzenie występuje, gdy XP gracza jest ustawione**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(data)
    -- Zrób swoją magię tutaj 💫
end)
```

### Zwraca

1. Data <span className="color-blue">(OBIEKT)</span> <span className="color-orange">-> prawda lub fałsz</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Czy gracz osiągnął nowy poziom?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Aktualne całkowite XP gracza</span>