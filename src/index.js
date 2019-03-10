/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [1, 2, 3]) {
  var count = 0;
  for (var i = 0; i <= preferences.length;i++) {
    var pos1 = i + 1;
    var number1 = preferences[i];
    var pos2 = number1;
    var number2 = preferences[pos2 - 1];
    var pos3 = number2;
    var number3 = preferences[pos3 - 1];
  
  if (number1 === pos2 && number2 === pos3 && number3 === pos1) {
    count++;
  }
} 
return Math.floor(count / 3);
};
