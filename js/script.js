let a = +prompt('Введите первое число:')
let action = prompt(`Какое действие Вы хотите выполнить:
"sum" - сумма двух чисел?
"ave" - среднее арифметическое?
"     +     " ?
"     -     " ?
"     *     " ?
"     /     " ?
"     %     " ?
"     **    " ?`)

let b = +prompt('Введите второе число:')

let answer
let message

if (action == "+") {
    answer = a + b
    message = (`Сумма двух чисел равна: ${answer}`)
} else {
    if (action == "-") {
        answer = a - b
        message = (`Разность двух чисел равна: ${answer}`)
    } else {
        if (action == "*") {
            answer = a * b
            message = (`Произведение двух чисел равно: ${answer}`)
        } else {
            if (action == "/") {
                answer = a / b
                message = (`Частное двух чисел равно: ${answer}`)
            } else {
                if (action == "sum") {
                    answer = a + b
                    message = (`Сумма двух чисел равна: ${answer}`)
                } else {
                    if (action == "ave") {
                        answer = (a + b) / 2
                        message = (`Среднее арифметическое двух чисел равно: ${answer}`)
                    } else {
                        if (action == "**") {
                            answer = a ** b
                            message = (`${a} в степени ${b} равно: ${answer}`)
                       } else {
                            if (action == "%") {
                                answer = a / 100 * b
                                message = (`${b} процентов от ${a} равно: ${answer}`)
                            } else {
                                message = (`Ошибка ввода, внимательно читайте инструкцию!`)
                            }
                        }
                    }
                }
            }
        }
    }
}

alert(message)

let myAge = 33
let name = prompt('Введите имя:')
let age = +prompt('Введите возраст:')
let isMale = confirm('Вы мужчина?:')

if (age > myAge) {
    message = `Здравствуйте, ${name}!`
} else {
    if (isMale == true) {
        message = `Привет, ${name}!`
    } else {
       if (18 <= age) {
            message = `Привет, ${name}! Давай познакомимся! Вот мой номер телефона: +998-90-097-xx-xx`
       } else {
            message = `Здравствуйте, ${name}!`
       }
    }
}

alert(message)
