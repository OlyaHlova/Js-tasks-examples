function fizzBuzz(n) {
    // Task constraints
    if (n > (2 * 10 ** 5) || n < 0) {
        return
    } else {
        let arr = [...Array(n+1).keys()].slice(1);
        
        arr.forEach(n => {
        
            // conditions
            let con1 = (n % 3 === 0);
            let con2 = (n % 5 === 0);
            
            let output = con1 ? (con2 ? 'FizzBuzz' : 'Fizz') : (con2 ? 'Buzz' : n) ;
            
            console.log (output);  
        })
    }
}
