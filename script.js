//variables
const btnEncrypt = document.querySelector('#enC');
const btnDecrypt = document.querySelector('#deC');
let key = document.querySelector('#keys');
let output = '';

//maybe use later: "A", "B", "C", "D", "E", "F", "G", "H",
//"I", "J", "K", "L", "M", "N", "O", "P",
//"Q", "R", "S", "T", "U", "V", "W", "X",
//"Y", "Z", 

//array
const alphabet = ["a", "b", "c", "d", "e", "f",
"g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v",
"w", "x", "y", "z"]

//click event
btnEncrypt.addEventListener('click', () => {
    // debugger
    const input = document.querySelector('#userInput');
    const outputArea = document.querySelector('#answer');
    const ChosenKey = parseInt(key.value);
    
    for(const letter of input.value.toLowerCase()){
        if(!alphabet.includes(letter)){
            continue
        }

        const index = alphabet.findIndex((item) => item === letter)
        let newIndex = index + ChosenKey;

        if(newIndex > 25){
            newIndex = newIndex - 26;
        }
        output += alphabet[newIndex];
        outputArea.innerHTML = output;

        outputArea.scrollIntoView({behavior: 'smooth'});
    }
    output = '';
})

btnDecrypt.addEventListener('click', () => {
    const input = document.querySelector('#userInput');
    const outputArea = document.querySelector('#answer');
    const ChosenKey = parseInt(key.value);
    
    for(const letter of input.value.toLowerCase()){
        if(!alphabet.includes(letter)){
            continue
        }

        const index = alphabet.findIndex((item) => item === letter)
        let newIndex = index - ChosenKey;

        if(newIndex < 0){
            newIndex = newIndex + 26;
        }
        output += alphabet[newIndex];
        outputArea.innerHTML = output;

        outputArea.scrollIntoView({behavior: 'smooth'});
    }
    output = '';
})