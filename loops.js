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
      console.log(i);
    }
  }
}

function while3(num) {
  let j = num;
  while (j < 0) {
    j = j - 3;
    console.log(j);
  }
}

function oddNumbers(num) {
  let toggle = true;
  for (let k = 1; k <= num; k++) {
    if (toggle) {
      console.log(k);
      toggle = false;
    } else {
      toggle = true;
    }
  }
}

function helloWorld(num) {
  for (let n = 0; n <= num; n++) {
    if (isDiv(n, 3) && isDiv(n, 5)) {
      console.log('HelloWorld'); //check for both first.
    } else if (isDiv(n, 3)) {
      console.log('Hello');
    } else if (isDiv(n, 5)) {
      console.log('World');
    } else {
      console.log(n);
    }
  }
}

//Call Functions

whileEven(100);
while3(100);
oddNumbers(100);
helloWorld(100);