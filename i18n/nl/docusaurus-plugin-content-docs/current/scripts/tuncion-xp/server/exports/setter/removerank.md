---
description: 🔧 Beschikbaar sinds versie 1.0.0!
---

# removeRank

```lua title="Export Syntax"
exports['tuncion_xp']:removeRank(PlayerID, Rank, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Hoeveel niveau moet worden toegevoegd, bijv. 2 niveaus</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Voeg een reden toe, bijv. Regel overtreding</span>

```lua
exports['tuncion_xp']:removeRank(source, 2) --> Retourneert tabel met informatie
exports['tuncion_xp']:removeRank(source, 2, 'XYZ') --> Retourneert tabel met informatie
```