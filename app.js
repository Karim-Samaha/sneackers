const sliderItems = document.querySelectorAll(".item");
let mySlide = document.querySelector(".slider");
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./assets/air.png",
            },
            {
                code: "darkblue",
                img: "./assets/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./assets/jordan.png",
            },
            {
                code: "green",
                img: "./assets/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./assets/blazer.png",
            },
            {
                code: "green",
                img: "./assets/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./assets/crater.png",
            },
            {
                code: "lightgray",
                img: "./assets/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./assets/hippie.png",
            },
            {
                code: "black",
                img: "./assets/hippie2.png",
            },
        ],
    },
];

let currentProduct = products[0];
let currentImg = document.querySelector(".productSection-img")
let currentName = document.querySelector(".productSection-name")
let currentPrice = document.querySelector(".productSection-price")
let currentColors = document.querySelectorAll(".color")
let currentSizes = document.querySelectorAll(".size")
console.log(currentSizes)

sliderItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //Changing Slide
        mySlide.style.transform = `translateX(${-20 * index}%)`;
        //Changing Current Product
        currentProduct = products[index];
        currentImg.src = currentProduct.colors[0].img;
        currentName.textContent = currentProduct.title;
        currentPrice.textContent = "$" + currentProduct.price;
        //Changing colors
        currentColors.forEach((color, index) => {
            color.style.backgroundColor = currentProduct.colors[index].code
        });
    });
});
// Sizes function
currentSizes.forEach((size) => {
    size.addEventListener("click", () => {
        currentSizes.forEach((size) => {
            size.style.border = "1px solid black" 
        });
        size.style.border = "5px solid black"
    });
});

//Colors function
currentColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentImg.src = currentProduct.colors[index].img;
    });
});

//Purchase section 
let purchaseSection = document.querySelector(".purchase-section");
let closeIcon = document.querySelector(".closeIcon");
let buyButton = document.querySelector(".purchaseButton");

buyButton.addEventListener("click", () => {
    purchaseSection.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    purchaseSection.style.display = "none";
});


