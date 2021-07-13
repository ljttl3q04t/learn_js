var count = 0;

function reduceNum(num) {
    while (num > 0) {
        while (num % 2 == 0) {
            num = num/2;
            count++;
        }
        while (num % 2 != 0) {
            num--;
            count++;
        }
    } return count;
};  
const result = reduceNum(100);
console.log(result);