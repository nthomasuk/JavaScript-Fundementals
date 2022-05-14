// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds!");
// }

// pressGrindBeans();

// let coffeeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();

// let accnum = 32156454;

// const cashWithdrawl = (amount, accnum) => {
//     console.log(`withdrawing ${amount} from account ${accnum}`);
// };

// cashWithdrawl(100,accnum);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addUp(2, 5));

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(15) + "°F");

// Activity 1 -

const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}

console.log(factorial(33));

//END ACTIVITY 1

//ACTIVITY 2 -

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(` Order: ${orderCount} needs ${topping1} and ${topping2} `);
//     orderCount++;
// }

// takeOrder("pineapple", "ham");
// takeOrder("pineapple", "ham");
// takeOrder("pineapple", "ham");

//END ACTIVITY 2

//ACTIVITY 3 -

// const pin = "7777";
// let balance = 100;

// const cashWithdrawl = (enteredPin, request) => {
//     let remainingBalance = balance - request;
//     if (pin === enteredPin && request <= balance){
//         console.log(`Withdrawl of $${request} successful.\nRemaining balance: $${remainingBalance}`)
//     } else if (pin !== enteredPin){
//         console.log("Incorrect PIN");
//     } else {
//         console.log("Insufficient balance");
//     }
// }

// cashWithdrawl("7776", 110);

//END ACTIVITY 3