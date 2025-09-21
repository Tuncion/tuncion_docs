---
description: 🔧 Beschikbaar sinds versie 1.0.0!
---

# setRank

```lua title="Export Syntax"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Naar welk niveau moet worden ingesteld, bijv. niveau 2</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Voeg een reden toe, bijv. Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Retourneert tabel met informatie
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Retourneert tabel met informatie
```