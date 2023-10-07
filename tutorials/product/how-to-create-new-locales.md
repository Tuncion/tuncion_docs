---
description: 🔧 This Tutorial shows how to create new locale language instead of de/en
---

# How to create new locales?

In this example we will create the Locale **en** (**English**). You can create **any other language** we recommend to use the **official language codes** for the locale prefix.

**1.** **Create and modify the locale file**

&#x20;   1.1 Go to the Product folder to path (`/settings/locales`).\
&#x20;   1.2 Copy one of the existing locale file and rename it to your locale prefix (`xx.lua`).\
&#x20;   1.3 Open the created `xx.lua` file.\
&#x20;   1.4 Register the Locale with the prefered locale prefix.

<figure><img src="../../.gitbook/assets/image (43).png" alt="" width="467"><figcaption><p>Locales Example with Localeprefix</p></figcaption></figure>

&#x20;   1.5 Change all Locale values to your specific Language.

**2.** **Adjust the locale**

&#x20;   2.1 Open the ViorityCore with a prefered editor (Visual Studio Code).\
&#x20;   2.2 Change the gap `Locales` to your specific locale prefix (In out case **en)**

{% hint style="success" %}
Now that you have created your own locale, it is valid under your chosen prefix
{% endhint %}
