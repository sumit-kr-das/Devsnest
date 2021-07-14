var screen = document.getElementById("screen");
var button = document.querySelectorAll("#btn");

var getVal = "";

for (index of button) {
    index.addEventListener("click", (e) => {
        let getData = e.target.innerText;
        console.log(getData);
        if (getData == "AC") {
            getVal = "";
            screen.value = getVal;
        } else if (getData == "=") {
            screen.value = eval(getVal);
        } else if (getData == "√") {
            screen.value = Math.sqrt(getVal);
        } else if (getData == "C") {
            screen.value = getVal.slice(0, getVal.length - 1);
        } else {
            getVal += getData;
            screen.value = getVal;
        }
    });
}
