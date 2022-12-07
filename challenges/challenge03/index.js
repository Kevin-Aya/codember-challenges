// const fs = require('fs');

// let data = fs.readFileSync('./colors.txt');

// const dataToJSON = (data) => JSON.parse(data.replaceAll("'", '"'));

// const colors = dataToJSON(data);
// const getZebrasCount = (colors) => {
//   let data = {
//     lastColor: '',
//     maxColor: '',
//     maxCount: 0,
//     count: 0,
//   };

//   const info = colors.reduce((datas, currentColor) => {
//     let { maxColor, maxCount, lastColor, count } = datas;

//     if (lastColor === '') {
//       lastColor = currentColor;
//       maxColor = currentColor;
//       count += 1;
//     } else if (currentColor != lastColor) {
//       lastColor = currentColor;
//       count += 1;
//     } else {
//       count = 1;
//     }

//     if (count > maxCount) maxCount = count;

//     console.log({
//       currentColor,
//       data: { lastColor, maxColor, maxCount, count },
//     });

//     return { lastColor, maxColor, maxCount, count };
//   }, data);

//   const { maxColor, maxCount } = info;

//   return { maxColor, maxCount };
// };

// console.log(getZebrasCount(['red', 'blue', 'red', 'blue', 'green'])); // -> 4, blue
// console.log('\nresult: ', getZebrasCount(['green', 'red', 'blue', 'gray'])); // -> 2, gray
// console.log(getZebrasCount(['blue', 'blue', 'blue', 'blue'])); // -> 1, blue
// console.log(getZebrasCount(['blue', 'red', 'blue', 'red', 'gray'])); // -> 4, red
// console.log(
//   getZebrasCount(['red', 'red', 'blue', 'red', 'red', 'red', 'green'])
// ); // -> 3, red checked ✅

// Apply TDD Cycle:
// ------------------------------

const getZebrasCount = (colors = []) => {
  const maxColor = '',
    maxCount = 0;

  return { maxColor, maxCount };
};

module.exports = { getZebrasCount };
