// let name = prompt("What is your name?");
// let age = prompt("What is your age?");
// let text = `Hello ${name}. Your age is ${age}`;
// prompt(text);
// let arr = [34,-23,11,1,8,29,4,6,-3];
//
// for (let i=0; i<arr.length; i++){
//     if (i%2===0){
//         alert("парне");
//     } else{
//         alert("непарне");
//     }
// }

let chambers = [["oleg","igor","eugeniy","orest"], ["lili","mila","nina"],["pasha","nick","katya"]];
console.log(chambers);

for(var i = 0; i<chambers.length; i++){
    for(let j=0; j<chambers[i].length; j++){
        if(chambers[i][j] === "katya"){
            console.log("we found her in " + i+"1");
        }
    }
}