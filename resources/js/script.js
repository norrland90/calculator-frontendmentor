// VARIABLES
const themeSwitcherInput = document.querySelector('.calculator__switch-input');
const themeSwitcherThumb = document.querySelector('.calculator__switch-thumb');
const calculator = document.querySelector('.calculator');

const currentDisplayValue = document.querySelector('.calculator__value');
const numberElements = document.querySelectorAll('[data-number]');
const operatorElements = document.querySelectorAll('[data-operator]');
const deleteElement = document.querySelector('[data-delete]');
const equalsElement = document.querySelector('[data-equals]');
const resetElement = document.querySelector('[data-reset]');

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

function addToDisplay(e) {
  let newNumToDisplay;
  const num = e.target.innerHTML.trim();
  const currentValue = getCurrentDisplayNumber();
  if (currentValue === '0' && num === '0') {
    newNumToDisplay = '0';
  } else if (currentValue === '0' && num === '.') {
    newNumToDisplay = currentValue + num;
  } else if (num === '.' && currentValue.includes('.')) {
    newNumToDisplay = currentValue;
  } else if (currentValue === '0' && num !== '0') {
    newNumToDisplay = num;
  } else {
    newNumToDisplay = currentValue + num;
  }
  updateDisplay(newNumToDisplay);
}

function getCurrentDisplayNumber() {
  return currentDisplayValue.innerHTML;
}

function updateDisplay(num) {
  currentDisplayValue.innerHTML = num;
}

function deleteLastNumber() {
  let newNumToDisplay;
  const currentValue = getCurrentDisplayNumber();
  if (currentValue.length === 1) {
    newNumToDisplay = '0';
  } else {
    newNumToDisplay = currentValue.slice(0, currentValue.length - 1);
  }
  updateDisplay(newNumToDisplay);
}

// EVENT LISTENERS
themeSwitcherInput.addEventListener('input', getThemeSwitcherValue);

numberElements.forEach((element) => {
  element.addEventListener('click', addToDisplay);
});
deleteElement.addEventListener('click', deleteLastNumber);
