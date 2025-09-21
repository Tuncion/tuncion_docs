---
description: 🔧 Verfügbar seit Version 1.0.0!
---

# setRank

```lua title="Export-Syntax"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Auf welches Level soll gesetzt werden, z.B. Level 2</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Füge einen Grund hinzu, z.B. Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Gibt Tabelle mit Informationen zurück
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Gibt Tabelle mit Informationen zurück
```