
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let productarray = JSON.parse(localStorage.getItem("product")) || [];


let image = [

    "https://img.freepik.com/free-psd/makeup-special-offer-banner-template_23-2148741880.jpg",
    "https://img.freepik.com/free-vector/realistic-makeup-artist-social-media-post-template_52683-84295.jpg?w=2000",
    "https://image.shutterstock.com/shutterstock/photos/1636593307/display_1500/stock-vector-makeup-products-realistic-d-vector-illustration-face-cosmetic-flat-lay-collection-isolated-on-1636593307.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/80/57/big-beauty-sale-cosmetics-banner-for-shopping-vector-24048057.jpg"
]

let i;
let slideShow = () => {
    i = 0;
    let slide = document.querySelector("#slideshow");
    setInterval(() => {
        if (i === image.length) {
            i = 0;

        }
        let img = document.createElement("img");
        img.src = image[i];
        img.setAttribute("id", "slideimg")
        slide.innerHTML = "";
        slide.append(img);
        i++;
    }, 3000)
}

slideShow();


async function getdata() {
    let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick`);
    let data = await res.json();
    append(data)
    console.log(data)
}

getdata()

function append(data) {
    let box = document.querySelector("#trending");
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
        btn2.innerHTML = `&#129293`;
        btn2.setAttribute("class", "button")
        btn2.onclick = () => {
            wishlist(el)
        };


        div.append(img, brand, name, cate, price, rating, btn, btn2);
        box.append(div)

    })
}


let product = (data) => {
    // localStorage.clear("product");
    // productarray.push(data)
    localStorage.setItem("product", JSON.stringify(data))
    window.location.href = "product.html"
};


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

let wishlist = (prod) => {
    let wishlistData = JSON.parse(localStorage.getItem("wishlistData")) || [];
    wishlistData.push(prod);
    localStorage.setItem("wishlistData", JSON.stringify(wishlistData))
    window.location.href = "wishlist.html"
    alert("wishlist");
};



