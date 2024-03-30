const btnEle = document.getElementById("btn")
const birthdayValue = document.getElementById("birthday")
const resultEl = document.getElementById("result")
function calculateAge(){
    const birthValue = birthdayValue.value;
 if(birthValue === " "){

    alert("Please Enter your Name")
 }else{
    const age = getAge(birthValue)
    resultEl.innerHTML = `Your age is ${age} Old`
 }
}
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    if(month<0 || (month === 0 && currentDate.getDate() < birthDate.getDate())){
        age--;
    }
    return age;

    
}
btnEle.addEventListener("click",calculateAge)