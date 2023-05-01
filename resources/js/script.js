// VARIABLES
const themeSwitcherInput = document.querySelector('.calculator__switch-input');
const themeSwitcherThumb = document.querySelector('.calculator__switch-thumb');
const calculator = document.querySelector('.calculator');

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

// EVENT LISTENERS
themeSwitcherInput.addEventListener('input', getThemeSwitcherValue);
