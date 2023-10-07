---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Gasoline Config

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
ViorityCore.InternalPrefix = 'viority_gasoline:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
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

-- Viority Gasoline Settings
ViorityCore.MainColor = '#ffe600' -- Change the Main Color of the Cardealer (Valid HexCode)
ViorityCore.SecondColor = '#000000' -- Change the Second Color of the Cardealer (Valid HexCode)

ViorityCore.ChartMainColor = 'rgba(226, 208, 42, 0.05)' -- Change the Main Color of the Chart (Valid RGB/RGBA Code)
ViorityCore.ChartSecondColor = 'rgb(226, 208, 42)' -- Change the Main Color of the Chart (Valid RGB/RGBA Code)

ViorityCore.DiscordWebhook = {
    WebhookRefuelling = 'https://discord.com/api/webhooks/XXX/XXX', -- Change the Webhook for the Refuelling
    WebhookBusiness = {
        Management = 'https://discord.com/api/webhooks/XXX/XXX', -- Change the Webhook for the Business Management
        Liquidity = 'https://discord.com/api/webhooks/XXX/XXX', -- Change the Webhook for the Business Liquidity
        PromotionCode = 'https://discord.com/api/webhooks/XXX/XXX', -- Change the Webhook for the Business Promotion Code
    },

    WebhookColor = '3054334', -- Change the Color of the Webhook
    WebhookAuthor = 'Viority Gasoline', -- Change the Author of the Webhook
    WebhookIconURL = 'https://i.ibb.co/0Mnp3Ch/Logo-with-background.jpg', -- Change the IconURL of the Webhook

    WebhookWithIdentifiers = true -- If you want to send the Identifiers data with the Webhook
}
ViorityCore.OpenDefaultKey = 'e' -- Change the Default Key to open the Gasoline Menu
ViorityCore.ShowNearestGasStation = false -- Show the nearest Gas Station in the Gasoline Menu
ViorityCore.MaxCanisterVolume = 50.0 -- Change the Max Canister Volume
ViorityCore.MaxGasolineOwnerPerPlayer = 3 -- Change the Max Gasoline Owner per Player | To deactivate this feature set it to 0
ViorityCore.PriceFormat = {
    Symbol = '$',
    BehindNumbers = true,
    WithoutDecimal = true -- If you have the price $45.67 for example it will be $45
}

-- Calculate Prices Interval
ViorityCore.UseDateDiagram = true -- Show the Date or the Hour in the Diagram? | true -> Show the Date, false -> Show the Hour
ViorityCore.CheckPrices = 45 * 60000 -- Check the Prices Interval 
ViorityCore.CalculatePrices = 2 * 3600 -- Adjust the refresh Interval in Seconds (Default: 2h)

-- The Raw Top Speed Multiplier
ViorityCore.RawTopSpeedMultiplier = 2.6 -- Change the Raw Top Speed Multiplier (Default: 2.6) | It will not change the vehicle!

-- Vehicle Stats Max Values
ViorityCore.VehicleStatsMax = {
    TopSpeed = 500,
    PetrolVolume = 500,
    TrunkSpace = 1000,
}

-- Fuel Fees
ViorityCore.ServiceFees = 2.50 -- Amount
ViorityCore.CertificateFees = 850 -- Amount

-- Fuel Prices
ViorityCore.FuelTypePrices = {
    SuperPlus = {
        min = 1.60, -- Min Price
        max = 2.20, -- Max Price
    },
    Petrol = {
        min = 1.20,
        max = 1.70,
    },
    Diesel = {
        min = 1.40,
        max = 1.80,
    },
    Kerosene = {
        min = 5.00,
        max = 9.90,
    }
}

-- Fuel Stock Refill
ViorityCore.FuelStockRefill = {
    CheckRefill = 45 * 60000, -- Adjust the Interval which the server check the fuelstock! In ms!
    RefillInterval = 2 * 3600, -- Adjust the refill Interval in Seconds! (Default: 2h)
    SuperPlus = {
        percent = 20.0 -- How much percent should be added?
    },
    Petrol = {
        percent = 50.0
    },
    Diesel = {
        percent = 50.0
    },
    Kerosene = {
        percent = 100.0
    }
}

-- Fuel Stock Consumption
ViorityCore.FuelStockConsumption = {
    SuperPlus = 0.06, -- How much percent should be consumed?
    Petrol = 0.02,
    Diesel = 0.02,
    Kerosene = 0.02
}

-- Vehicle Class Information
ViorityCore.FuelVehicleInformation = {

    [0] = { -- Compacts
        MaxFuel = 60.0,
        fInitialDriveForce = 60, -- Super Plus Handling Boost (Percent) | 60% = approx 20kp/h more | WARNING: Use this value with caution. Too high values will disturb the physics of the vehicle!
    },

    [1] = { -- Sedans
        MaxFuel = 80.0,
        fInitialDriveForce = 60,
    },

    [2] = { -- SUVs
        MaxFuel = 120.0,
        fInitialDriveForce = 60,
    },

    [3] = { -- Coupes
        MaxFuel = 150.0,
        fInitialDriveForce = 60,
    },

    [4] = { -- Muscle
        MaxFuel = 110.0,
        fInitialDriveForce = 60,
    },

    [5] = { -- Sports Classics
        MaxFuel = 90.0,
        fInitialDriveForce = 60,
    },

    [6] = { -- Sports
        MaxFuel = 105.0,
        fInitialDriveForce = 60,
    },

    [7] = { -- Super
        MaxFuel = 125.0,
        fInitialDriveForce = 60,
    },

    [8] = { -- Motorcycles
        MaxFuel = 60.0,
        fInitialDriveForce = 60,
    },

    [9] = { -- Off-road
        MaxFuel = 80.0,
        fInitialDriveForce = 60,
    },

    [10] = { -- Industrial
        MaxFuel = 200.0,
        fInitialDriveForce = 60,
    },

    [11] = { -- Utility
        MaxFuel = 190.0,
        fInitialDriveForce = 60,
    },

    [12] = { -- Vans
        MaxFuel = 155.0,
        fInitialDriveForce = 60,
    },

    [13] = { -- Cycles
        MaxFuel = 0.0,
        fInitialDriveForce = 60,
    },

    [14] = { -- Boats
        MaxFuel = 220.0,
        fInitialDriveForce = 60,
    },

    [15] = { -- Helicopters
        MaxFuel = 360.0,
        fInitialDriveForce = 60,
    },

    [16] = { -- Planes
        MaxFuel = 440.0,
        fInitialDriveForce = 60,
    },

    [17] = { -- Service
        MaxFuel = 130.0,
        fInitialDriveForce = 60,
    },

    [18] = { -- Emergency
        MaxFuel = 120.0,
        fInitialDriveForce = 60,
    },

    [19] = { -- Military
        MaxFuel = 150.0,
        fInitialDriveForce = 0.2,
    },

    [20] = { -- Commercial
        MaxFuel = 160.0, 
        fInitialDriveForce = 60,
    },

    [21] = { -- Trains
        MaxFuel = 200.0,
        fInitialDriveForce = 60,
    }

}

-- Vehicle Class Consumption
ViorityCore.FuelVehicleConsumption = {
    SuperPlus = {
        [1.0] = 0.85,
        [0.9] = 0.75,
        [0.8] = 0.65,
        [0.7] = 0.55,
        [0.6] = 0.45,
        [0.5] = 0.45,
        [0.4] = 0.35,
        [0.3] = 0.25,
        [0.2] = 0.15,
        [0.1] = 0.15,
        [0.0] = 0.0,
    },
    Petrol = {
        [1.0] = 1.3,
        [0.9] = 1.1,
        [0.8] = 1.0,
        [0.7] = 1.0,
        [0.6] = 0.8,
        [0.5] = 0.7,
        [0.4] = 0.6,
        [0.3] = 0.6,
        [0.2] = 0.5,
        [0.1] = 0.3,
        [0.0] = 0.0,
    },
    Diesel = {
        [1.0] = 0.7,
        [0.9] = 0.6,
        [0.8] = 0.6,
        [0.7] = 0.6,
        [0.6] = 0.5,
        [0.5] = 0.5,
        [0.4] = 0.4,
        [0.3] = 0.3,
        [0.2] = 0.2,
        [0.1] = 0.1,
        [0.0] = 0.0,
    },
    Kerosene = {
        [1.0] = 0.7,
        [0.9] = 0.6,
        [0.8] = 0.6,
        [0.7] = 0.6,
        [0.6] = 0.5,
        [0.5] = 0.5,
        [0.4] = 0.4,
        [0.3] = 0.3,
        [0.2] = 0.2,
        [0.1] = 0.1,
        [0.0] = 0.0,
    }
}

-- Vehicle Pictures
ViorityCore.VehiclePictures = {
    DefaultPicture = './assets/others/img/cars/Logo.png',

    -- WEAPON_PETROLCAN = './assets/others/img/cars/FuelCan.png',
}

-- Fuel Pump Models
ViorityCore.FuelPumpModels = {
    [-2007231801] = true,
    [1339433404] = true,
    [1694452750] = true,
    [1933174915] = true,
    [-462817101] = true,
    [-469694731] = true,
    [-164877493] = true
}

-- Business Rental Days
ViorityCore.BusinessRentalDays = {
    {
        days = 3,
        price = 5000
    },
    {
        days = 6,
        price = 10000
    },
    {
        days = 9,
        price = 12500
    }
}

-- Vehicle Class Trunk Space
ViorityCore.TrunkSpace = { -- !IMPORTANT! This is just for the Vehicle Stats field! It will not change the settings in your inventory!
    [0] = 200, --Compact
    [1] = 250, --Sedan
    [2] = 350, --SUV
    [3] = 250, --Coupes
    [4] = 300, --Muscle
    [5] = 250, --Sports Classics
    [6] = 250, --Sports
    [7] = 150, --Super
    [8] = 0, --Motorcycles
    [9] = 350, --Off-road
    [10] = 1000, --Industrial
    [11] = 500, --Utility
    [12] = 500, --Vans
    [13] = 0, --Cycles
    [14] = 300, --Boats
    [15] = 100, --Helicopters
    [16] = 100, --Planes
    [17] = 300, --Service
    [18] = 300, --Emergency
    [19] = 500, --Military
    [20] = 1000, --Commercial
    [21] = 0 --Trains
}

-- Gas Stations
ViorityCore.GasStations = {

    -- CAR STATIONS

    {
        type = "car", -- [car, boat, plane]
        id = "route_68", -- Unique ID
        name = "ROUTE 68",
        pos = vector3(49.4187, 2778.793, 58.043),
        zone = {
            pos = vector3(49.4187, 2778.793, 58.043),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "senora_rd", -- Unique ID
        name = "SENORA RD",
        pos = vector3(263.894, 2606.463, 44.983),
        zone = {
            pos = vector3(263.894, 2606.463, 44.983),
            size = 10.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "route_68_store", -- Unique ID
        name = "ROUTE 68 STORE",
        pos = vector3(1207.260, 2660.175, 37.899),
        zone = {
            pos = vector3(1207.260, 2660.175, 37.899),
            size = 10.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "ron_windpark", -- Unique ID
        name = "WINDPARK",
        pos = vector3(2539.685, 2594.192, 37.944),
        zone = {
            pos = vector3(2539.685, 2594.192, 37.944),
            size = 10.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "senora_freeway", -- Unique ID
        name = "SENORA FREEWAY",
        pos = vector3(2679.858, 3263.946, 55.240),
        zone = {
            pos = vector3(2679.858, 3263.946, 55.240),
            size = 10.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "sandy_shores", -- Unique ID
        name = "SANDY SHORES",
        pos = vector3(2005.055, 3773.887, 32.403),
        zone = {
            pos = vector3(2005.055, 3773.887, 32.403),
            size = 10.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "grapeseed", -- Unique ID
        name = "GRAPESEED",
        pos = vector3(1687.156, 4929.392, 42.078),
        zone = {
            pos = vector3(1687.156, 4929.392, 42.078),
            size = 10.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "pacific_bay_freeway", -- Unique ID
        name = "PACIFIC BAY FREEWAY",
        pos = vector3(1701.314, 6416.028, 32.763),
        zone = {
            pos = vector3(1701.314, 6416.028, 32.763),
            size = 10.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "pacific_bay", -- Unique ID
        name = "PACIFIC BAY",
        pos = vector3(179.857, 6602.839, 31.868),
        zone = {
            pos = vector3(179.857, 6602.839, 31.868),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "pacific_bay_xhero", -- Unique ID
        name = "PACIFIC BAY XHERO",
        pos = vector3(-94.4619, 6419.594, 31.489),
        zone = {
            pos = vector3(-94.4619, 6419.594, 31.489),
            size = 10.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "zancudo_freeway", -- Unique ID
        name = "ZANCUDO FREEWAY",
        pos = vector3(-2554.996, 2334.40, 33.078),
        zone = {
            pos = vector3(-2554.996, 2334.40, 33.078),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "north_rockford", -- Unique ID
        name = "NORTH ROCKFORD",
        pos = vector3(-1800.375, 803.661, 138.651),
        zone = {
            pos = vector3(-1800.375, 803.661, 138.651),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "south_rockford", -- Unique ID
        name = "SOUTH ROCKFORD",
        pos = vector3(-1437.622, -276.747, 46.207),
        zone = {
            pos = vector3(-1437.622, -276.747, 46.207),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "del_perro_freeway", -- Unique ID
        name = "DEL PERRO FREEWAY",
        pos = vector3(-724.619, -935.1631, 19.213),
        zone = {
            pos = vector3(-724.619, -935.1631, 19.213),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },        

    {
        type = "car", -- [car, boat, plane]
        id = "grove_street", -- Unique ID
        name = "GROVE STREET",
        pos = vector3(-70.2148, -1761.792, 29.534),
        zone = {
            pos = vector3(-70.2148, -1761.792, 29.534),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },     

    {
        type = "car", -- [car, boat, plane]
        id = "capital_boulevard", -- Unique ID
        name = "CAPITAL BOULEVARD",
        pos = vector3(265.648, -1261.309, 29.292),
        zone = {
            pos = vector3(265.648, -1261.309, 29.292),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },   
        
    {
        type = "car", -- [car, boat, plane]
        id = "popular_street", -- Unique ID
        name = "POPULAR STREET",
        pos = vector3(819.653, -1028.846, 26.403),
        zone = {
            pos = vector3(819.653, -1028.846, 26.403),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },    
        
    {
        type = "car", -- [car, boat, plane]
        id = "el_rancho_boulevard", -- Unique ID
        name = "EL RANCHO BOULEVARD",
        pos = vector3(1208.951, -1402.567,35.224),
        zone = {
            pos = vector3(1208.951, -1402.567,35.224),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },    

    {
        type = "car", -- [car, boat, plane]
        id = "west_mirror_drive", -- Unique ID
        name = "WEST MIRROR DRIVE",
        pos = vector3(1181.381, -330.847, 69.316),
        zone = {
            pos = vector3(1181.381, -330.847, 69.316),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },   

    {
        type = "car", -- [car, boat, plane]
        id = "clinton_ave", -- Unique ID
        name = "CLINTON AVE",
        pos = vector3(620.843, 269.100, 103.089),
        zone = {
            pos = vector3(620.843, 269.100, 103.089),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "palomino_freeway", -- Unique ID
        name = "PALOMINO FREEWAY",
        pos = vector3(2581.321, 362.039, 108.468),
        zone = {
            pos = vector3(2581.321, 362.039, 108.468),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "davis_avenue", -- Unique ID
        name = "DAVIS AVENUE",
        pos = vector3(176.631, -1562.025, 29.263),
        zone = {
            pos = vector3(176.631, -1562.025, 29.263),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "alta_street", -- Unique ID
        name = "ALTA STREET",
        pos = vector3(-319.292, -1471.715, 30.549),
        zone = {
            pos = vector3(-319.292, -1471.715, 30.549),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    {
        type = "car", -- [car, boat, plane]
        id = "sandy_shores_airfield", -- Unique ID
        name = "SANDY SHORES AIRFIELD",
        pos = vector3(1784.324, 3330.55, 41.253),
        zone = {
            pos = vector3(1784.324, 3330.55, 41.253),
            size = 15.0
        },
        blip = {
            name = "Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },


    -- Boat Stations

    {
        type = "boat", -- [car, boat, plane]
        id = "la_puerta", -- Unique ID
        name = "LA PUERTA",
        pos = vector3(-800.79, -1503.65, 0.0),
        zone = {
            pos = vector3(-800.79, -1503.65, 0.0),
            size = 15.0
        },
        blip = {
            name = "Boat Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },

    -- KEROSIN STATIONS (Plane)
        
    {
        type = "plane", -- [car, boat, plane]
        id = "lsia_international", -- Unique ID
        name = "LSIA INTERNATIONAL",
        pos = vector3(-974.89, -3073.96, 13.94),
        zone = {
            pos = vector3(-974.89, -3073.96, 13.94),
            size = 15.0
        },
        blip = {
            name = "Kerosene Gasoline",
            sprite = 361,
            color = 4,
            scale = 0.9
        }
    },
}
```
{% endcode %}

## Viority Gasoline Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {

    -- Headers
    ['nui_Gasoline_Header'] = "GASOLINE", -- !! NEW
    ['nui_FuelStock_Header'] = "FUEL STOCK",
    ['nui_PriceChange_Header'] = "PRICE CHANGE",
    ['nui_Refuelling_Header'] = "REFUELLING",

    -- Fuel Tutorial
    ['nui_Tutorial_Choose'] = "CHOOSE YOUR FUEL",
    ['nui_Tutorial_Refuel'] = "REFUEL YOUR VEHICLE",
    ['nui_Tutorial_Pay'] = "PAY YOUR PAYMENT",

    -- Fuel Statistic
    ['nui_Statistic_Top_Speed'] = "Top Speed",
    ['nui_Statistic_Petrol_Volume'] = "Petrol Volume",
    ['nui_Statistic_Trunk_Space'] = "Trunk Space",

    -- Fuel Information
    ['nui_Refuel_SuperPlus_Header'] = "Super Plus",
    ['nui_Refuel_SuperPlus_desc_1'] = '<span style="color: rgba(115, 237, 6, 0.35)">+</span> Improves the motor performance',
    ['nui_Refuel_SuperPlus_desc_2'] = '<span style="color: rgba(255, 50, 0, 0.35)">-</span> High Consumption',
    ['nui_Refuel_SuperPlus_desc_3'] = '<span style="color: rgba(255, 50, 0, 0.35)">-</span> Low availability',

    ['nui_Refuel_Petrol_Header'] = "Petrol",
    ['nui_Refuel_Petrol_desc_1'] = '<span style="color: rgba(115, 237, 6, 0.35)">+</span> Low Price',
    ['nui_Refuel_Petrol_desc_2'] = '<span style="color: rgba(255, 50, 0, 0.35)">-</span> High Consumption',

    ['nui_Refuel_Diesel_Header'] = "Diesel",
    ['nui_Refuel_Diesel_desc_1'] = '<span style="color: rgba(115, 237, 6, 0.35)">+</span> High Price',
    ['nui_Refuel_Diesel_desc_2'] = '<span style="color: rgba(255, 50, 0, 0.35)">-</span> Low Consumption',

    -- Fuel Addon
    ['nui_Gasoline_Kerosene'] = "Kerosene",
    ['nui_Refuel_Kerosene_desc_1'] = '<span style="color: rgba(255, 50, 0, 0.35)">-</span> High Price',
    ['nui_Refuel_Kerosene_desc_2'] = '<span style="color: rgba(255, 50, 0, 0.35)">-</span> High Consumption',

    -- Refuel Buttons
    ['nui_Refuel_Button'] = "REFUEL",
    ['nui_Refuel_Button_Cancel'] = "STOP",

    -- Financial
    ['nui_Financial_Header'] = "FINANCIAL",
    ['nui_Financial_Service_Fees'] = "Service Fees",
    ['nui_Financial_Fuel_Desc'] = "How much you fueled in your car",
    ['nui_Financial_Service_Desc'] = "Service fees for each refuelling",
    ['nui_Financial_Subtotal'] = "Subtotal",
    ['nui_Financial_Promotion_Code'] = "Enter Promotion-Code",
    ['nui_Financial_Total'] = "Total",
    ['nui_Financial_Pay'] = "PAYING",

    -- Price Change
    ['nui_Price_Change_Value'] = "Value",
    ['nui_Price_Change_SuperPlus'] = "Super Plus",
    ['nui_Price_Change_Petrol'] = "Petrol",
    ['nui_Price_Change_Diesel'] = "Diesel",
    ['nui_Price_Change_Underline'] = "* Prices may fluctuate and show a different price at other gas stations.",

    -- Fuel Stock
    ['nui_Fuel_Stock_SuperPlus'] = "Super Plus",
    ['nui_Fuel_Stock_Petrol'] = "Petrol",
    ['nui_Fuel_Stock_Diesel'] = "Diesel",

    -- Business Buy
    ['nui_Business_Tutorial_Choose'] = "CHOOSE YOUR PERIOD",
    ['nui_Business_Tutorial_Pay'] = "PAY THE RENTAL",
    ['nui_Business_Tutorial_Manage'] = "MANAGE YOUR BUSINESS",
    ['nui_Business_Choose_Days'] = "Day/s",
    ['nui_Business_Choose_Desc'] = "Rent the gasoline station for {y1}%s{y2}. Build your business and achieve prosperity, but keep an eye on your expenses!",
    ['nui_Business_Choose_Button'] = "CHOOSE",
    ['nui_Business_Financial_Header'] = "FINANCIAL",
    ['nui_Business_Financial_Rental'] = "Rental costs for the specified period",
    ['nui_Business_Financial_Certificate_Header'] = "Certificate Fees",
    ['nui_Business_Financial_Certificate_Desc'] = "Certificate fees for the law entry",
    ['nui_Business_Financial_Total'] = "Total",
    ['nui_Business_Financial_Pay'] = "PAYING",
    ['nui_Business_Financial_Unavailable'] = "NOT AVAILABLE",

    -- Business Bill
    ['nui_Business_Bill_Gasoline'] = "Day/s Gasoline",

    -- Business Financial Overview
    ['nui_Business_Financial_Overview_Header'] = "FINANCIAL OVERVIEW",

    -- Business Information
    ['nui_Business_Information_Header'] = "INFORMATION",
    ['nui_Business_Information_All_Customer'] = "All Customer",
    ['nui_Business_Information_Total_Income'] = "Total Income",
    ['nui_Business_Information_Remaining_Time'] = "Remaining Time",
    ['nui_Business_Information_Total_Outcome'] = "Total Outcome",
    ['nui_Business_Information_Close_Business'] = "CLOSE BUSINESS",

    -- Business Income
    ['nui_Business_Income_Header'] = "LAST INCOME",
    ['nui_Business_Income_Unknown_User'] = "Unknown",
    ['nui_Business_Income_Message'] = "Refuelled {y1}%s{y2} of {y1}%s{y2} and payed {y1}$%s{y2}",
    
    -- Business Outcome
    ['nui_Business_Outcome_Header'] = "LAST OUTCOME",
    ['nui_Business_Outcome_Company'] = "Fuel Ltd.",
    ['nui_Business_Outcome_Message'] = "Refuelled the Fuel Stock and cost {y1}$%s{y2}.",

    -- Business Promotion Code
    ['nui_Business_Promotion_Code_Header'] = "PROMOTION CODES",
    ['nui_Business_Promotion_Code_Create'] = "CREATE",
    ['nui_Business_Promotion_Code_Input_Placeholder'] = "Enter Promotion Code",
    ['nui_Business_Promotion_Code_Discount'] = "Discount:",
    ['nui_Business_Promotion_Code_Discount_Input_Placeholder'] = "Enter Discount",

    -- Notify
    ['Refuel_Complete'] = "Thank you for your visit! <br>You refuelled %s of %s",
    ['Refuel_Not_Enough'] = "You can't afford to refuel!",
    ['Refuel_With_Can'] = "You refilled %s of %s via a can!",
    ['Business_Not_Enough'] = "You can't afford to buy this business!",
    ['Business_Maximum'] = "You already have too much businesses!",

    -- Interaction
    ["nui_interaction_press"] = "PRESS",
    ["nui_interaction_open"] = "TO INTERACT",
    ['nui_Interaction_canfill'] = "TO REFILL VIA CAN",

    -- Webhook    
    ['Webhook_Types'] = {
        ['refuelling'] = '⛽ Refuelling',
        ['business_management'] = '💼 Business Management',
        ['business_promotioncode'] = '🎀 Business Promotion Code',
        ['business_liquidity'] = '🪙 Business Liquidity',
    },

}
```
{% endcode %}
