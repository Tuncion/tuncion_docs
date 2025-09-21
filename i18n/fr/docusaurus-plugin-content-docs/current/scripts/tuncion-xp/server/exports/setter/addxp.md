---
description: 🔧 Disponible depuis la version 1.0.0 !
---

# addXP

```lua title="Export Syntax"
exports['tuncion_xp']:addXP(PlayerID, XP, Reason)
```

### PARAMÈTRE

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Combien de XP doit être ajouté, par exemple 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPTIONNEL)</span> <span className="color-orange">-> Ajouter une raison, par exemple Joué 2 heures</span>

```lua
exports['tuncion_xp']:addXP(source, 50) --> Retourne une table avec des informations
exports['tuncion_xp']:addXP(source, 50, 'XYZ') --> Retourne une table avec des informations
```