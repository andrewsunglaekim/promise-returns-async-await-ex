# Promise returns async await exercise

## Requirements
In order to complete these exercises you will need the following:

- [mapquest developer api key](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register)
- [darksky api key](https://darksky.net/dev/register)

Additionally you will need to use a chrome browser for this exercise and download [this chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

> both keys are completely free and you should NOT need to assoiciate any kind of credit card.

This app is a weather app we need to fix. Currently all the templating is working as the client wants but it isn't hooked up to real apis and is using hard coded data. We're going to take this app to the next level and hook it up to the mapquest api and the darksky api.

> For these exercises we will only ever be changing the contents of script.js. The other code is irrelevant to the purpose of the exercise. It basically handles the view layers for the forecast and the animated icon.

## Exercise 1

Checkout out to the `starter-code` branch:

We're going to use the [mapquest geocoding api](https://developer.mapquest.com/documentation/geocoding-api/address/get/) to populate the summary of the weather(*what currently says `Rainy`*) as the latlong of the location typed instead. The lat long can be whatever string format you choose.

Hint* Leverage `e.target.value` to build the query against the mapquest api

> You can checkout the solution to any exercise by checking out a `exN-solution` branch `N` being the exercise number

## Exercise 2
Use either your existing solution or checkout to the `ex1-solution` branch

Now that we have a latitude and longitude from the first request, we want to use that data to make a second request to populate the three properties we need from the [darksky api](https://darksky.net/dev/docs#/dev/docs#api-request-types)

## Exercise 3
Use either your existing solution or checkout to the `ex2-solution` branch

Refactor your current solution to use `async`/`await`.
