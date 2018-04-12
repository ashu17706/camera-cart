const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
});

Moltin
  .Authenticate()
  .then(response => {
    console.log(`Authenticated, ${JSON.stringify(response, null, 2)}`);
  });


Moltin
  .Products
  .All()
  .then(products => {
    console.log(`Products: ${JSON.stringify(products, null, 2)}`);
  });