/*
Your task is to create a change machine.

The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.
*/

function changeMe(moneyIn) {
  let accepted = ["£5", "£2", "£1", "50p", "20p"];
  let returned = [];
  if (accepted.includes(moneyIn)) {
    if (moneyIn[0] === "£") {
      let amount = moneyIn.slice(1);
      for (let i = 0; i < amount * 5; i++) {
        returned.push("20p");
      }
      return returned.join(" ");
    } else if (moneyIn[moneyIn.length - 1] === "p") {
      let amount = moneyIn.slice(0, moneyIn.length - 1);
      if (amount === "20") {
        returned = ["10p", "10p"];
        return returned.join(" ");
      } else {
        for (let i = 0; i < Math.floor(amount / 20); i++) {
          returned.push("20p");
        }
        returned.push("10p");
        return returned.join(" ");
      }
    }
  } else {
    return moneyIn;
  }
}
