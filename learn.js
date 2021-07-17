function reduceNum(num) {
    // do something here
};

console.log(reduceNum(100,0)); // expect 9

// Use recursive in function reduceNum 
//-------------------------------------------------------------------------------//

// function recursive(count, sum) {
//     console.log(count, sum);
//     if (count > 5) return;
//     sum += count;
//     count++;
//     recursive(count++, sum++);
// };

// recursive(1,0);
// recursive(1,0);

// Rewrite function recursive 
//-------------------------------------------------------------------------------//

// cal sum from a..b
// assume a <= b
// input: 1 5
// output: 9
// explain: 1 + 3 + 5 = 9

// const sum = (a, b) => {
//     console.log('we are', a, b);
//     count = (a % 2 == 1) ? a : 0;
//     if (a == b) return count;
//     return count + sum(a + 1, b);
// };

// sum(a, b) = a + sum(a+1, b)
// sum(1, 10) = 1 + sum(2, 10)
// sum(1, 7) = 1 + sum(2, 6) + 7
// console.log(sum(1, 7));
// console.log(sum(2, 7));
// console.log(sum(1, 8));
// console.log(sum(6, 8));