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
    let chars = extractChars(expr, 10);
    let decoded = '';
    for (let char of chars) {
        decoded += decodeChar(char);
    }
    return decoded;

    function decodeChar(char) {
        let morseChar = '';

        if (char === '**********') {
            return ' ';
        }

        let morseSymbols = extractChars(char, 2);
        for (let symbol of morseSymbols) {
            if (symbol === '00') {
                morseChar += '';
            }
            if (symbol === '10') {
                morseChar += '.';
            }
            if (symbol === '11') {
                morseChar += '-';
            }
        }

        return MORSE_TABLE[morseChar];
    }

    function extractChars(expr, splitCount) {
        let encodedChars = [];
        let loopEnd = expr.length / splitCount;
        for (let i = 0; i < loopEnd; i++) {
            let char = expr.slice(i * splitCount, (i + 1) * splitCount);
            encodedChars.push(char);
        }
        return encodedChars;
    }
}

module.exports = {
    decode
};