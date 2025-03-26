/* ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела (BMI).

2. - Индекс массы тела рассчитывается по формуле: 
вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. Сравнить массы тел двух людей (данные ниже), и вывести в консоль сравнения двух результатов в булевом значении (true / false).

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

4. У кого индекс BMI больше?

*/

// ЗАДАЕМ ПЕРЕМЕННЫЕ С ФИЗИЧЕСКИМИ ДАННЫМИ ЛЮДЕЙ
const bodyPetrHeight = 1.88,
      bodyPetrWeight = 72,
      bodyDenisHeight = 1.73,
      bodyDenisWeight = 82

//ЗАДАЕМ ПЕРЕМЕННЫЕ С ВЫЧИСЛЕНИЕМ ИНДЕКСА МАССЫ ТЕЛА
const bodyPetrMassIndex = bodyPetrWeight / bodyPetrHeight**2,
      bodyDenisMassIndex = bodyDenisWeight / bodyDenisHeight**2

//ВЫЧИСЛЯЕМ У КОГО БОЛЬШЕ ИНДЕКС МАССЫ ТЕЛА
const bmiLarger = bodyDenisMassIndex < bodyPetrMassIndex

console.log(bmiLarger)
