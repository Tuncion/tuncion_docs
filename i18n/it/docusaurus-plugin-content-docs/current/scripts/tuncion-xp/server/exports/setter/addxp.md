---
description: 🔧 Disponibile dalla versione 1.0.0!
---

# addXP

```lua title="Sintassi di Esportazione"
exports['tuncion_xp']:addXP(PlayerID, XP, Reason)
```

### PARAMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Quanta XP dovrebbe essere aggiunta, ad esempio 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPZIONALE)</span> <span className="color-orange">-> Aggiungi un motivo, ad esempio Giocato 2 ore</span>

```lua
exports['tuncion_xp']:addXP(source, 50) --> Restituisce una tabella con informazioni
exports['tuncion_xp']:addXP(source, 50, 'XYZ') --> Restituisce una tabella con informazioni
```