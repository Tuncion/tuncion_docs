---
description: 🔧 Verfügbar seit Version 1.0.0!
---

# setXP

```lua title="Export-Syntax"
exports['tuncion_xp']:setXP(PlayerID, XP, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Auf welchen XP soll gesetzt werden, z.B. 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Füge einen Grund hinzu, z.B. 2 Stunden gespielt</span>

```lua
exports['tuncion_xp']:setXP(source, 50) --> Gibt Tabelle mit Informationen zurück
exports['tuncion_xp']:setXP(source, 50, 'XYZ') --> Gibt Tabelle mit Informationen zurück
```