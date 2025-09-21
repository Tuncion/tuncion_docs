---
description: 🔧 Dostępne od wersji 1.0.1!
---

# addXP

**📢 Zdarzenie występuje, gdy gracz zdobywa XP**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(data)
    -- Zrób swoją magię tutaj 💫
end)
```

### Zwraca

1. Data <span className="color-blue">(OBIEKT)</span> <span className="color-orange">-> prawda lub fałsz</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Czy gracz osiągnął nowy poziom?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Zmiana wartości np. 5XP</span>