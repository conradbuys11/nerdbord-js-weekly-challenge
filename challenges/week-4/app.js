// TO-DO:
// - get list of plant cards
// - attach the links and the text to the css classes somehow? unsure about this one
// - either that or set up the hover/focus code manually in js, which seems a little wack

// SIKE I'VE BEEN DOING THIS WRONG ALL ALONG
// LET'S MAKE THE STUFF IN JS

// our flexbox to add stuff to
const box = document.getElementById("card-box");

// take the link to img & text to display on hover
// and make into object
const makeCardData = (img, text) => {
  return { img: img, text: text };
};

// take object w/ data and turn it into an element
const addCard = (cardObj) => {
  let card = document.createElement("div");
  card.className = "plant-card";

  // it looks like adjusting style is the way to go, even if i don't like it
  card.style.backgroundImage = `url(${cardObj.img})`;

  let cardText = document.createElement("span");
  cardText.className = "plant-card-text";
  cardText.innerText = cardObj.text;

  card.appendChild(cardText);
  box.appendChild(card);
};

// arr of obj of cards to assemble:
const cardDataArr = [
  makeCardData("./plant-img/179e98b04f651f24a12b58d0ed90d481.jpg", "Hanging"),
  makeCardData("./plant-img/39dd86f9b3a3697605907042b5ffc29d.jpg", "Happiness"),
  makeCardData("./plant-img/506dc67176b8bba1a423b45cc144c68f.jpg", "Serenity"),
  makeCardData(
    "./plant-img/5fe6d193252847f052f4f5aeb365db3c.jpg",
    "Simplicity"
  ),
  makeCardData("./plant-img/7c9cb3d740c5a4315b90c425102fb96d.jpg", "Hardiness"),
  makeCardData("./plant-img/fd1392336005b641e3b1ad6a0b95b740.jpg", "Growth"),
];

// adding all the cards to the DOM
for (let i = 0; i <= cardDataArr.length; i++) {
  addCard(cardDataArr[i]);
}
