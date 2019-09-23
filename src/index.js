const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arrayOfSymbols = [];
  let answer;

  let auxString = expr.match(/.{1,10}/g);

  auxString.forEach(element => {
    arrayOfSymbols.push(element);
  });

  arrayOfSymbols.map((item, index) => {
    arrayOfSymbols[index] = item.replace(/\W+/g, ' ').replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
  });

  arrayOfSymbols.forEach((item, index) => {
    if (item === ' '){
      return;
    }
    arrayOfSymbols[index] = MORSE_TABLE[item];
  });
  
  answer = arrayOfSymbols.join('');
  return answer;
}

module.exports = {
    decode
}