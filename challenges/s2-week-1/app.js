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
  const curMilliseconds = _date.getMilliseconds();
  rotateHourHand(curHours, curMinutes);
  rotateMinHand(curMinutes, curSeconds);
  rotateSecHand(curSeconds, curMilliseconds);
};

const rotateHand = (rotateAmount, handObj) => {
  handObj.style.transform = `rotate(${rotateAmount}deg)`;
};

const rotateHourHand = (curHours, curMinutes) => {
  const rotateAmount = (curHours + curMinutes / 60) * 30;
  rotateHand(rotateAmount, hourHand);
};

const rotateMinHand = (curMinutes, curSeconds) => {
  const rotateAmount = (curMinutes + curSeconds / 60) * 6;
  rotateHand(rotateAmount, minHand);
};

const rotateSecHand = (curSeconds, curMilliseconds) => {
  const rotateAmount = (curSeconds + curMilliseconds / 1000) * 6;
  rotateHand(rotateAmount, secondHand);
};

parseCurrentTime();
setInterval(parseCurrentTime, 50);
