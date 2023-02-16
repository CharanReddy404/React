// function createFunc() {
//   const name = [1, 2, 3];
//   const nameFunc = [];
//   for (var i = 0; i < name.length; i++) {
//     nameFunc.push(function () {
//       console.log(name[i]);
//     });
//   }
//   console.log(nameFunc);
//   return nameFunc;
// }
// const confi = createFunc();
// confi[0]();

// const sleep = async (time) => {
//   // write code
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, time * 1000);
//   });
// };

// const sayHello = async () => {
//   console.log('Start');
//   await sleep(2);
//   console.log('Hello there');
// };

// sayHello();

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// const run = () => {
//   const nums = [1, 3, 3];
//   const target = 6;

//   let Output = [];

//   // for (let i = 0; i < nums.length; i++) {
//   //   for (let j = i + 1; j < nums.length; j++) {
//   //     if (nums[i] + nums[j] === target) {
//   //       Output.push(i);
//   //       Output.push(j);
//   //       console.log(Output);
//   //       return;
//   //     }
//   //   }
//   // }

//   nums.map((v) => {});

//   return;
// };

// run();

function sockMerchant(n, ar) {
  // Write your code here
  // for (let i = 0; i < ar.length; i++) {
  //   for (let j = i + 1; j < ar.length; j++) {
  //     if (ar[i] === ar[j]) {
  //       ar[i] = -1;
  //       ar[j] = -1;
  //     }
  //   }
  // }
  ar.sort();

  console.log(ar);

  for (let i = 0; i < ar.length - 1; i++) {
    if (ar[i] === ar[i + 1]) {
      ar[i] = -1;
      ar[i + 1] = -1;
      i++;
    }
  }

  console.log(ar);
  return ar.reduce((curr, val) => {
    return val > 0 ? curr + 1 : curr;
  }, 0);
}

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
