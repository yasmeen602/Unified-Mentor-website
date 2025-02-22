// Responsive Navbar Component
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
    nav_header.classList.toggle("active");
});



// creating a portfolio  component
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelector(".p-btn");
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");
    
    const btn_num = p_btn_clicked.dataset.btnNum;
    
    console.log(btn_num);
    
    const img_active = document.querySelectorAll(`p-btn--${btn_num}`)
    
    p_img_elem.forEach((curElem) => curElem.add("p-images-not-active"));

    img_active.forEach((curElem) => 
        curElem.classList.remove("p-image-not-active"));
    
});

// swiper js code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const myjsmedia = (widthSize) => {
   if (widthSize.matches) {
    swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
    });
   } else {
    swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
    });
   }
};
       



const widthSize =window.matchMedia("(max-width: 780px)");
// call listener function at run time
myjsmedia(widthSize);
// Attach listener function on state change

widthSize.addEventListener("change", myjsmedia);


// scroll to top button

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");
const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () => {
   heroSection.scrollIntoView({ behavior: "smooth"})    
};

scroollElement.addEventListener("click", scrollTop);

// animate number Counter


const counterNum = document.querySelectorAll(".counter-numbers"); // Select all elements with the class

const speed = 200; // Speed of the counter update

counterNum.forEach((curElem) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number); // Get the target number from data attribute
    //   console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText); 
    // console.log(initialNum);

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);
    if (initialNum < targetNumber) {
        curElem.innerText = `${initialNum + incrementNumber}+`;
        setTimeout(updateNumber, 10);
    }
    };
    updateNumber();
});