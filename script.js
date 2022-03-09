// let firstValue = prompt("Entrer la première valeur");
// let operator = prompt("Entrer l'opérateur");
// let secondValue = prompt("Entrer la seconde valeur");

function calculette(value1, op, value2) {

    switch (op){
        case "+" :
            console.log(parseInt(value1) + parseInt(value2));
             return parseInt(value1) + parseInt(value2);
            break;
        case "-" :
            console.log(parseInt(value1) - parseInt(value2));
            break;
        case "*" :
            console.log(parseInt(value1) * parseInt(value2));
            break;
        case "/" :
            console.log(parseInt(value1) / parseInt(value2));
            break;
        default:
            console.log("Invalide operator");
    }
}

const btn1 = document.querySelector('#One');
const btn2 = document.querySelector('#Two');
const btn3 = document.querySelector('#Three');
const btn4 = document.querySelector('#Four');
const btn5 = document.querySelector('#Five');
const btn6 = document.querySelector('#Six');
const btn7 = document.querySelector('#Seven');
const btn8 = document.querySelector('#Eight');
const btn9 = document.querySelector('#Nine');
const btnPlus = document.querySelector('#Plus');
const btnMoins = document.querySelector('#Moins');
const btnMultiplier = document.querySelector('#Multiplier');
const btnDiviser = document.querySelector('#Diviser');
const btnEgal = document.querySelector('#Egal');

const listBtn = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btnPlus, btnMoins, btnMultiplier, btnDiviser, btnEgal]

let firstValue = "";
let operator = "";
let secondValue = "";

console.log(firstValue)


function remplissage(valeurInsertion) {
    if (firstValue === ""){
        firstValue = valeurInsertion;
        window.alert("Cliquer sur l'opérateur'");
    }else if(operator === ""){
        operator = valeurInsertion;
        window.alert("Cliquer sur le second chiffre");
    }else{
        secondValue = valeurInsertion;
        window.alert("résultat : " + calculette(firstValue, operator, secondValue))
        document.querySelector("#result").innerHTML = calculette(firstValue, operator, secondValue)
    }
}
 //si firstValue est vide, je la rempli,
 //sinon je rempli operator,
 //sinon je rempli secondValue

//message "entrer chiffre 1"
window.alert("Cliquer sur le premier chiffre");
//user clic que un bouton

btn1.addEventListener('click', function () {
    remplissage("1")
  });

btn2.addEventListener('click', function () {
    remplissage("2")
  });
//message "entrer opérateur"

//user clic sur opérateur
btnPlus.addEventListener('click', function () {
    remplissage("+")
  });
