//Exercise #1
// Crea una función nombrada que sume dos números.
function sum(){
    let num1= 5,num2=6, result=0
    result = num1 +num2
    console.log(`the sum of ${num1} + ${num2} is ${result}`)
}
sum()

//Exercise #2
// Escribe una función nombrada que reste dos números.
function subtraction() {
    let num1= 5, num2=6, result=0
    result = num1 - num2
    console.log(`the subtraction from ${num1} - ${num2} is ${result}`)
}
subtraction()

//Exercise #3
// Desarrolla una función nombrada que multiplique dos números.
function multiply() {
    let num1 = 5, num2 = 6, result = 0
    result = num1 * num2
    console.log(`the multiplication of ${num1} * ${num2} is ${result}`)
}
multiply()

//Exercise #4
// Implementa una función nombrada que divida dos números
function divide() {
    let num1 = 10, num2 = 2, result = 0
    result = num1 / num2 
    console.log(`the division of ${num1} / ${num2} is ${result}`)
}
divide()

//Exercise #5
// Diseña una función nombrada que calcule el módulo de dos números
function module() {
    let num1 = 10, num2 = 5, result = 0
    result = num1 % num2
    console.log(`the module ${num1} % ${num2} is ${result}`)
}
module()

//Exercise #6
// Asigna una función anónima a una variable que eleve un número al cuadrado
let elevate = function (num1){
    let result = 0
    result = num1**2
    console.log(`the number squared ${num1}**2 is ${result}`)
}
elevate(3)

//Exercise #7
// Usa una función anónima para convertir grados Celsius a Fahrenheit
let convert = function(celsius){
    let Fahrenheit = 0
    Fahrenheit = (celsius * 1,8) + 32
    console.log(`the conversion of ${celsius}°c degrees to fahrenheit is ${Fahrenheit}°f`)
}
convert(30)

//Exercise #8
// Crea una función anónima que calcule el perímetro de un rectángulo.
let perimeter = function(base, altura){
    let p = 0
    p = 2*(base + altura)
    console.log(`the perimeter of the rectangle is ${p}`)
}
perimeter(8,4)

//Exercise #9
// Implementa una función anónima que determine si un número es par o impar.
let check = function(number){
    if (number % 2 == 0) {
        console.log(`the number is pair`)
    }else{
        console.log(`the number is odd`)
    }
}
check(2)

//Exercise #10
// Escribe una función anónima que devuelva el número mayor entre dos números.
let langerNumber = function(number1, number2){
    if (number1 > number2) {
        console.log(`the large number is ${number1}`)

    }else if(number2 > number1){
        console.log(`the large number is ${number2}`)

    }else if(number1 == number2) {
        console.log(`the numbers are equal`)
    }
}
langerNumber(3,3)

//Exercise #11
// Desarrolla una función flecha que calcule el área de un círculo.
let areaCircle = (radio) => {
    let area = 0
    area = Math.PI * radio**2
    area = area.toFixed(2)
    console.log(`the area the of circle is ${area}`)
}
areaCircle(5)

//Exercise #12
// Crea una función flecha que convierta kilómetros a millas.
let convert2 = (kilometro) => {
    let unaMilla = 0.62137, result = 0
    result = kilometro * unaMilla
    console.log(`the convertion the kilometers to miles is ${result}`)
}
convert2(21)

//Exercise #13
// Escribe una función flecha que retorne el nombre completo dado un nombre y apellido.
let data = (nombre, apellido) => {
    let complete  = ""
    complete = nombre + " " + apellido
    console.log("your full data is " + nombre + " " + apellido)
}
fullData = data("Luis","Arguelllo")

//Exercise #14
// Implementa una función flecha que verifique si un texto contiene la letra 'a'
let checkText = (text) => {
    let cont = 0, check = false
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a" || text[i] == "A") {
            cont++
            check = true
        }
    }

    if (check == true) {
        console.log(`the text does contain the letter "a" and has ${cont} of them`)
    }else{
        console.log(`The entered text does not contain the vowel "a"`)
    }
}
let sentence = "hi, how are you" 
checkText(sentence)

//Exercise #15
// Diseña una función flecha que cuente cuántos elementos en un array son números.
let count = (list) => {
    let cont = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] >= 0 && list[i] <= 9) {
            cont++
        }
    }
    console.log(`there are ${cont} number in the array`)
}
let array = [0,1,2,3,4,5,6,7,8,9,"hola"]
count(array)

//Exercise #16
// Escribe una función de orden superior que tome una función y la aplique a todos los elementos de un array.
function greet(list, callback) {
    let newArray = []
    for (let i = 0; i < list.length; i++) {
        newArray.push(callback(list[i]))
    }
    return newArray
}

function unite(name) {
    return "Hi, " + name
}

function hidden1() {
    let array = ["Luis","Emilio","Eduardo","Jamilet"]
    let showGreetings = greet(array, unite)
    console.log(`of the greetings are [${showGreetings}]`)
}
hidden1()

//Exercise #17
// Crea una función de orden superior que filtre elementos de un array basándose en una condición dada.
function evenNumbers(list, callback){
    let newArray = []
    for (let i = 0; i < list.length; i++) {
        if (callback(list[i])) {
            newArray.push(list[i])
        }
    }
    return newArray
}
function checkPair(number) {
    return number % 2 == 0
}
function hidden2() {
    let numbers = [1,2,3,4,5,6,7,8,9,10]
    let arrayShow = evenNumbers(numbers, checkPair)
    console.log(`the even numbers of the array are [ ${arrayShow} ]`)
}
hidden2()

//Exercise #18
// Desarrolla una función de orden superior que retorne una nueva función incrementadora.
function createIncrementor() {
    let count = 0
    return function(){
        count += 1
        return count
    }
}
function hidden3() {
    let incrementor = createIncrementor()
    console.log(`the incrementor is ${incrementor()}`)
    console.log(`the incrementor is ${incrementor()}`)
    console.log(`the incrementor is ${incrementor()}`)
}
hidden3()

//Exercise #19
// Implementa una función de orden superior que tome dos funciones como argumentos y elija una para ejecutar basada en una condición.
function onlyAdult(list1,list2,callback1,callback2) {
    let newArray= []
    for (let i = 0; i < list2.length; i++) {
        if (callback1(list2[i])) {
            newArray.push(callback2(list1[i],list2[i]))
        }
    }
    return newArray
}
function elder(edad) {
    return edad >= 18
}
function unite2(name,edad) {
    return "Hi, " + name + " tu tienes " + edad + " años eres mayor de edad"
}
function hidden4() {
    let array1 = ["Luis","Emilio","Esther","Danna","Chester","Cesar"]
    let array2 = [12,18,21,14,22,11]
    let arrayShow = onlyAdult(array1,array2,elder,unite2)
    console.log(arrayShow)
}
hidden4()

//Exercise #20
// Diseña una función de orden superior que modifique un objeto utilizando otra función proporcionada.
function modify(Object,callback) {
    for (let i in Object) {
        Object[i] = callback(Object[i])
    }
    return Object
}
function multiply1(x) {
    return x * 2
}

function hidden5() {
    miObjeto = {
        a : 2,
        b : 4,
        c : 6
    }
    let arrayShow = modify(miObjeto,multiply1)
    console.log(arrayShow)
}
hidden5()

//Exercise 21
// Define una función constructora para un objeto "Coche" que tenga propiedades como marca, modelo y año.
function Cars(marca,modelo,año,matricula,propietario) {
    this.marca = marca
    this.modelo = modelo
    this.año = año
    this.matricula = matricula
    this.propietario = propietario
}
let Cars1 = new Cars("Chevrolet","ZL1","2020","KBZ-357","Luis Arguello")
console.log(Cars1)

//Exercise 22
// Crea una función constructora para un objeto "Libro" con propiedades de autor, título y año de publicación.
function book(titulo,autor,año,editorial) {
    this.titulo = titulo
    this.autor = autor
    this.año = año
    this.editorial = editorial
}
let book1= new book("Fisica","Issac Newton","1754","ImprentaDC")
console.log(book1)

//Exercise #23
// Implementa una función constructora que cree objetos "Usuario" con nombre, correo electrónico y contraseña.

function usuario(nombre,correo_electronico,contraseña,telefono){
    this.nombre = nombre
    this.correo_electronico = correo_electronico
    this.contraseña = contraseña 
    this.telefono = telefono
}
let user1 = new usuario("Luis","luisarguello5531@gmail.com")
console.log(user1)

//Exercise #24
// Escribe una función constructora para "Producto" con propiedades de nombre, precio y cantidad.
function producto(nombre,marca,precio,cantidad,codigo_barra) {
    this.nombre = nombre 
    this.marca = marca
    this.precio = precio 
    this.cantidad = cantidad 
    this.codigo_barra = codigo_barra 
}
let producto1 = new producto("Aceite","Favorita","1,00","20","543762898199000")
console.log(producto1)

// Exercise #25 
// Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, matrícula y carrera.
function estudiante(nombre,matricula,carrera,modalidad) {
    this.nombre = nombre 
    this.matricula = matricula 
    this.carrera = carrera 
    this.modalidad = modalidad
}
let estudiante1 = new estudiante("Luis Arguelo","Vespertina","Ingenieria en software","Presencial")
console.log(estudiante1)

// Exercise #26
// Escribe una función recursiva para calcular el factorial de un número
function factorial(number) {
    if (number == 0) {
        return 1
    }else{
        return number * factorial(number - 1)
    }
}
function hidden6() {
    let n = 9
    let showResult = factorial(n)
    console.log(`the factorial of ${n} would be ${showResult}`)
}
hidden6()

//Exercise #27
// Crea una función recursiva que sume todos los números hasta un número dado
function sum2(number){
    if (number <=  0) {
        return 0
    }else{
        return number + sum2(number - 1)
    }
}
function hidden7(){
    let number = 9
    let showResult = sum2(number)
    console.log(`the total suma would be ${showResult}`)
}
hidden7()

//Exercise #28
// Implementa una función recursiva que encuentre el máximo común divisor (MCD) de dos números
function mcd(number1, number2) {
    if (number2 == 0) {
        return number1
    }else{
        return mcd(number2, number1 % number2)
    }
}
function  hidden8(){
    let num1 = 48, num2 = 18
    let showResult = mcd(num1,num2) 
    console.log(`the MCD de ${num1} and ${num2} is ${showResult}`)
}
hidden8()

//Exercise #29
// Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número específico.
function fibonacci(number, a = 0, b = 1, array = []) {
    if (number == 0) {
        return array;
    }
    array.push(a);
    return fibonacci(number - 1, b, a + b, array);
}

function hidden9(){
    let number = 10;
    let showResult = fibonacci(number);
    console.log(`the sequence fibonacci is [${showResult}]`);
}
hidden9();

//Exercise #30
// Desarrolla una función recursiva que invierta una cadena de texto.
function invertirCadena(cadena) {
    if (cadena === "") {
        return "";
    } else {
        return invertirCadena(cadena.substr(1)) + cadena.charAt(0);
    }
}
function hidden10() {
    let cadena = "hola mundo"
    let showResult = invertirCadena(cadena) 
    console.log(`the inverted chain is [${showResult}]`)
}
hidden10()

//Exercise #31
// Demuestra el uso de una variable global modificándola dentro de una función.
let globalVariable = 5
function Variable() {
    console.log(`the global variable has changed to ${globalVariable = 8}`)
}
Variable()

//Exercise #32
// Escribe un código donde una variable local oculte una variable global del mismo nombre
let Variable2 = "I am a global variable" 
function hide() {
    let Variable2 = "I am a local variable"
    console.log(Variable2)
}
hide()
console.log(Variable2)

//Exercise #33
// Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de nombres.
let count1 = 10
let arrayCount = []
for (let i = 1; i <= 10 ; i++) {
    count1 =count1 - 1
    arrayCount.push(count1)
}
function hide2() {
    let count1 = 0
    let arrayCount = []
    for (let i = 1; i <= 10; i++) {
        count1 = count1 + 1
        arrayCount.push(count1)
    }
    console.log(`process local variable [${arrayCount}]`)
}
hide2()
console.log(`process global variable [${arrayCount}]`)

//Exercise #34
// Implementa un contador utilizando una variable global.
let count2 = 20
function hide3() {
    for (let i = 0; i < 10; i++) {
        count2++
    }
    console.log(`Count of the global variable is ${count2}`)
}
hide3()

//Exercise #35
// Crea una función que intente modificar una variable local definida en otra función.
function modify1() {
    let Variable1 = "hi, how are you"
    console.log(`First local variable is "${Variable1}"`)
}
function modify2() {
    let Variable1 = "Hello world"
    console.log(`modified local variable is "${Variable1}"`)
}
modify1()
modify2()

//Exercise #36
// Escribe una función que determine si un año es bisiesto.
function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return `the year ${year} is a leap year` 
            }else{
                return `the year ${year} is not a leap year`
            }
        }else{
            return `the year ${year} is a leap year`
        }
    } else {
        return `the year ${year} is not a leap year`
    }
}
function hidden11(){
    let year = 2000
    let showResult = leapYear(year)
    console.log(showResult)
}
hidden11()

//Exercise #37
// Implementa una función que evalúe tres números y retorne el mayor
function largeNumber(number1,number2,number3){
    if (number1 > number2 && number1 > number3) {
        return `the large number is ${number1}`
    }else if(number2 > number1 && number2 > number3){
        return `the large number is ${number2}`
    }else if (number3 > number1 && number3 > number2) {
        return `the large number is ${number3}`
    }else if (number1 == number2 && number2 == number3) {
        return `the numbers are equal`
    }
}
function hidden12() {
    let num1 = 3, num2 = 5, num3 = 1
    let showResult = largeNumber(num1,num2,num3)
    console.log(showResult)
}
hidden12()

//Exercise #38
// Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota.
function plataform(notas) {
    let accumulator = 0, hide = true 
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 0 && notas[i] <= 10 ) {
            accumulator = accumulator + notas[i]
        }else{
            console.log(`Enter grades greater than or equal to 0 or notes less than or equal to 10`)
            hide = false
        }
    }
    if (hide) {
        Checking(accumulator,notas)
    }
}
function Checking(sum,notas){

    let average =  sum / notas.length

    if (average > 7) {
        console.log(`the student is approved`)
    }else{
        console.log(`the student is not approved`)
    }
}
function hidden13() {
    let notas = [10,9,7,9,8]
    plataform(notas)
}
hidden13()

//Exercise #39
// Crea una función que clasifique una edad en categorías (niño, adolescente, adulto, anciano).
function classify(age) {
    if (age >= 1 && age < 15) {
        return `You're a child`
    }else if(age >= 15 && age < 18){
        return `You're a teenager`
    }else if (age >= 18 && age < 65) {
        return `You're an adult`
    }else if (age >= 65 && age <= 100) {
        return `You're an old man`
    }else if (age <= 0 || age > 100 ) {
        return `Enter valid ages`
    }
}
function hidden14() {
    let age = 19
    let showResult = classify(age)
    console.log(showResult)
}
hidden14()

//Exercise #40
// Desarrolla una función que verifique si un usuario tiene acceso basado en su edad.
function verifyAccess(age) {
    if (age > 18 && age < 80) {
        return `you have access to`
    }else if (age > 0 && age < 18) {
        return `you do not have access `
    }else{
        return `Enter valid ages`
    }
}
function hidden15() {
    let age = 1000
    let showResult = verifyAccess(age)
    console.log(showResult)
}
hidden15()

//Exercise #41
// Escribe un bucle while que cuente de 1 a 100
function accountant(){
    let count = 1
    let count1 = []
    while (count > 0 && count <= 100) {
        count1.push(count)
        count++
    }
    console.log(count1)
}
accountant()

//Exercise #42
// Implementa un bucle while que sume los primeros 50 números naturales.
function naturalNumber() {
    let count = 1
    let sum = 0
    while (count > 0 && count <= 50) {
        sum = sum + count
        count++
    }
    console.log(`the sum of the natural numbers from 1 to 50 is ${sum}`)
}
naturalNumber()

//Exercise #43
// Crea un bucle while que repita un saludo hasta que el usuario decida parar
function infinitGreeting(number) {
    let run = true
    while (run == true) {
        console.log("Hi")
        if (number == 0) {
            run = false
            break
        }
        number--
    }
}
function hidden16(){
    let num = 10
    infinitGreeting(num)

}
hidden16()

//Exercise #44
// Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango
function divisible() {
    let count = 1
    while (count > 0 && count <= 30 ) {
        if (count % 7 == 0) {
            console.log(`first number divisible by 7 is ${count}`)
            count = 40
        }
        count++
    }
}
divisible()

//Exercise #45
// Diseña un bucle while que verifique la entrada del usuario hasta que sea válida
function EnterUser(number) {
    let comp = true
    while(number == 0){
        console.log(`valid number, thanks`)
        comp = false
        number = 2
    }
    if (comp == true) {
        console.log(`Number enter do not is valid`)
    }
}
function hidden17() {
    let num = 8
    EnterUser(num)
}
hidden17()

//Exercise #46
// Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en puntos.
function ratings(option) {
    switch (option) {
        case "A":
            return `you has 10 points`
            break;
        case "B":
            return `you has 8 points`
            break;
        case "C":
            return `you has 6 points`
            break;
        case "D":
            return `you has 4 points`
            break;
        case "F":
            return `you has 2 points`
            break;
        default:
            break;
    }
}
function hidden18() {
    let option = "B"
    let showResult = ratings(option)
    console.log(showResult)
}
hidden18()

//Exercise #47
// Implementa una función que use switch para responder a diferentes comandos de un chatbot.
function chatBot(comando) {
    switch (comando) {
        case "hi":
            console.log(`Hello, how can I help you today`)
            break;
        case "help":
            console.log(`Here are the commands you can use: Hello, Help, Goodbye`)
            break;
        case "goodbye" || "bye":
            console.log(`See you later! I hope to see you again soon.`)
            break;
        default:
            console.log(`Sorry, I don't understand that command`)
            break;
    }
}
function hidden19() {
    let comando = "hi"
    comando = comando.toLowerCase()
    chatBot(comando)
}
hidden19()

//Exercise #48
// Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta, cheque)
function  payments(method) {
    switch (method) {
        case "cash":
            console.log(`You have selected to pay in cash. Please hand the money over to the cashier.`)
            break;
        case "card":
            console.log(`You have selected to pay by card. Please insert your card into the reader.`)
            break;
        case "check":
            console.log(`You've selected to pay by check. Please give your check to the cashier.`)
            break;
        default:
            console.log(`Payment method not recognized. Please select a valid payment method: cash, card, check.`)
            break;
    }
}
function hidden20() {
    let method = "Card"
    method = method.toLowerCase()
    payments(method)
}
hidden20()    

//Exercise #49
// Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /).
function basicCalculations(number1,number2,option) {
    switch (option) {
        case "+":
            return number1 + number2
            break;
        case "-":
            return number1 - number2
            break;
        case "*":
            return number1 * number2
            break;
        case "/":
            return number1 / number2
            break;
        default:
            return`Sorry the entered option is not available`
            break;
    }
}
function hidden21() {
    let option = "+", number1 = 2 , number2 = 6
    let showResult = basicCalculations(number1,number2,option)
    console.log(`option : ${option} , result: ${showResult}`)
}
hidden21()

//Exercise #50
// Diseña un switch para cambiar entre diferentes idiomas de un sitio web.
function language(option) {
    switch (option) {
        case "spanish":
            return `Bienvenido, puede comenzar su navegacion`
            break;
        case "english":
            return `Welcome, you can start your browsing`
            break;  
        case "frances":
            return `Bienvenue, vous pouvez commencer votre navigation`
            break;  
        case "chino":
            return `欢迎，您可以开始导航`
            break; 
        default:
            return `I'm sorry, I can't recognize that language`
            break;
    }
}
function hidden22() {
    let option = "FRANCES"
    option = option.toLowerCase()
    let showResult = language(option)
    console.log(showResult)
}
hidden22()

//Exercise #51
// Implementa un bucle for que imprima todos los elementos de un array
function print(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(`Element array ${list[i]}`)
    }
}
function hidden23() {
    let arrayNumbers = [1,2,3,4,5]
    print(arrayNumbers)
}
hidden23()

//Exercise #52
// Escribe un bucle for que multiplique todos los elementos de un array
function multiply2(list) {
    let newArray = []
    for (let i = 0; i < list.length; i++) {
        newArray.push(list[i]*2)
    }
    return newArray
}
function hidden24() {
    let arrayNumbers = [1,2,3,4,5]
    let showResult = multiply2(arrayNumbers)
    console.log(`multiplied array is [${showResult}]`)
}
hidden24()

//Exercise #53
// Crea un bucle for para encontrar el menor número en un array
function minorNumber(list) {
    let minor = list[0]
    for (let i = 0; i < list.length; i++) {
        if (list[i] < minor) {
            minor = list[i]
        }
    }
    return minor
}
function hidden25() {
    let arrayNumbers = [2,3,4,5,7] 
    let showResult = minorNumber(arrayNumbers)
    console.log(`the minor number is ${showResult}`)
}
hidden25()

//Exercise #54
// Desarrolla un bucle for para verificar si un array contiene un elemento específico.
function searchItem(list,search) {
    let comp = false , index = []
    for (let i = 0; i < list.length; i++) {
        if (list[i] == search) {
            index.push(i)
            comp = true
        }
    }
    if (comp == true) {
        return index
    }else {
        return comp
    }
}
function hidden26() {
    let Item = [2,3,4,5,"hola"]
    let search = "hola"
    let showResult = searchItem(Item,search)

    if (showResult == false) {
       console.log(`Sorry, the item wasn't found `) 
    }else{
        console.log(`element is in the ${showResult}`)
    }
}
hidden26()

//Exercise #55
// Diseña un bucle for que copie un array en otro.
function copy(list){
    let arrayCopy = []
    for (let i = 0; i < list.length; i++) {
        arrayCopy.push(list[i])
    }
    return arrayCopy
}
function hidden27() {
    let arrayOriginal = [1,2,3,4,5] 
    console.log(`Array original is [${arrayOriginal}]`)

    let showResult = copy(arrayOriginal)

    console.log(`Array copied is [${showResult}]`)
}
hidden27()

//Exercise #56
// Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea mayor que 10
function LargeNumber3(number) {
    do {
        if (number < 10) {
            console.log(`the number is no more than 10`)     
        }else{
            console.log(`thanks, the number is greater than 10 `)
        }
        number = 11
    } while (number < 10);
}
function hidden28() {
    let number = 56
    LargeNumber3(number) 
}
hidden28()

//Exercise #57
// Implementa un for-in para mostrar todas las propiedades de un objeto.
function properties(Object) {
    for (let i in Object) {
        console.log(`La propiedad ${i} tiene el valor ${Object[i]}`)
    }
}
function hidden29() {
    let MiObject = {
        name : "Luis",
        lastName : "Arguello",
        age : 19,
        addres : "Km-26"
    }
    properties(MiObject)
}
hidden29()

//Exercise #58
// Usa un for-of para iterar sobre un array de nombres y saludar a cada uno.
function greetings2(list) {
    for ( let name of list) {
        console.log(`Hi, ${name}`)
    }
}
function hidden30() {
    let arrayNames = ["Luis","Emilio","Eduardo"]
    greetings2(arrayNames)
}
hidden30()

//Exercise #59
// Crea un forEach para aplicar un descuento del 10% a precios en un array.
function discounts(list,desc) {
    let pricesDiscounts = []
    list.forEach((i) => {
        let valor = i * desc 
        valor = valor.toFixed(2)
        pricesDiscounts.push(valor)
    });
    return pricesDiscounts
}
function hidden31() {
    let prices = [13,23,31,46]
    let desc = 0.10
    let showResult = discounts(prices,desc)
    console.log(`Prices discounts is [${showResult}]`)
}
hidden31()

//Exercise #60
// Escribe un código que use map para convertir todas las temperaturas de un array de Celsius a Fahrenheit.
function convert3(temperatureCelsius){
    let temperatureFahrenheit = temperatureCelsius.map((tempCelsius)=>{
        return tempCelsius * 9/5 + 32
    })
    return temperatureFahrenheit
}
function hidden32() {
    let temperatureCelsius = [0,10,20,30,40]
    let showResult = convert3(temperatureCelsius)
    console.log(`Temperatures converted to fahrenheit are [${showResult}]`)
}
hidden32()