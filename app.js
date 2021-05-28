var input = document.querySelector(".comSepValIpt");
var outputBox = document.querySelector(".linSepValIpt");
var radio = document.querySelectorAll('.form-check-input');
var changeFunction = function (val) {
    if (val === void 0) { val = true; }
    var c = val;
    var inputString = input.value;
    var changedString = inputString.split("" + (c ? ',' : ' ')).join('\n');
    outputBox.value = changedString;
};
input.addEventListener('input', function () {
    changeFunction();
});
var changeRadio = function (e) {
    switch (e.target.value) {
        case "comma":
            changeFunction(true);
            break;
        case "space":
            changeFunction(false);
            break;
        default:
            break;
    }
};
radio.forEach(function (e) {
    e.addEventListener('change', function (e) {
        changeRadio(e);
    });
});
