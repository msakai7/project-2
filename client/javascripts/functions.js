// jshint esversion: 6

let revWord1 = str => {
  let arr = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};

let revWords2 = sent => {
  let arr = str.split(" ");
  let result = "";
  str.forEach(char => {
    result = char + result;
  });
  return result;
};

let revWord3 = str => {
  let arr = str.split(" ");
  let result = "";
  for (char of arr) {
    result = char + result;
  }
  return result;
};

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
