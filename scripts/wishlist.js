import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("wishlistData")) || [];
function append(data, index) {
    let box = document.querySelector("#wishlist");
    box.innerHTML = ""
    data.forEach((el) => {
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

        let rating = document.createElement("p")
        let rate = Math.floor(Math.random() * 5) + 1;
        let star = ""
        for (let j = 0; j < rate; j++) {
            star += "⭐";
        }
        rating.innerText = star;

        let btn = document.createElement("button");
        btn.innerHTML = `&#x1f6d2 Add To Cart`;
        btn.setAttribute("class", "button")
        btn.onclick = () => {
            addtocart(el)
        };


        let btn2 = document.createElement("button");
        btn2.innerHTML = "Remove";
        btn2.setAttribute("class", "button")
        btn2.onclick = () => {
            remove(index)
        };


        div.append(img, brand, name, cate, price, rating, btn, btn2);
        box.append(div)

    })
}
append(data)

let addtocart = (prod) => {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    cartData.push(prod);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    window.location.href = "addtocart.html"
    alert("Product added to cart successfully !");
    let sum = 0;
    for (let i = 0; i < cartData.length; i++) {
        sum += cartData[i].price * 79;
    }
    localStorage.setItem("sum", sum);
    document.getElementById("cart").innerText = `My cart - ₹${sum}`;
};



function remove(index) {
    let data = JSON.parse(localStorage.getItem("wishlistData")) || [];
    data.splice(index, 1);
    localStorage.setItem("wishlistData", JSON.stringify(data));
    append(data)
}


