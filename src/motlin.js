import { gateway as MoltinGateway } from "@moltin/sdk";

const Moltin = MoltinGateway({
  client_id: "knfKpbMpcH7FN6JmKQyIoaNZKYggRZSzynulm6CY41"
});

Moltin.Authenticate();

const MotlinApi = () => {
  return Moltin.Products.All();
};

export default MotlinApi;