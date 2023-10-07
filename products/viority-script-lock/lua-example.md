---
description: 🔧 Of course you can also create your own auth!
---

# Lua example

## Select your Script&#x20;

Add this request in your server sided script:

```lua
-- Auth Variable
local auth = false;

-- Make an request to the API
PerformHttpRequest("https://script.viority.eu/api/auth", function(err, text, headers)

print(text) -- Print the row response from API in the console

local answer = json.decode(text)
local name = answer.name
    
-- If the Auth was successfull
if (name == "SUCCESSFUL_AUTHENTIFICATION") then

    auth = true; -- Change the Auth Variable to true

    print(answer.message) -- Print the message from the API in the console

-- If the Auth was denied
elseif (name == "UNAUTHORIZED_AUTHENTIFICATION") then

    print(answer.message) -- Print the message from the API in the console
    print("Your IPv4: " .. answer.IPv4) -- Print your IPv4 Address
    
end

end, 'POST', nil , {['customer_id'] = 'YOUR CUSTOMER ID' , ['script_id'] = 'YOUR SCRIPT ID'})

```

{% hint style="success" %}
You can of course redesign the console prints and the request by yourself
{% endhint %}

