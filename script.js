let img = document.querySelector(".img");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");

let menu1 = document.querySelector("#menu1");
let menu2 = document.querySelector("#menu2");
let menu3 = document.querySelector("#menu3");

let contentMenu1 = document.querySelector("#contentMenu1");
let contentMenu2 = document.querySelector("#contentMenu2");
let contentMenu3 = document.querySelector("#contentMenu3");

menu1.onclick = () => {
    menu1.classList.add("class", "active");
    menu2.setAttribute("class", "para2");
    menu3.setAttribute("class", "para2");

    contentMenu1.setAttribute("class", "content4");
    contentMenu2.classList.add("hide");
    contentMenu3.classList.add("hide");
}
menu2.onclick = () => {
    menu2.classList.add("class", "active");
    menu1.setAttribute("class", "para2");
    menu3.setAttribute("class", "para2");

    contentMenu2.setAttribute("class", "content4")
    contentMenu1.classList.add("hide");
    contentMenu3.classList.add("hide");
}
menu3.onclick = () => {
    menu3.classList.add("class", "active");
    menu2.setAttribute("class", "para2");
    menu1.setAttribute("class", "para2");

    contentMenu3.setAttribute("class", "content4")
    contentMenu1.classList.add("hide");
    contentMenu2.classList.add("hide");
}

let content1 = document.querySelector("#content1");
let content2 = document.querySelector("#content2");
let content3 = document.querySelector("#content3");
let content4 = document.querySelector("#content4");


// not activate
content1.addEventListener("click", () => {
    img1.setAttribute("src","assets/img/icons/1.jpg");
})
content1.onmouseover = () => {
    img1.setAttribute("src", "assets/img/icons/1.jpg")
}
content1.onmouseout = () => {
    img1.setAttribute("src", "assets/img/icons/2.jpg")
}

content2.addEventListener("click", () => {
    img2.setAttribute("src","assets/img/icons/4.jpg");
})
content2.onmouseover = () => {
    img2.setAttribute("src", "assets/img/icons/4.jpg")
}
content2.addEventListener("mouseout", () => {
    img2.setAttribute("src", "assets/img/icons/3.jpg")
})

content3.addEventListener("click", () => {
    img3.setAttribute("src","assets/img/icons/6.jpg");
})
content3.onmouseover = () => {
    img3.setAttribute("src", "assets/img/icons/6.jpg")
}
content3.addEventListener("mouseout", () => {
    img3.setAttribute("src", "assets/img/icons/5.jpg")
})

content4.addEventListener("click", () => {
    img4.setAttribute("src","assets/img/icons/8.jpg");
})
content4.onmouseover = () => {
    img4.setAttribute("src", "assets/img/icons/8.jpg")
}
content4.addEventListener("mouseout", () => {
    img4.setAttribute("src", "assets/img/icons/7.jpg")
});


// sections

let drinkMenu = document.querySelector("#DrinkMenuSection");
let about = document.querySelector("#AboutSection");
let specialItems = document.querySelector("#specialItems");
let ContactUs = document.querySelector("#ContactUs");

about.style.display = "none";
specialItems.style.display = "none";
ContactUs.style.display = "none";

content1.addEventListener("click", () => {
    drinkMenu.style.display = "block";
    about.style.display = "none";
    specialItems.style.display = "none";
    ContactUs.style.display = "none";
})

content2.addEventListener("click", () => {
   about.style.display = "block";
   drinkMenu.style.display = "none";
   specialItems.style.display = "none"
   ContactUs.style.display = "none"
});

content3.addEventListener("click", () => {
    specialItems.style.display = "block";
    drinkMenu.style.display = "none";
    about.style.display = "none";
    ContactUs.style.display = "none";
})

content4.addEventListener("click", () => {
    ContactUs.style.display = "block";
    specialItems.style.display = "none";
    drinkMenu.style.display = "none";
    about.style.display = "none";
})
