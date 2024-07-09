// function fixBirdCountLog(birdsPerDay) {
//   let week = 7;
//   let fixedCount = [];
//   console.log(birdsPerDay);
//   for (let i = 0; i < birdsPerDay.length; i += week) {
//     let chunk = birdsPerDay.slice(i, i + week).map((element, index) => {
//       switch (index) {
//         case 0:
//           element += 1;
//           break;
//         case 2:
//           element += 1;
//           break;
//         case 4:
//           element += 1;
//           break;
//         case 6:
//           element += 1;
//           break;
//         default:
//           break;
//       }
//       return element;
//     });
//     fixedCount.push(...chunk);
//   }
//   return fixedCount;
// }

// function arrayEquals(a, b) {
//   return (
//     Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index])
//   );
// }

// let expected = [4, 0, 6, 1, 1, 4, 2, 0, 4, 4, 4, 0];
// let received = fixBirdCountLog([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0]);

// console.log(arrayEquals(expected, received));
// console.log(Object.is(fixBirdCountLog(birdsPerDay), birdsPerDay));

// function iteratorFunction() {
//   return { next: () => ({ done: true }) };
// }
// const iterable = { [Symbol.iterator]: iteratorFunction };
// let values;
// for (let value of iterable) {
//   console.log(value);
//   values += value;
// }
// console.log(iterable);

// let str = "";
// console.log(str.length);

function* generatorFunction() {
  yield (yield 1)(function () {
    yield;
  });
}
var iterator = generatorFunction();
var iteratedOver = [iterator.next().value, iterator.next().value];
