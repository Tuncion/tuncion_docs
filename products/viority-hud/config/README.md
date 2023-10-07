---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority HUD Config

{% code title="ViorityCore.lua" overflow="wrap" lineNumbers="true" fullWidth="false" %}
```lua
--- @diagnostic disable: duplicate-set-field, undefined-field, inject-field
ESX = nil -- Do not touch this!
ViorityLocales = {} -- Do not touch this!
ViorityCore = {} -- Do not touch this!

-- Version Notification
ViorityCore.VersionNotification = {
    ['activate'] = false, -- Activate the Version Notification
    ['webhook'] = "https://canary.discord.com/api/webhooks/XXX/XXX", -- Change the Webhook for the Version Notification
}

-- Initialize ESX
ViorityCore.ESXVersion = 'legacy' -- Choose your ESX Version (1.1, 1.2, oldlegacy(until 1.9) or legacy(since 1.9))
ViorityCore.LoadESX = function(State) -- Load ESX Function | ONLY CHANGE THEM IF YOU KNOW EXACTLY WHAT YOU ARE DOING!!! 
    if State == 'server' then
        if ViorityCore.ESXVersion == 'legacy' then
            ESX = exports["es_extended"]:getSharedObject()
        else
            TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        end
    elseif State == 'client' then
        if ViorityCore.ESXVersion == 'legacy' then
            ESX = exports["es_extended"]:getSharedObject()
        else
            Citizen.CreateThread(function()
                while not ESX do
                    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
                    Citizen.Wait(150)
                end
                while not ESX.GetPlayerData().job do
                    ESX.PlayerData = ESX.GetPlayerData()
                    Citizen.Wait(150)
                end
            end)

            RegisterNetEvent("esx:playerLoaded")
            AddEventHandler("esx:playerLoaded", function(xPlayer)
                ESX.PlayerData = xPlayer
            end)

            RegisterNetEvent("esx:setJob")
            AddEventHandler("esx:setJob", function(job)
                ESX.PlayerData.job = job
            end)
        end
    end
end

-- Get Identifier (Rockstar Identifier, Steam Identifier or Your Multichar System)
ViorityCore.GetIdentifier = function(source)
    local source = source -- Save Variable
    local Identifier = nil -- Create new Variable

    ---- FOR STEAM IDENTIFIER ----
    -- for k,v in pairs(GetPlayerIdentifiers(source)) do
    --     if string.sub(v, 1, string.len("steam:")) == "steam:" then
    --         Identifier = v -- Returns steam:XXX
    --     end
    -- end
    ---- FOR STEAM IDENTIFIER ----


    ---- FOR ROCKSTAR IDENTIFIER ----
    local xPlayer = ESX.GetPlayerFromId(source)

    if xPlayer then
        Identifier = xPlayer.getIdentifier()
	else 
		for k,v in pairs(GetPlayerIdentifiers(source)) do
			if string.sub(v, 1, string.len("license:")) == "license:" then
				Identifier = v:gsub("license:", "") -- Returns XXX License
			end
		end
    end
    ---- FOR ROCKSTAR IDENTIFIER ----

	return Identifier
end

-- Activate the Debug modus to identify a bug in the code
ViorityCore.DebugMode = false

-- Basic Settings
ViorityCore.InternalPrefix = 'viority_hud:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
ViorityCore.EventWrongToken = function(source) -- This happens when a player tried to trigger an event with the wrong token! Most likely, it will be a cheater who tries to gain unfair advantages through serverside events.
    -- You can implement a ban system here!
    DropPlayer(source, "❤️ Do not try to cheat on our server!")
end
ViorityCore.Locales = 'de' -- Choose your Language (de or en) | You can add more in the locales folder!
ViorityCore.OS = 'windows' -- Choose your OS (windows or linux)
ViorityCore.ESXInteraction = false -- If you want to use the ESX.ShowHelpNotification instead of our Interaction. Attention this will increase the client-performance!

ViorityCore.Notify = function(message)
    print(message) -- Print the Message in the Console (for Debugging)
    ESX.ShowNotification(message, 'success', 5000) -- Use the ESX Notification System
    TriggerEvent("viority_hud:client:Notify", 1, 1, "XXX", message) -- Use the Viority HUD Notification System
end

-- HUD Keybinds
ViorityCore.TempomatKeybind = "Z" -- Keybind for the Tempomat
ViorityCore.HideHudKeybind = "F10" -- Keybind for the Hide Hud
ViorityCore.CinemaHudKeybind = "F11" -- Keybind for the Cinema Hud

-- HUD
ViorityCore.NuiColor = '#0071f3' -- Valid Hexcode with #
ViorityCore.AnnounceCommand = "announce" -- Announce Command
ViorityCore.OwnIDCommand = "id" -- ID Command
ViorityCore.SettingsCommand = "hud" -- HUD Command
ViorityCore.TransactionEvent = "esx:setAccountMoney" -- Transaction Event
ViorityCore.PermanentTransactions = true -- If you want to show the transactions permanently
ViorityCore.HUDParts = {
    eatanddrink = true, -- If you want to show the eat and drink bar
    wantedstars = true, -- If you want to show the wanted stars
    transaction = true, -- If you want to show the transactions
    bankmoney = true, -- If you want to show the bank money
    weapon = true, -- If you want to show the weapon hud
}
ViorityCore.TachoMaxSpeed = 300 -- Max Speed for the Tacho
ViorityCore.ViorityPlaytimeRewards = true -- If you want to use the Viority Playtime Rewards
ViorityCore.PetrolVolume = { -- This is just for the Vehicle Stats field! It will not change the settings in your Fuel System!
    [0] = 60, --Compact
    [1] = 80, --Sedan
    [2] = 120, --SUV
    [3] = 150, --Coupes
    [4] = 110, --Muscle
    [5] = 90, --Sports Classics
    [6] = 105, --Sports
    [7] = 125, --Super
    [8] = 60, --Motorcycles
    [9] = 80, --Off-road
    [10] = 200, --Industrial
    [11] = 190, --Utility
    [12] = 155, --Vans
    [13] = 0, --Cycles
    [14] = 220, --Boats
    [15] = 360, --Helicopters
    [16] = 440, --Planes
    [17] = 130, --Service
    [18] = 120, --Emergency
    [19] = 150, --Military
    [20] = 160, --Commercial
    [21] = 200 --Trains
}
ViorityCore.WeaponLabels = { -- This is just for the Weapon HUD!
    [GetHashKey("WEAPON_UNARMED")] = "Unbewaffnet",
    [GetHashKey("WEAPON_KNIFE")] = "Messer",
    [GetHashKey("WEAPON_NIGHTSTICK")] = "Schlagstock",
    [GetHashKey("WEAPON_HAMMER")] = "Hammer",
    [GetHashKey("WEAPON_BAT")] = "Schläger",
    [GetHashKey("WEAPON_GOLFCLUB")] = "Golfschläger",
    [GetHashKey("WEAPON_CROWBAR")] = "Brechstange",
    [GetHashKey("WEAPON_BOTTLE")] = "Flasche",
    [GetHashKey("WEAPON_DAGGER")] = "Dolch",
    [GetHashKey("WEAPON_HATCHET")] = "Axt",
    [GetHashKey("WEAPON_KNUCKLE")] = "Schlagring",
    [GetHashKey("WEAPON_MACHETE")] = "Machete",
    [GetHashKey("WEAPON_FLASHLIGHT")] = "Taschenlampe",
    [GetHashKey("WEAPON_SWITCHBLADE")] = "Springmesser",
    [GetHashKey("WEAPON_POOLCUE")] = "Billardqueue",
    [GetHashKey("WEAPON_WRENCH")] = "Schraubenschlüssel",
    [GetHashKey("WEAPON_PISTOL")] = "Pistole",
    [GetHashKey("WEAPON_COMBATPISTOL")] = "Kampfpistole",
    [GetHashKey("WEAPON_APPISTOL")] = "AP-Pistole",
    [GetHashKey("WEAPON_PISTOL50")] = "Pistole Kaliber .50",
    [GetHashKey("WEAPON_MICROSMG")] = "Micro-SMG",
    [GetHashKey("WEAPON_SMG")] = "SMG",
    [GetHashKey("WEAPON_ASSAULTSMG")] = "Assault SMG",
    [GetHashKey("WEAPON_ASSAULTRIFLE")] = "Sturmgewehr",
    [GetHashKey("WEAPON_CARBINERIFLE")] = "Karabiner",
    [GetHashKey("WEAPON_ADVANCEDRIFLE")] = "Kampfgewehr",
    [GetHashKey("WEAPON_MG")] = "MG",
    [GetHashKey("WEAPON_COMBATMG")] = "Kampf-MG",
    [GetHashKey("WEAPON_PUMPSHOTGUN")] = "Pump-Action-Schrotflinte",
    [GetHashKey("WEAPON_SAWNOFFSHOTGUN")] = "Abgesägte Schrotflinte",
    [GetHashKey("WEAPON_ASSAULTSHOTGUN")] = "Sturm-Schrotflinte",
    [GetHashKey("WEAPON_BULLPUPSHOTGUN")] = "Bullpup-Schrotflinte",
    [GetHashKey("WEAPON_STUNGUN")] = "Elektroschocker",
    [GetHashKey("WEAPON_SNIPERRIFLE")] = "Scharfschützengewehr",
    [GetHashKey("WEAPON_HEAVYSNIPER")] = "Schweres Scharfschützengewehr",
    [GetHashKey("WEAPON_GRENADELAUNCHER")] = "Granatwerfer",
    [GetHashKey("WEAPON_RPG")] = "RPG",
    [GetHashKey("WEAPON_MINIGUN")] = "Minigun",
    [GetHashKey("WEAPON_GRENADE")] = "Handgranate",
    [GetHashKey("WEAPON_STICKYBOMB")] = "Haftbombe",
    [GetHashKey("WEAPON_SMOKEGRENADE")] = "Rauchgranate",
    [GetHashKey("WEAPON_BZGAS")] = "BZ-Gas",
    [GetHashKey("WEAPON_MOLOTOV")] = "Molotowcocktail",
    [GetHashKey("WEAPON_FIREEXTINGUISHER")] = "Feuerlöscher",
    [GetHashKey("WEAPON_PETROLCAN")] = "Benzinkanister",
    [GetHashKey("WEAPON_FLARE")] = "Leuchtrakete",
    [GetHashKey("WEAPON_BALL")] = "Ball",
    [GetHashKey("WEAPON_SNSPISTOL")] = "SNS-Pistole",
    [GetHashKey("WEAPON_BOTTLE")] = "Flasche",
    [GetHashKey("WEAPON_GUSENBERG")] = "Gusenberg-Sweeper",
    [GetHashKey("WEAPON_SPECIALCARBINE")] = "Spezialkarabiner",
    [GetHashKey("WEAPON_HEAVYPISTOL")] = "Schwere Pistole",
    [GetHashKey("WEAPON_BULLPUPRIFLE")] = "Bullpup-Gewehr",
    [GetHashKey("WEAPON_HOMINGLAUNCHER")] = "Lenkraketenwerfer",
    [GetHashKey("WEAPON_PROXMINE")] = "Näherungsmine",
    [GetHashKey("WEAPON_SNOWBALL")] = "Schneeball",
    [GetHashKey("WEAPON_VINTAGEPISTOL")] = "Vintage-Pistole",
    [GetHashKey("WEAPON_FIREWORK")] = "Feuerwerkwerfer",
    [GetHashKey("WEAPON_MUSKET")] = "Vorderladergewehr",
    [GetHashKey("WEAPON_MARKSMANRIFLE")] = "Präzisionsgewehr",
    [GetHashKey("WEAPON_HEAVYSHOTGUN")] = "Schwere Schrotflinte",
    [GetHashKey("WEAPON_GUSENBERG_MK2")] = "Gusenberg-Sweeper MK II",
    [GetHashKey("WEAPON_COMBATMG_MK2")] = "Kampf-MG MK II",
    [GetHashKey("WEAPON_ASSAULTRIFLE_MK2")] = "Sturmgewehr MK II",
    [GetHashKey("WEAPON_CARBINERIFLE_MK2")] = "Karabiner MK II",
    [GetHashKey("WEAPON_PISTOL_MK2")] = "Pistole MK II",
    [GetHashKey("WEAPON_SMG_MK2")] = "SMG MK II",
    [GetHashKey("WEAPON_HEAVYSNIPER_MK2")] = "Schweres Scharfschützengewehr MK II",
    [GetHashKey("WEAPON_REVOLVER")] = "Revolver",
}

-- Notify Settings
ViorityCore.NotifyNormalVariants = {
    [0] = { -- General default value 
        Image = './assets/others/img/variant/broadcast.png', -- Default Path or Link
        Color = '#0071f3',
        ProgressAnim = false,
        Duration = 5000
    },

    [1] = { -- Info
        Image = './assets/others/img/variant/info.png', 
        Color = '#0071f3',
        ProgressAnim = false,
        Duration = 5000
    },

    [2] = { -- Success
        Image = './assets/others/img/variant/check.png', 
        Color = '#40c240',
        ProgressAnim = false,
        Duration = 5000
    },

    [3] = { -- Warning
        Image = './assets/others/img/variant/warning.png', 
        Color = '#e0b532',
        ProgressAnim = false,
        Duration = 5000
    },

    [4] = { -- Error
        Image = './assets/others/img/variant/cross.png', 
        Color = '#e32222',
        ProgressAnim = false,
        Duration = 5000
    },

    ----------------- CUSTOM -----------------

    [5] = { -- Moderation
        Image = './assets/others/img/variant/admin.png', 
        Color = '#F8AB04',
        ProgressAnim = false,
        Duration = 5000
    },

    [6] = { -- Hostage
        Image = './assets/others/img/variant/pistol.png', 
        Color = '#131313',
        ProgressAnim = false,
        Duration = 6500
    },

    [7] = { -- Stranger
        Image = './assets/others/img/variant/stranger.png', 
        Color = '#131313',
        ProgressAnim = false,
        Duration = 8500
    },

    [8] = { -- Eat
        Image = './assets/others/img/variant/eat.png', 
        Color = '#ff9600',
        ProgressAnim = false,
        Duration = 6500
    },

    [9] = { -- Drink
        Image = './assets/others/img/variant/drink.png', 
        Color = '#3fbae9',
        ProgressAnim = false,
        Duration = 6500
    },

    [10] = { -- Robbery
        Image = './assets/others/img/variant/robbery.png', 
        Color = '#131313',
        ProgressAnim = false,
        Duration = 7500
    },

    [11] = { -- Dive Suit
        Image = './assets/others/img/variant/divesuit.png', 
        Color = '#0084ff',
        ProgressAnim = false,
        Duration = 7500
    },

    [12] = { -- Mechanic
        Image = './assets/others/img/variant/wrench.png', 
        Color = '#f76400',
        ProgressAnim = false,
        Duration = 5000
    },

    [13] = { -- Ammo
        Image = './assets/others/img/variant/ammo.png', 
        Color = '#e0b532',
        ProgressAnim = false,
        Duration = 5000
    },

    [14] = { -- FFA (Paintball)
        Image = './assets/others/img/variant/crosshair.png', 
        Color = '#131313',
        ProgressAnim = false,
        Duration = 5000
    },

    [15] = { -- Rewards
        Image = './assets/others/img/variant/reward.png', 
        Color = '#DBA901',
        ProgressAnim = false,
        Duration = 12500
    },

    [16] = { -- Garage
        Image = './assets/others/img/variant/garage.png', 
        Color = '#0071f3',
        ProgressAnim = false,
        Duration = 6500
    },

    [17] = { -- Tankstelle
        Image = './assets/others/img/variant/gasoline.png', 
        Color = '#FA5858',
        ProgressAnim = false,
        Duration = 6500
    },

    [18] = { -- Autohaus
        Image = './assets/others/img/variant/cardealer.png', 
        Color = '#40c240',
        ProgressAnim = false,
        Duration = 6500
    },

    [19] = { -- Paycheck
        Image = './assets/others/img/variant/paycheck.png', 
        Color = '#ff3737',
        ProgressAnim = false,
        Duration = 10000
    },

    [20] = { -- Financial
        Image = './assets/others/img/variant/financial.png', 
        Color = '#25883d',
        ProgressAnim = false,
        Duration = 7500
    },

    [21] = { -- Carlock Auf
        Image = './assets/others/img/variant/lock-auf.png', 
        Color = '#F8AB04',
        ProgressAnim = false,
        Duration = 5000
    },

    [22] = { -- Carlock Zu
        Image = './assets/others/img/variant/lock-zu.png', 
        Color = '#F8AB04',
        ProgressAnim = false,
        Duration = 5000
    },

    [23] = { -- GiveCarKeys
        Image = './assets/others/img/variant/carkeys.png', 
        Color = '#F8AB04',
        ProgressAnim = false,
        Duration = 7500
    },

    [24] = { -- Motor
        Image = './assets/others/img/variant/engine.png', 
        Color = '#F8AB04',
        ProgressAnim = false,
        Duration = 5000
    },

    [25] = { -- License
        Image = './assets/others/img/variant/license.png', 
        Color = '#0071f3',
        ProgressAnim = false,
        Duration = 5000
    },
    
}

ViorityCore.NotifyAnnounceVariants = {
    [0] = { -- General default value 
        Image = './assets/others/img/variant/broadcast.png', -- Default Path or Link
        Color = '#0071f3',
        ProgressAnim = false,
        Duration = 15000
    },

    [1] = { -- Admin
        Image = './assets/others/img/variant/admin.png',
        Color = '#F8AB04',
        ProgressAnim = false,
        Duration = 5000
    },
}

-- Close HUD Events
ViorityCore.CloseHUD = function()

    -- Viority Menu
	RegisterNetEvent("viority_menu:client:OpenMenu")
	AddEventHandler("viority_menu:client:OpenMenu", function()
		SendNUIMessage({type = "hide:ui"})
	end)

	RegisterNetEvent("viority_menu:client:CloseMenu")
	AddEventHandler("viority_menu:client:CloseMenu", function()
		SendNUIMessage({type = "show:ui"})
	end)

    -- Viority Garage
	RegisterNetEvent("viority_garage:client:OpenGarage")
	AddEventHandler("viority_garage:client:OpenGarage", function()
		SendNUIMessage({type = "hide:ui"})
	end)

	RegisterNetEvent("viority_garage:client:CloseGarage")
	AddEventHandler("viority_garage:client:CloseGarage", function()
		SendNUIMessage({type = "show:ui"})
	end)

    -- Viority Cardealer
	RegisterNetEvent("viority_cardealer:client:OpenCardealer")
	AddEventHandler("viority_cardealer:client:OpenCardealer", function()
		SendNUIMessage({type = "hide:ui"})
	end)

	RegisterNetEvent("viority_cardealer:client:CloseCardealer")
	AddEventHandler("viority_cardealer:client:CloseCardealer", function()
		SendNUIMessage({type = "show:ui"})
	end)

    -- Viority Gasoline
	RegisterNetEvent("viority_gasoline:client:OpenGasoline")
	AddEventHandler("viority_gasoline:client:OpenGasoline", function()
		SendNUIMessage({type = "hide:ui"})
	end)

	RegisterNetEvent("viority_gasoline:client:CloseGasoline")
	AddEventHandler("viority_gasoline:client:CloseGasoline", function()
		SendNUIMessage({type = "show:ui"})
	end)

end

-- Disable Default HUD
ViorityCore.DisableDefaultHUD = function()
    while true do
        HideHudComponentThisFrame(2)
        Citizen.Wait(0)
    end
end

-- Eat and Drink
ViorityCore.EatandDrink = function() 
    local hunger, thirst = 0,0
    RegisterNetEvent("esx_status:onTick")
    AddEventHandler("esx_status:onTick", function(status)
        local hunger, thirst = 0, 0

        for key, value in pairs(status) do
            if (value.name == "hunger") then
                hunger = value.percent
            elseif (value.name == "thirst") then
                thirst = value.percent
            end
        end

        SendNUIMessage({
            type = "update:status",
            food = hunger,
            water = thirst
        })
    end)
end

-- Voice Plugin Functions (See Examples in the settings folder)
ViorityCore.TalkingEvent = function() -- This example is for SaltyChat!!!
    if GetResourceState('saltychat') ~= 'started' then return print('^5[Viority-Development]^7 SaltyChat is not installed or not running! Please start SaltyChat before this Script to use the Voice Chat features...') end

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
end

local isDrawing = false -- Variable for RangeEvent
ViorityCore.RangeEvent = function() -- This example is for SaltyChat!!!
    if GetResourceState('saltychat') ~= 'started' then return print('^5[Viority-Development]^7 SaltyChat is not installed or not running! Please start SaltyChat before this Script to use the Voice Chat features...') end

    AddEventHandler('SaltyChat_VoiceRangeChanged', function(voiceRange , index , availableVoiceRanges)

        -- Voice Range Notify
        if voiceRange == 3.5 then
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist auf 3 Meter")
        elseif voiceRange == 8.0 then
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist auf 8 Meter")
        elseif voiceRange == 15.0 then
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist auf 15 Meter")
        elseif voiceRange == 32.0 then
            TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "Notify", 1, 1, "Sprachreichweite", "Die Sprachreichweite ist auf 32 Meter")
        end

        -- Voice Range Circle Drawing
        local markerType = 1 -- Change to a Marker of your choice - https://docs.fivem.net/docs/game-references/markers/

        local markerColorR = 0 -- Change Marker color here (RED)
        local markerColorG = 255 -- Change Magithrker color here (GREEN)
        local markerColorB = 255 -- Change Marker color here (BLUE)
        local markerAlpha = 0.6 -- Opacity of the Marker (0.0-1.0)
                
        local afterBurn = 1000 -- How long should the Marker be drawn after the range has been changed?
                
        local curProx = 0.0 -- don't touch!

        isDrawing = false
        Citizen.Wait(0)
        isDrawing = true
        curProx = tonumber(voiceRange)
    
        function drawMarker()
            while isDrawing do
                local posPlayer = GetEntityCoords(PlayerPedId())
                DrawMarker(markerType, posPlayer.x, posPlayer.y, posPlayer.z - 1, 0, 0, 0, 0, 0,0, curProx * 2, curProx * 2, 0.8001, markerColorR, markerColorG, markerColorB, markerAlpha, 0, 0, 0)
                Citizen.Wait(1)
            end
        end

        Citizen.CreateThread(function() 
         drawMarker()
        end)
        Citizen.Wait(afterBurn)
    
        isDrawing = false
    end)
end

ViorityCore.RadioEvent = function() -- This example is for SaltyChat!!!
    if GetResourceState('saltychat') ~= 'started' then return print('^5[Viority-Development]^7 SaltyChat is not installed or not running! Please start SaltyChat before this Script to use the Voice Chat features...') end

    local LastRadio = nil
    Citizen.CreateThread(function()
        while true do
            local CurrentRadio = exports['saltychat']:GetRadioChannel(true)

            if CurrentRadio ~= LastRadio then
                LastRadio = CurrentRadio
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

            Citizen.Wait(1500)
        end
    end)
end
```
{% endcode %}

## Viority HUD  Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {
    ['CommandIDHeader'] = 'Server-ID',
    ['CommandIDDesc'] = 'Your Server-ID is %s',
}
```
{% endcode %}
