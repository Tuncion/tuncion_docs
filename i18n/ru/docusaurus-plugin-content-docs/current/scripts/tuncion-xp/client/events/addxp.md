---
description: 🔧 Доступно с версии 1.0.1!
---

# addXP

**📢 Событие происходит, когда игрок получает XP**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(data)
    -- Do your magic here 💫
end)
```

### Возвращает

1. Данные <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true или false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Достиг ли игрок нового уровня?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Изменить значение, например, 5XP</span>