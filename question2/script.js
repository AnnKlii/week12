const text = document.querySelector('.text');
const result = document.querySelector('.result');
const newText = document.querySelector('.newText');
const substring = document.querySelector('.substring');
const replacedText = document.querySelector('.replacedText');
const replacedText2 = document.querySelector('.replacedText2');
const replacedText3 = document.querySelector('.replacedText3');
const modifiedText = document.querySelector('.modifiedText');

const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');
const buttonFour = document.querySelector('.buttonFour');
const buttonFive = document.querySelector('.buttonFive');
const buttonSix = document.querySelector('.buttonSix');
const buttonSeven = document.querySelector('.buttonSeven');
const buttonEight = document.querySelector('.buttonEight');
const buttonNine = document.querySelector('.buttonNine');
const buttonTen = document.querySelector('.buttonTen');

const makeOne = () => {
    console.log(text.innerText.length + " символа");
}
buttonOne.addEventListener('click', makeOne);

const makeTwo = () => {
    result.innerText = text.innerText.replace(/\;/g, '\n');
    text.classList.add('hidden');
    result.classList.remove('hidden');
    substring.classList.add('hidden');
    newText.classList.add('hidden');
    return result;
};

buttonTwo.addEventListener('click', makeTwo);

const makeThree = () => {
    const perem = makeTwo();
    substring.innerText = perem.innerText.replace(/\s/g, "");
    text.classList.add('hidden');
    result.classList.add('hidden');
    newText.classList.add('hidden');
    substring.classList.remove('hidden');
}
buttonThree.addEventListener('click', makeThree);

const makeFour = () => {
    const perem = makeTwo();
    newText.innerText = perem.innerText.slice(28, 50);
    text.classList.add('hidden');
    result.classList.add('hidden');
    substring.classList.add('hidden');
    newText.classList.remove('hidden');
    return newText;
}
buttonFour.addEventListener('click', makeFour);


const makeFive = () => {
    const perem1 = makeFour();
    replacedText.innerText = perem1.innerText.replace('клён', 'дубе');
    replacedText.classList.remove('hidden');
    newText.classList.add('hidden');
    return replacedText;
}
buttonFive.addEventListener('click', makeFive);

const makeSix = () => {
    const perem2 = makeTwo();
    replacedText2.innerText = perem2.innerText.toUpperCase();
    replacedText2.classList.remove('hidden');
    result.classList.add('hidden');

}
buttonSix.addEventListener('click', makeSix);

const makeSeven = () => {
    const perem3 = makeTwo();
    replacedText3.innerText = perem3.innerText.replace(/клён/g, "дуб");
    result.classList.add('hidden');
    replacedText3.classList.remove('hidden');
    replacedText2.classList.add('hidden');
    replacedText.classList.add('hidden');
    return replacedText3;
}
buttonSeven.addEventListener('click', makeSeven);

const makeEight = () => {
    const index = text.innerText.indexOf('моря');
    console.log(index);
}
buttonEight.addEventListener('click', makeEight);

const makeNine = () => {
    const perem4 = makeFive();
    modifiedText.innerText = perem4.innerText[0].toUpperCase() + perem4.innerText.slice(1);
    replacedText.classList.add('hidden');
    modifiedText.classList.remove('hidden');
}
buttonNine.addEventListener('click', makeNine);