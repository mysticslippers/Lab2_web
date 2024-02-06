const dataSet = [0, 0, 0];
const textRegExp = new RegExp("^([-+]?\\d+[.]?\\d{0,15})$");
document.getElementById('data-form-id').addEventListener('submit', function(event){
    event.preventDefault();
    if(validate(this)){
        sendSyncRequest(dataSet[0], dataSet[1], dataSet[2]);
    }
});

function validate(form){
    const xTextInput = form.querySelector('input[name="x-input"]');
    const yTextInput = form.querySelector('input[name="y-input"]');
    const rTextInput = form.querySelector('input[name="r-input"]');

    let validX = isValidX(xTextInput);
    let validY = isValidY(yTextInput);
    let validR = isValidR(rTextInput);

    return validX && validY && validR;
}

function isValidX(xInput){
    removeError(xInput);
    let valid;
    let x = xInput.value;
    if (x !== "") {
        let xNumberInput = Number(x);
        if(Number.isFinite(xNumberInput)){
            if (textRegExp.test(x)) {
                valid = xNumberInput >= -5 && xNumberInput <= 5;
                if (!valid) {
                    createError(xInput, "*Поле с X не должно выходить за пределы диапозона [-5..5]!");
                } else {
                    dataSet[0] = x;
                }
            } else {
                valid = false;
                createError(xInput, "*Поле с X должно содержать 15 цифр после точки!");
            }
        } else {
            valid = false;
            createError(xInput, "*Поле с X должно быть представлено числом!");
        }
    }else {
        valid = false;
        createError(xInput, "*Поле с X не должно быть пустым!");
    }
    return valid;
}

function isValidY(yInput) {
    removeError(yInput);
    let valid;
    let y = yInput.value;
    if (y !== "") {
        let yNumberInput = Number(y);
        if(Number.isFinite(yNumberInput)){
            if (textRegExp.test(y)) {
                valid = yNumberInput >= -3 && yNumberInput <= 5;
                if (!valid) {
                    createError(yInput, "*Поле с Y не должно выходить за пределы диапозона [-3..5]!");
                } else {
                    dataSet[1] = y;
                }
            } else {
                valid = false;
                createError(yInput, "*Поле с Y должно содержать 15 цифр после точки!");
            }
        } else {
            valid = false;
            createError(yInput, "*Поле с Y должно быть представлено числом!");
        }
    }else {
        valid = false;
        createError(yInput, "*Поле с Y не должно быть пустым!");
    }
    return valid;
}

function isValidR(rInput) {
    removeError(rInput);
    let valid;
    let r = rInput.value;
    if (r !== "") {
        let rNumberInput = Number(r);
        if(Number.isFinite(rNumberInput)){
            if (textRegExp.test(r)) {
                valid = rNumberInput >= 2 && rNumberInput <= 5;
                if (!valid) {
                    createError(rInput, "*Поле с R не должно выходить за пределы диапозона [2..5]!");
                } else {
                    dataSet[2] = r;
                }
            } else {
                valid = false;
                createError(rInput, "*Поле с R должно содержать 15 цифр после точки!");
            }
        } else {
            valid = false;
            createError(rInput, "*Поле с R должно быть представлено числом!");
        }
    }else {
        valid = false;
        createError(rInput, "*Поле с R не должно быть пустым!");
    }
    return valid;
}

function createError(input, text) {
    const parent = input.parentNode.parentNode;
    const errorLabel = document.createElement('label');

    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;
    parent.classList.add('error');
    parent.append(errorLabel);
}

function removeError(input) {
    const parent = input.parentNode.parentNode;

    if (parent.classList.contains('error')) {
        parent.querySelector('.error-label').remove();
        parent.classList.remove('error');
    }
}