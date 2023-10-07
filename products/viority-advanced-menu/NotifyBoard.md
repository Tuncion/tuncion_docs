---
description: 🔧 Available since Version 1.0.0!
---

# NotifyBoard



{% code title="TriggerEvent Syntax" %}
```lua
TriggerServerEvent("viority_menu:server:UpdateNotifyBoard", header, message, time, identifier)
```
{% endcode %}

### PARAMETER

1. Header <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Test Message</mark>
2. Message <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> My Test Message...</mark>
3. Time  <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> 15.06.2022 15:23</mark>
4. Identifier <mark style="color:blue;">(STRING)</mark>&#x20;

{% hint style="info" %}
You can use all HTML Text Syntax. To highlight a String start it with {b1} and end it with {b2}
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
TriggerServerEvent("viority_menu:server:UpdateNotifyBoard", "NEWS", "SERVER RESTART IN {b1}5 MINUTES{b2}", os.date('%d.%m.%Y %H:%M'), identifier)
```
{% endcode %}
