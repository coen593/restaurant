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

const setActivePage = (active) => {
    console.log(active)
    for (let page of pageList) {
        const link = document.querySelector(`#${page.toLowerCase()}`)
        if (page.toLowerCase() === active) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }
    }
}

// Module function to init website
const initializeWebsite = (() => {
    const container = document.querySelector('#container')
    const header = createHeader()
    container.appendChild(header)
    setActivePage('home')
})()