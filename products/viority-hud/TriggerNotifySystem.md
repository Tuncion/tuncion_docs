---
description: 🔧 Available since Version 1.0.0!
---

# TriggerNotifySystem

{% code title="TriggerEvent Syntax" %}
```lua
TriggerEvent("viority_hud:client:Notify", type, variant, header, desc, image, color, progressbaranim, duration)
```
{% endcode %}

### PARAMETER

1. Type <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Set type (1 = normal, 2 = announce)</mark>
2. Variant <mark style="color:blue;">(INT)</mark> <mark style="color:orange;">-> Number of pre-defined variants (nil is not used)</mark>
3. Header <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> The header e.g. "SERVER RESTART" or "EVENT NEWS"</mark>
4. Desc <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> The description e.g. "The server will be restarted in X minutes!"</mark>
5. Image <mark style="color:blue;">(STRING) (OPTIONAL)</mark> <mark style="color:orange;">-> Link  or path to Icon Image</mark>
6. Color <mark style="color:blue;">(STRING) (OPTIONAL)</mark> <mark style="color:orange;">-> Valid #HexCode</mark>&#x20;
7. ProgressAnim <mark style="color:blue;">(BOOL) (OPTIONAL)</mark> <mark style="color:orange;">-> ProgressbarAnim (Colors) true or false?</mark>
8. Duration <mark style="color:blue;">(INT) (OPTIONAL)</mark> <mark style="color:orange;">-> The duration in ms (5000 = 5 seconds)</mark>

{% hint style="warning" %}
_**Without pre-defined Variant**_\
If you do not specify an <mark style="color:blue;">OPTIONAL</mark> value, the **general** default value is used.\
\
_**With pre-defined Variant**_\
If you do not specify an <mark style="color:blue;">OPTIONAL</mark> value, the **pre-defined** default value is used
{% endhint %}

{% code title="Example without variant" overflow="wrap" %}
```lua
-- Apply all Values
TriggerEvent("viority_hud:client:Notify", 2, nil, "SERVER RESTART", "The server will be restarted in 5 minutes!", "https://example.com/Icon.png", "#0071f3", true, 5000)

-- Apply only required values (OPTIONAL Values will be default)
TriggerEvent("viority_hud:client:Notify", 2, nil, "SERVER RESTART", "The server will be restarted in 5 minutes!")

-- Apply only required values but with duration (Color and ProgressAnim will be default)
TriggerEvent("viority_hud:client:Notify", 2, nil, "SERVER RESTART", "The server will be restarted in 5 minutes!", nil, nil, nil, 5000)
```
{% endcode %}

{% code title="Example with variant" overflow="wrap" %}
```lua
-- Apply all Values
TriggerEvent("viority_hud:client:Notify", 2, 1, "SERVER RESTART", "The server will be restarted in 5 minutes!", "https://example.com/Icon.png", "#0071f3", true, 5000)

-- Apply only required values (OPTIONAL Values will be variant default)
TriggerEvent("viority_hud:client:Notify", 2, 1, "SERVER RESTART", "The server will be restarted in 5 minutes!")

-- Apply only required values but with duration (Color and ProgressAnim will be variant default)
TriggerEvent("viority_hud:client:Notify", 2, 1, "SERVER RESTART", "The server will be restarted in 5 minutes!", nil, nil, nil, 5000)
```
{% endcode %}
