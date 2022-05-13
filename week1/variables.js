let content = "All Around the World";
console.log(content.charAt(7).toUpperCase());

let i = 10;
i += 2;
console.log(i);

let favDrink = "Tea";
console.log("My favouite drink is " + favDrink + ".");

let name = "Nick";
let age = 38;

console.log(`My name is ${name} I am ${age} years old and my favourite drink is ${favDrink}`);

name = "Fred";
age = 42;

console.log(`My name is ${name} I am ${age} years old and my favourite drink is ${favDrink}`);

let breakfast = "toast";
let lunch = "pasty";
let dinner = "pasta";

console.log(`Today I had ${breakfast} for breakfast, a ${lunch} for lunch and ${dinner} for dinner.`);

breakfast = "cereal";
lunch = "sandwich";
dinner = "pizza";

console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

let oneDay = 24*60*60*1000;
let birthday = new Date(1983,07,27);
let today = new Date();

let diffDays = Math.round(Math.abs((birthday - today)/(oneDay)));

console.log(diffDays);

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

let row = [
    `   |   |   \n ${space1} | ${space2} | ${space3}  \n   |   |   `,
    `   |   |   \n ${space4} | ${space5} | ${space6}  \n   |   |   `,
    `   |   |   \n ${space7} | ${space8} | ${space9}  \n   |   |   `,
]

    for (let i = 0; i < row.length; i++){
        console.log(row[i]);
        if(i < row.length -1){
            console.log('-----------')
        }
    }