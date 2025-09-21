---
description: 🔧 ¡Disponible desde la versión 1.0.0!
---

# setRank

```lua title="Export Syntax"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### PARÁMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> A qué nivel se debe establecer, por ejemplo, nivel 2</span>
3. Reason <span className="color-blue">(STRING) (OPCIONAL)</span> <span className="color-orange">-> Agregar una razón, por ejemplo, Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Devuelve tabla con información
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Devuelve tabla con información
```