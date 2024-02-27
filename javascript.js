const password_el = document.querySelector('#password');
const length_el = document.querySelector('#length');
const Uppercase_el = document.querySelector('#Uppercase');
const Lowercase_el = document.querySelector('#Lowercase');
const numbers_el = document.querySelector('#numbers');
const Symbols_el = document.querySelector('#Symbols');

const generate_btn = document.querySelector('#generate');
generate_btn.addEventListener('click', GeneratePassword);

const copy_btn = document.querySelector('#copy');
copy_btn.addEventListener('click', CopyPassword);

const Uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const Symbols_chars = "!@#$%^&*()";

function GeneratePassword() {
    let password = "";
    let length = length_el.value; // Corrected: using .value to get the value of the input

    let chars = "";

    chars += Uppercase_el.checked ? Uppercase_chars : "";
    chars += Lowercase_el.checked ? Lowercase_chars : "";
    chars += numbers_el.checked ? numbers_chars : "";
    chars += Symbols_el.checked ? Symbols_chars : "";

    for (let i = 0; i < length; i++) { // Corrected: Changed <= to <
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand, rand + 1);
    }
    password_el.value = password;
}

async function CopyPassword() {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(password_el.value); // Corrected: Changed passsword_el to password_el

        alert("Password copied to clipboard");
    }
}














//  const passsword_el =document.querySelector('#password');
//  const length_el =document.querySelector('#length');
//  const Uppercase_el =document.querySelector('#Uppercase');
//  const Lowercase_el =document.querySelector('#Lowercase');
//  const numbers_el =document.querySelector('#numbers');
//  const Symbols_el =document.querySelector('#Symbols');

//  const generate_btn =document.querySelector('#generate');
//  generate_btn.addEventListener('click',GeneratePassword);
//  const copy_btn =document.querySelector('#copy');
//  copy_btn.addEventListener('click',CopyPassword);
 
//  const Uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//  const Lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
//  const numbers_chars = "0123456789";
//  const Symbols_chars = "!@#$%^&*()";

//  function GeneratePassword ()
//  {
//     let password ="";
//     let length = length_el.ariaValueMax;
//     let chars = "";

//     chars += Uppercase_el.checked ?  Uppercase_chars : "";
//     chars += Lowercase_el_.checked ? Lowercase_chars : ""; 
//     chars += numbers_el_.checked ?   numbers_chars :"";
//     chars += Symbols_el.checked ?    Symbols_chars : "";

//     for(let i=0;i<= length; i++){
//         let rand = Math.floor(Math.random() * chars.length);
//         password += chars.substring(rand , rand +1);
//     }
//     passsword_el.value = password;
//  }

// async function CopyPassword() {
//     if(navigator.clipboard){
//         await navigator.clipboard.writeText(passsword_el.value);
        
//         alert("Password copird to clipboard");
//     }

// }
    
