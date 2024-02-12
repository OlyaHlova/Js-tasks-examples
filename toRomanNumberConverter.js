function solution(number){
    
    if (!Number.isInteger(number)) { 
        return 'NOT correct input data'
    };
    
    const arrayOfDigits = Array.from(String(number), Number).reverse();

    if (arrayOfDigits.length > 3) {
      let valueJoined = +arrayOfDigits.splice(3).join('');
      arrayOfDigits.push(valueJoined);
    }

    class DefaultNumber {
        constructor(units, dozens, hundreds, thousands) {
            this.units = units;
            this.dozens = dozens;
            this.hundreds = hundreds;
            this.thousands = thousands;
        }
    }

    class RomanNumberConstructor {
        constructor(one, five) {
            this.one = one;
            this.five = five;
        }
    }
    
    const romanUnits = new RomanNumberConstructor('I', 'V');
    const romanDozens = new RomanNumberConstructor('X', 'L');
    const romanHundreds = new RomanNumberConstructor('C', 'D');
    const romanThousands = new RomanNumberConstructor('M');

    const romanNumbers = new DefaultNumber(
        romanUnits,
        romanDozens,
        romanHundreds, 
        romanThousands
    );
    
    const convertedArrayOfNumbers = arrayOfDigits.map((x, i) => setRomanNumber(x, i, romanNumbers)).reverse();
    const convertedStringOfNumbers = convertedArrayOfNumbers.join('');

    function setRomanNumber(num, index, numbersObject) {
        let result;
        
        let currentLevelUnitsKey = Object.keys(numbersObject)[index];
        let currentLevelUnits = numbersObject[currentLevelUnitsKey];

        if (index === 3) {
            result = currentLevelUnits.one.repeat(num);
            return result
        }
        
        let nextLevelUnitsKey = Object.keys(numbersObject)[index + 1];
        let nextLevelUnits = numbersObject[nextLevelUnitsKey];

        result = ( num < 4 ) ? currentLevelUnits.one.repeat(num) :
                (num === 4) ? currentLevelUnits.one + currentLevelUnits.five :
                (num >= 5 && num < 9) ? currentLevelUnits.five + currentLevelUnits.one.repeat(num - 5) :
                currentLevelUnits.one + nextLevelUnits.one;

        return result
    }

    return convertedStringOfNumbers;
}