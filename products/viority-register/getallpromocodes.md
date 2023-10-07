---
description: 🔧 Available since Version 1.0.0!
---

# getAllPromocodes

{% code title="TriggerServerCallback Syntax" %}
```lua
ESX.TriggerServerCallback("viority_register:server:getAllPromocodes", function(response)
    print(response) --> Object with all Promocodes
end, {})
```
{% endcode %}

{% code title="Example TriggerEvent" %}
```lua
ESX.TriggerServerCallback("viority_register:server:getAllPromocodes", function(response)
    for k,v in pairs(response) do
        print(k) --> Promocode Name e.g. test1234
        print(v.owner) --> Owner e.g. Alessio Martini
    end;
end, {})
```
{% endcode %}
