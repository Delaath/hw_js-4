let textArea1 = prompt("Введіть якесь значення").trim().toLowerCase();
console.log(textArea1);

let textArea2 = prompt("Введіть якесь значення").trim().toLowerCase();
console.log(textArea2);

switch ("") {
    case textArea1:
    case textArea2:
        alert("Ваша строка пуста")
        break;

    default:
        alert(`Ви ввели ${textArea1} та ${textArea2}`)
        break;
}

let numArea1 = +prompt("Введіть якесь число").trim();
if (isNaN(numArea1)){
    alert("Введіть коректне число!")
}
let numArea2 = +prompt("Введіть якесь число").trim();
if (isNaN(numArea2)){
    alert("Введіть коректне число!")
}
const amount = numArea1 + numArea2;
if (isNaN(amount)){
    alert("Ви вводили некорекні значення тому допобачення!")
} else if (amount >= 10){
    alert(`Сума ваших значень більша або дорівнює 10`)
} else{
    alert("Сума ваших значень менша за 10")
}

let textArea3 = prompt("Введіть слово JavaScript").trim().toLowerCase();
const checkTextArea3 = textArea3.includes("javascript");
if (checkTextArea3 == true) {
    alert("текст містить слово JavaScript")
} else {
    alert("Текст не містить слово JavaScript")
}

let numArea3 = +prompt("Введіть число яке входить в діапазон від 10 до 20").trim();

if (numArea3 >= 10 && numArea3 <= 20) {
    alert("Ваше число входить в діапазон");
} else {
alert("Ваше число не входить в діапазон");
}

let userName = prompt("Введіть ваше ім'я (не менше 3х символі)").trim();
if (userName.length < 3) {
    alert("Помилка! Ваше ім'я занадто коротке!")
}

let userEmail = prompt("Введіть ваш email (з символом @))").trim();

if (userEmail.includes("@")) {
    
} else {
    alert("Ви ввели некоректний email!")
}

let password = prompt("Введіть ваш пороль (не менше 6х символі)").trim();
if (password.length < 6) {
    alert("Помилка! Ваш пороль занадто короткий!")
} else {
    alert("Дякуємо за реєстрацію!")
}