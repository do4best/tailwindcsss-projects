function checkVowel(){
    let text = document.getElementById("inputtext").value;
    let vowelCount = 0;
    text = text.toLowerCase() // it should always be a lower case
    for(let i=0; i<text.length; i++){ // this is loop
        let char = text.charAt(i); // check it should be start with character
        if(isVowel(char)){ 
            vowelCount++;
        }
    }

const result = document.getElementById('result')
result.textContent = "Total Vowels: " + vowelCount;
}
function isVowel(char){
    const result=['a','e','o','u','i'];
    return result.includes(char)
}