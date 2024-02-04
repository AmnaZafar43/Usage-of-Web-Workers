// creating new event handler
const unArray = [];
self.onmessage = function (message) {
  const startTime = performance.now();
  const arraySize = 100000000;
  for (let i = 0; i < arraySize; i++) {
    unArray.push(Math.floor(Math.random() * 1000000));
  }
  const endTime = performance.now();
  //   console.log("Array is", unArray);
  postMessage(unArray);
  // console.log(
  //   "Time of generating array without web worker",
  //   endTime - startTime
  // );
};
