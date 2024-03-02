// Calculator

let display = document.getElementById("display");

function appendToDisplay(value) {

    display.value += value;

}

function clearDisplay() {

    display.value = "";

}

function calculate() {

    if (display.value === "Error") {

        return;

    } else {

        if (display.value === "") {

            return;

        } else {

            try {

                display.value = eval(display.value);

            } catch (error) {

                display.value = "Error"

            }

        }

    }

}
