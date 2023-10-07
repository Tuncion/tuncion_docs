---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Fraction Request Config

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
ViorityCore.InternalPrefix = 'viority_fractionrequest:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
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

-- Fractionrequest Settings
ViorityCore.OpenDefaultKey = 'e'
ViorityCore.nui = {
    nui_color = "blue" -- [blue, green, red, purple, yellow]
}

-- Use Viority Menu
ViorityCore.UseViorityMenu = false -- Turn this on if you use our viority_menu otherwise invalid values will occur!

-- Discord Webhook
ViorityCore.Webhook = {
    link_orga = "https://discord.com/api/webhooks/XXX/XXX", -- Change the Webhook for the Orga
    link_gang = "https://discord.com/api/webhooks/XXX/XXX", -- Change the Webhook for the Gang
    link_mafia = "https://discord.com/api/webhooks/XXX/XXX", -- Change the Webhook for the Mafia

    color = "3054334", -- Change the Color for the Webhook
    author = {
        title = "Viority Development", -- Change the Author Title for the Webhook
        icon = "https://i.ibb.co/0Mnp3Ch/Logo-with-background.jpg" -- Change the Author Icon for the Webhook
    },

    withIdentifiers = true, -- Turn this on if you want to use the Identifiers in the Webhook
}

-- Job Requirements
ViorityCore.JobRequirements = {
    job_cooldown = 172800, -- Adjust the global Cooldown in Seconds. (In default it is 2 days)

    [1] = {
        available = true,
        playtime = 24,
        cash = 99999,
        currency = "$",
        stranger = {
            name = "Solomon",
            model = "cs_solomon",
            picture = "CHAR_SOLOMON", -- https://wiki.gtanet.work/index.php?title=Notification_Pictures
            pos = vector3(-1366.06, 56.67, 53.10),
            heading = 92.68,
            location = "am Golfplatz",
            talk = {
                [1] = "Mein Partner hat mir schon von dir erzählt, du willst also ein Unternehmen führen? Erzähl mir mal mehr darüber!",
                [2] = "Gefällt mir! Wie kann ich dich außerhalb der Insel kontaktieren?",
                [3] = "Ich lasse meine Kontakte spielen und melde mich bald wieder bei dir."

                -- Please add more :) !important the last entry is always the end message!
            }
        },
    },

    [2] = {
        available = true,
        playtime = 6,
        cash = 49999,
        currency = "$",
        stranger = {
            name = "Snoop Dogg",
            model = "g_m_y_famca_01",
            picture = "CHAR_MP_SNITCH",
            pos = vector3(-41.24, -1748.16, 28.57),
            heading = 315.21,
            location = "in Los Santos",
            talk = {
                [1] = "Bruder, der Kollege hat mir schon von dir erzählt, du willst also eine Gang führen? Erzähl mir mal mehr darüber!",
                [2] = "Stabil! Wo finde ich dich gelegentlich?",
                [3] = "Lass mir bisschen Zeit, ich kläre da was."
            }
        }
    },

    [3] = {
        available = true,
        playtime = 48,
        cash = 599999,
        currency = "$",
        stranger = {
            name = "Massimo",
            model = "s_m_y_doorman_01",
            picture = "CHAR_ORTEGA", 
            pos = vector3(281.52, 6789.23, 14.87),
            heading = 260.00,
            location = "in Paleto Bay",
            talk = {
                [1] = "Du willst also nach Sizilien, hmm? Erzähl mir mal mehr darüber!",
                [2] = "Du bist auf dem richtigen Weg! Wie kann ich dich außerhalb der Insel kontaktieren?",
                [3] = "Ich beobachte dich, vielleicht sind wir dann im Geschäft!"
            }
        }
    }
}

-- NPCs
ViorityCore.InteractionNPCs = {
    -- Ped Models: https://docs.fivem.net/docs/game-references/ped-models/
    -- Coordinates: X - Y - Z
    -- Heading: Specific Direction (0° - 360°)

    {
        model = "csb_mp_agent14", 
        pos = vector3(-18.13, -2439.73, 5.01),
        heading = 62.0,
        blip = {
            usage = true,
            name = "Agent 14", -- Blip Name
            sprite = 164, -- Blip Sprite
            color = 39, -- Blip Color
            scale = 0.8, -- Blip Scale
        }
    },
}
```
{% endcode %}

## Viority Fraction Request Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {

    ['orga_name'] = "Organisation",
    ['gang_name'] = "Gang",
    ['mafia_name'] = "Mafia",

    ['orga_create'] = "Constitute",
    ['gang_create'] = "Constitute",
    ['mafia_create'] = "Constitute",

    ['playtime_time'] = "Hours",
    ['stranger_name'] = "unknown",

    ['agent_disabled'] = "Sorry, I can't help you in this topic at the moment. Come by sometime else!",

    ['agent_requirement_playtime'] = "You are not mature enough yet! Get back to me some other time.",
    ['agent_requirement_money'] = "You're short, I have my fixed fees! Get back to me some other time.",

    ['agent_cooldown'] = "You were with me just the other day, right? I can't help you out again now!",

    ['agent_to_stranger_1'] = "I know an old businessman. Meet Him %s",
    ['agent_to_stranger_2'] = "I've been asking around. Meet my acquaintance %s",
    ['agent_to_stranger_3'] = "I've been playing my contacts. Meet my contact %s",

    ['quest_message'] = "Meet the stranger %s",

    ['stranger_endmessage_1'] = "I got your phone number. I hope you listened carefully!",
    ['stranger_endmessage_2'] = "Brother I got your number now. I hope for your sake you were listening!",
    ['stranger_endmessage_3'] = "I have your phone number now, don't ask me how. We don't play games, I hope you listened well!",

    ['stranger_interaction'] = "Press %s to Interact",

    ['webhook_request'] = "New %s request!"

}
```
{% endcode %}
