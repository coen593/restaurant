const home = document.createElement('div')
home.classList.add('content')
home.classList.add('home')

const tagline = document.createElement('h2')
tagline.innerText = 'The best pizza in the country since 1453!'

const text = document.createElement('p')
text.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt minima ratione velit repellat placeat quia minus ut est illo vel aperiam dignissimos, praesentium consectetur alias, culpa debitis iste? Dolorem!'

home.appendChild(tagline)
home.appendChild(text)

export {home}