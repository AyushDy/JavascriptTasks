
const form = document.querySelector('#form1');
const number = document.querySelector('#number');
const passWord = document.querySelector('#password');
const check= document.querySelector('#showPassword');
const item= document.querySelector('#item');
const item1= document.querySelector('#item1');
const item2= document.querySelector('#item2');
const item3= document.querySelector('#item3');
const item4= document.querySelector('#item4');
const item5= document.querySelector('#item5');
const head= document.querySelector('#head');




const isBetween = (length, min, max) => length < min || length > max ? false : true;

function isPasswordSecure(pass) {
    if (!(pass.length > 8)) {
        return false;
    }

    if (pass.indexOf(" ") !== -1) {
        return false;
    }

    let flag = 0;
    for (let i = 0; i <= 9; i++) {
        if (pass.indexOf(i) !== -1) {
            flag = 1;
        }
    }

    if (flag === 0) {
        return false;
    }

    flag = 0;
    for (let i = 65; i <= 90; i++) {
        if (pass.indexOf(String.fromCharCode(i)) !== -1) {
            flag = 1;
        }
    }

    if (flag === 0) {
        return false;
    }

    flag = 0;
    for (let i = 97; i <= 122; i++) {
        if (pass.indexOf(String.fromCharCode(i)) !== -1) {
            flag = 1;
        }
    }

    if (flag === 0) {
        return false;
    }

    if (!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass))) {
        return false;
    }

    return true;
}

check.addEventListener('change',function(){
    passWord.type= check.checked? 'text':'password';
});


const min = 3;
const max = 10;
let length = number.value.length;

number.addEventListener('input',function(){
    let leng = number.value.length;
    number.style.borderColor='#f0f0f0';
    let enterNumber = parseFloat(number.value); 
    if (!isBetween(leng, min, max) || !isNumeric(number)){
            number.style.borderColor='#ff0000';
        }else{
        number.style.borderColor= '#00ff00';
        }

    
});

passWord.addEventListener('input',function(){
    if (!isPasswordSecure(passWord.value)){
        passWord.style.borderColor='#ff0000';
    } else {
        passWord.style.borderColor='#00ff00';
    }
    
    if (passWord.value.indexOf(" ") !== -1) {
        item.style.display='';
    }else{
        item.style.display='none';
    }
    
    let containsNumber = false;
    for (let i = 0; i <= 9; i++) {
        if (passWord.value.indexOf(i) !== -1) {
            containsNumber = true;
            break;
        }
    }
    
    if (!containsNumber) {
        item3.style.display = '';
        } else {
        item3.style.display = 'none';
        }

    let flag=false;
    for(let i=65;i<=90;i++){
        if (passWord.value.indexOf(String.fromCharCode(i)) !== -1){
            flag=true;
            break;
        }
    }

    if (flag){
        item2.style.display='none';
    }else{
        item2.style.display= '';
    }

    flag= false;
    for(let i=97;i<=122;i++){
        if (passWord.value.indexOf(String.fromCharCode(i)) !== -1){
            flag=true;
            break;
        }
    }

    if (flag){
        item1.style.display='none';
    }else{
        item1.style.display= '';
    }

    if (passWord.value.length<8){
        item5.style.display='';
    }else{
        item5.style.display='none';
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passWord.value)) {
        item4.style.display='none';
    }else{
        item4.style.display='';
    }

    if (isPasswordSecure(passWord.value)){
        head.innerHTML='';
    } else {
        head.innerHTML='The password needs the following optimisation(s):';
    }

   
});

        
function isNumeric(num){
    for(let i=0;i<num.value.length;i++){
        if(isNaN(num.value[i])){
            return false;
        }
    }
    return true;
}






form.addEventListener('submit', function (event){
    event.preventDefault();


    for(let i=0;i<number.value.length;i++){
        if(isNaN(number.value[i])){
            alert('Please ensure that the number is entered correctly.');
            return;
        }
    }

    let lengt = number.value.length;

    let enteredNumber = parseFloat(event.target.elements.number.value);  

    if (!isBetween(lengt, min, max)|| isNaN(enteredNumber)){
        alert('Please ensure that the number is entered correctly.');

        number.style.borderColor='#ff0000';
        return;
    }else{
        number.style.borderColor= '#00ff00';


    }

    if (!isPasswordSecure(passWord.value)){
        alert('Invalid Password');
        passWord.style.borderColor='#ff0000';
    } else {
        passWord.style.borderColor='#00ff00';
    }

    if (!(isNaN(enteredNumber))&&(isBetween(lengt, min, max))&&(isPasswordSecure(passWord.value))){
        alert('form submitted successfully');

        form.submit();
    
    }
});



