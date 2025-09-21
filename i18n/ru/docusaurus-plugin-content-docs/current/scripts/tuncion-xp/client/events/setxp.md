---
description: 🔧 Доступно с версии 1.0.1!
---

# setXP

**📢 Событие происходит, когда XP игрока установлен**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(data)
    -- Делайте свою магию здесь 💫
end)
```

### Возвращает

1. Данные <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true или false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Достиг ли игрок нового уровня?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Текущий общий XP игрока</span>