---
description: 🔧 Доступно с версии 1.0.1!
---

# removeXP

**📢 Событие происходит, когда игрок теряет XP**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(data)
    -- Делайте свою магию здесь 💫
end)
```

### Возвращает

1. Данные <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true или false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Достиг ли игрок нового уровня?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Изменить значение, например, 5XP</span>