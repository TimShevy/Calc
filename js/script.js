// // let a = +prompt('Введите первое число:')
// // let action = prompt(`Какое действие Вы хотите выполнить:
// // "sum" - сумма двух чисел?
// // "ave" - среднее арифметическое?
// // "     +     " ?
// // "     -     " ?
// // "     *     " ?
// // "     /     " ?
// // "     %     " ?
// // "     **    " ?`)

// // let b = +prompt('Введите второе число:')

// // let answer
// // let message

// // if (action == "+") {
// //     answer = a + b
// //     message = (`Сумма двух чисел равна: ${answer}`)
// // } else {
// //     if (action == "-") {
// //         answer = a - b
// //         message = (`Разность двух чисел равна: ${answer}`)
// //     } else {
// //         if (action == "*") {
// //             answer = a * b
// //             message = (`Произведение двух чисел равно: ${answer}`)
// //         } else {
// //             if (action == "/") {
// //                 answer = a / b
// //                 message = (`Частное двух чисел равно: ${answer}`)
// //             } else {
// //                 if (action == "sum") {
// //                     answer = a + b
// //                     message = (`Сумма двух чисел равна: ${answer}`)
// //                 } else {
// //                     if (action == "ave") {
// //                         answer = (a + b) / 2
// //                         message = (`Среднее арифметическое двух чисел равно: ${answer}`)
// //                     } else {
// //                         if (action == "**") {
// //                             answer = a ** b
// //                             message = (`${a} в степени ${b} равно: ${answer}`)
// //                        } else {
// //                             if (action == "%") {
// //                                 answer = a / 100 * b
// //                                 message = (`${b} процентов от ${a} равно: ${answer}`)
// //                             } else {
// //                                 message = (`Ошибка ввода, внимательно читайте инструкцию!`)
// //                             }
// //                         }
// //                     }
// //                 }
// //             }
// //         }
// //     }
// // }

// // alert(message)

// let myAge = 33
// let name = prompt('Введите имя:')
// let age = +prompt('Введите возраст:')
// let isMale = confirm('Вы мужчина?:')

// if (age > myAge) {
//     message = `Здравствуйте, ${name}!`
// } else {
//     if (isMale == true) {
//         message = `Привет, ${name}!`
//     } else {
//        if (18 <= age) {
//             message = `Привет, ${name}! Давай познакомимся! Вот мой номер телефона: +998-90-097-xx-xx`
//        } else {
//             message = `Здравствуйте, ${name}!`
//        }
//     }
// }

// alert(message)

let opr = prompt("Введите действие, которое хотите выполнить: '+' '-' '*' '/' '%' '^' или сгенерировать случайный пароль 'pass' ")
let a = +prompt('Введите первое число: ')
let b
let c
let d = Math.pow(10, a)
let e = Math.random()

if ( (opr == 'pass') && (e < 0.01) ) {
    // c = (d * e) * 100
    alert(Math.trunc((d * e) * 100)) 
} else if ( (opr == 'pass') && (e < 0.1) ) {
    // c = (d * e) * 10
    alert(Math.trunc((d * e) * 10)) 
} else if ( (opr == 'pass') ) {
    // c = d * e
    alert(Math.trunc(d * e))
} else if (opr != 'pass') {
    b = +prompt('Введите второе число: ')
    switch (opr) {
        case '+':
            c = a + b
            break;
        case '-':
            c = a - b
            break;
        case '*':
            c = a * b
            break;
        case '/':
            c = a / b
            break;
        case '%':
            c = (a / 100) * b
            break;
        case '^':
            c = Math.pow(a, b)
        default:
            c = 'Неправильное использование калькулятора, напрягите мозги и попробуйте еще раз ;)'
            break;
    }   
    alert(`${a} ${opr} ${b} = ${c}`)
}

let students = [ 
    ['Артём', 33], 
    ['Арслан', 21], 
    ['Максим', 35], 
    ['Жасур', 31], 
    ['Александр', 29]
]

let name = prompt('Введите имя')
let age = +prompt('Введите Ваш возраст')

students.push([name, age])
console.log(students)

alert(`${name} ${age}`)


