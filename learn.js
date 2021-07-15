// function reduceNum(num) {
//     var count = 0;
//     while (num > 0) {
//         if (num % 2 == 0) {
//             num = num/2;
//             count++;
//         } else if (num % 2 != 0) {
//             num--;
//             count++;
//         }
//     } return count;
// };  

// count = 1;
// sum = 0;
// function recursive() {
//     console.log(count, sum);
//     if (count > 5) return;
//     sum = sum + count;
//     count++;
//     recursive()

// };

// recursive();


// cal sum from a..b
// assume a <= b
// input: 1 5
// output: 9
// explain: 1 + 3 + 5 = 9

const sum = (a, b) => {
    console.log('we are', a, b);
    count = (a % 2 == 1) ? a : 0
    if (a == b) return count;
    return count + sum(a + 1, b);
};
// sum(a, b) = a + sum(a+1,b)
//  sum(1, 10) = 1 + sum(2,10)
console.log(sum(2, 7));
// console.log(sum(2, 7));
// console.log(sum(6, 8));