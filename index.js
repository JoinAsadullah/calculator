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

document.addEventListener('keydown', function(event) {
    console.log(event.key)
    switch (event.key) {
      case '0':
        document.querySelector('#zero').click()
        break;
      case '1':
        document.querySelector('#one').click()
        break;
      case '2':
        document.querySelector('#two').click()
        break;
      case '3':
        document.querySelector('#three').click()
        break;
      case '4':
        document.querySelector('#four').click()
        break;
      case '5':
        document.querySelector('#five').click()
        break;
      case '6':
        document.querySelector('#six').click()
        break;
      case '7':
        document.querySelector('#seven').click()
        break;
      case '8':
        document.querySelector('#eight').click()
        break;
      case '9':
        document.querySelector('#nine').click()
        break;
      case '+':
        document.querySelector('#plus').click()
        break;
      case '-':
        document.querySelector('#minus').click()
        break;
      case '*':
        document.querySelector('#multiply').click()
        break;
      case '/':
        document.querySelector('#divide').click()
        break;
      case '.':
        document.querySelector('#point').click()
        break;
      case 'Enter':
        document.querySelector('#equal').click()
        break;
      case 'Backspace':
        document.querySelector('#c').click()
        break;
      case 'Delete':
        document.querySelector('#c').click()
        break;
    }
  });
