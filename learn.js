function reduceNum(num) {
    var count = 0;
    function recursive(num) {
        if (num == 0) {
            return count;
        } else if (num % 2 != 0) {
            num--;
        } else {
            num = num / 2;
        }
        count++;
        return recursive(num);
    };
    return recursive(num);
};


const reduceNumV2 = (num) => {
    if (num == 0) return 0;
    if (num % 2 == 0) {
        return reduceNumV2(num / 2) + 1;
    } else {
        return reduceNumV2(num - 1) + 1;
    }
}

console.log(reduceNum(100)); // expect 9
console.log(reduceNumV2(100)); // expect 9

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

const sum = (a, b) => {
    console.log('we are', a, b);
    count = (a % 2 == 1) ? a : 0;
    if (a == b) return count;
    return count + sum(a + 1, b);
};

const sumV2 = (a, b) => {
    console.log('we are', a, b);
    count_a = (a % 2 == 1) ? a : 0;
    count_b = (b % 2 == 1) ? b : 0;
    console.log('count_a, count_b', count_a, count_b);
    if (a == b) return count_a;
    if (a + 1 > b - 1) {
        temp = count_a + count_b;
        console.log('temp', temp);
        return temp;
    }
    temp = count_a + count_b + sumV2(a + 1, b - 1);
    console.log('temp', temp);
    return temp;
}

// sum(a, b) = a + sum(a+1, b)
// sum(1, 10) = 1 + sum(2, 10)
// sum(1, 7) = 1 + sum(2, 6) + 7
// console.log(sum(1, 7));
console.log(sum(2, 7));
console.log(sumV2(2, 7));

// console.log(sum(1, 8));
// console.log(sum(6, 8));