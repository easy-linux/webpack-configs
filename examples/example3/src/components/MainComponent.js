import './MainComponent.scss'


const MainComponent = (text = 'Default text') => {
    const box = document.createElement('div')
    box.classList.add('main-component-box')
    box.style.border = "1px solid #CCC"

    box.textContent = text

    return box
}

export default MainComponent

