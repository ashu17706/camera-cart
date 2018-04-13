import { gateway as MoltinGateway } from "@moltin/sdk";

const Moltin = MoltinGateway({
  client_id: "knfKpbMpcH7FN6JmKQyIoaNZKYggRZSzynulm6CY41"
});

const MotlinApi = {
  authenticate: () => Moltin.Authenticate(),

  loadProducts: () => Moltin.Products.All(),

  addToCart: productId => Moltin.Cart().AddProduct(productId, 1),

  getCart: () => Moltin.Cart().Items(),

  updateItemQuantity: (itemId, qty) =>
    Moltin.Cart().UpdateItemQuantity(itemId, qty)
};

export default MotlinApi;