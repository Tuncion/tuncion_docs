---
description: 🔧 Disponível desde a Versão 1.0.0!
---

# addXP

```lua title="Export Syntax"
exports['tuncion_xp']:addXP(PlayerID, XP, Reason)
```

### PARÂMETRO

1. PlayerID <span className="color-blue">(INT)</span> <span className="color-orange">-> PlayerID</span>
2. XP <span className="color-blue">(INT)</span> <span className="color-orange">-> Quanto XP deve ser adicionado, por exemplo, 50XP</span>
3. Reason <span className="color-blue">(STRING) (OPCIONAL)</span> <span className="color-orange">-> Adicione um motivo, por exemplo, Jogou 2 horas</span>

```lua
exports['tuncion_xp']:addXP(source, 50) --> Retorna tabela com informações
exports['tuncion_xp']:addXP(source, 50, 'XYZ') --> Retorna tabela com informações
```