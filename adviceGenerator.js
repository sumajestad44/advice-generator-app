const adviceContainer = document.querySelector('.main-container');
const actualAdvice = document.querySelector('.actual-advice');
const adviceId = document.querySelector('.advice-id');
const diceButton = document.querySelector('.dice-button');
const spinner = document.querySelector('.spinner');

async function getRandomAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    return data.slip;
    
  }
  updateAdvice();

async function updateAdvice(){
  const {id, advice} = await getRandomAdvice();
  adviceId.innerHTML = `advice #${id}`
  actualAdvice.innerHTML = `&ldquo;${advice}&rdquo;`
}

diceButton.addEventListener('click', async (e) => {
  e.target.classList.add('.spin');
  await updateAdvice();
  e.target.classList.remove('.spin');
})

async function init() {
  spinner.classList.add('show')
  await updateAdvice()
  spinner.classList.remove('show')
  adviceContainer.classList.add('show')
}

init();