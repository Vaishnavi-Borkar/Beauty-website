
let form = document.querySelector("#details-form")
form.addEventListener("submit", CheckoutDetails)


function ShowDetails(name, house, mobile, city, state, pin) {
    this.name = name
    this.house = house;
    this.mobile = mobile;
    this.city = city;
    this.state = state;
    this.pin = pin;
}

function CheckoutDetails(event) {
    event.preventDefault()
    // let form = document.getElementById("details-form");



    let name = form.name.value;
    let house = form.house.value;
    let mobile = form.mobile.value;
    let city = form.city.value;
    let state = form.state.value;
    let pin = form.pin.value;

    let details = new ShowDetails(name, house, mobile, city, state, pin)
    let user = JSON.parse(localStorage.getItem("user")) || [];

    user.push(details)
    console.log(user)
    localStorage.setItem("user", JSON.stringify(user))
    console.log('details:', details)

    alert("Your Order Is Confirmed")


}