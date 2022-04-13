const map = require('./map.js')

const contact = document.createElement('div')
contact.classList.add('content')
contact.classList.add('contact')

const map = document.createElement('div')
map.setAttribute('id','map')
map.initMap()

export {contact}