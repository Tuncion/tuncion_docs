---
description: 🔧 See the Saltychat Example
---

# Saltychat Example

{% code title="Saltychat Example" overflow="wrap" lineNumbers="true" fullWidth="false" %}
```lua
-- IMPORTANT THIS FILE IS JUST A EXAMPLE!!!
-- To use it you need to replace this functions in the ViorityCore.lua
-- Please consider that you start the SaltyChat Resource before this Script to use the Voice Chat features...

-- Voice Plugin Functions (See Examples in the settings folder)
ViorityCore.TalkingEvent = function() -- This example is for SaltyChat!!!
    if GetResourceState('saltychat') ~= 'started' then return print('^5[Viority-Development]^7 SaltyChat is not installed or not running! Please start SaltyChat before this Script to use the Voice Chat features...'); end;

    AddEventHandler('SaltyChat_TalkStateChanged', function(isTalking)
        SendNUIMessage({
            type = "update:talkstate",
            isTalking = isTalking -- True or false?
        })
    end)

    AddEventHandler('SaltyChat_MicStateChanged', function(isMicrophoneMuted)
        SendNUIMessage({
            type = "update:micstate",
            isMicrophoneMuted = isMicrophoneMuted -- True or false?
        })
    end)
end;

local isDrawing = false; -- Variable for RangeEvent
ViorityCore.RangeEvent = function() -- This example is for SaltyChat!!!
    if GetResourceState('saltychat') ~= 'started' then return print('^5[Viority-Development]^7 SaltyChat is not installed or not running! Please start SaltyChat before this Script to use the Voice Chat features...'); end;

    AddEventHandler('SaltyChat_VoiceRangeChanged', function(voiceRange , index , availableVoiceRanges)

        -- Voice Range Notify
        if voiceRange == 3.5 then
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist auf 3 Meter");
        elseif voiceRange == 8.0 then
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist auf 8 Meter");
        elseif voiceRange == 15.0 then
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist auf 15 Meter");
        elseif voiceRange == 32.0 then
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist auf 32 Meter");
        end

        -- Voice Range Circle Drawing
        local markerType = 1 -- Change to a Marker of your choice - https://docs.fivem.net/docs/game-references/markers/

        local markerColorR = 0 -- Change Marker color here (RED)
        local markerColorG = 255 -- Change Magithrker color here (GREEN)
        local markerColorB = 255 -- Change Marker color here (BLUE)
        local markerAlpha = 0.6 -- Opacity of the Marker (0.0-1.0)
                
        local afterBurn = 1000 -- How long should the Marker be drawn after the range has been changed?
                
        local curProx = 0.0 -- don't touch!

        isDrawing = false;
        Citizen.Wait(0);
        isDrawing = true;
        curProx = tonumber(voiceRange)
    
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

ViorityCore.RadioEvent = function() -- This example is for SaltyChat!!!
    if GetResourceState('saltychat') ~= 'started' then return print('^5[Viority-Development]^7 SaltyChat is not installed or not running! Please start SaltyChat before this Script to use the Voice Chat features...'); end;

    local LastRadio = nil;
    Citizen.CreateThread(function()
        while true do
            local CurrentRadio = exports['saltychat']:GetRadioChannel(true);

            if CurrentRadio ~= LastRadio then
                LastRadio = CurrentRadio;
                if CurrentRadio == nil then
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
