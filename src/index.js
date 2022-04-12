const home = require('./home.js')
const menu = require('./menu.js')
const contact = require('./contact.js')

const createHeader = () => {
    const header = document.createElement('header')

    const logo = document.createElement('h1')
    logo.innerText = 'Pizzeria Gusto'
    logo.setAttribute('id','logo')

    const nav = document.createElement('nav')
    for (let x of ['Home','Menu','Contact']) {
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

// Module function to init website
const initializeWebsite = (() => {
    const container = document.querySelector('#container')
    const header = createHeader()
    console.log(container)
    container.appendChild(header)
})()