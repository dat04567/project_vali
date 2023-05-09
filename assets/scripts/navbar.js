

let sign_in = document.querySelector(".sign-in");
sign_in.addEventListener("mouseover", () => {
    showSignIn();
})


let showSignIn = () => {
    let signIn_div = document.querySelector(".signin_dropdown_content");
    signIn_div.style.display = "block";
}
let signIndiv = document.querySelector(".signin_dropdown_content");
signIndiv.addEventListener("mouseout", () => {
    hideSignIn();
})



let hideSignIn = () => {
    let signIn_div = document.querySelector(".signin_dropdown_content");
    signIn_div.style.display = "none";
}






//Increment of Count in red-circle.
let cartData = JSON.parse(localStorage.getItem("cart_data")) || [];
let red_circle_cart = document.querySelector(".red_circle");
let total_count = 0;
cartData.forEach((elem) => {
    total_count += elem.quantity;
});
red_circle_cart.innerText = total_count;