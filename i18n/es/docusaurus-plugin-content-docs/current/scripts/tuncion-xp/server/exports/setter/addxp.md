---
description: 🔧 ¡Disponible desde la versión 1.0.0!
---

# addXP

```lua title="Export Syntax"
exports['tuncion_xp']:addXP(PlayerID, XP, Reason)
```

### PARÁMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Cuánto XP se debe agregar, por ejemplo, 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPCIONAL)</span> <span className="color-orange">-> Agregar una razón, por ejemplo, Jugó 2 horas</span>

```lua
exports['tuncion_xp']:addXP(source, 50) --> Devuelve una tabla con información
exports['tuncion_xp']:addXP(source, 50, 'XYZ') --> Devuelve una tabla con información
```