const dataSet = [0, 0, 0];
const textRegExp = new RegExp("^([-+]?\\d+[.]?\\d{0,15})$");
document.getElementById('data-form-id').addEventListener('submit', function(event){
    event.preventDefault();
    if(validate(this)){
        handleRequest(dataSet[0], dataSet[1], dataSet[2])
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

function isValidX(input) {
    removeError(input);
    let valid;
    let xInput = input.value;
    if (xInput !== "") {
        if (textRegExp.test(xInput)) {
            let xNumberInput = Number(xInput);
            if (Number.isFinite(xNumberInput)) {
                valid = xNumberInput >= -5 && xNumberInput <= 5;
                if (!valid) {
                    createError(input, "*Поле с X не должно выходить за пределы диапозона [-5..5]!");
                } else {
                    dataSet[0] = xNumberInput;
                }
            } else {
                valid = false;
                createError(input, "*Поле с X должно быть представлено числом!");
            }
        } else {
            valid = false;
            createError(input, "*Поле с X должно содержать 15 цифр после точки!");
        }
    }else {
        valid = false;
        createError(input, "*Поле с X не должно быть пустым!");
    }
    return valid;
}

function isValidY(input) {
    removeError(input);
    let valid;
    let yInput = input.value;
    if (yInput !== "") {
        if (textRegExp.test(yInput)) {
            let yNumberInput = Number(yInput);
            if (Number.isFinite(yNumberInput)) {
                valid = yNumberInput >= -3 && yNumberInput <= 5;
                if (!valid) {
                    createError(input, "*Поле с Y не должно выходить за пределы диапозона [-3..5]!");
                } else {
                    dataSet[1] = yNumberInput;
                }
            } else {
                valid = false;
                createError(input, "*Поле с Y должно быть представлено числом!");
            }
        } else {
            valid = false;
            createError(input, "*Поле с Y должно содержать 15 цифр после точки!");
        }
    }else {
        valid = false;
        createError(input, "*Поле с Y не должно быть пустым!");
    }
    return valid;
}

function isValidR(input) {
    removeError(input);
    let valid;
    let rInput = input.value;
    if (rInput !== "") {
        if (textRegExp.test(rInput)) {
            let rNumberInput = Number(rInput);
            if (Number.isFinite(rNumberInput)) {
                valid = rNumberInput >= 2 && rNumberInput <= 5;
                if (!valid) {
                    createError(input, "*Поле с R не должно выходить за пределы диапозона [2..5]!");
                } else {
                    dataSet[2] = rNumberInput;
                }
            } else {
                valid = false;
                createError(input, "*Поле с R должно быть представлено числом!");
            }
        } else {
            valid = false;
            createError(input, "*Поле с R должно содержать 15 цифр после точки!");
        }
    }else {
        valid = false;
        createError(input, "*Поле с R не должно быть пустым!");
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