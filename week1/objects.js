// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",

//         openCafe() {
//             if (this.hasSpecialOffers){
//                 return "Come on in";
//             }
//         },
//         closedCafe: () => {
//             return "We are closed, come back tomorrow!"
//         }
// };

// console.log(cafe.openCafe());


// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// const alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// let day = {
//     Monday: "weekday",
//     Tuesday: "weekday",
//     Wednesday: "weekday",
//     Thursday: "weekday",
//     Friday: "weekday",
//     Saturday: "weekend",
//     Sunday: "weekend",
// }

// const setAlarm = (day)=> {
//     if (day == "weekday"){
//         console.log(`It's a weekday, ${alarm.weekdayAlarm}`);
//     }else if (day == "weekend"){
//         console.log(`It's the weekend, ${alarm.weekendAlarm}`);
//     }else{
//         console.log("What day is that?")
//     }
// }

// setAlarm(day.Monday)

// const person = {
//     name: "Nick",
//     age: 38,


// sayHi(){
//     return `Hello my name is ${this.name}`
// }
// }

// console.log(person.sayHi());


// const pet = {
//     name: "Russ",
//     typeOfPet: "Dog",
//     age: "2",
//     colour: "Blue",
// eat() {
//     return `${this.name} is eating`;
// },
// drink() {
//     return `${this.name} is drinking`;
// },
// }

// console.log(pet.eat());

// console.log(pet.drink());


let order = [];
const coffeeShop = {
    branch: "Manchester",
    drinksPrices: {
        "Cappuccino": 5,
        "Latte": 4,
        "Filter coffee": 3,
        "Tea": 3,
        "Hot chocolate": 4
    },
    foodPrices: {
        "Pizza": 8,
        "Chips": 1,
        "Tapas": 6,
        "Veggie Burger": 10
    },
    drinksOrdered(drink1,drink2){
        let drinks = Object.keys(this.drinksPrices); 
        let drinkValues = Object.values(this.drinksPrices); 
        order.push(drinkValues[drinks.indexOf(drink1)]);
        order.push(drinkValues[drinks.indexOf(drink2)]);
        return `For drinks you've ordered ${drink1} and ${drink2}`;},
    foodOrdered(food1,food2){
        let foods = Object.keys(this.foodPrices); 
        let foodValues = Object.values(this.foodPrices); 
        order.push(foodValues[foods.indexOf(food1)]);
        order.push(foodValues[foods.indexOf(food2)]);
        return `For food you've ordered ${food1} and ${food2}`;
    }
}
console.log(coffeeShop.drinksOrdered("Latte", "Tea"));
console.log(coffeeShop.foodOrdered("Pizza", "Chips"));

let total = 0;
for(i=0;i<order.length;i++){
    total+=order[i];
}

console.log(`Your total comes to £${total}.`);

