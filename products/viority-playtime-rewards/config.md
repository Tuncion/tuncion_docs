---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Playtimerewards Config

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
ViorityCore.InternalPrefix = 'viority_playtimerewards:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
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

ViorityCore.GenerateLicense = function()
    return exports['viority_cardealer']:GeneratePlate(8)
end

-- Playtimerewards Database
ViorityCore.SQL_Data = {
    owned_vehicles_table = 'owned_vehicles',
    owned_vehicles_stored = true, -- Insert with stored column? true or false?
}

-- Viority Playtimerewards Settings
ViorityCore.MainColor = '#ffe600' -- Change the Main Color of the Playtimereward (Valid HexCode)
ViorityCore.UseMenuV2Integration = false -- If you want to use the MenuV2 Integration
ViorityCore.ViorityMenuPrefix = 'viority_menu:' -- The Prefix for the MenuV2 Integration
ViorityCore.ToggleCommand = 'toggleplaytimereward' -- NEW!!! The Command to toggle the Playtimereward
ViorityCore.RewardDuration = 14400 -- In Seconds 14400 = 4 Hours! ATTENTION CHANGE THIS VALUE ALSO IN YOUR DATABASE!!!!
ViorityCore.AutosaveDuration = 15 * 60000 -- In ms (15 Minutes)
ViorityCore.PriceFormat = {
    Symbol = '$',
    BehindNumbers = true
}
ViorityCore.PlaytimeRewardsRandom = {1000, 5000} -- Random Bank Cash Reward between XXX and XXX!
ViorityCore.PlaytimeRewards = {

    [1] = {
        Item = {
            usage = false,
            item = "bread",
            amount = 5, 
        },
        Cash = {
            usage = true,
            account = "bank", -- [money, bank, black_money]
            amount = 250,
        },
        Vehicle = {
            usage = false,
            vehicle = "adder", -- Spawn Code
            label = "Adder", -- Vehicle Label
            amount = 1,
        }
    },

    [2] = {
        Item = {
            usage = false,
            item = "bread",
            amount = 5, 
        },
        Cash = {
            usage = true,
            account = "bank", -- [money, bank, black_money]
            amount = 750,
        },
        Vehicle = {
            usage = false,
            vehicle = "adder", -- Spawn Code
            label = "Adder", -- Vehicle Label
            amount = 1,
        }
    },

    -- Please add more ... :)
}

-- PlaytimeRewards Events
ViorityCore.ClosePlaytimeRewards = function()

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
```
{% endcode %}

## Viority Playtimerewards Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {

    ['NextRewardPlaceholder'] = "Random!",
    ['NextRewardMoney'] = "Cash",
    ['NextRewardBank'] = "Bank deposit",
    ['NextRewardBlackMoney'] = "black money",
    ['NextRewardUnknownMoney'] = "Unknown currency",

    ['GiveRewardPlaceholder'] = "Unknown",
    ['GiveRewardMoney'] = {
        ['money'] = "Cash",
        ['bank'] = "Bank deposit",
        ['black_money'] = "Black money",
        ['unknown'] = "Unknown currency",
    },

    ['ReceivedRewardMessage'] = "You have received a reward: %s",
    ['VehicleStored'] = "Your vehicle (%s) with the license plate %s is now in your garage!",
    ['addMoneyReason'] = "Playtime Reward",

    ['ViorityMenuHeader'] = "PLAYTIME REWARD",
    ['ViorityMenuDesc'] = "YOU WERE ACTIVE AGAIN AND RECEIVE {b1}%s{b2}",
}
```
{% endcode %}
