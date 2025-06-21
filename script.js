// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const userArr = [false, 22, 200, 100, null, undefined]


function calcAverage(arr) {
    let result = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof userArr[i] === 'number') {
            result += userArr[i]
            count++
        }
    }
    return result / count

}

console.log(calcAverage(userArr))