function compareStrings(s1, s2) {
  // Функція для обробки символу '#'
  function verifyBackspace (s) {
    const arrFromString = [...s];
    const filteredArr = [];
    arrFromString.forEach(i => (i === '#') ?  filteredArr.pop() :  filteredArr.push(i));
    return  filteredArr.join('');
  }

  // Порівняння оброблених рядків
  return (verifyBackspace(s1) === verifyBackspace(s2)) ? 1 : 0; 
}

// Приклад використання:
const s1 = 'sd#hjk##';
const s2 = 'sh';
const result = compareStrings(s1, s2);
console.log(result); // Виведе 1


//-----------------------------------
//            Solution 2
//-----------------------------------

function compareStrings2(s1, s2) {
  // Функція для обробки символу '#'
  const processBackspace = (str) => {
    const stack = [];
    for (const char of str) {
      if (char === '#') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    return stack.join('');
  }

  // Обробка рядків з урахуванням символу '#'
  const processedS1 = processBackspace(s1);
  const processedS2 = processBackspace(s2);

  // Порівняння оброблених рядків
  if (processedS1 === processedS2) {
    return 1;
  } else {
    return 0;
  }
}

// Приклад використання:
const s12 = 'sd#hjk##';
const s22 = 'sh';
const result2 = compareStrings2(s122, s2);
console.log(result); // Виведе 1



//--------------------------------------------
//               Solution 3 
//--------------------------------------------

function compareStrings3(s1, s2) {
    // Write your code here

    s1 = verBackspace(s1);
    s2 = verBackspace(s2);

    console.log('s1->', s1, ' s2->', s2)
        
    // verify '#':
    function verBackspace(s3) {
        let arr = s3.split('');
        let filteredArr = arr;
console.log(`filteredArr-> ${filteredArr}`)

        let newArr = arr.map((x, i) => {
            
            console.log(`arr@-> ${arr}`);

            if ( x === '#') {
              //arr.splice( i-1, 2)
            };
            //removeBackspace (x);
            console.log(`i-> ${i}`);
            console.log(`x-> ${x}`);

            console.log(`arr-> ${arr}`);
            //console.log(`newArr-> ${newArr}`)
        });
        
        //function removeBackspace (char) {
        //     if ( char === '#') {
        //     let index = arr.indexOf('#');
        //     arr.splice( index-1, index);
        //  }
        //}


console.log(`filteredArr1-> ${filteredArr}`)
console.log(`newArr-> ${newArr}`)
console.log(`arr1-> ${arr}`);
        s3 = newArr.join('');
        console.log(`s3-> ${s3}`);
        return s3;
    };
    
    if (s1.length === s2.length) {
        // let verifyArr = [];
        // for (i = s1.length-1; i < s1.length; i--) {
        //     for (k = s2.length-1; k < s2.length; k--) {
        //         if ( s1[-1] === s2[-k] ) {
        //             verifyArr.push(1);
        //         } else {
        //             verifyArr.push(0);
        //             return 0; // the verification should stop
        //         }
        //     }
        // }
        return 1
    } else {
        return 0;
    }


}

compareStrings3('yf#c#', 'yy#k#pp##')


//--------------------------------------------
//               Solution 3 
//--------------------------------------------

function compareStrings3(s1, s2) {
    // Write your code here

    s1 = verBackspace(s1);
    s2 = verBackspace(s2);

    console.log('s1->', s1, ' s2->', s2)
        
    // verify '#':
    function verBackspace(s3) {
        let arr = s3.split('');
        let filteredArr = arr;
console.log(`filteredArr-> ${filteredArr}`)

        let newArr = arr.map((x, i) => {
            
            console.log(`arr@-> ${arr}`);

            if ( x === '#') {
              //arr.splice( i-1, 2)
            };
            //removeBackspace (x);
            console.log(`i-> ${i}`);
            console.log(`x-> ${x}`);

            console.log(`arr-> ${arr}`);
            //console.log(`newArr-> ${newArr}`)
        });
        
        //function removeBackspace (char) {
        //     if ( char === '#') {
        //     let index = arr.indexOf('#');
        //     arr.splice( index-1, index);
        //  }
        //}


console.log(`filteredArr1-> ${filteredArr}`)
console.log(`newArr-> ${newArr}`)
console.log(`arr1-> ${arr}`);
        s3 = newArr.join('');
        console.log(`s3-> ${s3}`);
        return s3;
    };
    
    if (s1.length === s2.length) {
        // let verifyArr = [];
        // for (i = s1.length-1; i < s1.length; i--) {
        //     for (k = s2.length-1; k < s2.length; k--) {
        //         if ( s1[-1] === s2[-k] ) {
        //             verifyArr.push(1);
        //         } else {
        //             verifyArr.push(0);
        //             return 0; // the verification should stop
        //         }
        //     }
        // }
        return 1
    } else {
        return 0;
    }


}

compareStrings3('yf#c#', 'yy#k#pp##')
