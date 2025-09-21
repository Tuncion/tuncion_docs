---
description: 🔧 Beschikbaar sinds versie 1.0.0!
---

# removeXP

```lua title="Export Syntax"
exports['tuncion_xp']:removeXP(PlayerID, XP, Reason)
```

### PARAMETER

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Hoeveel XP moet worden verwijderd, bijv. 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPTIONAL)</span> <span className="color-orange">-> Voeg een reden toe, bijv. Regel overtreding</span>

```lua
exports['tuncion_xp']:removeXP(source, 50) --> Retourneert tabel met informatie
exports['tuncion_xp']:removeXP(source, 50, 'XYZ') --> Retourneert tabel met informatie
```