---
description: 🔧 Доступно с версии 1.0.1!
---

# resetPlayerXP

**📢 Событие происходит, когда XP игрока сбрасывается**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(data)
    -- Do your magic here 💫
end)
```

### Возвращает

1. Данные <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true или false</span>
   1. ранг <span className="color-blue">(INT)</span> <span className="color-orange">-> Текущий ранг игроков</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Текущий общий XP игроков</span>