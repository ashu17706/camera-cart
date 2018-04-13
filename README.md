# Camera Cart

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

An e-commerce store for digital cameras using [Moltin](https://moltin.com/) API's.

## Development Setup
```bash
git clone https://github.com/ashu17706/camera-cart.git
cd camera-cart
yarn
yarn start
```

## Deployment
This is deployed with [now.sh](https://zeit.co/now). Please click (here for live demo)[https://camera-cart.now.sh/].

## Planning
 - Pages
  - Home Page ( Landing Page, List all the available Products)
  - Cart Page (When User clicks on the Cart)
  - Checkout Page
  - Confirmation Page (thinking, the flow)
  - Not Found Page (If someone enters the wrong URL)    


   Next Step
   [*] Add to cart in Home Page
   

   Cart Page
    [*] Increse quantity
    [*] Decrese quantity
    [*] Remove from Cart // keep removing items(As of now no seprate binding)
    [*] Checkout 

## Final Submission Notes
- Home page which fetches the Products
- Cart Page whick shows the Products and Quantity you have added
- Checkout Page: Shows the summery and checkout process in Nested Routes
- Confirmation Page: Nothing much apart from the Static Confirmation message

## Missing Things
- Validation in forms in the Checkout pages
- Checkout summery could have been better If I would have utilized checkout API from [Moltin](https://docs.moltin.com/#checkout)


## What can be better in less time ? (Low hanging fruits)
- Checkout page
- Integration with Checkout API
- Storing the whole state in LocalStorage periodiacally and Hidrating on Application bootstrap
- css organization

## What will be my first steps towards optimizing this app ?
- For sure, Route based code spliting

## Where I did not invested time ? 
- to figure out how to get images of the products. (Still thinking ?? Shoul I do it after this final commit)

```javascript
console.log("Feel free to get back with suggestion, imporvements, and feedback");
```

## Thanks for the assignment. I felt like going back to a Hackathon and fiddling with a new API. [Great experience]

## What I picked up new ?
- [redux-saga](https://redux-saga.js.org/), Till now I just managed my code with thunk style async


## Signing Off
_/\\_
