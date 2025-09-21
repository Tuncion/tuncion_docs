---
description: 🔧 Sürüm 1.0.1'den beri mevcut!
---

# removeXP

**📢 Bir oyuncu XP kaybettiğinde olay gerçekleşir**

```lua
RegisterNetEvent("tuncion_xp:log:removeXP")
AddEventHandler("tuncion_xp:log:removeXP", function(source, data)
    -- Büyünü burada yap 💫
end)
```

### Döndürür

1. Source <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Data <span className="color-blue">(OBJECT)</span> <span className="color-orange">-> true veya false</span>
   1. newRank <span className="color-blue">(BOOL)</span> <span className="color-orange">-> Oyuncu yeni bir seviyeye ulaştı mı?</span>
   2. change <span className="color-blue">(INT)</span> <span className="color-orange">-> Değişim değeri örn. 5XP</span>