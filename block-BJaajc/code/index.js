function getFullName(firstName, LastName) {
  return `${firstName} ${LastName}`;
}

function palindrome(word) {
  let Word = word.split('').reverse().join('');
  if (Word === word) {
    return true;
  } else {
    return false;
  }
}

function getCircumfrence() {
  return `The Circumference is ${2 * Math.PI * radius}`;
}

function getArea(radius) {
  return `The area i  s ${Math * radius * radius}`;
}

module.exports = {
  getFullName,
  palindrome,
  getCircumfrence,
  getArea,
};
