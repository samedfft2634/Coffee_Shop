let navbar = document.querySelector(".navbar");
let cartItem = document.querySelector(".cart-items-container");
let searchForm = document.querySelector(".search-form");


// click event for open menu 
document.querySelector("#menu-btn").onclick = () => {
	navbar.classList.toggle("active");
	cartItem.classList.remove("active");
	searchForm.classList.remove("active");

};

// click event for open cart menu 
document.querySelector("#cart-btn").onclick = () => {
	cartItem.classList.toggle("active");
    navbar.classList.remove("active");
	searchForm.classList.remove("active");
};

// search box 
document.querySelector("#search-btn").onclick = () => {
	searchForm.classList.toggle("active");
    navbar.classList.remove("active");
	cartItem.classList.remove("active");
};

window.onscroll = () =>{
    navbar.classList.remove("active");
	cartItem.classList.remove("active");
	searchForm.classList.remove("active");
}