const apiKey = Deno.env.get("CMC_API_KEY");
const args = Deno.args;
const [amount, symbol, convert] = args;

if (args.length != 3) {
  console.error("Usage: deno run main.ts <price> <source> <target>");
  Deno.exit(1);
}

if (!apiKey) {
  console.error("CMC_API_KEY environment variable is not set");
  Deno.exit(1);
}

fetch(
  "https://pro-api.coinmarketcap.com/v1/tools/price-conversion?" +
    new URLSearchParams({
      amount,
      convert,
      symbol,
    }),
  {
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": apiKey,
    },
  }
)
  .then((res) => res.json())
  .then((json) => {
    if (json.status.error_code) {
      console.error(json.status.error_message);
      Deno.exit(1);
    }
    console.log(json.data.quote[convert.toUpperCase()].price);
  });
