let input = document.querySelector('#number');
let output = document.querySelector('#display');
let buttonAdd = document.querySelector('#plus');
let buttonSubtract = document.querySelector('#minus');


window.addEventListener("DOMContentLoaded", function(e) {
    input.value = 1;

});

buttonAdd.addEventListener('click', function(e) {
    let x = input.value;
    let y = output.textContent;
    output.textContent = y - (-x);
    if(output.textContent < 0){
        output.style.color = 'red';
    }else{
        output.style.color = 'black';
    }
});

buttonSubtract.addEventListener('click', function(e) {
    let x = input.value;
    let y = output.textContent;
    output.textContent = y - x;
    if(output.textContent < 0){
        output.style.color = 'red';
    }else{
        output.style.color = 'black';
    }
});

buttonAdd.addEventListener('mouseover', function(e){
    buttonAdd.style.backgroundColor = 'white';
    buttonAdd.style.color = 'lightgray';
});

buttonAdd.addEventListener('mouseout', function(e){
    buttonAdd.style.backgroundColor = 'lightgray';
    buttonAdd.style.color = 'white';
});

buttonSubtract.addEventListener('mouseover', function(e){
    buttonSubtract.style.backgroundColor = 'white';
    buttonSubtract.style.color = 'lightgray';
});

buttonSubtract.addEventListener('mouseout', function(e){
    buttonSubtract.style.backgroundColor = 'lightgray';
    buttonSubtract.style.color = 'white';
});