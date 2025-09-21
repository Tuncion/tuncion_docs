---
description: 🔧 Verfügbar seit Version 1.0.0!
---

# removeXP

```lua title="Export Syntax"
exports['tuncion_xp']:removeXP(PlayerID, XP, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Wie viel XP entfernt werden soll, z.B. 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Füge einen Grund hinzu, z.B. Regelverstoß</span>

```lua
exports['tuncion_xp']:removeXP(source, 50) --> Gibt Tabelle mit Informationen zurück
exports['tuncion_xp']:removeXP(source, 50, 'XYZ') --> Gibt Tabelle mit Informationen zurück
```