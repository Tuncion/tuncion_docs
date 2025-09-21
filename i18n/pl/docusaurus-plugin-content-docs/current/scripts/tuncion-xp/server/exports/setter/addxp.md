---
description: 🔧 Dostępne od wersji 1.0.0!
---

# addXP

```lua title="Składnia eksportu"
exports['tuncion_xp']:addXP(PlayerID, XP, Reason)
```

### PARAMETR

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Ile XP powinno zostać dodane, np. 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPCJONALNY)</span> <span className="color-orange">-> Dodaj powód, np. Grał przez 2 godziny</span>

```lua
exports['tuncion_xp']:addXP(source, 50) --> Zwraca tabelę z informacjami
exports['tuncion_xp']:addXP(source, 50, 'XYZ') --> Zwraca tabelę z informacjami
```