export function makeNewElement(tag, classes, id, innerText, attributes) {
    const element = document.createElement(tag)
    if (id) element.setAttribute('id',id)
    if (classes.length) {
        for (let c of classes) {
            element.classList.add(c)
        }
    }
    if (innerText) element.innerText = innerText
    if (attributes) {
        for (let key in attributes) {
            element.setAttribute(key,attributes[key])
        }
    }
    return element
}