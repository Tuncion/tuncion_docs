---
description: 🔧 Sürüm 1.0.1'den beri mevcut!
---

# setRank

**📢 Bir oyuncunun rütbesi ayarlandığında olay gerçekleşir**

```lua
RegisterNetEvent("tuncion_xp:log:setRank")
AddEventHandler("tuncion_xp:log:setRank", function(data)
    -- Büyünü burada yap 💫
end)
```

### Döndürür

1. Data <span className="color-blue">(OBJE)</span> <span className="color-orange">-> doğru veya yanlış</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Oyuncunun mevcut rütbesi</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Oyuncunun mevcut toplam XP'si</span>