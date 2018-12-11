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
    debugger;
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

console.warn("ppp", isPalindrome(""));
