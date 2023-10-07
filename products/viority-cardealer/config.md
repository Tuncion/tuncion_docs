---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Cardealer Config

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
ViorityCore.InternalPrefix = 'viority_cardealer:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
ViorityCore.EventWrongToken = function(source) -- This happens when a player tried to trigger an event with the wrong token! Most likely, it will be a cheater who tries to gain unfair advantages through serverside events.
    -- You can implement a ban system here!
    DropPlayer(source, "❤️ Do not try to cheat on our server!")
end
ViorityCore.Locales = 'en' -- Choose your Language (de or en) | You can add more in the locales folder!
ViorityCore.OS = 'windows' -- Choose your OS (windows or linux)
ViorityCore.ESXInteraction = false -- If you want to use the ESX.ShowHelpNotification instead of our Interaction. Attention this will increase the client-performance!

ViorityCore.Notify = function(message)
    print(message) -- Print the Message in the Console (for Debugging)
    ESX.ShowNotification(message, 'success', 5000) -- Use the ESX Notification System
    TriggerEvent("viority_hud:client:Notify", 1, 1, "XXX", message) -- Use the Viority HUD Notification System
end

ViorityCore.GiveCarKeys = function(playerID, plate)
    -- Insert your export here
end

-- Cardealer Database
ViorityCore.useBooleanMode = false -- If you want to use the Boolean Mode for the Search Query
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
            male = 'male',
            female = 'female'
        }
    },

    bills = {
        table = 'billing',
        identifier = 'identifier',
    },
    owned_vehicles_table = 'owned_vehicles',
    owned_vehicles_stored = true, -- Insert with stored column? true or false?
}

-- Cardealer Settings
ViorityCore.MainColor = '#ffe600' -- Change the Main Color of the Cardealer (Valid HexCode)
ViorityCore.SecondColor = '#000000' -- Change the Second Color of the Cardealer (Valid HexCode)

ViorityCore.ChartMainColor = 'rgba(226, 208, 42, 0.05)' -- Change the Main Color of the Chart (Valid RGB/RGBA Code)
ViorityCore.ChartSecondColor = 'rgb(226, 208, 42)' -- Change the Main Color of the Chart (Valid RGB/RGBA Code)

ViorityCore.DiscordWebhook = {
    WebhookTestDrive = 'https://discord.com/api/webhooks/XXX/XXX', -- Change the Webhook for the Test Drive
    WebhookPurchase = 'https://discord.com/api/webhooks/XXX/XXX', -- Change the Webhook for the Test Drive

    WebhookColor = '3054334', -- Change the Color of the Webhook
    WebhookAuthor = 'Viority Cardealer', -- Change the Author of the Webhook
    WebhookIconURL = 'https://i.ibb.co/0Mnp3Ch/Logo-with-background.jpg', -- Change the IconURL of the Webhook

    WebhookWithIdentifiers = true -- If you want to send the Identifiers data with the Webhook
}
ViorityCore.OpenDefaultKey = 'e' -- Change the Default Key to open the Cardealer Menu
ViorityCore.UseMenuV2Integration = false -- If you want to use the MenuV2 Integration
ViorityCore.UseMenuV2Prefix = 'viority_menu:' -- EventWhitelist Prefix in the Menu V2 Product
ViorityCore.UseMenuV2Token = 'XXX' -- EventWhitelist Token in the Menu V2 Product

-- Calculate Prices Interval
ViorityCore.UseDateDiagram = true -- Show the Date or the Hour in the Diagram? | true -> Show the Date, false -> Show the Hour
ViorityCore.CheckPrices = 45 * 60000 -- Check the Prices Interval 
ViorityCore.CalculatePrices = 24 * 3600 -- Adjust the refresh Interval in Seconds (Default: 24h)

-- Installment and Leasing Interval
ViorityCore.CheckInstallment = 45 * 60000 -- Check the Installment Interval
ViorityCore.CheckLeasing = 45 * 60000 -- Check the Leasing Interval

-- Currency Settings
ViorityCore.PriceFormat = {
    Symbol = '$',
    BehindNumbers = true
}

-- Custom Plate Settings
ViorityCore.CustomPlate = {
    usage = true, -- If you want to use the Custom Plate System
    min = 3, -- Minimum Characters (max is 6)
    blacklist = {"Nigger", "Hitler"}, -- Add Plates that are not allowed to use (Not Case-Insensitive)
}

-- Test Drive 
ViorityCore.TestdrivePrice = 650 -- The Testdrive Fee

-- Bill Settings
ViorityCore.PaintingFees = { -- Use Fees for the custom Painting
    usage = true,
    amount = 2500 
}

ViorityCore.PlateFees = { -- Use Fees for the custom Plate
    usage = true,
    amount = 1500 
}

ViorityCore.InstallmentFees = { -- Use Fees for the Installment
    usage = true,
    amount = 1500 
}

ViorityCore.LeasingFees = { -- Use Fees for the Leasing
    usage = true,
    amount = 250 -- !!Attention | This is the Amount for each Day
}

ViorityCore.GeneralFees = { -- Use Fees for the General Fees
    usage = true,
    amount = 5000
}

-- Installment Options
ViorityCore.InstallmentOptions = {
    [1] = {
        name = '2 Days',
        days = 2
    },

    [2] = {
        name = '3 Days',
        days = 3
    },

    [3] = {
        name = '7 Days',
        days = 7
    },
}

-- Leasing Options
ViorityCore.LeasingOptions = {
    [1] = {
        name = '7 Days',
        days = 7
    },

    [2] = {
        name = '14 Days',
        days = 14
    },

    [3] = {
        name = '28 Days',
        days = 28
    },
}

-- The Raw Top Speed Multiplier
ViorityCore.RawTopSpeedMultiplier = 2.6 -- Change the Raw Top Speed Multiplier (Default: 2.6) | It will not change the vehicle!

-- Default Vehicle Color
ViorityCore.DefaultVehicleColor = {
    r = 255,
    g = 221,
    b = 0
}

-- Vehicle Stats Max Values
ViorityCore.VehicleStatsMax = {
    TopSpeed = 500,
    PetrolVolume = 120,
    TrunkSpace = 1000,
    PassengerSeats = 10
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

-- Vehicle Petrol Volume
ViorityCore.PetrolVolume = { -- !IMPORTANT! This is just for the Vehicle Stats field! It will not change the settings in your Fuel System!
    [0] = 100, --Compact
    [1] = 100, --Sedan
    [2] = 100, --SUV
    [3] = 100, --Coupes
    [4] = 100, --Muscle
    [5] = 100, --Sports Classics
    [6] = 100, --Sports
    [7] = 100, --Super
    [8] = 100, --Motorcycles
    [9] = 100, --Off-road
    [10] = 100, --Industrial
    [11] = 100, --Utility
    [12] = 100, --Vans
    [13] = 100, --Cycles
    [14] = 100, --Boats
    [15] = 100, --Helicopters
    [16] = 100, --Planes
    [17] = 100, --Service
    [18] = 100, --Emergency
    [19] = 100, --Military
    [20] = 100, --Commercial
    [21] = 100 --Trains
}

-- Cardealer Position
ViorityCore.Cardealer = {
    -- Ped Models: https://docs.fivem.net/docs/game-references/ped-models/
    -- Coordinates: X - Y - Z
    -- Heading: Specific Direction (0° - 360°)

    {
        id = "classic_cars", -- unique id
        type = "car", -- [car, boat, aircraft] !!Attention this is the value which will inserted into owned_vehicles
        name = "Klassischer Händler",
        pos = vector3(-32.7024, -1103.5098, 25.4224), -- Blip Location
        cam = {
            pos = vector3(-49.89, -1096.05, 27.0),
            rotate = -105.0
        },
        ped = {
            model = "s_m_y_devinsec_01",
            pos = vector3(-32.7024, -1103.5098, 25.4224),
            heading = 70.7069,
            radius = 2.0 -- NEW!!! Adjust the Interaction radius
        },
        vehicle = {
            spawn = vector3(-44.62, -1097.35, 25.42),
            heading = 122.74
        },
        testdrive = {
            spawn = vector3(-30.65, -1090.2, 25.0),
            heading = 339.13
        },
        checkout = {
            AnimCam1 = {
                pos = vector3(-28.42, -1103.49, 27.6),
                rotate = 150.0
            },
            AnimCam2 = {
                pos = vector3(-30.59, -1103.2, 27.6),
                rotate = 170.0
            },
            AnimPlayer = {
                pos = vector3(-31.46917, -1104.683, 25.5),
                heading = 201.96
            },
            vehiclespawn = {
                spawn = vector3(-30.65, -1090.2, 25.42),
                heading = 339.13
            }
        },
        MLO = { -- NEW!!! Prevent MLO Issues (If you have problems with your MLO play with this values)
            distance = 50.0, -- Distance distance starting the teleport instead of the long camera transition
            wait = 50 -- Wait some Ticks to load the MLO
        },
        blip = {
            name = "Klassischer Händler",
            sprite = 745,
            color = 60,
            scale = 0.7
        }
    },

    {
        id = "transporter_cars", -- unique id
        type = "car", -- [car, boat, aircraft] !!Attention this is the value which will inserted into owned_vehicles
        name = "Transporter Händler",
        pos = vector3(809.61, -924.36, 25.21), -- Blip Location
        cam = {
            pos = vector3(876.5, -911.0, 28.0),
            rotate = 90.0
        },
        ped = {
            model = "s_m_y_clubbar_01",
            pos = vector3(809.61, -924.36, 25.21),
            heading = 2.24,
            radius = 2.0
        },
        vehicle = {
            spawn = vector3(864.89, -910.08, 24.75),
            heading = 222.25
        },
        testdrive = {
            spawn = vector3(888.05, -909.36, 25.46),
            heading = 270.21
        },
        checkout = {
            AnimCam1 = {
                pos = vector3(811.07, -921.18, 26.9),
                rotate = 150.0
            },
            AnimCam2 = {
                pos = vector3(808.89, -921.33, 26.9),
                rotate = 180.0
            },
            AnimPlayer = {
                pos = vector3(808.82, -923.47, 25.16),
                heading = 220.75
            },
            vehiclespawn = {
                spawn = vector3(888.05, -909.36, 25.46),
                heading = 270.21
            }
        },
        MLO = {
            distance = 150.0, 
            wait = 50 
        },
        blip = {
            name = "Transporter Händler",
            sprite = 734,
            color = 60,
            scale = 0.7
        }
    },

    {
        id = "boat_shop", -- unique id
        type = "boat", -- [car, boat, aircraft] !!Attention this is the value which will inserted into owned_vehicles
        name = "Boot Händler",
        pos = vector3(-715.94, -1298.21, 4.1), -- Blip Location
        cam = {
            pos = vector3(-742.63, -1375.73, 3.5),
            rotate = 325.50            
        },
        ped = {
            model = "s_m_y_devinsec_01",
            pos = vector3(-715.94, -1298.21, 4.1),
            heading = 5.6,
            radius = 2.0
        },
        vehicle = {
            spawn = vector3(-730.16, -1358.34, -0.5),
            heading = 143.0
        },
        testdrive = {
            spawn = vector3(-794.54, -1432.78, 0.0),
            heading = 145.49
        },
        checkout = {
            AnimCam1 = {
                pos = vector3(-716.94, -1295.8, 5.8),
                rotate = 200.0
            },
            AnimCam2 = {
                pos = vector3(-717.94, -1296.8, 5.8),
                rotate = 240.0
            },
            AnimPlayer = {
                pos = vector3(-716.58, -1297.89, 4.1),
                heading = 263.07
            },
            vehiclespawn = {
                spawn = vector3(-794.54, -1432.78, 0.0),
                heading = 145.49
            }
        },
        MLO = {
            distance = 150.0, 
            wait = 50 
        },
        blip = {
            name = "Boot Händler",
            sprite = 427,
            color = 60,
            scale = 0.7
        }
    },

    {
        id = "aircraft_shop", -- unique id
        type = "aircraft", -- [car, boat, aircraft] !!Attention this is the value which will inserted into owned_vehicles
        name = "Luftfahrt Händler",
        pos = vector3(-940.65, -2960.58, 12.95), -- Blip Location
        cam = {
            pos = vector3(-997.37, -2985.74, 16.53),
            rotate = 242.00
        },
        ped = {
            model = "s_m_y_devinsec_01",
            pos = vector3(-938.72, -2957.04, 12.95),
            heading = 84.91,
            radius = 2.0
        },
        vehicle = {
            spawn = vector3(-982.5, -2993.86, 12.95),
            heading = 61.22
        },
        testdrive = {
            spawn = vector3(-965.83, -3162.88, 13.59),
            heading = 60.15
        },
        checkout = {
            AnimCam1 = {
                pos = vector3(-945.06, -2958.13, 15.19),
                rotate = 240.0
            },
            AnimCam2 = {
                pos = vector3(-944.99, -2960.86, 15.19),
                rotate = 260.0
            },
            AnimPlayer = {
                pos = vector3(-942.0, -2961.08, 12.95),
                heading = 291.09
            },
            vehiclespawn = {
                spawn = vector3(-1005.03, -2988.58, 13.59),
                heading = 59.64
            }
        },
        MLO = {
            distance = 150.0, 
            wait = 50 
        },
        blip = {
            name = "Luftfahrt Händler",
            sprite = 307,
            color = 60,
            scale = 0.7
        }
    }

}
```
{% endcode %}

## Viority Cardealer Locales

**Reminder:** You can create your own locale file in your language 👌

<pre class="language-lua" data-title="en.lua" data-overflow="wrap" data-line-numbers><code class="lang-lua"><strong>ViorityLocales['en'] = {
</strong>
    ['nui_Header'] = "CARDEALER",

    -- Sub Headers
    ['nui_Vehicle_Header'] = "Vehicle",
    ['nui_Color_Header'] = "Color",
    ['nui_Plate_Header'] = "Plate",
    ['nui_Technical_Header'] = "Technical",
    ['nui_PriceChange_Header'] = "Price Change",
    ['nui_Testdrive_Header'] = "Testdrive",
    ['nui_Purchase_Header'] = "Purchase",

    -- nui Technical
    ['nui_Technical_Speed'] = "Top Speed",
    ['nui_Technical_Petrol'] = "Petrol Volume",
    ['nui_Technical_Trunk'] = "Trunk Space",
    ['nui_Technical_Passenger'] = "Passenger Seats",

    -- Searchbar
    ['nui_Searchbar_Placeholder'] = "Search a specific model...",

    -- Price Change
    ['nui_PriceChange_Value'] = "Value",

    -- nui Testdrive
    ['nui_Testdrive_Button'] = "START TESTDRIVE",

    -- nui Purchase
    ['nui_Purchase_Info'] = "The vehicle is approved by the local authority. It is a factory brand new car and has no faults.",
    ['nui_Purchase_Button'] = "GO TO CHECKOUT",

    -- nui Contract
    ['nui_Contract_Header'] = "Vehicle Contract",
    ['nui_Contract_Payment_Header'] = "Payment Method",

    -- Player Passport
    ['nui_Passport_Name'] = "Your Name/Surname",
    ['nui_Passport_Dob'] = "Your Date of birth",
    ['nui_Passport_Height'] = "Your Height",
    ['nui_Passport_Sex'] = "Your Sex",
    ['nui_Passport_ID'] = "Your Current ID",
    ['nui_Passport_Money'] = "Your Money Wallet",
    ['nui_Passport_Bank'] = "Your Bank Wallet",
    ['nui_Passport_Bills'] = "Your Opened Bills",
    ['nui_Passport_Signature'] = "Signature",
    ['nui_Passport_Sex_Male'] = "Male",
    ['nui_Passport_Sex_Female'] = "Female",

    -- Vehicle Passport
    ['nui_Passport_Model'] = "Vehicle Model",
    ['nui_Passport_Speed'] = "Top Speed",
    ['nui_Passport_Petrol'] = "Petrol Volume",
    ['nui_Passport_Trunk'] = "Trunk Space",
    ['nui_Passport_Price'] = "Current Price",
    ['nui_Passport_Passenger'] = "Passenger Seats",
    ['nui_Passport_PassengerMinimal'] = "Seats",
    ['nui_Passport_Status'] = "New Car",
    ['nui_Passport_Status_Underline'] = "Current Status",
    ['nui_Passport_Approvement'] = "Available",
    ['nui_Passport_Approvement_Underline'] = "Approvement",

    -- Money/Bank Wallet
    ['nui_Bank_Wallet'] = "BANK WALLET",
    ['nui_Money_Wallet'] = "MONEY WALLET",

    -- Direct Buy
    ['nui_DirectBuy_Header'] = "Direct Buy",
    ['nui_DirectBuy_Desc'] = "You pay the full amount directly and have no daily costs or anything like that.",

    -- Installment
    ['nui_Installment_Header'] = "Installment",
    ['nui_Installment_Desc'] = "You pay the bill in installments.",
    
    -- Leasing
    ['nui_Leasing_Header'] = "VIP Leasing",
    ['nui_Leasing_Desc'] = "Only For specific persons.",

    -- Dropdown Menu
    ['nui_Dropdown_Placeholder'] = "Choose",

    -- Bill Table 
    ['nui_Bill_Package'] = "PACKAGE",
    ['nui_Bill_Quantity'] = "QUANTITY",
    ['nui_Bill_Price'] = "PRICE",
    ['nui_Bill_Total'] = "Total",

    ['nui_Bill_Times'] = "Times", -- 2 Times (Installment)
    ['nui_Bill_For'] = "For %s Days", -- For 28 Days (Leasing)

    -- Payment Footer
    ['nui_Footer_Date'] = "Date",
    ['nui_Footer_Signature'] = "Signature",

    -- Endorse Button
    ['nui_Endorse_Button'] = "ENDORSE",

    -- Interaction
    ["nui_interaction_press"] = "PRESS",
    ["nui_interaction_open"] = "TO INTERACT",

    -- Keybind
    ['open_cardealer_keybind'] = 'Open Cardealer',

    -- Cardealer Notifys

    -- Client
    ['Cardealer_NoVehicles'] = "Unfortunately, we have no vehicles in our range at the moment!",
    ['Cardealer_Testdrive'] = "Welcome to your virtual world! &#x3C;br> Here you can test your vehicle. &#x3C;br> Leave the vehicle to finish it!",
    ['Cardealer_NotEnoughMoney'] = "I'm afraid you can't afford it!",
    ['Cardealer_EmptyPlate'] = "The license plate is not allowed to be empty!",
    ['Cardealer_PlateMinChars'] = "The license plate must have at least %s characters!",
    ['Cardealer_PlateBlacklisted'] = "The license plate %s is not allowed!",
    ['Cardealer_PlateExist'] = "The license plate is already in use! Please choose another...",
    ['Cardealer_Purchase'] = "Thank you for purchasing! &#x3C;br> Have fun with your new magnificence.",

    -- Server
    ['Cardealer_PayInstallment'] = "You paid an installment of %s!",
    ['Cardealer_NotPayInstallment'] = "You could not pay your installment of %s! A penalty was imposed on you...",
    ['Cardealer_CompleteInstallment'] = "Your installment payment for the %s license plate has now been successfully completed!",
    ['Cardealer_EndOfLeasing'] = "The leasing for the licence plate %s has expired! The vehicle has been returned!",

    -- Webhook
    ['Webhook_Testdrive'] = "**ID:** `%s`\n**Name:** `%s`\n**Type:** `%s`\n**Model:** `%s` (_%s_)\n**Plate:** `%s`\n**Time:**",
    ['Webhook_Purchase'] = "**ID:** `%s`\n**Name:** `%s`\n**Type:** `%s`\n**Model:** `%s` (_%s_)\n**Plate:** `%s`\n**Payment:** `%s`\n**Wallet:** `%s`\n**Price:** `%s`\n**Time:**",

    ['Webhook_Types'] = {
        ['testdrive'] = '🚗 Testdrive',
        ['purchase'] = '🛒 Purchase',
    },

    -- Viority Menu V2 Integration (You can use the {b1} {b2} Highlight Formating and all HTML p tag Syntax)
    ['MenuV2_Header'] = "CARDEALER",

    -- Week Day Names
    ['WeekDayNames'] = {
        [0] = "Sunday",
        [1] = "Monday",
        [2] = "Tuesday",
        [3] = "Wednesday",
        [4] = "Thursday",
        [5] = "Friday",
        [6] = "Saturday"
    }
    
}
</code></pre>
