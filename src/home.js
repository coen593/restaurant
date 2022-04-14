import {makeNewElement} from './makeNewElement.js'

const home = makeNewElement('div',['content','home'],null,null,null)

const tagline = makeNewElement('h2',[],null,'The best pizza in the country since 1453',null)

const text = makeNewElement('p',[],null,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt minima ratione velit repellat placeat quia minus ut est illo vel aperiam dignissimos, praesentium consectetur alias, culpa debitis iste? Dolorem!', null)

home.appendChild(tagline)
home.appendChild(text)

export {home}