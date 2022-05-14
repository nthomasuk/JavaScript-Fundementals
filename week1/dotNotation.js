// // console.log("Hello  World!".toUpperCase());
// // console.log(Math.floor(Math.random() * 10));

// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("-----------")
// console.log("   |   |   ")
// console.log("   |   |   ")
// console.log("   |   |   ")

//ACTIVITY 1 -

let row = [
    "   |   |   \n   |   |   \n   |   |   ",
    "   |   |   \n   |   |   \n   |   |   ",
    "   |   |   \n   |   |   \n   |   |   ",
]

    for (let i = 0; i < row.length; i++){
        console.log(row[i]);
        if(i < row.length -1){
            console.log('-----------')
        }
    }

//END ACTIVITY 1
