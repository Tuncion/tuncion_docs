---
description: 🔧 This Tutorial shows how to use the event whitelist (SecurityToken)
---

# How to use the event whitelist?

{% hint style="danger" %}
THIS IS _DEPRECATED_ **SINCE** THE **TRANSITION TO KEYMASTER**
{% endhint %}

### What is the Event Whitelist?

The **Event Whitelist** is a security system developed by Viority. To put an end to unauthorized server requests via **TriggerServerEvent**. Modders or hackers are "players" who use unfair means to gain an advantage or in the worst case try everything to prevent the game fun of others. The server side is very very powerful only by indirect access to it **you can cheat money, weapons, items** and much more. With our system you can **secure serverside triggers** by first allowing the resource and providing a token, a kind of password.

### How can I whitelist/allow a resource?

1. Open the ViorityCore with a prefered editor (Visual Studio Code).
2. Find the entry `EventWhitelist` this is the place where you can register resources.

<figure><img src="../../.gitbook/assets/image (26).png" alt=""><figcaption><p>Example how the EventWhitelist entry looks like</p></figcaption></figure>

3. Add a new entry below the existing one (remember to **copy the comma** as well)
4.  Adjust both gaps: \
    **resource:** enter the original resource\_name\
    **token:** generate a random token and enter it there\


    <figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption><p>Example how a new entry for viority_cardealer can looks like</p></figcaption></figure>

{% hint style="danger" %}
For security reasons, we recommend that you use secure unguessable tokens. Tokens like **`secret`** or **`ViorityOnTop`**are insecure!
{% endhint %}

5. Always use the entered token now, if the **TriggerServerEvent** want this!

{% hint style="warning" %}
**We recommend different tokens for each resource and in each product!**
{% endhint %}
