function register() {
    let users = [];
    let user = {};

    let email = document.getElementById("email");
    let fullname = document.getElementById("fullname");
    let pass = document.getElementById("password");
    let confpass = document.getElementById("confirmpass");
    if(pass === confpass){
        user.email = email;
        user.fullname = fullname;
        user.password = pass;
        users.push(user);
    }
 }
