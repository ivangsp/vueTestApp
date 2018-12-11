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
 * Hint: A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run or 4567654
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
 * Qn3: Write a function (say fruitPresent('fruit-name') )to find out if a given input is present in the array below using
 */
const fruitPresent = fruitName => {
    let fruits = [
        'Apple', 'Apricot', 'Avocado', 'banana', 'Blackberry', 'Blueberry', 'Boysenberry', 'Crab apples',
        'Currant', 'Cherry', 'Cherimoya', 'Chico fruit', 'Coconut', 'Cranberry', 'Custard apple', 'Date', 'dragonfruit', 'durian',
        'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'grape', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry',
        'Jabuticaba', 'Jackfruit', 'Jambul', 'jujube', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat',
        'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon',
        'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Blood orange', 'Clementine', 'Mandarine',
        'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Prune', 'Pineapple', 'Pluot',
        'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Rambutan', 'Redcurrant', 'Salal berry', 'Salak', 'Salmonberry',
        'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Ugli fruit', 'Yuzu'
    ];

    const filteredFruits = fruits.filter(fruit => {
        return fruit.toString().toLowerCase() === fruitName.toString().toLowerCase();
    });
    // debugger;
    if (filteredFruits.length > 0) {
        return true
    } 
    return false;

}

console.warn("ppp", isPalindrome(""));
console.warn("ppp", fruitPresent("apple"));
console.warn("ppp", fruitPresent("apple2"));
