---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Garage Config

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
ViorityCore.InternalPrefix = 'viority_garage:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
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

-- Garage Database
ViorityCore.useBooleanMode = false -- If you have problems with the UPDATE or SELECT Queries turn it false
ViorityCore.SQL_Data = {
    vehicle_table = 'owned_vehicles', -- The Table where the Vehicles are stored

    job_column = {
        usage = false, -- If you do not have this column make it false
        column = 'civ', -- The Column where is declared that the car is not an job exclusiv car
    },

    -- The Type Column
    type_car = 'car',
    type_boat = 'boat',
    type_aircraft = 'aircraft',

}

-- Garage Settings
ViorityCore.MainColor = '#ffe600' -- Change the Main Color of the Garage (Valid HexCode)
ViorityCore.OpenDefaultKey = 'e' -- Change the Default Key to open the Garage
ViorityCore.ParkInDefaultKey = 'e' -- Change the Default Key to ParkIn a Vehicle
ViorityCore.ParkVehicles = false -- Automaticly store all cars every restart
ViorityCore.GarageRestrict = false  -- You can Park-Out your vehicle only in the garage where it was parked. Quick Example: When you Park-In your Vehicle in the Garage "Pillbox Hill" then you cant Park-Out the Vehicle in the Garage "City Hall".
ViorityCore.StoreVehicleFuel = false -- If you want to store the fuel of the vehicle | Attention make it to false if you use the viority_gasoline
ViorityCore.StoreVehicleDamage = false -- If you want to store the damage of the vehicle
ViorityCore.VehicleSwitchCooldown = 150 -- The Cooldown in ms while the vehicle switch
ViorityCore.PriceFormat = {
    Symbol = '$',
    BehindNumbers = true,
}
ViorityCore.Impound = {
    usage = true, -- If you do not have this impound make it false
    restrict = true, -- Track the ParkOut vehicles so that the player cannot unpark the vehicle when it is unparked
    cooldown = 10 * 60000, -- Adjust a Impound Cooldown in ms to prevent "duping"
}
ViorityCore.ParkInMarker =  { -- Attention this will increase the client-performance
    usage = true, -- If you do not have this marker make it false
    distance = 25.0, -- The Distance to the Marker
    type = {
        car = 36,
        boat = 35,
        aircraft = 33,
    },
    markerFunction = function(_type, _pos)
        DrawMarker(_type, _pos, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.5, 1.5, 1.5, 255, 255, 255, 65, false, true, 2, nil, nil, false)
    end,
}
ViorityCore.Fees = {
    ParkIn = { -- The Fee for Park-In a Vehicle
        usage = true,
        account = 'money',
        price = 250,
    }, 
    Impound = { -- The Fee for Impound a Vehicle
        account = 'bank',
        priceCar = 1550,
        priceBoat = 2550,
        priceAircraft = 5550,
    },
}

-- Discord Webhook
ViorityCore.DiscordWebhook = {
    WebhookParkOut = 'https://canary.discord.com/api/webhooks/XXX/XXX', -- Change the Webhook for the ParkOut
    WebhookParkIn = 'https://canary.discord.com/api/webhooks/XXX/XXX', -- Change the Webhook for the ParkIn
    WebhookImpound = 'https://canary.discord.com/api/webhooks/XXX/XXX', -- Change the Webhook for the Impound

    WebhookColor = '3054334', -- Change the Color of the Webhook
    WebhookAuthor = 'Viority Garage', -- Change the Author of the Webhook
    WebhookIconURL = 'https://i.ibb.co/0Mnp3Ch/Logo-with-background.jpg', -- Change the IconURL of the Webhook

    WebhookWithIdentifiers = true -- If you want to send the Identifiers data with the Webhook
}

-- Garage
ViorityCore.Garage = {
    -- Ped Models: https://docs.fivem.net/docs/game-references/ped-models/
    -- Coordinates: X - Y - Z
    -- Heading: Specific Direction (0° - 360°)

    -- Car Garages --

    -- Pillbox Hill
    {
        id = "pillbox_hill", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "Pillbox Hill",
        pos = vector3(100.54, -1073.39, 29.37), -- Blip Location
        cam = {
            pos = vector3(107.88, -1069.25, 29.30),
            rotate = -62.5
        },
        ped = {
            model = "s_m_y_airworker", 
            pos = vector3(101.23, -1073.62, 28.37),
            heading = 65.86
        },
        blip = { -- Customize the Blip for the Garage
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(107.98, -1079.69, 29.19),
            radius = 5.0
        },
        marker = { -- Manipulate the Park-In Marker! Quick Example: You set the z coordinate to 1.0, now the marker will be 1.0 GTA Unit higher <> -1.0 the marker will be 1.0 GTA Unit lower
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(112.0, -1067.15, 29.19),
            heading = 116.78
        }
    },
        
    -- Paleto Bay
    {
        id = "paleto_bay", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "Paleto Bay",
        pos = vector3(112.29, 6619.82, 30.82),
        cam = {
            pos = vector3(125.60, 6609.65, 31.87),
            rotate = -113.5
        },
        ped = {
            model = "s_m_y_airworker",
            pos = vector3(112.29, 6619.82, 30.82),
            heading = 220.12
        },
        blip = {
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(110.22, 6626.92, 30.82),
            radius = 5.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(130.14, 6607.57, 30.85),
            heading = 65.18
        }
    },

    -- Bolingbroke Prison
    {
        id = "bolingbroke_prison", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "Bolingbroke Prison",
        pos = vector3(1869.67, 2702.42, 45.83),
        cam = {
            pos = vector3(1859.80, 2676.40, 45.67),
            rotate = -155.5
        },
        ped = {
            model = "s_m_y_airworker", 
            pos = vector3(1869.67, 2702.42, 44.83),
            heading = 112.68
        },
        blip = {
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(1864.23, 2706.04, 45.92),
            radius = 5.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(1861.65, 2671.95, 45.67),
            heading = 22.27
        }
    },

    -- City Hall
    {
        id = "city_hall", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "City Hall",
        pos = vector3(275.25, -345.54, 44.17),
        cam = {
            pos = vector3(285.67, -344.19, 44.92),
            rotate = -48.0
        },
        ped = {
            model = "s_m_y_airworker", 
            pos = vector3(275.25, -345.54, 44.17),
            heading = 336.95
        },
        blip = {
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(278.32, -336.58, 44.92),
            radius = 5.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(289.41, -340.9, 43.92),
            heading = 131.75
        }
    },

    -- Pacific Bluffs
    {
        id = "pacific_bluffs", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "Pacific Bluffs",
        pos = vector3(-1679.19, 67.10, 63.14),
        cam = {
            pos = vector3(-1670.25, 69.60, 63.65),
            rotate = -85.5
        },
        ped = {
            model = "s_m_y_airworker", 
            pos = vector3(-1679.19, 67.10, 63.14),
            heading = 220.83
        },
        blip = {
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(-1666.56, 78.82, 63.59),
            radius = 5.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(-1665.29, 70.01, 63.38),
            heading = 95.30
        }
    },

    -- Sandy Shores
    {
        id = "sandy_shores", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "Sandy Shores",
        pos = vector3(1737.96, 3709.01, 33.14),
        cam = {
            pos = vector3(1731.44, 3734.60, 33.81),
            rotate = -177.0
        },
        ped = {
            model = "s_m_y_airworker", 
            pos = vector3(1737.96, 3709.01, 33.14),
            heading = 17.46
        },
        blip = {
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(1727.96, 3709.39, 34.22),
            radius = 5.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(1731.65, 3729.70, 33.92),
            heading = 2.1
        }
    },

    -- Industrial Area
    {
        id = "industrial_area", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "Industrial Area",
        pos = vector3(721.88, -2016.34, 28.43),
        cam = {
            pos = vector3(731.75, -2021.45, 29.28),
            rotate = -225.0
        },
        ped = {
            model = "s_m_y_airworker", 
            pos = vector3(721.88, -2016.34, 28.43),
            heading = 262.09
        },
        blip = {
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(729.12, -2032.90, 29.28),
            radius = 5.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(728.50, -2024.66, 29.29),
            heading = 314.10
        }
    },

    -- International Airport
    {
        id = "international_airport", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "International Airport",
        pos = vector3(-993.77, -2700.22, 13.04),
        cam = {
            pos = vector3(-983.00, -2699.65, 13.84),
            rotate = -119.0
        },
        ped = {
            model = "s_m_y_airworker", 
            pos = vector3(-993.77, -2700.22, 13.04),
            heading = 355.76
        },
        blip = {
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(-970.46, -2694.79, 13.83),
            radius = 5.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(-978.39, -2702.25, 13.87),
            heading = 60.24
        }
    },

    -- Route 68
    {
        id = "route_68", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "Route 68",
        pos = vector3(-1134.51, 2682.92, 17.51),
        cam = {
            pos = vector3(-1141.50, 2657.99, 17.79),
            rotate = 22.5
        },
        ped = {
            model = "s_m_y_airworker", 
            pos = vector3(-1134.51, 2682.92, 17.51),
            heading = 136.10
        },
        blip = {
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(-1156.87, 2675.73, 18.09),
            radius = 5.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(-1143.51, 2662.81, 18.05),
            heading = 202.76
        }
    },

    -- Vespucci Beach
    {
        id = "vespucci_beach", -- Unique ID
        type = "car", -- [car, boat, plane]
        name = "Vespucci Beach",
        pos = vector3(-1184.89, -1510.03, 3.65),
        cam = {
            pos = vector3(-1189.75, -1496.15, 4.38),
            rotate = 36.5
        },
        ped = {
            model = "s_m_y_airworker", 
            pos = vector3(-1184.89, -1510.03, 3.65),
            heading = 306.26
        },
        blip = {
            name = "Car Garage",
            sprite = 473,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(-1193.65, -1499.38, 4.37),
            radius = 5.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(-1192.89, -1491.86, 4.38),
            heading = 215.72
        }
    },

    -- Boat Garages --

    -- LSMYC
    {
        id = "lsmyc", -- Unique ID
        type = "boat", -- [car, boat, plane]
        name = "LSMYC",
        pos = vector3(-711.55, -1299.42, 4.40),
        cam = {
            pos = vector3(-742.63, -1375.73, 3.5),
            rotate = 325.50
        },
        ped = {
            model = "mp_m_boatstaff_01", 
            pos = vector3(-711.55, -1299.42, 4.40),
            heading = 43.70
        },
        blip = {
            name = "Boat Garage",
            sprite = 427,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(-774.67, -1413.05, -0.5),
            radius = 10.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 1.5
        },
        vehicle = {
            spawn = vector3(-730.16, -1358.34, -0.5),
            heading = 143.0
        }
    },

    -- Aircraft Garages --

    -- Los Santos International
    {
        id = "airport", -- Unique ID
        type = "plane", -- [car, boat, plane]
        name = "Airport",
        pos = vector3(-940.97, -2954.06, 12.95),
        cam = {
            pos = vector3(-997.37, -2985.74, 16.53),
            rotate = 242.00
        },
        ped = {
            model = "s_m_m_pilot_01", 
            pos = vector3(-940.97, -2954.06, 12.95),
            heading = 156.22
        },
        blip = {
            name = "Aircraft Garage",
            sprite = 307,
            scale = 0.8,
            color = 3,
            display = 4
        },
        parkin = {
            spawn = vector3(-994.79, -2917.96, 12.95),
            radius = 10.0
        },
        marker = {
            x = 0.0,
            y = 0.0,
            z = 0.0
        },
        vehicle = {
            spawn = vector3(-982.5, -2993.86, 12.95),
            heading = 61.22
        }
    },

}
```
{% endcode %}

## Viority Garage Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {

    ['empty_garage'] = "The garage is currently empty!",
    ['success_parkin'] = "The vehicle with the license plate %s has been successfully parked!",
    ['failed_parkin'] = "The vehicle with the license plate %s can not be parked because you are not the holder!", 
    ['not_enough_money'] = "You can't afford it!",
    ['active_impound_cooldown'] = "You have just retrieved a car from the impound yard!",
    ['active_impound_restrict'] = "Your vehicle is currently on the road!",

    ['open_garage_keybind'] = 'Open Garage',
    ['open_parkin_keybind'] = 'ParkIn a vehicle',

    ['webhook_types'] = {
        ['parkout'] = '🚗 Park-Out',
        ['parkin'] = '🚗 Park-In',
        ['impound'] = '🚗 Impound'
    },

    -- NUI Locales
    ['nui_right_info_text_1'] = "QUIT MENU",
    ['nui_right_info_text_2'] = "ROTATE VEHICLE",

    ['nui_info_headline'] = "GARAGE",
    ['nui_info_model'] = "MODEL",
    ['nui_info_plate'] = "PLATE",

    ['nui_action_parkout'] = "PARKOUT",
    ['nui_action_not_available'] = "NOT AVAILABLE",
    ['nui_action_impound'] = "IMPOUND",

    -- Interaction
    ["nui_interaction_press"] = "PRESS",
    ["nui_interaction_open"] = "TO INTERACT",

}
```
{% endcode %}
