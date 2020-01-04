var age = +prompt("Enter your age");
var gender = prompt("Enter your gender");

if (age>34 && gender==="female"){
    alert("You are woman older than 34 years");
}else if(age<34 && gender==="female"){
    alert("Your are woman younger than 34 years")
}else if(age>34 && gender==="male"){
    alert("Your are man older than 34 years")
}else if(age<34 && gender==="male"){
    alert("Your are man younger than 34 years")
}
