const themeSwitcherInput = document.querySelector('.calculator__switch-input');
const themeSwitcherThumb = document.querySelector('.calculator__switch-thumb');

function getThemeSwitcherValue() {
  const themeSwitcherValue = themeSwitcherInput.value;
  positionSwitcherThumb(themeSwitcherValue);
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

themeSwitcherInput.addEventListener('input', getThemeSwitcherValue);
