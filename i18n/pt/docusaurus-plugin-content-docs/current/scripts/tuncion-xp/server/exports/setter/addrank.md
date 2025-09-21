---
description: 🔧 Disponível desde a Versão 1.0.0!
---

# addRank

```lua title="Export Syntax"
exports['tuncion_xp']:addRank(PlayerID, Rank, Reason)
```

### PARÂMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. Rank <span className="color-blue">(INT)</span> <span className="color-orange">-> Quanto nível deve ser adicionado, por exemplo, 2 níveis</span>
3. Reason <span className="color-blue">(STRING) (OPCIONAL)</span> <span className="color-orange">-> Adicione uma razão, por exemplo, Sorteio XYZ</span>

```lua
exports['tuncion_xp']:addRank(source, 2) --> Retorna tabela com informações
exports['tuncion_xp']:addRank(source, 2, 'XYZ') --> Retorna tabela com informações
```