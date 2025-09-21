---
description: 🔧 Dostępne od wersji 1.0.0!
---

# removeRank

```lua title="Składnia eksportu"
exports['tuncion_xp']:removeRank(PlayerID, Rank, Reason)
```

### PARAMETR

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Ile poziomów powinno być dodanych, np. 2 poziomy</span>
3. Reason <span className="color-blue">(STRING) (OPCJONALNE)</span> <span className="color-orange">-> Dodaj powód, np. Naruszenie zasad</span>

```lua
exports['tuncion_xp']:removeRank(source, 2) --> Zwraca tabelę z informacjami
exports['tuncion_xp']:removeRank(source, 2, 'XYZ') --> Zwraca tabelę z informacjami
```