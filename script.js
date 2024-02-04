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

// thais function large creates array containing random elements of range 100,000,000
async function generateArray() {
  const arraySize = 100000000;
  for (let i = 0; i < arraySize; i++) {
    unArray.push(Math.floor(Math.random() * 1000000));
  }
  console.log("Array is", unArray);
  alert(`Array is generated`);
  return unArray;
}

// generate array function is called when button is clicked
arrayButton.addEventListener("click", generateArray);

// this function calculates sum of all elements of generated array.
async function calculateSum() {
  let sum = 0;
  for (let i = 0; i < unArray.length; i++) {
    sum += unArray[i];
  }
  console.log('Sum is', sum);
  alert(`Sum is ${sum}`);
  return sum;
}

// calculate sum function is called when button is clicked.
sumButton.addEventListener("click", calculateSum);
