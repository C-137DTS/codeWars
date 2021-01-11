function decodeMorse (code) {
    var characters = code.trim().split(' ')
    console.log(characters)
    var i = 0
        while(characters.length >= i) {
            if(characters[i] == ''){
                    characters.splice(i + 1, 1)
                    characters[i] = ' '
            } else {
                switch (characters[i]) {
                    case '.-': characters[i] = 'A'
                        break;
                    case '-...': characters[i] = 'B'
                        break;
                    case '-.-.': characters[i] = 'C'
                        break;
                    case '-..': characters[i] = 'D'
                        break;
                    case '.': characters[i] = 'E'
                        break;
                    case '..-.': characters[i] = 'F'
                        break;
                    case '--.': characters[i] = 'G'
                        break;
                    case '....': characters[i] = 'H'
                        break;
                    case '..': characters[i] = 'I'
                        break;
                    case '.---': characters[i] = 'J'
                        break;
                    case '-.-': characters[i] = 'K'
                        break;
                    case '.-..': characters[i] = 'L'
                        break;
                    case '--': characters[i] = 'M'
                        break;
                    case '-.': characters[i] = 'N'
                        break;
                    case '---': characters[i] = 'O'
                        break;
                    case '.--.': characters[i] = 'P'
                        break;
                    case '--.-': characters[i] = 'Q'
                        break;
                    case '.-.': characters[i] = 'R'
                        break;
                    case '...': characters[i] = 'S'
                        break;
                    case '-': characters[i] = 'T'
                        break;
                    case '..-': characters[i] = 'U'
                        break;
                    case '...-': characters[i] = 'V'
                        break;
                    case '.--': characters[i] = 'W'
                        break;
                    case '-..-': characters[i] = 'X'
                        break;
                    case '-.--': characters[i] = 'Y'
                        break;
                    case '--..': characters[i] = 'Z'
                        break;
                    case '...---...': characters[i] = 'SOS'
                        break;
                    case '-.-.--': characters[i] = '!'
                        break;
                    case '.-.-.-': characters[i] = '.'
                }
            }
            i++
        }
            var naturalLanguage = characters.join('')
            return naturalLanguage
}
 var input = '   .'
 console.log(decodeMorse(input))