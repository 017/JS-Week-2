var stats = {
  isHotOutside: false,
  isWeekday: true,
  hasMoneyInPocket: true,
  costOfMilk: 15,
  moneyInWallet: 50,
  thirstLevel: 5,
};

var dec = {
  shouldBuyIcecream: checkIceCream(stats.isHotOutside, stats.hasMoneyInPocket),
  willGoSwimming: checkSwimming(stats.isHotOutside, stats.isWeekday),
  isAGoodDay: checkDay(
    stats.isHotOutside,
    stats.hasMoneyInPocket,
    stats.isWeekday
  ),
  willBuyMilk: checkMilk(
    stats.isHotOutside,
    stats.thirstLevel,
    stats.moneyInWallet,
    stats.costOfMilk
  ),
};

function checkIceCream(isHot, hasMoney) {
  if (isHot === true && hasMoney === true) {
    return true;
  } else {
    return false;
  }
}

function checkSwimming(isHot, isWeekday) {
  if (isHot === true && isWeekday === false) {
    return true;
  } else {
    return false;
  }
}

function checkDay(isHot, hasMoney, isWeekday) {
  if (isHot === true && hasMoney === true && isWeekday === false) {
    return true;
  } else {
    return false;
  }
}

function checkMilk(isHot, thirstLevel, moneyInWallet, milkPrice) {
  const milkValue = milkPrice * 2;
  if (isHot === true && thirstLevel >= 3 && moneyInWallet >= milkValue) {
    return true;
  } else {
    return false;
  }
}

function logValues(obj) {
  if (obj.isHotOutside) {
    console.log('It is hot outside.');
  } else {
    console.log('It is not hot outside.');
  }

  if (obj.isWeekday) {
    console.log('It is a weekday.');
  } else {
    console.log('It is not a weekday.');
  }

  if (obj.hasMoneyInPocket) {
    console.log('You have money in your pocket.');
  } else {
    console.log('You do not have money in your pocket.');
  }

  console.log(`Milk costs $${obj.costOfMilk}.`);

  console.log(`You have $${obj.moneyInWallet} in your wallet.`);

  console.log(`Your thirst level stat is currently ${obj.thirstLevel}/10`);
  if (dec.shouldBuyIcecream) {
    console.log(
      `You decide to buy some Ice Cream, since it's hot out and you have the money.`
    );
  } else {
    console.log(`You don't feel the need to buy Ice Cream right now.`);
  }

  if (dec.willGoSwimming) {
    console.log(
      `You decide to go swimming, since it's hot out and it's a weekend.`
    );
  } else {
    console.log('You decide swimming is off the table for today.');
  }

  if (dec.isAGoodDay) {
    console.log(
      `You feel that today is a good day, what with it being a weekend and yourself having money.`
    );
  } else {
    console.log(`You don't feel like today is a particlarly great day.`);
  }

  if (dec.willBuyMilk) {
    console.log(
      `You decide to buy milk, as you are thirsty and it's hot outside.`
    );
  } else {
    console.log(`You don't feel the need to buy any milk.`);
  }
}

//call functions on objects
logValues(stats);