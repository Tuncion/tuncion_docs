---
description: 🔧 This tutorial shows how to add the Interaction to ESX
---

# ESX Interaction Integration

{% hint style="info" %}
This es\_extended integration optional. Please follow all steps carefully!
{% endhint %}

#### 1. Modify the ESX Framework

&#x20;   1.1 Go to the `es_extended` folder.\
&#x20;   1.2 Open the File `client > functions.lua`.\
&#x20;   1.3 Replace the function `ESX.ShowHelpNotification`.

{% code title="ShowHelpNotification" lineNumbers="true" %}
```lua
function ESX.ShowHelpNotification(msg, thisFrame, beep, duration)
	local thisFrame = thisFrame or false;

	AddTextEntry('esxHelpNotification', msg)

	if thisFrame then
		exports['viority_interaction']:Interaction("E", msg, true, true, "#2A7EE2");
	else
		if beep == nil then beep = true end
		BeginTextCommandDisplayHelp('esxHelpNotification')
		EndTextCommandDisplayHelp(0, false, beep, duration or -1)
	end
end
```
{% endcode %}

&#x20;   1.4 Adjust the Color Code in the export, if you want.

{% hint style="warning" %}
Now we have added the interaction to the ShowHelpNotification, but **only if parameter thisFrame is true**, in case of false the normal one will continue to be used.
{% endhint %}

{% code title="Example ShowHelpNotify" overflow="wrap" lineNumbers="true" fullWidth="false" %}
```lua
-- Create a citizen thread
Citizen.CreateThread(function()
    while true do -- Start the Loop
	            ESX.ShowHelpNotification( -- Trigger the Interaction
            "PRESS {y1}E{y2} TO INTERACT", -- This is the interaction text
            true,  -- THIS PARAM MUST BE TRUE!!!
            false, 
            1000
        );
        Citizen.Wait(0); -- Loop in every Frame
    end;
end);
```
{% endcode %}
