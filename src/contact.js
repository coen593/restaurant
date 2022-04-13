import Location from './location.svg'

const contact = document.createElement('div')
contact.classList.add('content')
contact.classList.add('contact')

const locIcon = new Image()
locIcon.src = Location
locIcon.classList.add('icon')

const address = document.createElement('span')
address.innerText = 'Middle of Nowhere, Australia'
address.classList.add('adress')

const location = document.createElement('div')
location.appendChild(locIcon)
location.appendChild(address)
contact.appendChild(location)

const map = document.createElement('div')
map.setAttribute('id','map')
contact.appendChild(map)

export {contact}