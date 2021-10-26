# Crytpoconv

Simple CLI application to convert crypto prices using Coinmarketcap api

## Requirements
- [Deno](https://deno.land)

## Install and use

Register for the [Coinmarketcap API](https://coinmarketcap.com/api/) and set the environment variable `CMC_API_KEY` appropriately.

`$ deno install -n cryptoconv https://raw.githubusercontent.com/ovo/cryptoconv/main/main.ts`

Use the application by running

`$ cryptoconv 1 eth usd`

`> 4139.8060707464265`
