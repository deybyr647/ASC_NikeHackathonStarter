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

  if (email.value.match(validRegex)) {
    return "Valid email address";
  } else {
    return "Invalid email address";
  }

  //omitted code
};

const validateEmailWithError = (email) => {
  // insert code
  //ommited code
};

const getInitials = (name) => {
  // insert code
  const splitName = name.split(" ");
  const firstName = splitName[0].charAt(0);
  const lastName = splitName[1].charAt(0);
  return firstName + lastName;
};

const howRepetitiveAreYou = (str, word) => {
  // insert code
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
