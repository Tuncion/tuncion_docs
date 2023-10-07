---
description: 🔧 Available since Version 1.0.0!
---

# UpdateCurrentMission

{% code title="TriggerEvent Syntax" %}
```lua
TriggerEvent("viority_hud:client:UpdateCurrentMission", securitytoken, id, visibility, ishighlighted, content)
```
{% endcode %}

### PARAMETER

1. SecurityToken <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> EventWhitelist in ViorityCore</mark>
2. ID <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> Unique ID to identifier the mission</mark>
3. Visibility <mark style="color:blue;">(BOOL)</mark> <mark style="color:orange;">-> Show or hide? true or false</mark>
4. IsHighlighted <mark style="color:blue;">(BOOL)</mark> <mark style="color:orange;">-> Should the Mission be highlighted? true or false</mark>
5. Content <mark style="color:blue;">(STRING)</mark> <mark style="color:orange;">-> The small headline e.g. "Drive to the meeting point"</mark>

{% hint style="warning" %}
This Event is only available on client side!
{% endhint %}

{% code title="Example TriggerEvent" %}
```lua
TriggerEvent("viority_hud:client:UpdateCurrentMission", "SECURITYTOKEN", "drive_meeting_point", true, true, "Drive to the meeting point")
```
{% endcode %}
