function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizzaOven() {
var randomPizzaAttribute = {
    crustType: ["thin", "thick", "hand-tossed"],
    sauceType: ["marinara", "traditional", "white"],
    cheese: ["mozzarella", "no cheese", "5 cheese"],
    toppings: ["pepporoni", "veggie supereme", "no toppings"],
}
var pizzaRandom = {
    crustType: randomPizzaAttribute.crustType[(Math.round(Math.random()*2))],
    sauceType: randomPizzaAttribute.sauceType[(Math.round(Math.random()*2))],
    cheese: randomPizzaAttribute.cheese[(Math.round(Math.random()*2))],
    toppings: randomPizzaAttribute.toppings[(Math.round(Math.random()*2))]
}
return pizzaRandom;
}
    

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven('hand-tossed', 'marinara', ['mozzarella', "feta"], ["mushrooms", "olices", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven('thin', 'olive oil', ['boufala'], ["basil", "tomato slices"]);
console.log(pizza3)

var pizza4 = pizzaOven('chicago', 'marinara', ['5 cheese'], ["no toppings"]);
console.log(pizza4)

var pizza5 = randomPizzaOven();
console.log(pizza5);