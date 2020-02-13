function checkedYes(elem) {
    console.dir(elem);
    if(elem.checked === true){
        let noBox = document.getElementById("no");
        if(noBox.checked === true){
            noBox.checked = false;
        }
        let lable = document.getElementById("carModel");
        if (lable.hasChildNodes() === false){
            let modelInput = document.createElement("Input");
            modelInput.placeholder = "Car Model";
            let modulText = document.createTextNode("Введіть марку автомобіля");
            lable.appendChild(modulText);
            lable.appendChild(modelInput);
        }
    }
}
function checkedNo(elem) {
    if (elem.checked === true){
        let yesBox = document.getElementById("yes");
        if (yesBox.checked === true){
            yesBox.checked = false;
            let lable = document.getElementById("carModel");
            lable.innerHTML = "";
            lable.removeChild(lable.firstChild);
        }
    }
}
