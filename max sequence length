// Task is to evaluate max sequence length in array. 
// If the next element is less than previous, it's stopped sequence.

function seqLength(s){
  let maxLength = 1;
  let length = 1;
      s.reduce((acc, curr) => {
          ((curr - acc) > 0) ?  length += 1 :  length = 1;
          maxLength = (length > maxLength) ? (maxLength = length) : maxLength;
          return acc = curr;
      });
  return  maxLength;
}

seqLength([3,1,4,6,9,3,4]);
