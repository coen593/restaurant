import Location from './icons/location.svg'
import Call from './icons/call.svg'
import Clock from './icons/clock.svg'
import Email from './icons/email.svg'
import {makeNewElement} from './makeNewElement.js'

const contact = makeNewElement('div',['content','contact'],null,null,null)

const appendContactDiv = (image, innerText, spanClass) => {
    const icon = new Image()
    icon.src = image
    icon.classList.add('icon')
    const span = document.createElement('span')
    span.innerText = innerText
    const div = document.createElement('div')
    div.classList.add(spanClass)
    div.appendChild(icon)
    div.appendChild(span)
    contact.appendChild(div)
}

appendContactDiv(Location,'Middle of Nowhere, Australia', 'address')
appendContactDiv(Call,'+1-234-567-8950', 'phone-number')
appendContactDiv(Clock, 'Mon - Fri: 11:00 - 21:00 | Sat - Sun: 11:00 - 00:00', 'times')
appendContactDiv(Email, 'Message us!', 'message')

const getFormInput = (tag, id, type, labelText) => {
    const div = makeNewElement('div',[id], null, null,{})
    const label = makeNewElement('label',[], null, labelText,{'for': id})
    const input = makeNewElement(tag,[],id,null,{
        'type': type,
        'id': id
    })
    div.appendChild(label)
    div.appendChild(input)
    return div
}

const form = document.createElement('form')
form.appendChild(getFormInput('input','name','text', 'Name'))
form.appendChild(getFormInput('input','email','email','Email address'))
form.appendChild(getFormInput('textarea','text','textarea','Message'))
form.appendChild(makeNewElement('button',[],'send-form','Submit',{'type': 'submit'}))
contact.appendChild(form)


const map = makeNewElement('div',[],'map',null,null)
contact.appendChild(map)

export {contact}