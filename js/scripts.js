const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');
const overlay = document.querySelector('#overlay');
const popUp = document.querySelector('.pop-up');
const popUpCloseBtn = document.querySelector('.popUpCloseBtn');


const checkBill = () => {

  if (price.value == '' || people.value == '' || tip.value == 0) {
    showPopUp();
    error.textContent = 'Uzupełnij wszystkie pola!';
    costInfo.style.display = 'none';
  } else {
    showPopUp()
    error.style.display = 'none';
    countBill();
  }

};


const countBill = () => {
  const newPrice = parseFloat(price.value);
  const newPeople = parseInt(people.value);
  const newTip = parseFloat(tip.value);

  const sum = (newPrice + (newPrice * newTip)) / newPeople;

  costInfo.style.display = 'block';

  cost.textContent = sum.toFixed(2);
};


const showPopUp = () => {
  overlay.style.display = 'block';
  popUpCloseBtn.style.display = 'block';
  popUp.style.display = 'block';
};


popUpCloseBtn.onclick = function(event){
  if (event.target == popUpCloseBtn) {
    overlay.style.display = 'none';
    popUp.style.display = "none";
    popUpCloseBtn.style.display = 'none';
  }
};

window.onclick = function(event) {
  if (event.target == overlay) {
    overlay.style.display = 'none';
    popUp.style.display = "none";
    popUpCloseBtn.style.display = 'none';
  }
};


countBtn.addEventListener('click', checkBill);
