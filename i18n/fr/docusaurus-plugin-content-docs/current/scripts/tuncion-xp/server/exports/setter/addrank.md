---
description: 🔧 Disponible depuis la version 1.0.0 !
---

# addRank

```lua title="Syntaxe d'exportation"
exports['tuncion_xp']:addRank(PlayerID, Rank, Reason)
```

### PARAMÈTRE

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Combien de niveaux doivent être ajoutés, par exemple 2 niveaux</span>
3. Reason <span className="color-blue">(STRING) (OPTIONNEL)</span> <span className="color-orange">-> Ajouter une raison, par exemple Giveaway XYZ</span>

```lua
exports['tuncion_xp']:addRank(source, 2) --> Retourne une table avec des informations
exports['tuncion_xp']:addRank(source, 2, 'XYZ') --> Retourne une table avec des informations
```