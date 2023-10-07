---
description: 🔧 Of course you can also create your own auth!
---

# JavaScript example

## Introduction of the JavaScript example.

All templates were developed on [**Node.js**](https://nodejs.org/en/). It was tested on **Node.js v14.16.1** version. You absolutely need the[ NPM package "xmlhttprequest"](https://www.npmjs.com/package/xmlhttprequest)!

### Install the minimum required packages

```markup
$ npm i xmlhttprequest
```

{% hint style="warning" %}
&#x20;The NPM function comes with Node.js. Please ensure that you have Node.js installed.
{% endhint %}

### First example with minimum packages

```javascript
  //Define our console.log shorter so we can use it faster.
  const log = console.log

  //Define our XMLHttpRequest
  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  //Create the request
  const xhr = new XMLHttpRequest();
  
  //Adjust the required variables (the link, the headers etc.)
  xhr.open('post', 'https://script.viority.eu/api/auth');
  xhr.setRequestHeader('customer_id', "Viority_Customer_XXX");
  xhr.setRequestHeader('script_id', "Viority_Script_XXX");
 
  //Send the request over the network
  xhr.send();
  
  //Wait for an answer from the API
  xhr.onreadystatechange = async function() {

      //If the answer is ready
      if(xhr.readyState == 4) {
        
          //If you want to see the row answer from the API
          //log(xhr.responseText)

          //The Authentification failed because you are spamming too much.
          if (xhr.responseText == "Too many requests, please try again later.") {

              //Just wait 1500 ms to prevent stucking (timeout)
              setTimeout(async () => {

              //if you want clear the console
              process.stdout.write('\x1Bc'); 
  
              //Console.log the Answer, your IPv4 address and where you can find help
              log(`[Script-Lock]  Authorization: ${xhr.responseText} `);  
              log(`[Script-Lock]  Help: Please try it in a few minutes again!`);  

              //Stop the script to avoid scam attempts.
              await process.exit() 

            }, 1500); // Change here the ms for the wait (timeout)

            //Return all because the response is not an JSON
            return;
          }

          //Make the JSON response (answer) accessable
          var json = JSON.parse(xhr.responseText)

          //The Authentification was successfull
          if(json.name == "SUCCESSFUL_AUTHENTIFICATION") {

            //Just wait 1500 ms to prevent stucking (timeout)
            setTimeout(async () => {

            //if you want clear the console
            process.stdout.write('\x1Bc'); 

            //Console.log the Answer, your IPv4 address and where you can find help
            log(`[Script-Lock]  Authorization: ${json.message} `);
            log(`[Script-Lock]  IPv4: ${json.IPv4} `);
            log(`[Script-Lock]  Help Docs: ${json.links[0].docs} `);
            log(`[Script-Lock]  Support Discord: ${json.links[0].support} `);

            }, 1500); // Change here the ms for the wait (timeout)
          }

          //The Authentification was not successfull (IP is blocked etc.)
          if(json.name == "UNAUTHORIZED_AUTHENTIFICATION") {

            //Just wait 1500 ms to prevent stucking (timeout)
            setTimeout(async () => {

              //if you want clear the console
              process.stdout.write('\x1Bc'); 
  
              //Console.log the Answer, your IPv4 address and where you can find help
              log(`[Script-Lock]  Authorization: ${json.message} `);
              log(`[Script-Lock]  IPv4: ${json.IPv4} `);
              log(`[Script-Lock]  Help Docs: ${json.links[0].docs} `);
              log(`[Script-Lock]  Support Discord: ${json.links[0].support} `);
  
              //Stop the script to avoid scam attempts.
              await process.exit() 

              }, 1500); // Change here the ms for the wait (timeout)
          }


        };
    
    };
    
    //When the API does not respond :( 
    xhr.onerror = async function() {
    
        //if you want clear the console
        process.stdout.write('\x1Bc');     
    
      	//Console.log this bad answer (It is the best to leave the Discord there so we can resolve the issue as soon as possible.)
        log(`[Script-Lock]  Authorization: I can not reach the API. Please contact an Developer!`)
        log(`[Script-Lock]  Support Discord: https://discord.gg/323HfHyGW4`);

        //Stop the script to avoid scam attempts.
        await process.exit() 

    };
    
    // © Copyright Viority Development 2021
    // No commercial use permitted
    // Copyright infringement can be punished by up to five years in prison and a $250,000 fine. Repeat offenders can be sentenced to up to ten years in prison.
```



### Let's add a bit of color (OPTIONAL)

Install the ["Chalk" Package](https://www.npmjs.com/package/chalk).

```javascript
$ npm i chalk
```

{% hint style="warning" %}
This step is optional and only improves the appearance, not the functionality.
{% endhint %}



### Second example with some awesome colors

```java
  //Define our console.log shorter so we can use it faster.
  const log = console.log

  //Define our chalk package
  const chalk = require('chalk');

  //Define our XMLHttpRequest
  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  //Create the request
  const xhr = new XMLHttpRequest();
  
  //Adjust the required variables (the link, the headers etc.)
  xhr.open('post', 'https://script.viority.eu/api/auth');
  xhr.setRequestHeader('customer_id', "Viority_Customer_XXX");
  xhr.setRequestHeader('script_id', "Viority_Script_XXX");
 
  //Send the request over the network
  xhr.send();
  
  //Wait for an answer from the API
  xhr.onreadystatechange = async function() {

      //If the answer is ready
      if(xhr.readyState == 4) {
        
          //If you want to see the row answer from the API
          //log(xhr.responseText)

          //The Authentification failed because you are spamming too much.
          if (xhr.responseText == "Too many requests, please try again later.") {

            //Just wait 1500 ms to prevent stucking (timeout)
            setTimeout(async () => {

              //if you want clear the console
              process.stdout.write('\x1Bc'); 
  
              //Console.log the Answer, your IPv4 address and where you can find help
              log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Authorization: ${chalk.hex('#01A9DB')(`${xhr.responseText}`)}`);  
              log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Help: ${chalk.hex('#01A9DB')(`Please try it in a few minutes again!`)}`);  

              //Stop the script to avoid scam attempts.
              await process.exit() 

            }, 1500); // Change here the ms for the wait (timeout)

            //Return all because the response is not an JSON
            return;
          }

          //Make the JSON response (answer) accessable
          var json = JSON.parse(xhr.responseText)

          //The Authentification was successfull
          if(json.name == "SUCCESSFUL_AUTHENTIFICATION") {

            //Just wait 1500 ms to prevent stucking (timeout)
            setTimeout(async () => {

            //if you want clear the console
            process.stdout.write('\x1Bc'); 

            //Console.log the Answer, your IPv4 address and where you can find help
            log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Authorization: ${chalk.hex('#01A9DB')(`${json.message}`)}`);
            log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} IPv4: ${chalk.hex('#01A9DB')(`${json.IPv4}`)}`);
            log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Help Docs: ${chalk.hex('#01A9DB')(`${json.links[0].docs}`)}`);
            log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Support Discord: ${chalk.hex('#01A9DB')(`${json.links[0].support}`)}`);

            }, 1500); // Change here the ms for the wait (timeout)
          }

          //The Authentification was not successfull (IP is blocked etc.)
          if(json.name == "UNAUTHORIZED_AUTHENTIFICATION") {

            //Just wait 1500 ms to prevent stucking (timeout)
            setTimeout(async () => {

              //if you want clear the console
              process.stdout.write('\x1Bc'); 
  
              //Console.log the Answer, your IPv4 address and where you can find help
              log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Authorization: ${chalk.hex('#01A9DB')(`${json.message}`)}`);
              log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} IPv4: ${chalk.hex('#01A9DB')(`${json.IPv4}`)}`);
              log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Help Docs: ${chalk.hex('#01A9DB')(`${json.links[0].docs}`)}`);
              log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Support Discord: ${chalk.hex('#01A9DB')(`${json.links[0].support}`)}`);
    
              //Stop the script to avoid scam attempts.
              await process.exit() 

              }, 1500); // Change here the ms for the wait (timeout)
          }


        };
    
    };
    
    //When the API does not respond :( 
    xhr.onerror = async function() {

        //if you want clear the console
        process.stdout.write('\x1Bc'); 

      	//Console.log this bad answer (It is the best to leave the Discord there so we can resolve the issue as soon as possible.)
        log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Authorization: ${chalk.hex('#01A9DB')(`I can not reach the API. Please contact an Developer!`)}`)
        log(`${chalk.hex('#FF4000').bold('[Script-Lock] ')} Support Discord: ${chalk.hex('#01A9DB')(`https://discord.gg/323HfHyGW4`)}`);

        //Stop the script to avoid scam attempts.
        await process.exit() 

    };


    // © Copyright Viority Development 2021
    // No commercial use permitted
    // Copyright infringement can be punished by up to five years in prison and a $250,000 fine. Repeat offenders can be sentenced to up to ten years in prison.
```

{% hint style="danger" %}
© Copyright Viority Development 2021

No commercial use permitted

Copyright infringement can be punished by up to five years in prison and a $250,000 fine. Repeat offenders can be sentenced to up to ten years in prison.
{% endhint %}
