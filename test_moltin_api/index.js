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
  .With('main_image')
  .All()
  .then(({data, included: { main_images }}) => {
    const products = data.map(product => {
      const imageId = product.relationships.main_image ? product.relationships.main_image.data.id : false;

       return {
         ...product,
         imageUrl: imageId 
                    ? main_images.find(image => image.id === imageId).link.href
                    : ''
       }
    });

    console.log(products);
  })
  .catch(error => {
    console.error(error);
  });