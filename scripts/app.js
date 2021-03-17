const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)
const daysDisplay = document.querySelector('#days')
const hoursDisplay = document.querySelector('#hours')
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
const nextYearContainer = document.querySelector('#year')
const loading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const handleCountdownDisplay = () => {
  loading.remove()
  countdownContainer.style.display = 'flex'
}

nextYearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = (days, hours, minutes, seconds) => {
  daysDisplay.textContent = getTimeUnit(days)
  hoursDisplay.textContent = getTimeUnit(hours)
  minutesDisplay.textContent = getTimeUnit(minutes)
  secondsDisplay.textContent = getTimeUnit(seconds)
}

const updateCountDown = () =>{
  const currentTime = new Date()
  const difference = newYearTime - currentTime
  const days = Math.floor(difference 
    /1000 /* milissegundo/segundo */ 
    /60 /* segundos/min */  
    /60 /* min/hora */  
    /24 /* horas/dia */ 
    )
  const hours = Math.floor(difference 
    /1000 /* milissegundo/segundo */ 
    /60 /* segundos/min */  
    /60 /* min/hora */  
    ) % 24 /* removendo o numero de horas que já se passaram no dia atual */
  const minutes = Math.floor(difference 
    /1000 /* milissegundo/segundo */ 
    /60 /* segundos/min */  
    ) % 60 /* removendo o numero de minutos que já se passaram na hora atual */
  const seconds = Math.floor(difference 
    /1000 /* milissegundo/segundo */  
    ) % 60 /* Pegando o numero de segundos que já se passaram no minuto atual */

    insertCountdownValues(days, hours, minutes, seconds)
}


const init = () => {
  setTimeout(handleCountdownDisplay, 1000)
  setInterval(updateCountDown, 1000);
}

init()