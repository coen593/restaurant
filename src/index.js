import {initMap} from './map.js'
import {makeNewElement} from './makeNewElement.js'

const home = require('./home.js')
const menu = require('./menu.js')
const contact = require('./contact.js')

const pageList = ['Home','Menu','Contact']

const createHeader = () => {
    const header = document.createElement('header')
    const logo = makeNewElement('h1',[],'logo','Pizzeria Gusto')
    const nav = document.createElement('nav')
    for (let x of pageList) {
        const button = makeNewElement('button',['nav-link'],x.toLowerCase(),x)
        nav.appendChild(button)
    }
    header.appendChild(logo)
    header.appendChild(nav)
    return header
}

const createFooter = () => {
    const footer = document.createElement('footer')
    footer.innerHTML = '<p>Copyright &copy; <script>document.write(new Date().getFullYear())</script>coen593</p><a href="https://github.com/coen593" target="_blank">  <i class="fab fa-github"></i></a>'
    return footer
}

const getContent = () => {
    const content = document.createElement('div')
    content.classList.add('content-holder')
    container.appendChild(content)

    const homeContent = home.home
    content.appendChild(homeContent)

    const menuContent = menu.menu
    content.appendChild(menuContent)

    const contactContent = contact.contact
    content.appendChild(contactContent)
    initMap()
}

const setActivePage = (active) => {
    for (let page of pageList) {
        const link = document.querySelector(`#${page.toLowerCase()}`)
        const content = document.querySelector(`.content.${page.toLowerCase()}`)
        if (page.toLowerCase() === active) {
            link.classList.add('active')
            content.style.display = 'grid'
        } else {
            link.classList.remove('active')
            content.style.display = 'none'
        }
    }
    switch(active) {
        case 'home':
            document.documentElement.style.setProperty('--X-transform-content', '0%')
            break
        case 'menu':
            document.documentElement.style.setProperty('--X-transform-content', '100%')
            break
        case 'contact':
            document.documentElement.style.setProperty('--X-transform-content', '200%')
            break
    }
}

const handleNavLinks = () => {
    const buttons = document.querySelectorAll('nav *')
    buttons.forEach(button => {
        button.addEventListener('click', () => setActivePage(button.id))
    })
}

// Module function to init website
const initializeWebsite = (() => {
    const container = document.querySelector('#container')
    container.appendChild(createHeader())
    handleNavLinks()
    getContent()
    setActivePage('home')
    container.appendChild(createFooter())
})()