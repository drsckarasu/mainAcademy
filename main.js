function checkedYes(elem) {
    console.dir(elem);
    if(elem.checked === true){
        let modelInput = document.createElement("Input");
        modelInput.placeholder = "Car Model";
        let modulText = document.createTextNode("Введіть марку автомобіля");
        let lable = document.getElementById("carModel");
            lable.appendChild(modulText);
            lanle.appendChild(modelInput);
    }
}
function f() {

}