const display = document.querySelector('#display')
const btn__mode = document.getElementById('btn__mode')
const buttons = document.querySelectorAll('button')

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        let string = ''
        if(item.id === 'clear'){
            display.innerText = ''
        }else if(item.value === '<'){
            string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1)
        }else if(display.innerText != "" && item.value === '='){
            display.innerText = eval(display.innerText)
        }else if(display.innerText === '' && item.value === '='){
            display.innerText = 'Null'
            setTimeout(() => (display.innerText = ''), 2000)
        }else{
            string = item.value
            display.innerText += string
        }
    })
})