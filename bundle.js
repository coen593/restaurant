/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/options.csv":
/*!*************************!*\
  !*** ./src/options.csv ***!
  \*************************/
/***/ ((module) => {

module.exports = [["Margherita","tomato sauce, mozzarella"],["Diavola","tomato sauce, mozzarella, salami picante"],["Quatro Stagioni","tomato sauce, mozzarella, olives, artichokes, prosciutto, mushrooms"],["Prosciutto","tomato sauce, mozzarella, prosciutto"],["Bresaola","tomato sauce, mozzarella, bresaola, rocket, parmezan cheese"],["Calzone","tomato sauce, mozzarella, ham"],["Burrata","tomato sauce, cherry tomatoes, burrata, rocket, oregan"],["Quatro Formaggi","mozzarella, gorgonzola, Swiss cheese, pecorino, parmezan"]]

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _location_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.svg */ "./src/location.svg");


const contact = document.createElement('div')
contact.classList.add('content')
contact.classList.add('contact')

const locIcon = new Image()
locIcon.src = _location_svg__WEBPACK_IMPORTED_MODULE_0__
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



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
const home = document.createElement('div')
home.classList.add('content')
home.classList.add('home')

const tagline = document.createElement('h2')
tagline.innerText = 'The best pizza in the country since 1453!'

const text = document.createElement('p')
text.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt minima ratione velit repellat placeat quia minus ut est illo vel aperiam dignissimos, praesentium consectetur alias, culpa debitis iste? Dolorem!'

home.appendChild(tagline)
home.appendChild(text)



/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initMap": () => (/* binding */ initMap)
/* harmony export */ });
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _options_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.csv */ "./src/options.csv");
/* harmony import */ var _options_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_options_csv__WEBPACK_IMPORTED_MODULE_0__);


const menu = document.createElement('div')
menu.classList.add('content')
menu.classList.add('menu')

for (let p of (_options_csv__WEBPACK_IMPORTED_MODULE_0___default())) {
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



/***/ }),

/***/ "./src/location.svg":
/*!**************************!*\
  !*** ./src/location.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7a6b2dddbc5cdc4d0fec.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./src/map.js");

const home = __webpack_require__(/*! ./home.js */ "./src/home.js")
const menu = __webpack_require__(/*! ./menu.js */ "./src/menu.js")
const contact = __webpack_require__(/*! ./contact.js */ "./src/contact.js")

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

const getContent = () => {
    const content = document.createElement('div')
    content.classList.add('content-holder')
    container.appendChild(content)

    const homeContent = home.home
    content.appendChild(homeContent)

    const menuContent = menu.menu
    content.appendChild(menuContent)

    const contactContent = contact.contact
    content.appendChild(contactContent)
    ;(0,_map_js__WEBPACK_IMPORTED_MODULE_0__.initMap)()
}

const setActivePage = (active) => {
    for (let page of pageList) {
        const link = document.querySelector(`#${page.toLowerCase()}`)
        const content = document.querySelector(`.content.${page.toLowerCase()}`)
        if (page.toLowerCase() === active) {
            link.classList.add('active')
            content.style.display = 'grid'
        } else {
            link.classList.remove('active')
            content.style.display = 'none'
        }
    }
    switch(active) {
        case 'home':
            document.documentElement.style.setProperty('--X-transform-content', '0%')
            break
        case 'menu':
            document.documentElement.style.setProperty('--X-transform-content', '100%')
            break
        case 'contact':
            document.documentElement.style.setProperty('--X-transform-content', '200%')
            break
    }
}

const handleNavLinks = () => {
    const buttons = document.querySelectorAll('nav *')
    buttons.forEach(button => {
        button.addEventListener('click', () => setActivePage(button.id))
    })
}

// Module function to init website
const initializeWebsite = (() => {
    const container = document.querySelector('#container')
    const header = createHeader()
    container.appendChild(header)
    handleNavLinks()
    getContent()
    setActivePage('home')
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDBDQUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNPO0FBQ1A7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUEsY0FBYyxxREFBSTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmZ0M7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLGdDQUFXO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVztBQUNoQyxnQkFBZ0IsbUJBQU8sQ0FBQyxzQ0FBYzs7QUFFdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaURBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELG1CQUFtQjtBQUNuRSwyREFBMkQsbUJBQW1CO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9vcHRpb25zLmNzdiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gW1tcIk1hcmdoZXJpdGFcIixcInRvbWF0byBzYXVjZSwgbW96emFyZWxsYVwiXSxbXCJEaWF2b2xhXCIsXCJ0b21hdG8gc2F1Y2UsIG1venphcmVsbGEsIHNhbGFtaSBwaWNhbnRlXCJdLFtcIlF1YXRybyBTdGFnaW9uaVwiLFwidG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhLCBvbGl2ZXMsIGFydGljaG9rZXMsIHByb3NjaXV0dG8sIG11c2hyb29tc1wiXSxbXCJQcm9zY2l1dHRvXCIsXCJ0b21hdG8gc2F1Y2UsIG1venphcmVsbGEsIHByb3NjaXV0dG9cIl0sW1wiQnJlc2FvbGFcIixcInRvbWF0byBzYXVjZSwgbW96emFyZWxsYSwgYnJlc2FvbGEsIHJvY2tldCwgcGFybWV6YW4gY2hlZXNlXCJdLFtcIkNhbHpvbmVcIixcInRvbWF0byBzYXVjZSwgbW96emFyZWxsYSwgaGFtXCJdLFtcIkJ1cnJhdGFcIixcInRvbWF0byBzYXVjZSwgY2hlcnJ5IHRvbWF0b2VzLCBidXJyYXRhLCByb2NrZXQsIG9yZWdhblwiXSxbXCJRdWF0cm8gRm9ybWFnZ2lcIixcIm1venphcmVsbGEsIGdvcmdvbnpvbGEsIFN3aXNzIGNoZWVzZSwgcGVjb3Jpbm8sIHBhcm1lemFuXCJdXSIsImltcG9ydCBMb2NhdGlvbiBmcm9tICcuL2xvY2F0aW9uLnN2ZydcblxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0JylcblxuY29uc3QgbG9jSWNvbiA9IG5ldyBJbWFnZSgpXG5sb2NJY29uLnNyYyA9IExvY2F0aW9uXG5sb2NJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxuXG5jb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5hZGRyZXNzLmlubmVyVGV4dCA9ICdNaWRkbGUgb2YgTm93aGVyZSwgQXVzdHJhbGlhJ1xuYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZHJlc3MnKVxuXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5sb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NJY29uKVxubG9jYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzcylcbmNvbnRhY3QuYXBwZW5kQ2hpbGQobG9jYXRpb24pXG5cbmNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5tYXAuc2V0QXR0cmlidXRlKCdpZCcsJ21hcCcpXG5jb250YWN0LmFwcGVuZENoaWxkKG1hcClcblxuZXhwb3J0IHtjb250YWN0fSIsImNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaG9tZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcbmhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpXG5cbmNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG50YWdsaW5lLmlubmVyVGV4dCA9ICdUaGUgYmVzdCBwaXp6YSBpbiB0aGUgY291bnRyeSBzaW5jZSAxNDUzISdcblxuY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxudGV4dC5pbm5lclRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMgc3VudCBtaW5pbWEgcmF0aW9uZSB2ZWxpdCByZXBlbGxhdCBwbGFjZWF0IHF1aWEgbWludXMgdXQgZXN0IGlsbG8gdmVsIGFwZXJpYW0gZGlnbmlzc2ltb3MsIHByYWVzZW50aXVtIGNvbnNlY3RldHVyIGFsaWFzLCBjdWxwYSBkZWJpdGlzIGlzdGU/IERvbG9yZW0hJ1xuXG5ob21lLmFwcGVuZENoaWxkKHRhZ2xpbmUpXG5ob21lLmFwcGVuZENoaWxkKHRleHQpXG5cbmV4cG9ydCB7aG9tZX0iLCIvLyBJbml0aWFsaXplIGFuZCBhZGQgdGhlIG1hcFxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgLy8gVGhlIGxvY2F0aW9uIG9mIFVsdXJ1XG4gICAgY29uc3QgdWx1cnUgPSB7IGxhdDogLTI1LjM0NCwgbG5nOiAxMzEuMDM2IH07XG4gICAgLy8gVGhlIG1hcCwgY2VudGVyZWQgYXQgVWx1cnVcbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICB6b29tOiA0LFxuICAgICAgY2VudGVyOiB1bHVydSxcbiAgICB9KTtcbiAgICAvLyBUaGUgbWFya2VyLCBwb3NpdGlvbmVkIGF0IFVsdXJ1XG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogdWx1cnUsXG4gICAgICBtYXA6IG1hcCxcbiAgICB9KTtcbiAgfSIsImltcG9ydCBEYXRhIGZyb20gJy4vb3B0aW9ucy5jc3YnXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubWVudS5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jylcbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpXG5cbmZvciAobGV0IHAgb2YgRGF0YSkge1xuICAgIGNvbnN0IHBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwaXp6YS5jbGFzc0xpc3QuYWRkKCdwaXp6YScpXG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncGl6emEtbmFtZScpXG4gICAgbmFtZS5pbm5lclRleHQgPSBwWzBdXG4gICAgcGl6emEuYXBwZW5kQ2hpbGQobmFtZSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncGl6emEtZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHBbMV1cbiAgICBwaXp6YS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQocGl6emEpXG59XG5cbmV4cG9ydCB7bWVudX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7aW5pdE1hcH0gZnJvbSAnLi9tYXAuanMnXG5jb25zdCBob21lID0gcmVxdWlyZSgnLi9ob21lLmpzJylcbmNvbnN0IG1lbnUgPSByZXF1aXJlKCcuL21lbnUuanMnKVxuY29uc3QgY29udGFjdCA9IHJlcXVpcmUoJy4vY29udGFjdC5qcycpXG5cbmNvbnN0IHBhZ2VMaXN0ID0gWydIb21lJywnTWVudScsJ0NvbnRhY3QnXVxuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgbG9nby5pbm5lclRleHQgPSAnUGl6emVyaWEgR3VzdG8nXG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywnbG9nbycpXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGZvciAobGV0IHggb2YgcGFnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLHgudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1saW5rJylcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHhcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICB9XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaG9sZGVyJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudClcblxuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gaG9tZS5ob21lXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29udGVudClcblxuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gbWVudS5tZW51XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudClcblxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gY29udGFjdC5jb250YWN0XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudClcbiAgICBpbml0TWFwKClcbn1cblxuY29uc3Qgc2V0QWN0aXZlUGFnZSA9IChhY3RpdmUpID0+IHtcbiAgICBmb3IgKGxldCBwYWdlIG9mIHBhZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwYWdlLnRvTG93ZXJDYXNlKCl9YClcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb250ZW50LiR7cGFnZS50b0xvd2VyQ2FzZSgpfWApXG4gICAgICAgIGlmIChwYWdlLnRvTG93ZXJDYXNlKCkgPT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2goYWN0aXZlKSB7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLVgtdHJhbnNmb3JtLWNvbnRlbnQnLCAnMCUnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tWC10cmFuc2Zvcm0tY29udGVudCcsICcxMDAlJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLVgtdHJhbnNmb3JtLWNvbnRlbnQnLCAnMjAwJScpXG4gICAgICAgICAgICBicmVha1xuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlTmF2TGlua3MgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiAqJylcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0QWN0aXZlUGFnZShidXR0b24uaWQpKVxuICAgIH0pXG59XG5cbi8vIE1vZHVsZSBmdW5jdGlvbiB0byBpbml0IHdlYnNpdGVcbmNvbnN0IGluaXRpYWxpemVXZWJzaXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJylcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgaGFuZGxlTmF2TGlua3MoKVxuICAgIGdldENvbnRlbnQoKVxuICAgIHNldEFjdGl2ZVBhZ2UoJ2hvbWUnKVxufSkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==