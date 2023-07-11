const mainBox = document.querySelector("div.main-box")!;

const createAllTextBoxes = (arrOfTextBoxes) => {};

const createTextBox = (
  num: number | string,
  text: string,
  picture,
  location
) => {
  let textBox = document.createElement("div");
  textBox.classList.add("text-box");

  let textNum = document.createElement("span");
  textNum.classList.add("text", "text-number");
  textNum.innerText = num.toString();
  textBox.appendChild(textNum);

  let textMain = document.createElement("span");
  textMain.classList.add("text", "text-main");
  textMain.innerText = text.toUpperCase();
  textBox.appendChild(textMain);

  // TO-DO: add functionality for eventlistener, picture

  mainBox.appendChild(textBox);
};

createTextBox("02", "brand identity", null, null);
