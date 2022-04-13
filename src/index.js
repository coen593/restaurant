import {initMap} from './map.js'
const home = require('./home.js')
const menu = require('./menu.js')
const contact = require('./contact.js')

const pageList = ['Home','Menu','Contact']

const createHeader = () => {
    const header = document.createElement('header')

    const logo = document.createElement('h1')
    logo.innerText = 'Pizzeria Gusto'
    logo.setAttribute('id','logo')

    const nav = document.createElement('nav')
    for (let x of pageList) {
        const button = document.createElement('button')
        button.setAttribute('id',x.toLowerCase())
        button.classList.add('nav-link')
        button.innerText = x
        nav.appendChild(button)
    }

    header.appendChild(logo)
    header.appendChild(nav)
    return header
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
    const header = createHeader()
    container.appendChild(header)
    handleNavLinks()
    getContent()
    setActivePage('home')
})()