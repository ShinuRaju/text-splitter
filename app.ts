let input:HTMLInputElement = document.querySelector(".comSepValIpt")!;
let outputBox:HTMLInputElement = document.querySelector(".linSepValIpt")!;
let radio:NodeListOf<Element> = document.querySelectorAll('.form-check-input')!;
let removeBtn:HTMLButtonElement = document.querySelector('.remove-blank')!;




console.log(removeBtn);

let changeFunction = (val:boolean = true) => {
    let c: boolean = val;
    let inputString : string =  input.value;
    let changedString : string =  inputString.split(`${c ? ',' : ' '}`).join('\n')
    outputBox.value = changedString;
}

input.addEventListener('input', () => {
    changeFunction()
})

let changeRadio = (e) => {
    switch (e.target.value ) {
        case "comma":
            changeFunction(true)
            break;

            case "space":
                changeFunction(false)
                break;
    
        default:
            break;
    }
}


radio.forEach((e) => {
    e.addEventListener('change', (e) => {
        changeRadio(e);
    })
})

let removeBlankLines = () => {
    let outVal:string = outputBox.value;
    let replacedString:string =   outVal.replaceAll(/^\s*\n/gm, '')
    outputBox.value = replacedString;
    console.log(replacedString);
    console.log('object')
}


removeBtn.addEventListener('click', () => {
    removeBlankLines();
})