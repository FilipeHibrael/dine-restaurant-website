export function addPeople(bts, aText) {
  const buttons = document.querySelectorAll(bts);
  let ariaText = document.querySelector(aText);

  function changeAriaText(event) {
    event.preventDefault();
    const value = event.currentTarget.getAttribute('value');
    let text = ariaText.innerText;
    let n = +text.match(/\d+/)[0];

    if (value === 'minus' && n > 1) ariaText.innerText = text.replace(n, --n);
    else if (value === 'plus') ariaText.innerText = text.replace(n, ++n);
  }

  buttons.forEach((button) => button.addEventListener('click', changeAriaText));
}

export function dropDown(btn, ddMenu) {
  const button = document.querySelector(btn);
  const dropDownMenu = document.querySelector(ddMenu);

  function toggleActiveClass() {
    button.classList.toggle('open');
    dropDownMenu.classList.toggle('open');
  }

  button.addEventListener('click', toggleActiveClass);
}

export function pickMeridiem(btns, aText) {
  const buttons = document.querySelectorAll(btns);
  const ariaText = document.querySelector(aText);

  function changeMeridiem(event) {
    buttons.forEach((button) => button.classList.remove('active'));
    event.currentTarget.classList.add('active');
    ariaText.innerText = event.currentTarget.innerText;
  }

  buttons.forEach((button) => button.addEventListener('click', changeMeridiem));
}
