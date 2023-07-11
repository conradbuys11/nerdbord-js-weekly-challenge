"use strict";
const mainBox = document.querySelector("div.main-box");
const photoBox = document.querySelector("div.photo-box");
const createAllTextBoxes = (arrOfTextBoxes) => {
    arrOfTextBoxes.forEach((textBoxObj) => {
        createTextBox(textBoxObj);
    });
};
const createTextBox = (textBoxObj) => {
    let textBox = document.createElement("div");
    textBox.classList.add("text-box");
    let textNum = document.createElement("span");
    textNum.classList.add("text", "text-number");
    textNum.innerText = textBoxObj.num.toString();
    textBox.appendChild(textNum);
    let textMain = document.createElement("span");
    textMain.classList.add("text", "text-main");
    textMain.innerText = textBoxObj.text.toUpperCase();
    textBox.appendChild(textMain);
    // TO-DO: add functionality for eventlistener, picture
    let photo = document.createElement("div");
    photo.classList.add("photo");
    photo.style.backgroundImage = `url(./img/${textBoxObj.picture}.png)`;
    if (textBoxObj.location) {
        photo.style.left = textBoxObj.location.x;
        photo.style.top = textBoxObj.location.y;
    }
    photoBox.appendChild(photo);
    textBox.addEventListener("mouseover", (e) => {
        !textBox.classList.contains("active")
            ? textBox.classList.add("active")
            : null;
        !photo.classList.contains("active") ? photo.classList.add("active") : null;
        console.log(photo.style.height);
    });
    textBox.addEventListener("mouseout", (e) => {
        textBox.classList.contains("active")
            ? textBox.classList.remove("active")
            : null;
        photo.classList.contains("active")
            ? photo.classList.remove("active")
            : null;
    });
    mainBox.appendChild(textBox);
};
const textBoxes = [
    {
        num: "01",
        text: "interiors",
        picture: "interiors",
        location: { x: "70%", y: "30%" },
    },
    {
        num: "02",
        text: "brand identity",
        picture: "brand-identity",
        location: null,
    },
    { num: "03", text: "visual", picture: "visual", location: null },
    { num: "04", text: "animation", picture: "animation", location: null },
    { num: "05", text: "bunch", picture: "bunch", location: null },
    { num: "06", text: "rumors", picture: "rumors", location: null },
];
createAllTextBoxes(textBoxes);
