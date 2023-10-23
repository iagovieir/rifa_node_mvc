

let count = 0;
let Idinteval = 0;
document.addEventListener("DOMContentLoaded", function() {
    const value = document.querySelector('#value');
    const plus = document.querySelector('#plus');
    const minus = document.querySelector('#minus');


plus.addEventListener('click', ()=>{
        count += 1;
        updateValue();
})
minus.addEventListener('click', ()=>{
    count -= 1;
    updateValue();
})
const updateValue = ()=>{
    value.value = count;
 }
})
