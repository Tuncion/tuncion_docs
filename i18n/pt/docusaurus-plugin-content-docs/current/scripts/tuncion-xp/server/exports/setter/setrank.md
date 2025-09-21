---
description: 🔧 Disponível desde a Versão 1.0.0!
---

# setRank

```lua title="Export Syntax"
exports['tuncion_xp']:setRank(PlayerID, Rank, Reason)
```

### PARÂMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Para qual nível deve ser definido, por exemplo, nível 2</span>
3. Reason <span className="color-blue">(STRING) (OPCIONAL)</span> <span className="color-orange">-> Adicione uma razão, por exemplo, Giveaway XYZ</span>

```lua
exports['tuncion_xp']:setRank(source, 2) --> Retorna tabela com informações
exports['tuncion_xp']:setRank(source, 2, 'XYZ') --> Retorna tabela com informações
```