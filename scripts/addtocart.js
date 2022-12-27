import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("cartData")) || [];
function append(data) {
    let box = document.querySelector("#addtocart");
    box.innerHTML = "";
    let total = 0;
    data.forEach((el, index) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image_link;
        img.onclick = () => {
            product(el)
        };

        let brand = document.createElement("p");
        brand.innerText = el.brand;
        let name = document.createElement("p");
        name.innerText = el.name;
        let cate = document.createElement("p");
        cate.innerText = el.category;

        let price = document.createElement("p");
        price.innerHTML = `&#8377 ${Math.floor(el.price * 79)}`;
        total = total + el.price * 79;
        document.querySelector("#cart_total").innerText = total;


        let rating = document.createElement("p")
        let rate = Math.floor(Math.random() * 5) + 1;
        let star = ""
        for (let j = 0; j < rate; j++) {
            star += "⭐";
        }
        rating.innerText = star;

        let btn = document.createElement("button");
        btn.innerHTML = "Remove";
        btn.setAttribute("class", "button")
        btn.onclick = () => {
            remove(index)
        };


        // let btn2 = document.createElement("button");
        // btn2.innerHTML = `&#129293`;
        // btn2.setAttribute("class", "button")
        // btn2.onclick = () => {
        //     wishlist(el)
        // };


        div.append(img, brand, name, cate, price, rating, btn);
        box.append(div)

    })
}
append(data)

function remove(index) {
    let data = JSON.parse(localStorage.getItem("cartData")) || [];
    data.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(data));
    append(data)
}


document.querySelector("#checkout").addEventListener("click", function () {
    check()
})

function check() {
    window.location.href = "checkout.html"
}