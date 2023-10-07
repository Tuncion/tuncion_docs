---
description: 🔧 Available since Version 1.0.0!
---

# getPlayerPromocode



{% code title="TriggerServerCallback Syntax" %}
```lua
ESX.TriggerServerCallback("viority_register:server:getPlayerPromocode", function(code)
    print(code) --> e.g. test1234
end, {})
```
{% endcode %}

{% code title="Example TriggerServerCallback" %}
```lua
ESX.TriggerServerCallback("viority_register:server:getPlayerPromocode", function(code)
   print(("Your Promocode is %s"):format(code));
end, {});
```
{% endcode %}
