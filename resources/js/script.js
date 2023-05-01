// VARIABLES
const themeSwitcherInput = document.querySelector('.calculator__switch-input');
const themeSwitcherThumb = document.querySelector('.calculator__switch-thumb');
const calculator = document.querySelector('.calculator');
const keyPad = document.querySelector('.calculator__keys');
const calculatorValue = document.querySelector('.calculator__value');
let operator;

// FUNCTIONS
function getThemeSwitcherValue() {
  const themeSwitcherValue = themeSwitcherInput.value;
  positionSwitcherThumb(themeSwitcherValue);
  changeTheme(themeSwitcherValue);
}

function positionSwitcherThumb(themeSwitcherValue) {
  if (themeSwitcherValue === '1') {
    themeSwitcherThumb.style.transform = 'translateX(0%)';
  } else if (themeSwitcherValue === '2') {
    themeSwitcherThumb.style.transform = 'translateX(calc(2rem - 50%)';
  } else {
    themeSwitcherThumb.style.transform = 'translateX(calc(4rem - 100%)';
  }
}

function changeTheme(themeSwitcherValue) {
  if (themeSwitcherValue === '1') {
    calculator.classList = 'calculator';
    document.body.style.backgroundColor = 'var(--clr-bg-main-1)';
    document.body.style.color = 'var(--clr-txt-light-1)';
  } else if (themeSwitcherValue === '2') {
    document.body.style.backgroundColor = 'var(--clr-bg-main-2)';
    document.body.style.color = 'var(--clr-txt-dark-2)';
    calculator.classList = 'calculator calculator--theme-2';
  } else {
    document.body.style.backgroundColor = 'var(--clr-bg-main-3)';
    document.body.style.color = 'var(--clr-txt-yellow-3)';
    calculator.classList = 'calculator calculator--theme-3';
  }
}

function onKeyPadClick(e) {
  const targetId = e.target.id;
  switch (targetId) {
    case 'zero':
      addToDisplay('0');
      break;
    case 'one':
      addToDisplay('1');
      break;
    case 'two':
      addToDisplay('2');
      break;
    case 'three':
      addToDisplay('3');
      break;
    case 'four':
      addToDisplay('4');
      break;
    case 'five':
      addToDisplay('5');
      break;
    case 'six':
      addToDisplay('6');
      break;
    case 'seven':
      addToDisplay('7');
      break;
    case 'eight':
      addToDisplay('8');
      break;
    case 'nine':
      addToDisplay('9');
      break;
    case 'comma':
      addToDisplay('.');
      break;
    case 'delete':
      deleteLastNumber();
      break;
    case 'reset':
      resetCalculator();
      break;
  }
}

function addToDisplay(num) {
  const currentValue = calculatorValue.innerHTML;
  if (currentValue === '0' && num !== '.') {
    calculatorValue.innerHTML = num;
  } else {
    calculatorValue.innerHTML = currentValue + num;
  }
}

function deleteLastNumber() {
  const currentValue = calculatorValue.innerHTML;
  if (currentValue.length === 1) {
    calculatorValue.innerHTML = '0';
  } else {
    calculatorValue.innerHTML = currentValue.slice(0, currentValue.length - 1);
  }
}

function resetCalculator() {
  calculatorValue.innerHTML = '0';
  operator = '';
}

// EVENT LISTENERS
themeSwitcherInput.addEventListener('input', getThemeSwitcherValue);
keyPad.addEventListener('click', onKeyPadClick);
