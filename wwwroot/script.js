let totalCookies = 0;
let cookiesPerClick = 1;
let upgradeCost = 10;

const cookieCountE1 = document.getElementById('cookieCount');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeCostE1 = document.getElementById('upgradeCost');

function updateCookieCount() {
  cookieCountE1.textContent = `Pokes: ${totalCookies}`; 
}

clickButton.addEventListener('click', () => {
  totalCookies += cookiesPerClick;
  updateCookieCount();

  const flashNumber = document.getElementById('flashNumber');
  flashNumber.textContent = `+${cookiesPerClick}`;
  flashNumber.classList.remove('hidden');

  setTimeout(() => {
    flashNumber.classList.add('hidden');
  }, 1000);
});

upgradeButton.addEventListener('click', () => {
  if (totalCookies >= upgradeCost) {
    totalCookies -= upgradeCost;
    cookiesPerClick += 1;
    upgradeCost += 10;

    updateCookieCount();
    upgradeCostE1.textContent = upgradeCost;
  } else {
    alert('Not enough pokes to upgrade!');
  }
});

updateCookieCount();
