---
description: 🔧 Available since Version 1.0.1!
---

# How to use

{% code title="Export Syntax" %}
```lua
exports['viority_interaction']:Interaction(key, message, thisFrame, showorhide, color)
```
{% endcode %}

### PARAMETER

1. Key <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> E</mark>
2. Message <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> PRESS E TO INTERACT...</mark>
3. ThisFrame <mark style="color:blue;">(BOOLEAN)</mark> <mark style="color:orange;">-> Only in this Frame or permanent? (Use true if you use it in a loop)</mark>
4. ShoworHide <mark style="color:blue;">(BOOLEAN)</mark> <mark style="color:orange;">-> Show or Hide?</mark>
5. Color <mark style="color:blue;">(STRING) (OPTIONAL)</mark> <mark style="color:orange;">-> #538BC4</mark>

{% hint style="info" %}
You can use all HTML Text Syntax. To highlight a String start it with {y1} and end it with {y2}
{% endhint %}

<pre class="language-lua" data-title="Example Export" data-line-numbers><code class="lang-lua"><strong>-- Usage not in a loop
</strong>Citizen.CreateThread(function()
    exports['viority_interaction']:Interaction("E", "PRESS {y1}E{y2} TO INTERACT", false, true, "#2A7EE2"); -- Activate the Interaction
    Citizen.Wait(2000); -- Wait 2 Seconds
    exports['viority_interaction']:Interaction("E", "PRESS {y1}E{y2} TO INTERACT", false, false, "#2A7EE2"); -- Deactivate the Interaction
end);

-- Usage in a loop
Citizen.CreateThread(function()
    while true do -- Start the Loop
        exports['viority_interaction']:Interaction("E", "PRESS {y1}E{y2} TO INTERACT", true, true, "#2A7EE2"); -- Trigger the Interaction
        Citizen.Wait(0); -- Loop in every Frame
    end;
end);
</code></pre>
