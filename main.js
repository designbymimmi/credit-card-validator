// Function to find out if a card is valid or not
function validateCred(numArr) {
  let total = 0;
  for (let i = numArr.length - 1; i >= 0; i--) {
    let currValue = numArr[i]
    if ((numArr.length - 1 - i) % 2 === 1) {
      currValue *= 2;
      if (currValue > 9) {
        currValue -= 9;
      }
    }
    total += currValue;
  }
// returning all valid cards
  return total % 10 === 0;

};

// Function to return all invalid cards
function findInvalidCards(cards) {
  let invalidCards = [];
  for (let i = 0; i < cards.length; i++) {
    if (validateCred(cards[i]) === false ) {
    invalidCards.push(cards[i]);
    }
  }
  return invalidCards;
};

// Function to return all companies that has issued invalid cards
function idInvalidCardCompanies(invalidNum) {
  let cardCompanies = [];

  for (i = 0; i < invalidNum.length; i++) {
    if (invalidNum[i][0] < 3 && invalidNum[i][0] > 6) {
    return console.log("Company not found");
  }
    if (invalidNum[i][0] === 3) {
      cardCompanies.push('Amex');
    }
    if (invalidNum[i][0] === 4) {
      cardCompanies.push('Visa');
    }
    if (invalidNum[i][0] === 5) {
      cardCompanies.push('Mastercard');
    }
    if (invalidNum[i][0] === 3) {
      cardCompanies.push('Discover');
    }
  }
  return [...new Set(cardCompanies)];
};

let cardsToCheck = findInvalidCards(batch);
console.log(idInvalidCardCompanies(cardsToCheck));
