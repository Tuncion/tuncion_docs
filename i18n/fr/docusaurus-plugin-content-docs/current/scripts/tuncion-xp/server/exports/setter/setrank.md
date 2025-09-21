---
description: 🔧 Disponible depuis la version 1.0.0 !
---

# setRank

```lua title="Syntaxe d'exportation"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### PARAMÈTRE

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> À quel niveau doit être défini, par exemple niveau 2</span>
3. Reason <span className="color-blue">(STRING) (OPTIONNEL)</span> <span className="color-orange">-> Ajouter une raison, par exemple Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Renvoie une table avec des informations
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Renvoie une table avec des informations
```