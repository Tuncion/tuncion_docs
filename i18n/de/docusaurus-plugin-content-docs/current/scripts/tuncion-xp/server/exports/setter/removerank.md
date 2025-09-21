---
description: 🔧 Verfügbar seit Version 1.0.0!
---

# removeRank

```lua title="Export-Syntax"
exports['tuncion_xp']:removeRank(PlayerID, Rank, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Wie viel Level hinzugefügt werden soll, z.B. 2 Level</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Grund hinzufügen, z.B. Regelverstoß</span>

```lua
exports['tuncion_xp']:removeRank(source, 2) --> Gibt Tabelle mit Informationen zurück
exports['tuncion_xp']:removeRank(source, 2, 'XYZ') --> Gibt Tabelle mit Informationen zurück
```