---
description: 🔧 Sürüm 1.0.0'dan beri mevcut!
---

# removeXP

```lua title="Export Syntax"
exports['tuncion_xp']:removeXP(PlayerID, XP, Reason)
```

### PARAMETRE

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Ne kadar XP çıkarılmalı örn. 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPSİYONEL)</span> <span className="color-orange">-> Bir sebep ekleyin örn. Kural ihlali</span>

```lua
exports['tuncion_xp']:removeXP(source, 50) --> Bilgilerle birlikte tablo döner
exports['tuncion_xp']:removeXP(source, 50, 'XYZ') --> Bilgilerle birlikte tablo döner
```