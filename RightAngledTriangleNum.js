function printNumberPattern(rows) {
    let currentNumber = 1; 

    for (let i = 1; i <= rows; i++) { 
        let output = ''; 
        
        for (let j = 1; j <= i; j++) { 
            output += currentNumber + ' '; 
            currentNumber++; 
        }
        
        console.log(output.trim()); 
    }
}

printNumberPattern(5);
