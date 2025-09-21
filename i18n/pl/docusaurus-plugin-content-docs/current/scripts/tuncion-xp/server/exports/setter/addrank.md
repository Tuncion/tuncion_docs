---
description: 🔧 Dostępne od wersji 1.0.0!
---

# addRank

```lua title="Składnia eksportu"
exports['tuncion_xp']:addRank(PlayerID, Rank, Reason)
```

### PARAMETR

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Ile poziomów powinno zostać dodanych, np. 2 poziomy</span>
3. Reason <span className="color-blue">(STRING) (OPCJONALNY)</span> <span className="color-orange">-> Dodaj powód, np. Giveaway XYZ</span>

```lua
exports['tuncion_xp']:addRank(source, 2) --> Zwraca tabelę z informacjami
exports['tuncion_xp']:addRank(source, 2, 'XYZ') --> Zwraca tabelę z informacjami
```