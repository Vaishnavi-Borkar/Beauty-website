function navbar() {
    return `  <div id="searchbar">
    <input type="text" placeholder="Search whatever you want" id="query">
    <img class="icons" id="search" src="https://img.icons8.com/dusk/344/find-and-replace.png" alt="">
</div>
<div id="logos">
    <div>
        <img class="icons" src="https://img.icons8.com/office/344/shopping-cart.png" alt="cart">
        <p><a href="addtocart.html">Cart</a></p>
    </div>
    <div>
        <img class="icons" src="https://img.icons8.com/nolan/344/wish-list.png" alt="wishlist">
        <p><a href="wishlist.html">Wishlist</a></p>
    </div>
    <div>
        <img class="icons" src="https://img.icons8.com/dusk/344/test-account.png" alt="profile">
        <p><a href="profile.html">Profile</a></p>
    </div>
    <div>
        <img class="icons" src="https://img.icons8.com/dusk/344/sign-up.png" alt="">
        <p><a href="signup.html">Signup</a></p>
    </div>
    <div>
        <img class="icons" src="https://img.icons8.com/bubbles/2x/login-rounded-right.png" alt="">
        <p><a href="login.html">Login</a></p>
    </div>
</div>`
}

export default navbar;