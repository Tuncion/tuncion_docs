---
description: 🔧 See the current config files
---

# 👀 Config Preview

## Viority Marry Config

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
ViorityCore.InternalPrefix = 'viority_marry:' -- The Internal Trigger Prefix | Attention you have to change any integrations in other scripts!
ViorityCore.EventWrongToken = function(source) -- This happens when a player tried to trigger an event with the wrong token! Most likely, it will be a cheater who tries to gain unfair advantages through serverside events.
    -- You can implement a ban system here!
    DropPlayer(source, "❤️ Do not try to cheat on our server!")
end
ViorityCore.Locales = 'de' -- Choose your Language (de or en) | You can add more in the locales folder!
ViorityCore.OS = 'windows' -- Choose your OS (windows or linux)
ViorityCore.ESXInteraction = false -- If you want to use the ESX.ShowHelpNotification instead of our Interaction. Attention this will increase the client-performance!

ViorityCore.OpenAnimation = function(message)
    DisplayRadar(false) -- Deactivate Minimap
    TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "StartAnimation") -- https://docs.viority.eu/product/viority-marry/startanimation
end

ViorityCore.StopAnimation = function(message)
    DisplayRadar(true) -- Activate Minimap back
    TriggerEvent(ViorityCore.InternalPrefix .. "client:" .. "StopAnimation") -- https://docs.viority.eu/product/viority-marry/stopanimation
end

ViorityCore.Notify = function(message)
    print(message) -- Print the Message in the Console (for Debugging)
    ESX.ShowNotification(message, 'success', 5000) -- Use the ESX Notification System
    TriggerEvent("viority_hud:client:Notify", 1, 1, "HEIRATSANTRAG", message, nil, nil, nil, 15000) -- Use the Viority HUD Notification System
end

ViorityCore.GlobalNotify = function(message)
    TriggerClientEvent("viority_hud:client:Notify", -1, 2, 1, "HEIRATSANTRAG", message, nil, nil, nil, 15000)
end

-- Marry Stations
ViorityCore.OpenDefaultKey = 'e'
ViorityCore.PriceFormat = {
    Symbol = '$',
    BehindNumbers = true
} 
ViorityCore.MarryPrice = 150000
ViorityCore.DefaultDimension = 0
ViorityCore.MarryStations = {

    {
        id = "cityhall",
        pos = vector3(-545.3472, -203.7644, 37.2149),
        radius = 3.0,
        ped = {
            model = "cs_milton",
            pos = vector3(-545.3472, -203.7644, 37.2149),
            heading = 208.68
        },
        blip = {
            name = "Registry Office",
            pos = vector3(-545.3472, -203.7644, 37.2149),
            scale = 1.0,
            sprite = 489,
            color = 75
        }

    }

}

ViorityCore.MarryLocations = {

    ["beach"] = {
        name = "Beach",

        clothing = {
            usage = true, 
            male = {
                ["ears_1"] = -1,
                ["ears_2"] =  0,
                ["shoes_1"] =  21,
                ["shoes_2"] =  0,
                ["bracelets_1"] =  -1,
                ["torso_1"] =  4,
                ["torso_2"] =  0,
                ["tshirt_1"] =  4,
                ["tshirt_2"] =  0,
                ["arms"] =  4,
                ["bproof_1"] =  0,
                ["bproof_2"] =  0,
                ["pants_1"] =  13,
                ["pants_2"] =  0,
                ["helmet_1"] =  -1,
                ["chain_2"] =  2,
                ["chain_1"] =  11,
            },
            female = {
                ["ears_1"] = -1,
                ["ears_2"] = 0,
                ["shoes_1"] = 13,
                ["shoes_2"] = 0,
                ["bracelets_1"] = -1,
                ["torso_1"] = 322,
                ["torso_2"] = 12,
                ["tshirt_1"] = 6,
                ["tshirt_2"] = 0,
                ["arms"] = 11,
                ["arms_2"] = 0,
                ["bproof_1"] = 0,
                ["bproof_2"] = 0,
                ["pants_1"] = 15,
                ["pants_2"] = 3,
                ["helmet_1"] = -1,
                ["glasses_1"] = 12,
                ["chain_2"] =  0,
                ["chain_1"] = 6,
            }
        },

        preanim = {
            duration = 35000, -- In ms
            car = "stretch", -- Default Limousine Car in GTA V
            license = "WEDDING", -- License Plate
            driver1PedAI = "csb_mp_agent14",
            driver2PedAI = "cs_martinmadrazo",
            seatblacklist = {0},       
            speed = 10.0,     
            start = vector4(-1522.8693, -691.7493, 27.5470, 229.1977), -- Vector 4 X, Y, Z, HEADING
            destination = vector3(-1614.4343, -1011.5482, 12.0707), -- Vector 3 X, Y, Z
            firework = {
                dict =  {"proj_indep_firework_v2", "proj_indep_firework"},
                mode = 'random', -- sync or random
                loop = 1500,
                object = {
                    {pos = vector3(-1627.0193, -930.8405, 50.0), size = 1.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-1578.5658, -968.5156, 50.0), size = 1.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-1651.3854, -1010.8507, 50.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-1528.6385, -976.2993, 50.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-1631.5425, -899.7778, 50.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                }
            }
        },

        mainanim = {
            duration = 7500, -- In ms
            sourcelocation = vector4( -1850.5800, -1249.4941, 7.6158, 335.3043), -- Vector 4 X, Y, Z, HEADING
            receiverlocation = vector4(-1851.4722, -1248.8425, 7.6158, 313.3896), -- Vector 4 X, Y, Z, HEADING

            camera = {
                pos = vector3(-1848.6437, -1246.4893, 9.2),
                rotate = 141.0
            },

            firework = {
                dict =  {"proj_indep_firework_v2", "proj_indep_firework"},
                mode = 'random', -- sync or random
                loop = 1500,
                object = {
                    {pos = vector3(-2036.8929, -1481.6897, 70.0), size = 2.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-2010.2385, -1491.2148, 70.0), size = 2.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-2045.5189, -1456.9808, 70.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-1970.6790, -1372.9733, 70.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-1941.6890, -1378.6952, 70.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-1918.5593, -1509.8248, 70.0), size = 2.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-2067.2534, -1312.3170, 70.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-2100.2231, -1272.1847, 70.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                }
            },

            male = {
                animation = function()
                    local playerPed = PlayerPedId()
                    RequestAnimDict("anim@heists@humane_labs@finale@keycards")
                    while not HasAnimDictLoaded("anim@heists@humane_labs@finale@keycards") do
                        Citizen.Wait(100)
                    end
                    TaskPlayAnim(playerPed, "anim@heists@humane_labs@finale@keycards", "ped_a_enter_loop", 8.0, -8.0, -1, 0, 0, false, false, false)
                    
                    local boneIndex = GetPedBoneIndex(playerPed, 18905)
                    local glass = CreateObject(GetHashKey("prop_drink_redwine"), 0.0, 0.0, 0.0, true, true, false)
                    AttachEntityToEntity(glass, playerPed, boneIndex, 0.10, -0.03, 0.03, -100.0, 0.0, -10.0, true, true, false, true, 1, true)
                    Citizen.Wait(7500)
                    DeleteEntity(glass)
                end,
            },

            female = {
                animation = function()
                    local playerPed = PlayerPedId()
                    RequestAnimDict("impexp_int-0")
                    while not HasAnimDictLoaded("impexp_int-0") do
                        Citizen.Wait(100)
                    end
                    TaskPlayAnim(playerPed, "impexp_int-0", "mp_m_waremech_01_dual-0", 8.0, -8.0, -1, 0, 0, false, false, false)
                    
                    local boneIndex = GetPedBoneIndex(playerPed, 24817)
                    local flower = CreateObject(GetHashKey("prop_snow_flower_02"), 0.0, 0.0, 0.0, true, true, false)
                    AttachEntityToEntity(flower, playerPed, boneIndex, -0.29, 0.40, -0.02, -90.0, -90.0, 0.0, true, true, false, true, 1, true)
                    Citizen.Wait(7500)
                    DeleteEntity(flower)
                end,
            }

        }
    },

    ["mountain"] = {
        name = "Mountain",

        clothing = {
            usage = true, 
            male = {
                ["ears_1"] = -1,
                ["ears_2"] =  0,
                ["shoes_1"] =  21,
                ["shoes_2"] =  0,
                ["bracelets_1"] =  -1,
                ["torso_1"] =  4,
                ["torso_2"] =  0,
                ["tshirt_1"] =  4,
                ["tshirt_2"] =  0,
                ["arms"] =  4,
                ["bproof_1"] =  0,
                ["bproof_2"] =  0,
                ["pants_1"] =  13,
                ["pants_2"] =  0,
                ["helmet_1"] =  -1,
                ["chain_2"] =  2,
                ["chain_1"] =  11,
            },
            female = {
                ["ears_1"] = -1,
                ["ears_2"] = 0,
                ["shoes_1"] = 13,
                ["shoes_2"] = 0,
                ["bracelets_1"] = -1,
                ["torso_1"] = 322,
                ["torso_2"] = 12,
                ["tshirt_1"] = 6,
                ["tshirt_2"] = 0,
                ["arms"] = 11,
                ["arms_2"] = 0,
                ["bproof_1"] = 0,
                ["bproof_2"] = 0,
                ["pants_1"] = 15,
                ["pants_2"] = 3,
                ["helmet_1"] = -1,
                ["glasses_1"] = 12,
                ["chain_2"] =  0,
                ["chain_1"] = 6,
            }
        },

        preanim = {
            duration = 12500, -- In ms
            car = "stretch", -- Default Limousine Car in GTA V
            license = "WEDDING", -- License Plate
            driver1PedAI = "csb_mp_agent14",
            driver2PedAI = "cs_martinmadrazo",
            seatblacklist = {0},       
            speed = 10.0,     
            start = vector4(-289.2238, 1588.2943, 338.9882, 88.2970), -- Vector 4 X, Y, Z, HEADING
            destination = vector3(-440.0683, 1589.4703, 356.8361), -- Vector 3 X, Y, Z
            firework = {
                dict =  {"proj_indep_firework_v2", "proj_indep_firework"},
                mode = 'random', -- sync or random
                loop = 1500,
                object = {
                    {pos = vector3(-454.3746, 1557.6455, 390.0), size = 1.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-476.2041, 1592.4534, 390.0), size = 1.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-469.4257, 1615.6787, 390.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-537.2264, 1618.6136, 390.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-518.3774, 1678.7009, 390.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                }
            }
        },

        mainanim = {
            duration = 7500, -- In ms
            sourcelocation = vector4(-427.9478, 1597.1531, 355.2051, 122.2425), -- Vector 4 X, Y, Z, HEADING
            receiverlocation = vector4(-429.1682, 1598.2594, 355.3250, 164.1918), -- Vector 4 X, Y, Z, HEADING

            camera = {
                pos = vector3(-431.1184, 1594.4028, 356.8),
                rotate = 325.0
            },

            firework = {
                dict =  {"proj_indep_firework_v2", "proj_indep_firework"},
                mode = 'random', -- sync or random
                loop = 1500,
                object = {
                    {pos = vector3(-372.8092, 1643.4576, 380.0), size = 1.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-391.8220, 1654.5989, 380.0), size = 1.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-362.4651, 1686.4137, 380.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-384.3184, 1719.3915, 380.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-408.7853, 1702.3219, 380.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-355.8985, 1840.4403, 380.0), size = 1.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(-378.4027, 1753.7585, 380.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(-485.1257, 1802.5956, 380.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                }
            },

            male = {
                animation = function()
                    local playerPed = PlayerPedId()
                    RequestAnimDict("anim@heists@humane_labs@finale@keycards")
                    while not HasAnimDictLoaded("anim@heists@humane_labs@finale@keycards") do
                        Citizen.Wait(100)
                    end
                    TaskPlayAnim(playerPed, "anim@heists@humane_labs@finale@keycards", "ped_a_enter_loop", 8.0, -8.0, -1, 0, 0, false, false, false)
                    
                    local boneIndex = GetPedBoneIndex(playerPed, 18905)
                    local glass = CreateObject(GetHashKey("prop_drink_redwine"), 0.0, 0.0, 0.0, true, true, false)
                    AttachEntityToEntity(glass, playerPed, boneIndex, 0.10, -0.03, 0.03, -100.0, 0.0, -10.0, true, true, false, true, 1, true)
                    Citizen.Wait(7500)
                    DeleteEntity(glass)
                end,
            },

            female = {
                animation = function()
                    local playerPed = PlayerPedId()
                    RequestAnimDict("impexp_int-0")
                    while not HasAnimDictLoaded("impexp_int-0") do
                        Citizen.Wait(100)
                    end
                    TaskPlayAnim(playerPed, "impexp_int-0", "mp_m_waremech_01_dual-0", 8.0, -8.0, -1, 0, 0, false, false, false)
                    
                    local boneIndex = GetPedBoneIndex(playerPed, 24817)
                    local flower = CreateObject(GetHashKey("prop_snow_flower_02"), 0.0, 0.0, 0.0, true, true, false)
                    AttachEntityToEntity(flower, playerPed, boneIndex, -0.29, 0.40, -0.02, -90.0, -90.0, 0.0, true, true, false, true, 1, true)
                    Citizen.Wait(7500)
                    DeleteEntity(flower)
                end,
            }

        }
    },

    ["casino"] = {
        name = "Casino",

        clothing = {
            usage = true, 
            male = {
                ["ears_1"] = -1,
                ["ears_2"] =  0,
                ["shoes_1"] =  21,
                ["shoes_2"] =  0,
                ["bracelets_1"] =  -1,
                ["torso_1"] =  4,
                ["torso_2"] =  0,
                ["tshirt_1"] =  4,
                ["tshirt_2"] =  0,
                ["arms"] =  4,
                ["bproof_1"] =  0,
                ["bproof_2"] =  0,
                ["pants_1"] =  13,
                ["pants_2"] =  0,
                ["helmet_1"] =  -1,
                ["chain_2"] =  2,
                ["chain_1"] =  11,
            },
            female = {
                ["ears_1"] = -1,
                ["ears_2"] = 0,
                ["shoes_1"] = 13,
                ["shoes_2"] = 0,
                ["bracelets_1"] = -1,
                ["torso_1"] = 322,
                ["torso_2"] = 12,
                ["tshirt_1"] = 6,
                ["tshirt_2"] = 0,
                ["arms"] = 11,
                ["arms_2"] = 0,
                ["bproof_1"] = 0,
                ["bproof_2"] = 0,
                ["pants_1"] = 15,
                ["pants_2"] = 3,
                ["helmet_1"] = -1,
                ["glasses_1"] = 12,
                ["chain_2"] =  0,
                ["chain_1"] = 6,
            }
        },

        preanim = {
            duration = 32500, -- In ms
            car = "stretch", -- Default Limousine Car in GTA V
            license = "WEDDING", -- License Plate
            driver1PedAI = "csb_mp_agent14",
            driver2PedAI = "cs_martinmadrazo",
            seatblacklist = {0},       
            speed = 10.0,     
            start = vector4(715.1537, -10.1508, 82.6989, 235.9144), -- Vector 4 X, Y, Z, HEADING
            destination = vector3(917.3098, 51.7549, 80.8989), -- Vector 3 X, Y, Z
            firework = {
                dict =  {"proj_indep_firework_v2", "proj_indep_firework"},
                mode = 'random', -- sync or random
                loop = 1500,
                object = {
                    {pos = vector3(947.1436, 100.1933, 110.0), size = 1.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(920.4595, 123.8286, 110.0), size = 1.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(893.9975, 115.6514, 110.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(856.2104, 85.3834, 110.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(894.9657, 18.5924, 110.0), size = 1.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                }
            }
        },

        mainanim = {
            duration = 7500, -- In ms
            sourcelocation = vector4(917.0170, 24.7301, 112.5517, 267.1832), -- Vector 4 X, Y, Z, HEADING
            receiverlocation = vector4(918.0615, 26.7378, 112.5495, 237.7837), -- Vector 4 X, Y, Z, HEADING

            camera = {
                pos = vector3(921.5938, 24.1332, 114.0),
                rotate = 60.0
            },

            firework = {
                dict =  {"proj_indep_firework_v2", "proj_indep_firework"},
                mode = 'random', -- sync or random
                loop = 1500,
                object = {
                    {pos = vector3(721.5295, 43.0496, 140.0), size = 2.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(773.7084, 128.3055, 140.0), size = 2.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(768.9616, 188.0390, 140.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(731.0895, 173.5514, 140.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(833.5688, 172.1434, 140.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(830.6449, 122.2400, 140.0), size = 2.0, dict = "proj_indep_firework_v2", type = "scr_firework_indep_burst_rwb"},
                    {pos = vector3(786.3163, 114.8562, 140.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                    {pos = vector3(699.5772, 196.8335, 140.0), size = 2.0, dict = "proj_indep_firework", type = "scr_indep_firework_air_burst"},
                }
            },

            male = {
                animation = function()
                    local playerPed = PlayerPedId()
                    RequestAnimDict("anim@heists@humane_labs@finale@keycards")
                    while not HasAnimDictLoaded("anim@heists@humane_labs@finale@keycards") do
                        Citizen.Wait(100)
                    end
                    TaskPlayAnim(playerPed, "anim@heists@humane_labs@finale@keycards", "ped_a_enter_loop", 8.0, -8.0, -1, 0, 0, false, false, false)
                    
                    local boneIndex = GetPedBoneIndex(playerPed, 18905)
                    local glass = CreateObject(GetHashKey("prop_drink_redwine"), 0.0, 0.0, 0.0, true, true, false)
                    AttachEntityToEntity(glass, playerPed, boneIndex, 0.10, -0.03, 0.03, -100.0, 0.0, -10.0, true, true, false, true, 1, true)
                    Citizen.Wait(7500)
                    DeleteEntity(glass)
                end,
            },

            female = {
                animation = function()
                    local playerPed = PlayerPedId()
                    RequestAnimDict("impexp_int-0")
                    while not HasAnimDictLoaded("impexp_int-0") do
                        Citizen.Wait(100)
                    end
                    TaskPlayAnim(playerPed, "impexp_int-0", "mp_m_waremech_01_dual-0", 8.0, -8.0, -1, 0, 0, false, false, false)
                    
                    local boneIndex = GetPedBoneIndex(playerPed, 24817)
                    local flower = CreateObject(GetHashKey("prop_snow_flower_02"), 0.0, 0.0, 0.0, true, true, false)
                    AttachEntityToEntity(flower, playerPed, boneIndex, -0.29, 0.40, -0.02, -90.0, -90.0, 0.0, true, true, false, true, 1, true)
                    Citizen.Wait(7500)
                    DeleteEntity(flower)
                end,
            }

        }
    },

}
```
{% endcode %}

## Viority Marry Locales

**Reminder:** You can create your own locale file in your language 👌

{% code title="en.lua" overflow="wrap" lineNumbers="true" %}
```lua
ViorityLocales['en'] = {

    -- Notify
    ["marry_request_not_enough_money"] = "You can't afford that marriage proposal!",

    ["marry_decline_receiver"] = "You have rejected the marriage proposal from %s!",
    ["marry_decline_source"] = "The marriage proposal was rejected by %s!",

    ["marry_successful"] = "💍 You are now married to %s!<br><br> 🎉 Your new last name is %s",
    ["marry_global_notify"] = "%s and %s are now married ❤️<br><br> They are now known by the common last name %s 💍",

    -- NUI
    ["nui_single"] = "LEDIG",
    ["nui_married"] = "MARRIED",

    ["nui_info_first_title"] = "FIND YOUR PARTNER",
    ["nui_info_first_desc"] = "Finding the true love is difficult, but everyone will find the final piece of their life one day and ask the never-ending question.",

    ["nui_info_second_title"] = "MARRY YOUR PRINCESS",
    ["nui_info_second_desc"] = "When the time comes, you ask the unique question whether she wants to go to the end of your life with you. Once she says yes you are officially husband and wife.",

    ["nui_info_third_title"] = "LIVE AS A MARRIED COUPLE",
    ["nui_info_third_desc"] = "Live hand in hand with your life partner until the end of your life. From now on, you will walk together forever.",

    ["nui_choose_marry"] = "APPLY",

    ["nui_option_surname"] = "YOUR SURNAME",
    ["nui_option_location"] = "YOUR LOCATION",
    ["nui_option_message"] = "YOUR MESSAGE",
    ["nui_option_message_placeholder"] = "Write a direct message to your prospective wife...",
    ["nui_option_marry"] = "MARRY",

    ["nui_loading_text"] = "Your wife must now accept the request",

    ["nui_request_surname"] = "YOUR SURNAME",
    ["nui_request_location"] = "YOUR LOCATION",
    ["nui_request_message"] = "YOUR MESSAGE",
    ["nui_request_message_placeholder"] = "Write a direct message to your prospective wife...",
    ["nui_request_decline"] = "REJECT",
    ["nui_request_marry"] = "MARRY",

    -- Interaction
    ["nui_interaction_press"] = "PRESS",
    ["nui_interaction_open"] = "TO INTERACT",

}
```
{% endcode %}
