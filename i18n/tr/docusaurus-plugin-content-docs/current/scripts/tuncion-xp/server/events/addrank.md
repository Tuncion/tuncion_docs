---
description: 🔧 Sürüm 1.0.1'den beri mevcut!
---

# addRank

**📢 Bir oyuncunun rütbesi eklendiğinde olay gerçekleşir**

```lua
RegisterNetEvent("tuncion_xp:log:addRank")
AddEventHandler("tuncion_xp:log:addRank", function(source, data)
    -- Büyünü burada yap 💫
end)
```

### Döndürür

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> OyuncuID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> doğru veya yanlış</span>
   1. rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Oyuncunun mevcut rütbesi</span>
   2. totalXP <span className="color-blue">(INT)</span> <span className="color-orange">-> Oyuncunun mevcut toplam XP'si</span>