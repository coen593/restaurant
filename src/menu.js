import { makeNewElement } from './makeNewElement'
import Data from './options.csv'

const menu = makeNewElement('div',['content','menu'])

for (let p of Data) {
    const pizza = makeNewElement('div',['pizza'])

    const name = makeNewElement('h3',['pizza-name'],null,p[0])
    pizza.appendChild(name)

    const description = makeNewElement('p',['pizza-description'],null,p[1])
    pizza.appendChild(description)

    menu.appendChild(pizza)
}

export {menu}