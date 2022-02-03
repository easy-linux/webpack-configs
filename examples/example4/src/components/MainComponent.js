import './MainComponent.scss'



const MainComponent = (text = 'Default text') => {
    const box = document.createElement('div')
    box.classList.add('main-component-box')
    box.style.border = "1px solid #CCC"

    const onClickHandler = () => {
      const randomValue = Math.ceil(Math.random() * 100)
      if(randomValue < 10){
        box.textContent = text + ' AAAAAAAAAAA'
      } else if(randomValue < 20){
        box.textContent = text + ' BBBBBBBBBBB'
      } else if(randomValue < 20){
        box.textContent = text + ' CCCCCCCCCCC'
      } else if(randomValue < 30){
        box.textContent = text + ' DDDDDDDDDDD'
      } else if(randomValue < 40){
        box.textContent = text + ' EEEEEEEEEEE'
      } else if(randomValue < 50){
        box.textContent = text + ' FFFFFFFFFFF'
      } else {
        box.textContent = text + ' 88888888888'
      }
    }
    
    box.addEventListener('click', onClickHandler)

    box.textContent = text

    return box
}

export default MainComponent

