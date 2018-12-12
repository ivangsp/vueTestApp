# solutions to the Questions

## Qn1 Write the above using ES6 conventions

```js
const expense = {
  type: 'Bussines',
  amount: '$50'
}

const { type, amount } = expense
```

## Qn2 Write a function to check if a word/phrase/sequence is a palindrome using vanilla JS.

```js
const isPalindrome = word => {
    let neword = '';
    const wordArray = word.toString().replace(/ /g,'').split("");
    for (let i = wordArray.length-1; i >= 0; i-- ) {
    neword = neword + wordArray[i];
    }

    if (neword === word.toString().replace(/ /g,'')) {
        return true
    }
    return false;
}
```

## Qn3.  Write a function (say fruitPresent('fruit-name') )to find out if a given input is present in the array below using ES6

```js
const fruitPresent = fruitName => {
    let fruits = [
        'Apple', 'Apricot', 'Avocado', 'banana', 'Blackberry'
    ];

    return fruits
        .map(fruit => fruit.toString().toLowerCase())
        .includes(fruitName.toString().toLowerCase());
};

```

## Qn4

### i  Find the total cost of all products with quantity > n using vanilla JS (ES6)

```js
let productCart = [{ productname:'iphone-x',qty:10, price:1000 }];

const CostOfProductForQtyGreaterThan = qty => {
    return productCart
        .filter(product => product.qty > qty)
        .reduce((totalCost, product) => product.qty * product.price + totalCost, 0);
}
```

### ii  Write a function that can take a product name and return the total cost

```js
let productCart = [{ productname:'iphone-x',qty:10, price:1000 }];

const CostOfProduct = productName => {
    const product =   productCart.find(product => product.productname === productName);
    if (product) {
       return product.qty * product.price; 
    }
}
```

## Qn. 5

### i Will the above code return an error

- The  code will not return an errror but will not work as expected.

### ii.  Possible Fix

- The reason it does not work, its because  `this` in  the map  function is bound to the context of the function `teamSummary` which does not have variable `teamName`.

- This can be fixed by using the arrow function inside the map function. In arrow function  `this` is  lexically bound meaning it uses the `this` from the code that contains arrow function.

```js
const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
    return this.members.map((member) => {
    return `${member} is on team ${this.teamName}`;
    });
    }
   };
   team.teamSummary()  
```

- This can also be fixed by using the `bind` key word

 ```js
  const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
    return this.members.map(function(member){
    return `${member} is on team ${this.teamName}`;
    }.bind(this));
    }
   };
   team.teamSummary();

 ```
