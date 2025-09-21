---
description: 🔧 Sürüm 1.0.0'dan beri mevcut!
---

# getGlobalXP


```lua title="Export Syntax"
exports['tuncion_xp']:getGlobalXP(CurrentlyOnline)
```

### PARAMETRE

1. CurrentlyOnline <span className="color-blue">(BOOL)</span> <span className="color-orange">-> doğru veya yanlış</span>

```lua
exports['tuncion_xp']:getGlobalXP(true) --> Tüm çevrimiçi oyunculardan global XP döner
exports['tuncion_xp']:getGlobalXP(false) --> Tüm oyunculardan global XP döner
```