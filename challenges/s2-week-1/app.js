const clock = document.querySelector("div.clock-outer-circle");
let curRotation = 0;
const minHand = document.querySelector("div.minute-hand");

const rotateMinHand = (rotateAmount) => {
  const amount = typeof rotateAmount === "number" ? rotateAmount : 5;
  curRotation =
    curRotation + amount >= 360
      ? curRotation + amount - 360
      : curRotation + amount;
  minHand.style.transform = `rotate(${curRotation}deg)`;
};

console.log(clock);
document.addEventListener("keypress", (e) => rotateMinHand(10));
