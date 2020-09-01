// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:

// Return the card if it's valid
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

  return total % 10 === 0;

};

// Returning all invalid cards in an array
function findInvalidCards(cards) {
  let invalidCards = [];
  for (let i = 0; i < cards.length; i++) {
    if (validateCred(cards[i]) === false ) {
    invalidCards.push(cards[i]);
    }
  }
  return invalidCards;
};

// Finding what companies has issued the invalid cards
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
  // Removing duplicates of company names
  return [...new Set(cardCompanies)];
};

// Function to turn invalid cards into valid
function fixInvalidCard(currentCard) {
  // Replacing second number in array with 0
  let newCard = currentCard;
  newCard.splice(1, 1, 0);

    // Looping through 0-9 in second number in array to find a number to validate card
    for ( let i = 0; i < 10; i++) {
      newCard.splice(1, 1, i);
      if (validateCred(newCard)) {
        break;
      }
    }
    return newCard;
};
