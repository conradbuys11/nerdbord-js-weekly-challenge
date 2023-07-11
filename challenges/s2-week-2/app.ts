const mainBox = document.querySelector("div.main-box")!;

type TextBoxObject = {
  num: number | string;
  text: string;
  picture: string;
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

const textBoxes: TextBoxObject[] = [
  { num: "01", text: "interiors", picture: "interiors", location: null },
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
