const mainBox = document.querySelector("div.main-box")!;

type TextBoxObject = {
  num: number | string;
  text: string;
  picture: any;
  location: any;
};

const createAllTextBoxes = (arrOfTextBoxes: TextBoxObject[]) => {
  arrOfTextBoxes.forEach((textBoxObj) => {
    createTextBox(textBoxObj);
  });
};

const createTextBox = (textBoxObj: TextBoxObject) => {
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

  mainBox.appendChild(textBox);
};

// TO-DO: populate rest of array
const textBoxes = [
  { num: "01", text: "interiors", picture: "interiors", location: null },
];

createTextBox({
  num: "02",
  text: "brand identity",
  picture: null,
  location: null,
});
