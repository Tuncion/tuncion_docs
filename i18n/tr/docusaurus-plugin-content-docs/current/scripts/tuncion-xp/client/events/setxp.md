---
description: 🔧 Sürüm 1.0.1'den beri mevcut!
---

# setXP

**📢 Bir oyuncunun XP'si ayarlandığında olay gerçekleşir**

```lua
RegisterNetEvent("tuncion_xp:log:setXP")
AddEventHandler("tuncion_xp:log:setXP", function(data)
    -- Büyünü burada yap 💫
end)
```

### Döndürür

1. Data <span className="color-blue">(OBJE)</span> <span className="color-orange">-> doğru veya yanlış</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Oyuncu yeni bir seviyeye ulaştı mı?</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Oyuncunun mevcut toplam XP'si</span>