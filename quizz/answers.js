/* eslint-disable */

/**
 var expense = {
   type: 'Bussines',
   amount: '$50'
 }

 var type = expense.type;
 var amount = expense.amount;

 write the above using ES6 convention
*/

const expense = {
  type: 'Bussines',
  amount: '$50'
}

const { type, amount } = expense

/** 
 * Qn: Write a function to check if a word/phrase/sequence is a palindrome using vanilla JS
 * @summary Hint: A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run or 4567654
 * @param {string} word
 * @returns {boolean}
 */

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

/**
 * @summary Qn3: Write a function (say fruitPresent('fruit-name') )to find out if a given input is present in the array below using
 * @param {string} fruitName
 * @returns {boolean}
 */
const fruitPresent = fruitName => {
    let fruits = [
        'Apple', 'Apricot', 'Avocado', 'banana', 'Blackberry'
    ];

    return fruits
        .map(fruit => fruit.toString().toLowerCase())
        .includes(fruitName.toString().toLowerCase());
};

// Qn4
let productCart = [
    { productname:'iphone-x',qty:10, price:1000 },
    { productname:'macbook pro',qty:200, price:2000},
    { productname:'iwatch',qty:100, price:550 },
    { productname:'macbook air',qty:100, price:1000},
    { productname:'iphone 8',qty:300, price:700 },
    { productname:'iphone 7',qty:100, price:550 },
    { productname:'ipad Retina',qty:20, price:1000},
    { productname:'ipad', qty:10, price:700 },
    { productname:'Magic Mouse',qty:50, price:300},
    { productname:'Magic Trackpad',qty:75, price:200}
    ]
/**
 *  @summary Find the total cost of all products with quantity > n using vanilla JS (ES6)
 * @param {float} quantity
 * @returns {float}
 */
   
const CostOfProductForQtyGreaterThan = qty => {
    return productCart
        .filter(product => product.qty > qty)
        .reduce((totalCost, product) => product.qty * product.price + totalCost, 0);
}

/**
 * ii) Write a function that can take a product name and return the total cost.
 * @summary CostOfProduct('ipad') should output 7000
 * @param {string} productName
 * @returns {float}
 */
const CostOfProduct = productName => {
    const product =   productCart.find(product => product.productname === productName);
    if (product) {
       return product.qty * product.price; 
    }
}

/**
 * Will
 */
const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
    return this.members.map(function(member) {
    return `${member} is on team ${this.teamName}`;
    });
    }
   };
   team.teamSummary()
 


console.warn("ppp", isPalindrome(""));
console.warn("ppp", fruitPresent("apple"));
console.warn("ppp", fruitPresent("apple2"));
console.warn("cost of product > 100",CostOfProductForQtyGreaterThan(300)); // 200*2000 +300*700
console.warn("cost of product",CostOfProduct('ipad')); // 7000

