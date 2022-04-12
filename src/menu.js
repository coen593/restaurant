import Data from './options.csv'

const menu = document.createElement('div')
menu.classList.add('content')
menu.classList.add('menu')

for (let p of Data) {
    const pizza = document.createElement('div')
    pizza.classList.add('pizza')

    const name = document.createElement('h3')
    name.classList.add('pizza-name')
    name.innerText = p[0]
    pizza.appendChild(name)

    const description = document.createElement('p')
    description.classList.add('pizza-description')
    description.innerText = p[1]
    pizza.appendChild(description)

    menu.appendChild(pizza)
}

export {menu}