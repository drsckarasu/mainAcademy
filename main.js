hideSign();
function getHoroscope (target){
    let url ="http://sandipbgt.com/theastrologer/api/horoscope/"+target.id+"/today/";

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let myResponse = JSON.parse(this.responseText);
            console.dir(myResponse);
            let sunName = document.getElementById("sName");
            sunName.innerText = myResponse.sunsign;
            let Horoscope = document.getElementById("descript");
            Horoscope.innerText = myResponse.horoscope;
            showSign();
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
function showSign() {
    let elem = document.getElementById("signDescription");
    elem.style.display = "block";
    let elem2 = document.getElementById("signWrap");
    elem2.style.display = "none";

}
function hideSign() {
    let elem = document.getElementById("signDescription");
    elem.style.display = "none";
    let elem2 = document.getElementById("signWrap");
    elem2.style.display = "block";
}