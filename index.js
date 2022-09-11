let buttons = document.querySelector('.buttons');
let input = document.querySelector('input');

let inn = 0;
let operator;
let value1=0;

buttons.addEventListener('click' , function(e) {
    if (e.target.matches('button')){
        if(inn == '0' && e.target.innerText != 'c' && e.target.innerText != '+'&& e.target.innerText != '-' && e.target.innerText != 'x' && e.target.innerText != '÷' && e.target.innerText != '='){
            inn = e.target.innerText;
            input.value = inn;
            console.log('hd');
        }
        else if(e.target.innerText == '+'|| e.target.innerText == '-' || e.target.innerText == 'x' || e.target.innerText == '÷' || e.target.innerText == '='){

            if(value1 == '0'){
                value1= inn;
                operator = e.target.innerText;
            }
            else{
            switch(operator){
                case '+':
                    value1 = Number(value1) + Number(inn);
                    operator = e.target.innerText;
                break;
                case '-':
                    value1 = Number(value1) - Number(inn);
                    operator = e.target.innerText;
                break;
                case 'x':
                    value1 = Number(value1) * Number(inn);
                    operator = e.target.innerText;
                break;
                case '÷':
                    value1 = Number(value1) / Number(inn);
                    operator = e.target.innerText;
                break;
                case '=':
                    operator = e.target.innerText;
                break;
            }
        }
            input.value = value1;
            inn = "";
        }
        else if(e.target.innerText == 'c'){
            input.value = "";
            inn = 0;
            operator=undefined;
            value1=0;
        }
        else{
            inn = inn + e.target.innerText;
            input.value = inn;
        }
    }
});
