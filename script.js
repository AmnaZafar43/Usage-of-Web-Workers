// this worker needs a path of worker script so we create a new file.
const worker = new Worker("worker.js"); //create a new web worker

// get elements by their id or class
const arrayButton = document.querySelector(".loadBtn");
const sumButton = document.querySelector(".sumBtn");
const backColorButton = document.querySelector(".backColorBtn");
let btn = document.getElementById("btn1");

// color generator function
const colorGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  console.log(randomNumber, randomCode);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("colorId").innerText = randomCode;
};

// color generator function is called when pick color button is clicked.
btn.addEventListener("click", colorGenerator);
colorGenerator();

// declare a global array
const unArray = [];
var data = [];

// thais function large creates array containing random elements of range 100,000,000
async function generateArray() {
  worker.postMessage("hello Worker");
}

worker.onmessage = function (message) {
  alert(`Array is generated`);
  data = message.data;
};

// generate array function is called when button is clicked
arrayButton.addEventListener("click", generateArray);

// this function calculates sum of all elements of generated array.
async function calculateSum() {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  console.log("Sum is", sum);
  alert(`Sum is ${sum}`);
  return sum;
}

// calculate sum function is called when button is clicked.
sumButton.addEventListener("click", calculateSum);
