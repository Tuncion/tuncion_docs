---
description: 🔧 Sürüm 1.0.1'den beri mevcut!
---

# removeRank

**📢 Bir oyuncunun rütbesi kaldırıldığında olay gerçekleşir**

```lua
RegisterNetEvent("tuncion_xp:log:removeRank")
AddEventHandler("tuncion_xp:log:removeRank", function(data)
    -- Büyünü burada yap 💫
end)
```

### Döndürür

1. Data <span className="color-blue">(OBJE)</span> <span className="color-orange">-> doğru veya yanlış</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Oyuncunun mevcut rütbesi</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Oyuncunun mevcut toplam XP'si</span>