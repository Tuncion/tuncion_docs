---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Grand Menu Config

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
ViorityCore.InternalPrefix = 'viority_menu:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
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

-- Menu Database
ViorityCore.SQL_Data = {
    users = {
        table = 'users',
        identifier = 'identifier',
        firstname = 'firstname',
        lastname = 'lastname',
        dob =  'dateofbirth',
    },

    bills = {
        table = 'billing',
        identifier = 'identifier',
        amount = 'amount',
        label = 'label',
    },

    owned_vehicles = {
        table = 'owned_vehicles',
        identifier = 'owner',
    },
}

-- Viority Menu Settings
ViorityCore.OpenDefaultKey = 'ESCAPE' -- Change the Default Key to open the Menu
ViorityCore.ESXSetJob = 'esx:setJob'
ViorityCore.PriceFormat = {
    Decimal = true, -- if true the money will display for 100$ -> $100,00 | if false it will display for 100$ -> $100
}
ViorityCore.EventOnlyConsole = true -- Should only the Console (via TxAdmin) can add, delete or show events. When false admins who ingame can use this menu.
ViorityCore.LeaveMessage = "🚀 | You leaved our Server. Bye Bye!" -- The Leave Message

ViorityCore.OpenInventory = function()
    print("Open Inventory") -- Print the Message in the Console (for Debugging)
    TriggerEvent('inventory:openInventory') -- Open the Inventory | You can change this to your own Inventory System
end

-- Invite Rewards
ViorityCore.RewardsAccount = 'bank' -- Choose the Account where the Rewards should be added (money, bank or black_money)
ViorityCore.InviteRewards = {
    [1] = { -- Reward at 1 Uses
        cash = 20000, -- Cash amount (0 is nothing)
        item_amount = 1, -- Amount of the Item (0 is nothing)
        item = "bread" -- Name of the Item
    },

    [2] = {
        cash = 22500, 
        item_amount = 0,
        item = "" 
    },

    [3] = {
        cash = 25000, 
        item_amount = 0,
        item = "" 
    }
}


ViorityCore.CareerJobs = {
    police = { -- The Job name (not the label, the name column)
        logo = "https://i.ibb.co/YfgGDgT/output-onlinepngtools-2.png" -- IMPORTANT [210px x 210px]
    },

    ambulance = { 
        logo = "https://i.ibb.co/RQY90zt/output-onlinepngtools-3.png"
    },
}
```
{% endcode %}

## Viority Grand Menu Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {

    -- Invite System
    ['unknown_reward'] = "Unknown Reward!",
    ['success_invite_cash'] = "You Invited the Player %s<br><br> Your Reward is $%s",
    ['success_invite_item'] = "You Invited the Player %s<br><br> Your Reward is %sx %s",
    ['success_invite_cash_item'] = "You Invited the Player %s<br><br> Your Reward is $%s and %sx %s",
    ['success_invite_not_carry'] = "You Invited the Player %s<br><br> You can not carry your Reward! We will try it after the next login.",
    ['failed_reward'] = "You Invited the Player %s<br><br>You do not get a reward.",
    ['invite_highest_level'] = "You Invited the Player %s<br><br>You reached the highest reward level.",

    -- NUI
    ['nui_events'] = "Events",
    ['nui_map'] = "Map",

    ['nui_bills'] = "Bills",
    ['nui_bills_not_found'] = "Not Found",
    ['nui_bills_not_payed'] = "Not Payed",
    ['nui_bills_other'] = "And %s other bills...",

    ['nui_inventory'] = "Inventory",
    ['nui_inventory_underline'] = "Click to open your Inventory",

    ['nui_settings'] = "Settings",
    ['nui_settings_underline'] = "Open the Settings",

    ['nui_career'] = "My Career",
    ['nui_career_underline'] = "Your current Job",
    ['nui_career_underline_2'] = "You are currently",
    ['nui_career_employed'] = "Employed",
    ['nui_career_unemployed'] = "Unemployed",
    ['nui_career_since'] = "Since ",

    ['nui_calculator'] = "Calculator",
    ['nui_calculator_underline'] = "The Fastest Brain",
    ['nui_calculator_underline_2'] = "What is 100 x 10?",

    ['nui_invite'] = "Invite Friends",
    ['nui_invite_underline'] = "And receive Rewards",
    ['nui_invite_underline_2'] = "Get Your Invite Code Now!",
    ['nui_invite_your_code'] = "Your Code:",
    ['nui_invite_last_reedem'] = "Last Reedem:",
    ['nui_invite_next_reedem'] = "Your Next Reward:",

    ['nui_welcome_back'] = "Welcome Back,",
    ['nui_character_button'] = "Character Statistics",
    ['nui_character_underline'] = "All data relate to estimates!",

}
```
{% endcode %}
