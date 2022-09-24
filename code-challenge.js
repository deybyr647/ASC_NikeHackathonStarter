/* eslint-disable no-unused-vars */
const { SPANISH_DICTIONARY, SHOE_LIST } = require("./constants.js");

const newSneakers = (sneakers) => {
  // insert code
  return "New sneakers " + sneakers + " dropping soon!";
};

const isThatMichaelJordan = (name) => {
  let str = name.toLowerCase();
  if (str == "michael jordan") return true;
  else return false;
};

const areYouM = (name) => {
  // Your code here
  if (name[0] === "M") {
    return true;
  } else {
    return false;
  }
};

const mostViewsThreeSneakers = (
  sneakerOneViews,
  sneakerTwoViews,
  sneakerThreeViews
) => {
  let mostViewsThreeSneakers = Math.max(
    sneakerOneViews,
    sneakerTwoViews,
    sneakerThreeViews
  );
  return mostViewsThreeSneakers;
};

const mostViews = (sneakerViews) => {
  let mostViewedSneaker = Math.max(...sneakerViews);

  return mostViewedSneaker;
};

const validateEmail = (email) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(email)) {
    return "Valid email";
  } else {
    return "Invalid email";
  }
};

const validateEmailWithError = (email) => {
  // insert code
  //ommited code
};

const getInitials = (name) => {
  // insert code
  const splitName = name.split(" ");
  if (splitName.length === 2) {
    const firstInitial = splitName[0].charAt(0);
    const lastInitial = splitName[1].charAt(0);
    return firstInitial + lastInitial;
  }
  if (splitName.length === 1) {
    return (
      splitName[0].charAt(0).toUpperCase() +
      splitName[0].charAt(1).toUpperCase()
    );
  }
  if (splitName.length > 2) {
    return (
      splitName[0].charAt(0) + splitName[1].charAt(0) + splitName[2].charAt(0)
    );
  }
};

const howRepetitiveAreYou = (str, word) => {
  // insert code
  const splitWords = str.split(" ");
  let count = 0;
  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i].includes(word)) {
      count++;
    }
  }
  return count;
};

const spanishToEnglish = (spanish) => {
  const dictionary = SPANISH_DICTIONARY;
  // insert code
};

const getNames = (shoeList = SHOE_LIST) => {
  // insert code
};

const getUniqueSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

const getMostViewedSneakers = (shoeList = SHOE_LIST) => {
  // insert code
};

module.exports = {
  newSneakers,
  isThatMichaelJordan,
  areYouM,
  mostViewsThreeSneakers,
  mostViews,
  validateEmail,
  validateEmailWithError,
  getInitials,
  howRepetitiveAreYou,
  spanishToEnglish,
  getNames,
  getUniqueSneakers,
  getMostViewedSneakers,
};
