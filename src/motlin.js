import { gateway as MoltinGateway } from "@moltin/sdk";

const Moltin = MoltinGateway({
  client_id: "knfKpbMpcH7FN6JmKQyIoaNZKYggRZSzynulm6CY41"
});

const MotlinApi = {
  authenticate: () => Moltin.Authenticate(),

  loadProducts: () => {
    return Moltin
            .Products
            .With('main_image')
            .All()
            .then(({ data, included: { main_images }}) => {
              return data.map(product => {
                const { relationships: { main_image } } = product;
                const imageId = main_image ? main_image.data.id : false;
                return { ...product, imageUrl: imageId ? main_images.find(image => image.id === imageId).link.href : "" };
              });
            });
  },

  addToCart: productId => Moltin.Cart().AddProduct(productId, 1),

  getCart: () => Moltin.Cart().Items(),

  updateItemQuantity: (itemId, qty) =>
    Moltin.Cart().UpdateItemQuantity(itemId, qty)
};

export default MotlinApi;