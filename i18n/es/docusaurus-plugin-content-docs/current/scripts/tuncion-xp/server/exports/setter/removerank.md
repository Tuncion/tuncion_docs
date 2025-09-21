---
description: 🔧 ¡Disponible desde la versión 1.0.0!
---

# removeRank

```lua title="Export Syntax"
exports['tuncion_xp']:removeRank(PlayerID, Rank, Reason)
```

### PARÁMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Cuánto nivel se debe agregar, por ejemplo, 2 niveles</span>
3. Reason <span className="color-blue">(STRING) (OPCIONAL)</span> <span className="color-orange">-> Agregar una razón, por ejemplo, violación de reglas</span>

```lua
exports['tuncion_xp']:removeRank(source, 2) --> Devuelve una tabla con información
exports['tuncion_xp']:removeRank(source, 2, 'XYZ') --> Devuelve una tabla con información
```