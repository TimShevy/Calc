let a = +prompt('Введите первое число:')
let action = prompt(`Какое действие Вы хотите выполнить:
"sum" - сумма двух чисел?
"average" - среднее арифметическое?
"     +     " ?
"     -     " ?
"     *     " ?
"     /     " ?`)

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
                    if (action == "average") {
                        answer = (a + b) / 2
                        message = (`Среднее арифметическое двух чисел равно: ${answer}`)
                    } else {
                        message = (`Ошибка ввода, внимательно читайте инструкцию!`)
                    }
                }
            }
        }
    }
}

alert(message)
