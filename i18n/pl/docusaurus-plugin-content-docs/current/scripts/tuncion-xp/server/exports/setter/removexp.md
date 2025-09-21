---
description: 🔧 Dostępne od wersji 1.0.0!
---

# removeXP

```lua title="Składnia eksportu"
exports['tuncion_xp']:removeXP(PlayerID, XP, Reason)
```

### PARAMETR

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Ile XP powinno zostać usunięte, np. 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPCJONALNE)</span> <span className="color-orange">-> Dodaj powód, np. Naruszenie zasad</span>

```lua
exports['tuncion_xp']:removeXP(source, 50) --> Zwraca tabelę z informacjami
exports['tuncion_xp']:removeXP(source, 50, 'XYZ') --> Zwraca tabelę z informacjami
```