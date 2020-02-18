let mainWrap = document.getElementById("mainWrapper");
let userWrap = document.getElementById("userInfoWrap");
getAllUsers();


function getData(url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let myResponse = JSON.parse(this.responseText);
            console.dir(myResponse);
            callback(myResponse.data);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
function getAllUsers() {
    let allUsersUrl = "https://reqres.in/api/users?page=1";
    getData(allUsersUrl, createUsersList);
}
function getUser(id) {
    let oneUser = "https://reqres.in/api/users/"+id;
    getData(oneUser, createUserInfo);
}

function createUsersList(users) {
     for(let i=0; i<users.length; i++){
        let elementWrap = document.createElement("div");
        elementWrap.className = "elementWr";

        let nameField = document.createElement("div");
        nameField.innerHTML = users[i].first_name + " " + users[i].last_name;
        let emailField = document.createElement("div");
        emailField.innerHTML = users[i].email;
        let imageField = document.createElement("img");
        imageField.src = users[i].avatar;
        
        let moreButton = document.createElement("button");
        moreButton.id = users[i].id;
        moreButton.addEventListener("click", function () {
            moreInfo(this);
        });
        moreButton.innerHTML = "More Info";
        moreButton.className = "btn";

        elementWrap.appendChild(imageField);
        elementWrap.appendChild(nameField);
        elementWrap.appendChild(emailField);
        elementWrap.appendChild(moreButton);
        mainWrap.appendChild(elementWrap);
    }
}
function moreInfo(event) {
    mainWrap.style.display = "none";
    getUser(event.id);
}
function createUserInfo(user) {
    let nameField = document.createElement("div");
    nameField.innerHTML = user.first_name + " " + user.last_name;
    let emailField = document.createElement("div");
    emailField.innerHTML = user.email;
    let imageField = document.createElement("img");
    imageField.src = user.avatar;

    let backButton = document.createElement("button");

    backButton.addEventListener("click", function  () {
        backInfo();
    });
    backButton.innerHTML = "Back";
    backButton.className = "btn";

    userWrap.appendChild(imageField);
    userWrap.appendChild(nameField);
    userWrap.appendChild(emailField);
    userWrap.appendChild(backButton);
}
function backInfo() {
    getAllUsers();
}