const firstName = prompt('Введите первое имя')
const secondName = prompt('Введите второе имя')

const randomMatch = Math.floor(Math.random() * 100)


if (randomMatch < 33){
    alert(`Совместимость ${firstName} и ${secondName} = ${randomMatch}, лучше поискать другую пару`)
} else if (randomMatch > 33 && randomMatch < 66) {
    alert(`Совместимость ${firstName} и ${secondName} = ${randomMatch}, у вас достаточно хорошая совместимость`)
} else if (randomMatch > 66 && randomMatch < 100) {
    alert(`Совместимость ${firstName} и ${secondName} = ${randomMatch}, у вас прекрасная совместимость`)
} else {
    alert('Такого числа не должно получиться')
}


