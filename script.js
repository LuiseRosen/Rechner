function add() {
    let firstNumber = +document.getElementById('number1').value;
    let secondNumber = +document.getElementById('number2').value;
    let result = firstNumber + secondNumber;

    document.getElementById('resultAnnouncement').innerHTML = `Das Ergebnis ist ${result}`;

    alert(firstNumber + secondNumber);
}