---
description: 🔧 ¡Disponible desde la versión 1.0.0!
---

# removeXP

```lua title="Export Syntax"
exports['tuncion_xp']:removeXP(PlayerID, XP, Reason)
```

### PARÁMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Cuánto XP se debe eliminar, por ejemplo, 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPCIONAL)</span> <span className="color-orange">-> Agregar una razón, por ejemplo, Violación de reglas</span>

```lua
exports['tuncion_xp']:removeXP(source, 50) --> Devuelve tabla con información
exports['tuncion_xp']:removeXP(source, 50, 'XYZ') --> Devuelve tabla con información
```