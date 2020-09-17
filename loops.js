function isDiv(target, num) {
  if (target % num === 0) {
    return true;
  } else {
    return false;
  }
}

function whileEven(num) {
  let i = 0;
  while (i < num) {
    i++;
    if (isDiv(i, 2)) {
      console.log(`whileEven: ${i}`);
    }
  }
}

function while3(num) {
  let j = num;
  let counter = 0;
  while (j > 0) {
    counter++;
    if (counter === 3) { // if the counter reaches 3, print the number 'j' and reset the counter to zero.
      counter = 0;
      console.log(`While3: ${j}`);
    }
    j--; // each step takes away from J, while each step adds to the counter.
  }
}

function oddNumbers(num) {
  let toggle = true;
  for (let k = 1; k <= num; k++) {
    if (toggle) {
      console.log(`oddNumbers: ${k}`);
      toggle = false;
    } else {
      toggle = true;
    }
  }
}

function helloWorld(num) {
  for (let n = 0; n <= num; n++) {
    if (isDiv(n, 3) && isDiv(n, 5)) {
      console.log('helloWorld: HelloWorld'); //check for both first.
    } else if (isDiv(n, 3)) {
      console.log('helloWorld: Hello');
    } else if (isDiv(n, 5)) {
      console.log('helloWorld: World');
    } else {
      console.log(`helloWorld: ${n}`);
    }
  }
}

//Call Functions

whileEven(100);
while3(100);
oddNumbers(100);
helloWorld(100);