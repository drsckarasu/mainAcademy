/* let name = prompt("What is your name?");
 let age = prompt("What is your age?");
 let text = `Hello ${name}. Your age is ${age}`;
 prompt(text);

 let arr = [34,-23,11,1,8,29,4,6,-3];
 for (let i=0; i<arr.length; i++){
    if (i%2===0){
         alert("парне");
     } else{
         alert("непарне");
     }
 }

let chambers = [["oleg","igor","eugeniy","orest"], ["lili","mila","nina"],["pasha","nick","katya"]];
 console.log(chambers);
 for(var i = 0; i<chambers.length; i++){
     for(let j=0; j<chambers[i].length; j++){
         if(chambers[i][j] === "katya"){
             console.log("we found her in " + i+"1");
         }
   }
}

let arr = [5, 0, 6, 8, 2, 5, 0, -3, 0, 9, 3];
let newArr = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]!==0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);

let arr = [[2,3,5,4],[1,4,3,9],[2,4,3,9],[2,6,4,8]];
let count =0;
for(let i=0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
        if(i===j){
           if(arr[i][j]%2=== 0){
                count++;
            }
        }
    }
}
console.log(count);

let arr = [[2,3,5,4],
           [1,4,3,9],
           [2,4,3,9],
           [2,6,4,8]];
for(let i=0; i<arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (i === j) {
            arr[i][j] = 1;
        }
        if (i < j) {
            arr[i][j] = 0;
        }
        if (j < i) {
            arr[i][j] = 2;
        }
    }
}
console.log(arr);

let xiomiUsers = [];
let kabinets = [[{name:"Oleg",phone:"xiomi"},{name:"Igor",phone:"samsung"},{name:"Ivan",phone:"iphone"}],
                [{name:"Orest",phone:"xiomi"},{name:"Ljuda",phone:"meizu"},{name:"Olga",phone:"xiomi"}],
                [{name:"Roma",phone:"xiomi"},{name:"Dima",phone:"iphone"},{name:"Drake",phone:"xiomi"}],
                [{name:"Lesya",phone:"huawei"},{name:"Nick",phone:"samsung"},{name:"Josh",phone:"xiomi"}]];
for(let i=0; i<kabinets.length; i++){
    for(let j=0; j<kabinets[i].length; j++){
        if(kabinets[i][j].phone==="xiomi"){
            xiomiUsers.push(kabinets[i][j]);
        }
    }
}
console.log(xiomiUsers);

function max(a,b){
    if (a>b){
        return a;
    } else{
        return b;
    }
}
function min(a,b){
    if(a>b){
        return b;
    } else{
        return a;
    }
}
function  task(a,b,c,d) {
    let min1 = min (a,b);
    let min2 = min (c,d);
    return max(min1,min2);
}
let result = task(1,2,3,4);
console.log(result);

function square(a,b,c) {
    if(a===b){
        isosceles(c,a)
    } else if(a===c) {
        isosceles(b,a)
    } else if(c===b) {
        isosceles(a,b)
    } else{
     Geron(a,b,c);
     }
}
function isosceles(b,a) {
    let S = (b/2)*Math.sqrt((a+(b/2))*(a-(b/2)));
    console.log(S);
    return S;
}
function Geron(a,b,c) {
    let P = a+b+c;
    let p = P/2;
    let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(S);
    return S;
}
let result = square(6,6,4);
console.log(result);

let str = "hello";
let txt = str.length;
let change = str.replace("hello","world");
let arr = str.split("");
let backwords = arr.reverse();
let backStr = backwords.join("");
console.log(str,txt,change, backStr)*/

