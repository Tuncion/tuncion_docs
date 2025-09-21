---
description: 🔧 Disponibile dalla versione 1.0.0!
---

# removeXP

```lua title="Sintassi di esportazione"
exports['tuncion_xp']:removeXP(PlayerID, XP, Reason)
```

### PARAMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Quanta XP deve essere rimossa, ad esempio 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPZIONALE)</span> <span className="color-orange">-> Aggiungi un motivo, ad esempio violazione delle regole</span>

```lua
exports['tuncion_xp']:removeXP(source, 50) --> Restituisce una tabella con informazioni
exports['tuncion_xp']:removeXP(source, 50, 'XYZ') --> Restituisce una tabella con informazioni
```