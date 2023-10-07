---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Register Config

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
ViorityCore.InternalPrefix = 'viority_register:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
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

-- Register Database
ViorityCore.SQL_Data = {
    owned_vehicles_table = 'owned_vehicles',
}

-- Register Settings
ViorityCore.MainColor = "#0A98FF"
ViorityCore.SecondaryColor = "#5CC4FF"
ViorityCore.GlowColor = "#38a6f5"

ViorityCore.OpenSkinMenu = "esx_skin:openSaveableMenu"
ViorityCore.GeneratePromocode = "RANDOM" -- Types: RANDOM, PLAYERNAME or CUSTOM (YOUR SERVER NAME AS EXAMPLE: Enter VIORITY for VIORITY-XXXXX)
ViorityCore.RegisterCommand = "register" -- Change the Register Command
ViorityCore.PromocodeCommand = "promocode" -- Change the Request Own PromoCode Command
ViorityCore.AllowLowerUpperCase = true -- Allow that the player can enter Lower and Uppercase characters
ViorityCore.EnableBoxes = true -- Enable four small information boxes. You can change the descriptions in the locales file
ViorityCore.BlacklistedNames = {"Hitler", "Bitch"} -- Blacklist some names
ViorityCore.PriceFormat = {
    Symbol = '$',
    BehindNumbers = true
}

-- Birthday Settings
ViorityCore.UseBirthdayCalendar = true -- Use the Birthday Calendar (if false, the player can enter the birthday manually)
ViorityCore.MinBirthday = 1970 -- The minimum Birthday
ViorityCore.MaxBirthday = 2010 -- The maximum Birthday

-- Gender Settings
ViorityCore.GenderMale = "male"
ViorityCore.GenderFemale = "female"

-- Promocode Reward
ViorityCore.Reward = {
    Item = {
        usage = true,
        item = "bread",
        amount = 5, 
    },
    Cash = {
        usage = true,
        account = "money", -- [money, bank, black_money]
        amount = 250,
    },
    Vehicle = {
        usage = true,
        vehicle = "adder", -- Spawn Code
        label = "Adder", -- Vehicle Label
        amount = 1,
    }
}
```
{% endcode %}

## Viority Register Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {

    ['CharacterHeadTitle'] = "CHARACTER",
    ['CharacterSubTitle'] = "CREATION",

    ['CharacterDescription'] = "Small description about your server or the character creation system",

    ['CharacterFirstname'] = "First Name",
    ['CharacterSurname'] = "Last Name",

    ['CharacterMale'] = "MALE",
    ['CharacterFemale'] = "FEMALE",

    ['CharacterHeight'] = "Body Height",

    ['CharacterBirthday'] = "Birth Date",

    ['CharacterPromocode'] = "Promocode",
    ['CharacterPromocodePlaceholder'] = "Enter a Promocode",

    ['CharacterRegisterButton'] = "ACCEPT",
    ['CharacterRejectButton'] = "REJECT",

    ['CharacterInfoboxOne'] = "Information Box 1",
    ['CharacterInfoboxTwo'] = "Information Box 2",
    ['CharacterInfoboxThree'] = "Information Box 3",
    ['CharacterInfoboxFour'] = "Information Box 4",

    ['GiveRewardMoney'] = {
        ['money'] = "Cash",
        ['bank'] = "Bank deposit",
        ['black_money'] = "Black money",
        ['unknown'] = "Unknown currency",
    },
    ['GiveRewardPlaceholder'] = "Unknown Reward",
    ['ReceivedRewardMessage'] = "You have received a reward: %s",
    ['VehicleStored'] = "Your vehicle (%s) with the license plate %s is now in your garage!",
    ['RejectMessage'] = "You canceled the registration, see you later my friend!",
    ['PromocodeMessage'] = "The Promocode is %s",
}
```
{% endcode %}
