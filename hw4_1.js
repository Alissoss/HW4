    function isPrime(N) {
        if (N < 2) {
            console.log(`Число ${N} не є простим числом`);
            return ;
        }
    
        for (let i = 2; i <= Math.sqrt(N); i++) {
            if (N % i === 0) {
                console.log(`Число ${N} не є простим числом`);
                return;
            }
        }
    
        console.log(`Число ${N} є простим числом`);
        
}
isPrime(7);
