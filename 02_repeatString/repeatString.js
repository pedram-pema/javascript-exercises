const repeatString = function(str, num) {
/*     if (num < 0) {
    return 'ERROR';
  }

  let result = '';
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result; */
  
    let string = '';
    for(let i = 0; i < num; i++) {
        string += `${str}`;
    }
    // if (num == 0) {
    //     return '';
    if (num < 0) {
        return 'ERROR';
    } else {
        return string;
    }
}
// Do not edit below this line
module.exports = repeatString;