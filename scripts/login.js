import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();



let userdata = JSON.parse(localStorage.getItem("user")) || [];
let loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", login)

function login() {


    let data = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPwd").value
    }

    console.log(data);

    if (checksignin(data.email, data.password) == true) {

        alert("sign in successful");

        window.location.href = "index.html"
    } else {
        alert("wrong username or password check again");
    }
};

function checksignin(email, password) {
    // console.log(email,password);
    let filtered = userdata.filter(function (element) {
        return email == element.email && password == element.pwd;

    })
    console.log(filtered);
    if (filtered.length == "0") {
        return false;
    } else {
        return true;
    }

}