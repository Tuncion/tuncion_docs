---
description: 🔧 Disponibile dalla versione 1.0.0!
---

# setRank

```lua title="Sintassi di esportazione"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### PARAMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> A quale livello deve essere impostato, ad esempio livello 2</span>
3. Reason <span className="color-blue">(STRING) (OPZIONALE)</span> <span className="color-orange">-> Aggiungi un motivo, ad esempio Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Restituisce una tabella con informazioni
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Restituisce una tabella con informazioni
```