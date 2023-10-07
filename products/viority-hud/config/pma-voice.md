---
description: 🔧 See the PMA-Voice Example
---

# PMA-Voice Example

{% code title="PMA-Voice Example" overflow="wrap" lineNumbers="true" fullWidth="false" %}
```lua
-- IMPORTANT THIS FILE IS JUST A EXAMPLE!!!
-- To use it you need to replace this functions in the ViorityCore.lua
-- Please consider that you start the PMA-Voice Resource before this Script to use the Voice Chat features...

-- Voice Plugin Functions (See Examples in the settings folder)
ViorityCore.TalkingEvent = function() -- This example is for PMA-Voice!!!
    if GetResourceState('pma-voice') ~= 'started' then return print('^5[Viority-Development]^7 PMA-Voice is not installed or not running! Please start PMA-Voice before this Script to use the Voice Chat features...'); end;

    Citizen.CreateThread(function()
        while true do
            SendNUIMessage({
                type = "update:talkstate",
                isTalking = MumbleIsPlayerTalking(PlayerId()) == 1 -- True or false?
            })
            Citizen.Wait(250);
        end;
    end);

end;

local isDrawing = false; -- Variable for RangeEvent
ViorityCore.RangeEvent = function() -- This example is for PMA-Voice!!!
    if GetResourceState('pma-voice') ~= 'started' then return print('^5[Viority-Development]^7 PMA-Voice is not installed or not running! Please start PMA-Voice before this Script to use the Voice Chat features...'); end;

    AddEventHandler('pma-voice:setTalkingMode', function(voiceRange)
        local curProx = 0.0 -- don't touch!

        -- Voice Range Notify
        if voiceRange == 1 then
            curProx = 2.5;
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist nun auf flüstern");
        elseif voiceRange == 2 then
            curProx = 8.0;
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist nun auf normal");
        elseif voiceRange == 3 then
            curProx = 20.0;
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist nun auf schreien");
        end

        -- Voice Range Circle Drawing
        local markerType = 1 -- Change to a Marker of your choice - https://docs.fivem.net/docs/game-references/markers/

        local markerColorR = 0 -- Change Marker color here (RED)
        local markerColorG = 255 -- Change Magithrker color here (GREEN)
        local markerColorB = 255 -- Change Marker color here (BLUE)
        local markerAlpha = 0.6 -- Opacity of the Marker (0.0-1.0)
                
        local afterBurn = 1000 -- How long should the Marker be drawn after the range has been changed?
                

        isDrawing = false;
        Citizen.Wait(0);
        isDrawing = true;
       
        function drawMarker()
            while isDrawing do
                local posPlayer = GetEntityCoords(PlayerPedId())
                DrawMarker(markerType, posPlayer.x, posPlayer.y, posPlayer.z - 1, 0, 0, 0, 0, 0,0, curProx * 2, curProx * 2, 0.8001, markerColorR, markerColorG, markerColorB, markerAlpha, 0, 0, 0)
                Citizen.Wait(1);
            end;
        end;

        Citizen.CreateThread(function() 
         drawMarker();
        end);
        Citizen.Wait(afterBurn);
    
        isDrawing = false;
    end)
end;

ViorityCore.RadioEvent = function() -- This example is for PMA-Voice!!!
    if GetResourceState('pma-voice') ~= 'started' then return print('^5[Viority-Development]^7 PMA-Voice is not installed or not running! Please start PMA-Voice before this Script to use the Voice Chat features...'); end;

    local LastRadio = nil;
    Citizen.CreateThread(function()
        while true do
            local CurrentRadio = LocalPlayer.state.radioChannel or 0;

            if CurrentRadio ~= LastRadio then
                LastRadio = CurrentRadio;
                if CurrentRadio == 0 then
                    SendNUIMessage({
                        type = "update:radiostate",
                        visibility = false,
                        CurrentRadio = CurrentRadio
                    })
                
                else
                    SendNUIMessage({
                        type = "update:radiostate",
                        visibility = true,
                        CurrentRadio = CurrentRadio
                    })
                end
            end

            Citizen.Wait(1500);
        end
    end)
end;
```
{% endcode %}
