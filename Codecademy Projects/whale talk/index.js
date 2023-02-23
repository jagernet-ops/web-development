let input = "turpentine and turtles";
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for(let i = 0; i < input.length; i++){
    let hasVowels = vowels.indexOf(input.charAt(i));
    if(hasVowels > -1){
        resultArray.push(vowels[hasVowels]);
        if(vowels[hasVowels] === 'e' || vowels[hasVowels] === 'u'){
            resultArray.push(vowels[hasVowels]);
        }
    }
}

let resultString = resultArray.join('');
console.log(resultString.toUpperCase());