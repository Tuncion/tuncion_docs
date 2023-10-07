---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Menu V2 Config

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

-- Menu V2 Database
ViorityCore.SQL_Data = {
    users = {
        table = 'users',
        identifier = 'identifier',
        firstname = 'firstname',
        lastname = 'lastname',
        dob =  'dateofbirth',
        height = 'height',
        sex = {
            column = 'sex',
            male = 'm',
            female = 'f',
        },

        -- For ESX 1.2 / Legacy
        accounts = {
            column = 'accounts',
            money = 'money',
            bank = 'bank',
            black_money = 'black_money',
        },

        -- For ESX 1.1
        money = 'money',
        bank = 'bank',
    },

    bills = {
        table = 'billing',
        identifier = 'identifier',
    },

    owned_vehicles = {
        table = 'owned_vehicles',
        identifier = 'owner',
    },
}


-- Viority Menu V2 Settings
ViorityCore.OpenDefaultKey = 'ESCAPE' -- Change the Default Key to open the Menu
ViorityCore.AnimationMode = true -- Activate/Disable Open and Close Animation
ViorityCore.UseSteamName = true -- Use the Steam Name instead of the RP Name
ViorityCore.ESXonPlayerDeath = 'esx:onPlayerDeath' -- Change the ESX Event for the Player Death
ViorityCore.LogoLink = 'https://i.ibb.co/1vmxjVn/output-onlinepngtools-9.png' -- Change the Logo Link | Size: [512x512]
ViorityCore.NuiColor = '#FFE600' -- Valid Hexcode with #
ViorityCore.LeaveMessage = '🚀 | You left our Server. Bye Bye!' -- The Logout Message
ViorityCore.AutoSaveInterval = 15 * 60 * 1000 -- The Auto Save Interval for Challenge/Achievement Data | Default: 15 Minutes
ViorityCore.UpdateInterval = 30 * 1000 -- The Update Interval for the Player Data (in ms) | Default: 30 Seconds
ViorityCore.PriceFormat = {
    Symbol = '$',
    BehindNumbers = true
}
ViorityCore.RichnessBlacklist = { -- Richness Blacklist
    ['IDENTIFIER'] = true, -- Add the Identifier to the Blacklist
}

-- XP System
ViorityCore.XPLevelThreshold = 100 -- Needed default XP for 1 Level
ViorityCore.XPIncreasement = 25 -- XP Increasement for each Level

-- Generate License Function
ViorityCore.GenerateLicense = function() -- The generate license function (default use the cardealer export)
    return exports['viority_cardealer']:GeneratePlate(8)
end

-- Generate Open Inventory Function
ViorityCore.OpenInventory = function() -- You can change this function to your own inventory system
    if IsPlayerDead(PlayerId()) then return end -- Check if the Player is dead
    TriggerEvent('inventory:openInventory') -- Open the Inventory
end

-- Daily Challenges
ViorityCore.DailyChallenges = {

     -------- Walk Challenges --------

     -- Distance
     ['walk_away1'] = {
        ['name'] = "WALK AWAY I",
        ['desc'] = "WALK LEAST 2000 METERS",
        ['xp'] = 25,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 2000, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['walk_away2'] = {
        ['name'] = "WALK AWAY II",
        ['desc'] = "WALK LEAST 4000 METERS",
        ['xp'] = 50,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 4000, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['walk_away3'] = {
        ['name'] = "WALK AWAY III",
        ['desc'] = "WALK LEAST 6000 METERS",
        ['xp'] = 75,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 6000, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['walk_away4'] = {
        ['name'] = "WALK AWAY IV",
        ['desc'] = "WALK LEAST 7500 METERS",
        ['xp'] = 100,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 7500, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Time
    ['walking_man1'] = {
        ['name'] = "WALKING MAN I",
        ['desc'] = "WALK LEAST 5 MINUTES",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 5, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['walking_man2'] = {
        ['name'] = "WALKING MAN II",
        ['desc'] = "WALK LEAST 10 MINUTES",
        ['xp'] = 30,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 10, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['walking_man3'] = {
        ['name'] = "WALKING MAN III",
        ['desc'] = "WALK LEAST 15 MINUTES",
        ['xp'] = 45,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 15, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['walking_man4'] = {
        ['name'] = "WALKING MAN IV",
        ['desc'] = "WALK LEAST 20 MINUTES",
        ['xp'] = 60,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 20, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['walking_man5'] = {
        ['name'] = "WALKING MAN V",
        ['desc'] = "WALK LEAST 25 MINUTES",
        ['xp'] = 75,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 25, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },        

    -------- Running Challenges --------
    -- Distance
    ['run_away1'] = {
        ['name'] = "RUN AWAY I",
        ['desc'] = "RUN LEAST 2000 METERS",
        ['xp'] = 25,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 2000, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['run_away2'] = {
        ['name'] = "RUN AWAY II",
        ['desc'] = "RUN LEAST 4000 METERS",
        ['xp'] = 50,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 4000, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['run_away3'] = {
        ['name'] = "RUN AWAY III",
        ['desc'] = "RUN LEAST 6000 METERS",
        ['xp'] = 75,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 6000, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['run_away4'] = {
        ['name'] = "RUN AWAY IV",
        ['desc'] = "RUN LEAST 7500 METERS",
        ['xp'] = 100,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 7500, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Time
    ['running_man1'] = {
        ['name'] = "RUNNING MAN I",
        ['desc'] = "RUN LEAST 5 MINUTES",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 5, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['running_man2'] = {
        ['name'] = "RUNNING MAN II",
        ['desc'] = "RUN LEAST 10 MINUTES",
        ['xp'] = 30,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 10, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['running_man3'] = {
        ['name'] = "RUNNING MAN III",
        ['desc'] = "RUN LEAST 15 MINUTES",
        ['xp'] = 45,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 15, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['running_man4'] = {
        ['name'] = "RUNNING MAN IV",
        ['desc'] = "RUN LEAST 20 MINUTES",
        ['xp'] = 60,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 20, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['running_man5'] = {
        ['name'] = "RUNNING MAN V",
        ['desc'] = "RUN LEAST 25 MINUTES",
        ['xp'] = 75,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 25, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -------- Drive Challenges --------
    -- Distance
    ['drive_away1'] = {
        ['name'] = "DRIVE AWAY I",
        ['desc'] = "DRIVE LEAST 10000 METERS",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 10000, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['drive_away2'] = {
        ['name'] = "DRIVE AWAY II",
        ['desc'] = "DRIVE LEAST 15000 METERS",
        ['xp'] = 25,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 15000, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['drive_away3'] = {
        ['name'] = "DRIVE AWAY III",
        ['desc'] = "DRIVE LEAST 20000 METERS",
        ['xp'] = 75,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 20000, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['drive_away4'] = {
        ['name'] = "DRIVE AWAY IV",
        ['desc'] = "DRIVE LEAST 25000 METERS",
        ['xp'] = 100,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 25000, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Time
    ['driving_man1'] = {
        ['name'] = "DRIVING MAN I",
        ['desc'] = "DRIVE LEAST 5 MINUTES",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 5, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['driving_man2'] = {
        ['name'] = "DRIVING MAN II",
        ['desc'] = "DRIVE LEAST 10 MINUTES",
        ['xp'] = 30,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 10, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['driving_man3'] = {
        ['name'] = "DRIVING MAN III",
        ['desc'] = "DRIVE LEAST 15 MINUTES",
        ['xp'] = 45,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 15, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['driving_man4'] = {
        ['name'] = "DRIVING MAN IV",
        ['desc'] = "DRIVE LEAST 20 MINUTES",
        ['xp'] = 60,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 20, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['driving_man5'] = {
        ['name'] = "DRIVING MAN V",
        ['desc'] = "DRIVE LEAST 25 MINUTES",
        ['xp'] = 75,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 25, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -------- Fly Challenges --------
    -- Distance
    ['fly_away1'] = {
        ['name'] = "FLY AWAY I",
        ['desc'] = "FLY LEAST 15000 METERS",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 15000, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['fly_away2'] = {
        ['name'] = "FLY AWAY II",
        ['desc'] = "FLY LEAST 25000 METERS",
        ['xp'] = 25,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 25000, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['fly_away3'] = {
        ['name'] = "FLY AWAY III",
        ['desc'] = "FLY LEAST 30000 METERS",
        ['xp'] = 75,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 30000, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['fly_away4'] = {
        ['name'] = "FLY AWAY IV",
        ['desc'] = "FLY LEAST 35000 METERS",
        ['xp'] = 100,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 35000, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Time
    ['flying_man1'] = {
        ['name'] = "FLYING MAN I",
        ['desc'] = "FLY LEAST 5 MINUTES",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 5, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['flying_man2'] = {
        ['name'] = "FLYING MAN II",
        ['desc'] = "FLY LEAST 10 MINUTES",
        ['xp'] = 30,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 10, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['flying_man3'] = {
        ['name'] = "FLYING MAN III",
        ['desc'] = "FLY LEAST 15 MINUTES",
        ['xp'] = 45,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 15, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['flying_man4'] = {
        ['name'] = "FLYING MAN IV",
        ['desc'] = "FLY LEAST 20 MINUTES",
        ['xp'] = 60,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 20, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['flying_man5'] = {
        ['name'] = "FLYING MAN V",
        ['desc'] = "FLY LEAST 25 MINUTES",
        ['xp'] = 75,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 25, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Multiple Drive
    ['multiple_drive1'] = {
        ['name'] = "MULTIPLE DRIVE I",
        ['desc'] = "DRIVE LEAST 2 OTHER VEHICLES",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 2, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['multiple_drive2'] = {
        ['name'] = "MULTIPLE DRIVE II",
        ['desc'] = "DRIVE LEAST 4 OTHER VEHICLES",
        ['xp'] = 25,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 4, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['multiple_drive3'] = {
        ['name'] = "MULTIPLE DRIVE III",
        ['desc'] = "DRIVE LEAST 6 OTHER VEHICLES",
        ['xp'] = 35,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 6, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['multiple_drive4'] = {
        ['name'] = "MULTIPLE DRIVE IV",
        ['desc'] = "DRIVE LEAST 8 OTHER VEHICLES",
        ['xp'] = 45,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 8, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['multiple_drive5'] = {
        ['name'] = "MULTIPLE DRIVE V",
        ['desc'] = "DRIVE LEAST 10 OTHER VEHICLES",
        ['xp'] = 55,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 10, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['multiple_drive6'] = {
        ['name'] = "MULTIPLE DRIVE VI",
        ['desc'] = "DRIVE LEAST 12 OTHER VEHICLES",
        ['xp'] = 65,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 12, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Activity
    ['activity1'] = {
        ['name'] = "ACTIVITY I",
        ['desc'] = "BE ACTIV FOR LEAST 1 HOUR",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 1, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['activity2'] = {
        ['name'] = "ACTIVITY II",
        ['desc'] = "BE ACTIV FOR LEAST 2 HOUR",
        ['xp'] = 30,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 2, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['activity3'] = {
        ['name'] = "ACTIVITY III",
        ['desc'] = "BE ACTIV FOR LEAST 3 HOUR",
        ['xp'] = 45,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 3, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['activity4'] = {
        ['name'] = "ACTIVITY IV",
        ['desc'] = "BE ACTIV FOR LEAST 4 HOUR",
        ['xp'] = 60,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 4, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['activity5'] = {
        ['name'] = "ACTIVITY V",
        ['desc'] = "BE ACTIV FOR LEAST 5 HOUR",
        ['xp'] = 75,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 5, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['activity6'] = {
        ['name'] = "ACTIVITY VI",
        ['desc'] = "BE ACTIV FOR LEAST 6 HOUR",
        ['xp'] = 90,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 6, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['activity7'] = {
        ['name'] = "ACTIVITY VII",
        ['desc'] = "BE ACTIV FOR LEAST 7 HOUR",
        ['xp'] = 105,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 7, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['activity8'] = {
        ['name'] = "ACTIVITY VIII",
        ['desc'] = "BE ACTIV FOR LEAST 8 HOUR",
        ['xp'] = 120,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 8, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['activity9'] = {
        ['name'] = "ACTIVITY IX",
        ['desc'] = "BE ACTIV FOR LEAST 9 HOUR",
        ['xp'] = 135,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 9, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['activity10'] = {
        ['name'] = "ACTIVITY X",
        ['desc'] = "BE ACTIV FOR LEAST 10 HOUR",
        ['xp'] = 150,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 10, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Bad City
    ['bad_city1'] = {
        ['name'] = "BAD CITY I",
        ['desc'] = "SHOOT LEAST 5 SHOOTS",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 5 -- In one shoots
        }
    },
    ['bad_city2'] = {
        ['name'] = "BAD CITY II",
        ['desc'] = "SHOOT LEAST 15 SHOOTS",
        ['xp'] = 20,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 15 -- In one shoots
        }
    },
    ['bad_city3'] = {
        ['name'] = "BAD CITY III",
        ['desc'] = "SHOOT LEAST 30 SHOOTS",
        ['xp'] = 25,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 30 -- In one shoots
        }
    },
    ['bad_city4'] = {
        ['name'] = "BAD CITY IV",
        ['desc'] = "SHOOT LEAST 45 SHOOTS",
        ['xp'] = 30,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 45 -- In one shoots
        }
    },
    ['bad_city5'] = {
        ['name'] = "BAD CITY V",
        ['desc'] = "SHOOT LEAST 60 SHOOTS",
        ['xp'] = 35,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 60 -- In one shoots
        }
    },
    -- Vehicle Class Challenges
    ['compact_driver'] = {
        ['name'] = "COMPACT DRIVER",
        ['desc'] = "DRIVE A COMPACT CAR",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 0, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['sedan_driver'] = {
        ['name'] = "SEDAN DRIVER",
        ['desc'] = "DRIVE A SEDAN CAR",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['suv_driver'] = {
        ['name'] = "SUV DRIVER",
        ['desc'] = "DRIVE A SUV",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 2, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['coupes_driver'] = {
        ['name'] = "COUPE DRIVER",
        ['desc'] = "DRIVE A COUPE",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 3, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['muscle_driver'] = {
        ['name'] = "MUSCLE DRIVER",
        ['desc'] = "DRIVE A MUSCLE CAR",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 4, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },

    ['sport_driver'] = {
        ['name'] = "SPORT DRIVER",
        ['desc'] = "DRIVE A SPORT CAR",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 6, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['motorcycle_driver'] = {
        ['name'] = "MOTORCYCLE DRIVER",
        ['desc'] = "DRIVE A MOTORCYCLE",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 8, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['offroad_driver'] = {
        ['name'] = "OFF-ROAD DRIVER",
        ['desc'] = "DRIVE A OFF-ROAD CAR",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 9, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['industrial_driver'] = {
        ['name'] = "INDUSTRIAL DRIVER",
        ['desc'] = "DRIVE A INDUSTRIAL CAR",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 10, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['van_driver'] = {
        ['name'] = "VAN DRIVER",
        ['desc'] = "DRIVE A VAN",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 12, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['boat_driver'] = {
        ['name'] = "BOAT DRIVER",
        ['desc'] = "DRIVE A BOAT",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 14, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['heli_pilot'] = {
        ['name'] = "HELICOPTER PILOT",
        ['desc'] = "FLY A HELICOPTER",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 15, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['plane_pilot'] = {
        ['name'] = "AIRPLANE PILOT",
        ['desc'] = "FLY A AIRPLANE",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 16, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },        
    ['truck_driver'] = {
        ['name'] = "TRUCK DRIVER",
        ['desc'] = "DRIVE A TRUCK",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = 20, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Vehicle Challenges
    ['t20_driver'] = {
        ['name'] = "T20 DRIVER",
        ['desc'] = "DRIVE A T20",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "t20", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['benson_driver'] = {
        ['name'] = "BENSON DRIVER",
        ['desc'] = "DRIVE A BENSON",
        ['xp'] = 15,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "benson", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- You can add more... :)
}

-- Weekly Challenges
ViorityCore.WeeklyChallenges = {

    -- Marathon Tasks
    ['marathon_runner1'] = {
        ['name'] = "MARATHON RUNNER I",
        ['desc'] = "RUN AT LEAST 50000 METERS",
        ['xp'] = 150,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 50000, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['marathon_runner2'] = {
        ['name'] = "MARATHON RUNNER II",
        ['desc'] = "RUN AT LEAST 50000 METERS",
        ['xp'] = 250,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 50000, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['marathon_runner3'] = {
        ['name'] = "MARATHON RUNNER III",
        ['desc'] = "RUN AT LEAST 65000 METERS",
        ['xp'] = 350,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 65000, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['marathon_runner4'] = {
        ['name'] = "MARATHON RUNNER IV",
        ['desc'] = "RUN AT LEAST 80000 METERS",
        ['xp'] = 450,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 80000, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['marathon_runner5'] = {
        ['name'] = "MARATHON RUNNER V",
        ['desc'] = "RUN AT LEAST 95000 METERS",
        ['xp'] = 550,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 95000, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['marathon_runner6'] = {
        ['name'] = "MARATHON RUNNER VI",
        ['desc'] = "RUN AT LEAST 105000 METERS",
        ['xp'] = 650,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 105000, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Criminal Gangster
    ['criminal_gangster1'] = {
        ['name'] = "CRIMINAL GANGSTER I",
        ['desc'] = "SHOOT LEAST 250 BULLETS",
        ['xp'] = 150,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 250 -- In one shoots
        }
    },
    ['criminal_gangster2'] = {
        ['name'] = "CRIMINAL GANGSTER II",
        ['desc'] = "SHOOT LEAST 500 BULLETS",
        ['xp'] = 175,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 500 -- In one shoots
        }
    },
    ['criminal_gangster3'] = {
        ['name'] = "CRIMINAL GANGSTER III",
        ['desc'] = "SHOOT LEAST 750 BULLETS",
        ['xp'] = 200,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 750 -- In one shoots
        }
    },
    ['criminal_gangster4'] = {
        ['name'] = "CRIMINAL GANGSTER IV",
        ['desc'] = "SHOOT LEAST 1000 BULLETS",
        ['xp'] = 225,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 1000 -- In one shoots
        }
    },
    ['criminal_gangster5'] = {
        ['name'] = "CRIMINAL GANGSTER V",
        ['desc'] = "SHOOT LEAST 1250 BULLETS",
        ['xp'] = 250,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 1250 -- In one shoots
        }
    },
    ['criminal_gangster6'] = {
        ['name'] = "CRIMINAL GANGSTER VI",
        ['desc'] = "SHOOT LEAST 1500 BULLETS",
        ['xp'] = 275,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 1500 -- In one shoots
        }
    },
    ['criminal_gangster7'] = {
        ['name'] = "CRIMINAL GANGSTER VII",
        ['desc'] = "SHOOT LEAST 1750 BULLETS",
        ['xp'] = 300,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 1750 -- In one shoots
        }
    },
    -- Big Activity
    ['big_activity1'] = {
        ['name'] = "BIG ACTIVITY I",
        ['desc'] = "BE ACTIV FOR LEAST 1 Day",
        ['xp'] = 250,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 24, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['big_activity2'] = {
        ['name'] = "BIG ACTIVITY II",
        ['desc'] = "BE ACTIV FOR LEAST 2 Days",
        ['xp'] = 450,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 48, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['big_activity3'] = {
        ['name'] = "BIG ACTIVITY III",
        ['desc'] = "BE ACTIV FOR LEAST 3 Days",
        ['xp'] = 750,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_weekly_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 72, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    -- Multiple Drive
    ['choosy_driver1'] = {
        ['name'] = "CHOOSY DRIVE I",
        ['desc'] = "DRIVE LEAST 10 OTHER VEHICLES",
        ['xp'] = 150,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 10, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['choosy_driver2'] = {
        ['name'] = "CHOOSY DRIVE II",
        ['desc'] = "DRIVE LEAST 15 OTHER VEHICLES",
        ['xp'] = 250,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 15, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['choosy_driver3'] = {
        ['name'] = "CHOOSY DRIVE III",
        ['desc'] = "DRIVE LEAST 20 OTHER VEHICLES",
        ['xp'] = 350,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 20, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['choosy_driver4'] = {
        ['name'] = "CHOOSY DRIVE IV",
        ['desc'] = "DRIVE LEAST 25 OTHER VEHICLES",
        ['xp'] = 450,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 25, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['choosy_driver5'] = {
        ['name'] = "CHOOSY DRIVE V",
        ['desc'] = "DRIVE LEAST 30 OTHER VEHICLES",
        ['xp'] = 550,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 30, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['choosy_driver6'] = {
        ['name'] = "CHOOSY DRIVE VI",
        ['desc'] = "DRIVE LEAST 35 OTHER VEHICLES",
        ['xp'] = 650,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 35, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['choosy_driver7'] = {
        ['name'] = "CHOOSY DRIVE VII",
        ['desc'] = "DRIVE LEAST 40 OTHER VEHICLES",
        ['xp'] = 750,
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the custom_daily_challenges Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 40, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },

    -- You can add more... :)
}

-- Achievements
ViorityCore.Achievements = {

    ['walking_man'] = {
        ['name'] = "THE WALKING MAN",
        ['desc'] = "IT IS IMPORTANT FOR YOUR HEALTH TO ALWAYS KEEP MOVING! SO WALK AT LEAST 500000 METERS",
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the achievement Trigger (Your system takes over the calculation over this challenge)
            walk = 500000, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['new_flexibility'] = {
        ['name'] = "THE NEW FLEXIBILITY",
        ['desc'] = "HAVING YOUR OWN CAR OPENS UP MANY NEW POSSIBILITIES. EXPLORE THE WORLD AND DRIVE 1500000 METERS.",
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the achievement Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 1500000, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['ready_to_takeoff'] = {
        ['name'] = "READY TO TAKEOFF",
        ['desc'] = "THE FASTEST WAY TO TRAVEL IS OVER THE CLOUDS. FLY 2500000 METERS.",
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the achievement Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 2500000, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['time_to_paradise'] = {
        ['name'] = "TIME TO PARADISE",
        ['desc'] = "FORGET ABOUT TIME IN THE VEHICLE FOR A TOTAL OF 60 HOURS AND FIND YOUR WAY TO THE PARADISE!",
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the achievement Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 3600, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['old_man'] = {
        ['name'] = "THE OLD MAN",
        ['desc'] = "EXPERIENCES TAKE TIME AND THAT IS LIFE TIME IN WHICH AGE INCREASES. HAVE AN EXPERIENCE OF 60 HOURS OF PLAY!",
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the achievement Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 60, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['choosy_person'] = {
        ['name'] = "CHOOSY PERSON",
        ['desc'] = "THE RIGHT CAR HAS TO FIND YOU. TEST A TOTAL OF 1500 VEHICLES!",
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the achievement Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 1500, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    },
    ['firearm_license_proof'] = {
        ['name'] = "FIREARM LICENSE",
        ['desc'] = "HAVING A GUN LICENSE IS ONE THING BUT USING ONE PROPERLY TAKES A LOT OF PRACTICE. FIRE A TOTAL OF 25000 BULLETS!",
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the achievement Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 0, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 25000 -- In one shoots
        }
    },
    ['pilot_ahead'] = {
        ['name'] = "PILOT AHEAD",
        ['desc'] = "FLYING IS A COMPLICATED THING ONLY A FEW CAN DO IT. FLY A TOTAL OF 30 HOURS!",
        ['challenge'] = { -- You can adjust multiple tasks
            isCustom = false, -- Use the achievement Trigger (Your system takes over the calculation over this challenge)
            walk = 0, -- In Meters
            run = 0, -- In Meters
            drive = 0, -- In Meters
            fly = 0, -- In Meters
            walk_time = 0, -- In Minutes
            run_time = 0, -- In Minutes
            drive_time = 0, -- In Minutes
            fly_time = 1800, -- In Minutes
            active = 0, -- In Hours
            other_vehicles = 0, -- Drive other Vehicles
            drive_car = "", -- Drive specific Vehicles (Spawn Command)
            drive_class = -1, -- Drive specific Vehicle class (https://docs.fivem.net/natives/?_0x29439776AAA00A62)
            shoots = 0 -- In one shoots
        }
    }

    -- You can add more... :)
}

-- Affiliate System
ViorityCore.AffiliateSystem = {

    [1] = { -- Level
        name = "$1.000.000 CASH", -- Name of Reward
        icon = "https://i.ibb.co/BcrpDXK/output-onlinepngtools-12.png", --  Icon Size: [80x80] ("/" is the default icon)
        reward = {
            cash_account = "money", -- [bank, money, black_money]
            cash = 1000000, -- Cash
            vehicle = "", -- The Vehicle spawn code
            item_amount = 0, -- The Item Amount
            item = "", -- The valid Item ID
        }
    },

    [2] = {  -- Level
        name = "T20 CAR", -- Name of Reward
        icon = "/", --  Icon Size: [80x80] ("/" is the default icon)
        reward = {
            cash_account = "money", -- [bank, money, black_money]
            cash = 0, -- Cash
            vehicle = "t20", -- The Vehicle spawn code
            item_amount = 0, -- The Item Amount
            item = "", -- The valid Item ID
        }
    },

    [3] = {  -- Level
        name = "$2.500.000 CASH", -- Name of Reward
        icon = "https://i.ibb.co/BcrpDXK/output-onlinepngtools-12.png", --  Icon Size: [80x80] ("/" is the default icon)
        reward = {
            cash_account = "money", -- [bank, money, black_money]
            cash = 2500000, -- Cash
            vehicle = "", -- The Vehicle spawn code
            item_amount = 0, -- The Item Amount
            item = "", -- The valid Item ID
        }
    },

    [4] = {  -- Level
        name = "10x BREADS", -- Name of Reward
        icon = "https://cdn-icons-png.flaticon.com/512/3348/3348078.png", --  Icon Size: [80x80] ("/" is the default icon)
        reward = {
            cash_account = "money", -- [bank, money, black_money]
            cash = 0, -- Cash
            vehicle = "", -- The Vehicle spawn code
            item_amount = 10, -- The Item Amount
            item = "bread", -- The valid Item ID
        }
    },

    [5] = {  -- Level
        name = "$5.000.000 CASH", -- Name of Reward
        icon = "https://i.ibb.co/BcrpDXK/output-onlinepngtools-12.png", --  Icon Size: [80x80] ("/" is the default icon)
        reward = {
            cash_account = "money", -- [bank, money, black_money]
            cash = 5000000, -- Cash
            vehicle = "", -- The Vehicle spawn code
            item_amount = 0, -- The Item Amount
            item = "", -- The valid Item ID
        }
    },

    [6] = {  -- Level
        name = "$6.500.000 CASH", -- Name of Reward
        icon = "https://i.ibb.co/BcrpDXK/output-onlinepngtools-12.png", --  Icon Size: [80x80] ("/" is the default icon)
        reward = {
            cash_account = "money", -- [bank, money, black_money]
            cash = 6500000, -- Cash
            vehicle = "", -- The Vehicle spawn code
            item_amount = 0, -- The Item Amount
            item = "", -- The valid Item ID
        }
    },

    [7] = {  -- Level
        name = "$8.500.000 CASH", -- Name of Reward
        icon = "https://i.ibb.co/BcrpDXK/output-onlinepngtools-12.png", --  Icon Size: [80x80] ("/" is the default icon)
        reward = {
            cash_account = "money", -- [bank, money, black_money]
            cash = 8500000, -- Cash
            vehicle = "", -- The Vehicle spawn code
            item_amount = 0, -- The Item Amount
            item = "", -- The valid Item ID
        }
    },

    [8] = {  -- Level
        name = "10x WATER", -- Name of Reward
        icon = "https://cdn-icons-png.flaticon.com/512/2447/2447764.png", --  Icon Size: [80x80] ("/" is the default icon)
        reward = {
            cash_account = "money", -- [bank, money, black_money]
            cash = 0, -- Cash
            vehicle = "", -- The Vehicle spawn code
            item_amount = 10, -- The Item Amount
            item = "water", -- The valid Item ID
        }
    },

    -- You can add more... :)

}
```
{% endcode %}

## Viority Menu V2 Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {

    -- First Entry (You can use the {b1} {b2} Highlight Formating and all HTML p tag Syntax)
    ['NotifyBoard_first_header'] = "WELCOME TO OUR SERVER",
    ['NotifyBoard_first_desc'] = "PLEASE MAKE SURE YOU HAVE READ THE RULES!",
    
    ['NotifyBoard_second_header'] = "MENU TUTORIAL",
    ['NotifyBoard_second_desc'] = "THIS IS THE {b1}NOTIFYBOARD{b2}. HERE ARE MANY MORE FEATURES, CHECK IT OUT!",

    ['AffiliateBoard_first_header'] = "AFFILIATE TUTORIAL",
    ['AffiliateBoard_first_desc'] = "THIS IS THE {b1}AFFILIATEBOARD{b2}. INVITE SOMEONE AND IT WILL APPEAR HERE!",

    ['AffiliateBoard_second_header'] = "NOBODY",
    ['AffiliateBoard_second_desc'] = "IT SEEMS YOU HAVENT INVITED A PLAYERS YET. {b1}START YOUR NETWORK{b2} TONIGHT!",

    -- Enter Code (You can use the {b1} {b2} Highlight Formating and all HTML p tag Syntax)
    ['EnterCode_Confirmation'] = "YOU ENTERED THE AFFILIATE CODE: {b1}%s{b2}<br> THE OWNER RECEIVED HIS NEXT REWARD.",
    ['EnterCode_Owner_Confirmation'] = "THE PLAYER {b1}%s{b2} REDEEMED YOUR CODE. <br> YOU GOT A NEW REWARD, CHECK IT OUT!",
    ['EnterCode_OwnerBoard_Confirmation'] = "THE PLAYER {b1}%s{b2} REDEEMED YOUR CODE. <br> YOU GOT A NEW REWARD, CHECK IT OUT!",

    -- Daily, Weekly and Achievements Tracking
    ['Daily_Header'] = "DAILY CHALLENGES",
    ['Daily_Finish'] = "YOU FINISH THE DAILY CHALLENGE {b1}%s{b2} AND GOT {b1} + %s XP {b2}",
    
    ['Weekly_Header'] = "WEEKLY CHALLENGES",
    ['Weekly_Finish'] = "YOU FINISH THE WEEKLY CHALLENGE {b1}%s{b2} AND GOT {b1} + %s XP {b2}",

    ['Achivement_Header'] = "ACHIVEMENTS", 
    ['Achivement_Finish'] = "YOU FINISH THE ACHIEVEMENT {b1}%s{b2}", 
    ['Achivement_Added'] = "WE ADDED THE ACHIEVEMENT {b1}%s{b2}.<br>HAVE FUN LOOKING UP!",
    ['Achivement_Removed'] = "WE DELETED THE ACHIEVEMENT {b1}%s{b2}.<br>THANK YOU FOR YOUR UNDERSTANDING!",
    ['Achivement_Changed'] = "WE CHANGED THE ACHIEVEMENT {b1}%s{b2}.",

    -- ClaimRewards
    ['Rewards_Claim'] = "YOU CLAIMED THE REWARD {b1}%s{b2}",

    -- EnterCode 
    ['EnterCode_Invalid'] = "THE CODE WAS INVALID!",
    ['EnterCode_OwnCode'] = "DO NOT ENTER YOUR OWN CODE!",

    -- AffiliateRewards
    ['Rewards_received'] = "RECEIVED",
    ['Rewards_claim'] = "CLAIM",
    ['Rewards_nextreward'] = "NEXT REWARD",
    ['Rewards_ComingSoon'] = "COMING SOON",

    -- NUI
    ['Nui_Loading'] = "We´re setting up your beautiful stats",  
    ['Nui_Logout'] = "LOGOUT",

    -- NUI Tabs
    ['Nui_Main_Page'] = "MAIN PAGE",
    ['Nui_Map'] = "MAP",
    ['Nui_Inventory'] = "INVENTORY",
    ['Nui_Affiliate'] = "AFFILIATE SYSTEM",
    ['Nui_Settings'] = "SETTINGS",

    ['Nui_Since'] = "SINCE",
    ['Nui_Richness'] = "RICHNESS",
    ['Nui_Richness_Underline'] = "YOU ARE IN PLACE %s OF RICHNESS",

    ['Nui_Events'] = "EVENTS",
    ['Nui_Achievements'] = "YOUR ACHIEVEMENTS",

    ['Nui_Name'] = "YOUR NAME/SURNAME",
    ['Nui_Date'] = "YOUR DATE OF BIRTH",
    ['Nui_Height'] = "YOUR HEIGHT",
    ['Nui_Sex'] = "YOUR SEX",
    ['Nui_Sex_Male'] = "MALE",
    ['Nui_Sex_Female'] = "FEMALE",
    ['Nui_ID'] = "YOUR CURRENT ID",
    ['Nui_Money'] = "YOUR MONEY WALLET",
    ['Nui_Bank'] = "YOUR BANK WALLET",
    ['Nui_Bills'] = "YOUR OPENED BILLS",
    ['Nui_Signature'] = "SIGNATURE",

    ['Nui_Daily_Challenges'] = "DAILY CHALLENGES",
    ['Nui_Weekly_Challenges'] = "WEEKLY CHALLENGES",

    ['Nui_YourCode'] = "YOUR CODE",
    ['Nui_EnterCode'] = "ENTER A CODE...",
    ['Nui_Copy'] = "COPY",

    ['Nui_Network_Header'] = "CREATE YOUR NETWORK",
    ['Nui_Network_Desc'] = "Invite your friends and acquaintances to build your network. per registered person you move up in the level and benefit from unique rewards",

    ['Nui_Profit_Header'] = "PROFIT FROM OTHERS",
    ['Nui_Profit_Desc'] = "Your network exponentially grows by benefiting passively from others and letting your empire work for you",
   
    -- Open Menu
    ['Open_Menu_Dead'] = "You can't open your menu while you are unconscious!",

    -- Keybind
    ['open_menu_keybind'] = 'Open Menu',

}
```
{% endcode %}
