---
description: 🔧 Sürüm 1.0.1'den beri mevcut!
---

# addXP

**📢 Bir oyuncu XP kazandığında olay gerçekleşir**

```lua
RegisterNetEvent("tuncion_xp:log:addXP")
AddEventHandler("tuncion_xp:log:addXP", function(data)
    -- Büyünü burada yap 💫
end)
```

### Döndürür

1. Data <span className="color-blue">(OBJE)</span> <span className="color-orange">-> doğru veya yanlış</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Oyuncu yeni bir seviyeye ulaştı mı?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Değişim değeri örn. 5XP</span>