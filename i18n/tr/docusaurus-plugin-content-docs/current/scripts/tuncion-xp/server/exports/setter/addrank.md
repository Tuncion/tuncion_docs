---
description: 🔧 Sürüm 1.0.0'dan beri mevcut!
---

# addRank

```lua title="Dışa Aktarma Söz Dizimi"
exports['tuncion_xp']:addRank(PlayerID, Rank, Reason)
```

### PARAMETRE

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Ne kadar seviye eklenmeli örn. 2 seviye</span>
3. Reason <span className="color-blue">(STRING) (OPSİYONEL)</span> <span className="color-orange">-> Bir sebep ekleyin örn. Giveaway XYZ</span>

```lua
exports['tuncion_xp']:addRank(source, 2) --> Bilgilerle birlikte tablo döner
exports['tuncion_xp']:addRank(source, 2, 'XYZ') --> Bilgilerle birlikte tablo döner
```