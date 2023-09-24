
const button = document.querySelector('.button');
const result = document.querySelector('.result');
const resultText = document.querySelector('.result-text');

const calculateBMI = () => {
    const weight = document.querySelector('.input-weight').value;
    const height = document.querySelector('.input-height').value;
    const heightSquare = Math.pow(height / 100, 2);
    const imt = Math.round((weight / heightSquare) * 10) / 10;
    result.innerHTML = `Ваш ИМТ равен ${imt}`;

    if (imt < 18.5) {
        resultText.innerHTML = 'ИМТ менее 18.5: Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.';
    } else if (imt >= 18.5 && imt <= 24.9) {
        resultText.innerHTML = 'ИМТ от 18.5 до 24.9: Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.';
    } else if (imt >= 25 && imt <= 29.9) {
        resultText.innerHTML = 'ИМТ от 25.0 до 29.9: Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.';
    } else if (imt >= 30 && imt <= 34.9) {
        resultText.innerHTML = 'ИМТ от 30.0 до 34.9: Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.';
    } else if (imt >= 35 && imt <= 39.9) {
        resultText.innerHTML = 'ИМТ от 35.0 до 39.9: Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.';
    } else if (imt >= 40) {
        resultText.innerHTML = 'ИМТ 40 и выше: Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.';
    };

    return imt;

}

button.addEventListener('click', calculateBMI);


