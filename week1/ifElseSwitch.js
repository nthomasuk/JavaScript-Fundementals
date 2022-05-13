// let weather = "sunny";

// if (weather == "sunny"){
//     console.log("Well, I better wear some suncream!")
// } else if (weather == "rainy") {
//     console.log("Better take an umbrella!")
// } else {
//     console.log("Hmmm, it could go either way!")
// }


// if (1 != "1") {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let place = "Manc";
// let weather1 = "Cloudy";

// if (place == "Manc" && weather1 == "Sunny"){
//     console.log("Check again");
// } 
// else if (place == "Manc" && weather1 == "Rain"){
//     console.log("Obvs");
// } 
// else {
//     console.log("What?! It isn't raining?");
// }


// let car = "Peugeot";

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an American car!");
//         break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("You've got a French boy!");
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japanese cars are dead quiet!");
//         break;
//     case "Mercedes":
//         console.log("You are a proper posh German!");
//         break;
//     case "Volkswagen":
//         console.log("German aren't that bad at all!");
//         break;
//     case "Hyundai":
//     case "Kia":
//         console.log("South Korean caras are getting popular!")
//         break;
//     default:
//         console.log("Your car is not in the top ten companies in the world!")
// }

// let age = 21;
// let country = "UK";

// if (age == 21 && country == "UK"){
//     console.log("Yes, I can serve you.");
// } else {
//     console.log("You aren't old enough");
// }

// let topping = "Pepperoni";

// switch(topping){
//     case "Cheese":
//     case "Pineapple":
//     case "Olives":
//     case "chicken":
//         console.log("These are important ingredients for my pizza.");
//         break;
//     case "Pepperoni":
//         console.log("I don't mind pepperoni.");
//         break;
//     default:
//         console.log("This dos not belong on pizza!")
// }

// let password = "password1";

// if (password < 8){
//     console.log("Password too short")
// } else{
//     console.log(`${password}`) 
// }

// let num = 15;

// if (num % 3 == 0 || num % 5 == 0){
//     console.log("This number is divisible by three or five.")
// } else {
//     console.log("This number is not divisible by three or five.")
// }

// let num = 3;

// if (num % 3 == 0 && num % 5 == 0){
//     console.log("Fizz Buzz!");
// } else if (num % 3 == 0){
//     console.log("Fizz");
// } else if (num % 5 == 0){
//     console.log("Buzz");
// } else{
//     console.log(num);
// }


// let num = 123217;
// let numString = num.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }

let time = 7;
let work = "Manchester";
let home = "Warrington";

if (time == 8){
  console.log(`I am commuting to work in ${work}`);
} else if (time == 7){
  console.log(`I am at home in ${home}`);
} else if (time == 9){
  console.log(`I am at work in ${work}`)
} else {
  console.log(`If it is between 9 and 5 I am at work in ${work}. Otherwise, I'm at home in ${home}`);
}