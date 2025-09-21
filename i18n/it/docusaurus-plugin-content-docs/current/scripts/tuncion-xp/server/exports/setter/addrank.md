---
description: 🔧 Disponibile dalla versione 1.0.0!
---

# addRank

```lua title="Sintassi di Esportazione"
exports['tuncion_xp']:addRank(PlayerID, Rank, Reason)
```

### PARAMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Quanti livelli devono essere aggiunti, ad esempio 2 livelli</span>
3. Reason <span className="color-blue">(STRING) (OPZIONALE)</span> <span className="color-orange">-> Aggiungi un motivo, ad esempio Giveaway XYZ</span>

```lua
exports['tuncion_xp']:addRank(source, 2) --> Restituisce una tabella con informazioni
exports['tuncion_xp']:addRank(source, 2, 'XYZ') --> Restituisce una tabella con informazioni
```