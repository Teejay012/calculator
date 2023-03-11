const screen = document.querySelector('.screen'),
buttons = document.querySelectorAll('.btn'),
clear = document.querySelector('.btn-clear'),
equal = document.querySelector('.btn-equal');

(()=>{
    buttons.forEach(btn=>{
        btn.addEventListener('click', e=>{
            let value = e.target.dataset.num;
            screen.value+= value;
        })
    });

    equal.addEventListener('click', e=>{
        if(screen.value === ''){
            screen.value = '';
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', e=>{
        screen.value = '';
    })
})();