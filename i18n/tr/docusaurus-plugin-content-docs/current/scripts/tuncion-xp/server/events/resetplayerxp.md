---
description: 🔧 Sürüm 1.0.1'den beri mevcut!
---

# resetPlayerXP

**📢 Olay, bir oyuncunun XP'si sıfırlandığında gerçekleşir**

```lua
RegisterNetEvent("tuncion_xp:log:resetPlayerXP")
AddEventHandler("tuncion_xp:log:resetPlayerXP", function(source, data)
    -- Büyünü burada yap 💫
end)
```

### Döndürür

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> OyuncuID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> doğru veya yanlış</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Oyuncunun mevcut rütbesi</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Oyuncunun mevcut toplam XP'si</span>