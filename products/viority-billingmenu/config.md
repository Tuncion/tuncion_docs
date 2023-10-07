---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Billingmenu Config

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
ViorityCore.InternalPrefix = 'viority_billingmenu:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
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

-- Settings for Billing Menu
ViorityCore.OpenDefaultKey = 'e'
ViorityCore.NUIColor = "#ffe600"
ViorityCore.getSharedAccount = "esx_addonaccount:getSharedAccount"
ViorityCore.EnableCommand = true
ViorityCore.OpenMenuViaKeybind = 'F7' -- You must enable the ViorityCore.EnableCommand Setting to use this feature!
ViorityCore.CommandForInvoices = "invoices"
ViorityCore.EnableBlips = true
ViorityCore.EnablePeds  = true
ViorityCore.PriceFormat = {
    Symbol = '$',
    BehindNumbers = true
}

ViorityCore.BillingStations = {

    {
        id = "police_department",
        pos = vector3(442.1563, -981.0339, 30.6896),
        radius = 3.0,
        ped = {
            model = "a_m_m_hasjew_01",
            pos = vector3(442.1563, -981.0339, 29.6896),
            heading = 178.1498
        },
        blip = {
            name = "Invoice Station",
            pos = vector3(442.1563, -981.0339, 30.6896),
            scale = 1.0,
            sprite = 58,
            color = 75
        }
    },

    -- {
    --     id = "medic_department",
    --     pos = vector3(296.1456, -590.7499, 41.2707),
    --     radius = 3.0,
    --     ped = {
    --         model = "a_m_m_hasjew_01",
    --         pos = vector3(296.1456, -590.7499, 42.2707),
    --         heading = 71.7533
    --     },
    --     blip = {
    --         name = "Invoice Station 2",
    --         pos = vector3(296.1456, -590.7499, 43.2707),
    --         scale = 1.0,
    --         sprite = 58,
    --         color = 75
    --     }
    -- },

}
```
{% endcode %}

## Viority Billingmenu Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {

    ['invoices'] = "INVOICES",
    ['invoices_description'] = "MANAGE YOUR INVOICES",
    ['invoices_pay_button'] = "PAY",

    ['payment_money_wallet'] = "MONEY WALLET",
    ['payment_bank_wallet'] = "BANK WALLET",

    ['no_selected_payment_method'] = "Please choose a payment method!",
    ['no_invoices'] = "You have no unpaid bills!",
    ['not_enough_money'] = "You have not enough money!",
    ['paid_invoice'] = "You have paid an invoice in the amount of %s$!",
    ['received_payment'] = "You have received a payment in the amount of %s$!",
    ['player_not_online'] = "The recipient is currently not online!",

    ['open_invoice_menu'] = "Open Invoices Menu",
    ['open_invoice_menu_via_Keybind'] = "Open Invoices Menu via Keybind",

    -- Interaction
    ["nui_interaction_press"] = "PRESS",
    ["nui_interaction_open"] = "TO INTERACT",

}
```
{% endcode %}
