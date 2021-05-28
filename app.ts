let input:HTMLInputElement = document.querySelector(".comSepValIpt")!;
let outputBox:HTMLInputElement = document.querySelector(".linSepValIpt")
let radio:NodeListOf<Element> = document.querySelectorAll('.form-check-input')!;





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