const clock = document.querySelector("div.clock-outer-circle");
let curRotation = 0;
const hourHand = document.querySelector("div.hour-hand");
const minHand = document.querySelector("div.minute-hand");
const secondHand = document.querySelector("div.second-hand");
let _date = new Date(Date.now());

const parseCurrentTime = () => {
  _date = new Date(Date.now());
  let hour = _date.getHours();
  const curHours = hour >= 12 ? hour - 12 : hour;
  const curMinutes = _date.getMinutes();
  const curSeconds = _date.getSeconds();
  rotateHourHand(curHours, curMinutes);
  rotateMinHand(curMinutes, curSeconds);
  rotateSecHand(curSeconds);
};

const rotateHand = (rotateAmount, handObj) => {
  handObj.style.transform = `rotate(${rotateAmount}deg)`;
};

const rotateHourHand = (curHours, curMinutes) => {
  const rotateAmount = (curHours + curMinutes / 60) * 30;
  console.log(
    `rotating hour hand: ${curHours}:${curMinutes} is a rotation of ${rotateAmount} degrees`
  );
  // rotateHand(rotateAmount, hourHand);
};

const rotateMinHand = (curMinutes, curSeconds) => {
  const rotateAmount = (curMinutes + curSeconds / 60) * 6;
  console.log(
    `rotating minute hand: x:${curMinutes}:${curSeconds} is a rotation of ${rotateAmount} degrees`
  );
  // rotateHand(rotateAmount, minHand);
};

const rotateSecHand = (curSeconds) => {
  const rotateAmount = curSeconds * 6;
  console.log(
    `rotating second hand: x:x:${curSeconds} is a rotation of ${rotateAmount} degrees`
  );
  // rotateHand(rotateAmount, secondHand);
};

console.log(clock);
// document.addEventListener("keypress", (e) => rotateMinHand(10));

console.log(_date.getSeconds());
parseCurrentTime();
