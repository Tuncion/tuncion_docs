---
description: 🔧 Sürüm 1.0.0'dan beri mevcut!
---

# setXP

```lua title="Export Syntax"
exports['tuncion_xp']:setXP(PlayerID, XP, Reason)
```

### PARAMETRE

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Ayarlanacak XP, örn. 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPSİYONEL)</span> <span className="color-orange">-> Bir sebep ekleyin, örn. 2 saat oynandı</span>

```lua
exports['tuncion_xp']:setXP(source, 50) --> Bilgilerle birlikte tablo döner
exports['tuncion_xp']:setXP(source, 50, 'XYZ') --> Bilgilerle birlikte tablo döner
```