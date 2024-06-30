
function isPerfectNumber(num) {
   
    if (num < 2) return false; 
    let sum = 1;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    
    return sum === num;
}

const N = 4000; 

function findPerfectNumbers(N) {
    let perfectNumbers = [];

    for (let i = 2; i <= N; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }

    return perfectNumbers;
}



const perfectNumbers = findPerfectNumbers(N);
console.log(`Досконалі числа від 1 до ${N}:`, perfectNumbers);
