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
/* harmony import */ var _icons_location_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/location.svg */ "./src/icons/location.svg");
/* harmony import */ var _icons_call_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/call.svg */ "./src/icons/call.svg");
/* harmony import */ var _icons_clock_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/clock.svg */ "./src/icons/clock.svg");
/* harmony import */ var _icons_email_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/email.svg */ "./src/icons/email.svg");
/* harmony import */ var _makeNewElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeNewElement.js */ "./src/makeNewElement.js");






const contact = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_4__.makeNewElement)('div',['content','contact'],null,null,null)

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

appendContactDiv(_icons_location_svg__WEBPACK_IMPORTED_MODULE_0__,'Middle of Nowhere, Australia', 'address')
appendContactDiv(_icons_call_svg__WEBPACK_IMPORTED_MODULE_1__,'+1-234-567-8950', 'phone-number')
appendContactDiv(_icons_clock_svg__WEBPACK_IMPORTED_MODULE_2__, 'Mon - Fri: 11:00 - 21:00 | Sat - Sun: 11:00 - 00:00', 'times')
appendContactDiv(_icons_email_svg__WEBPACK_IMPORTED_MODULE_3__, 'Message us!', 'message')

const getFormInput = (tag, id, type, labelText) => {
    const div = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_4__.makeNewElement)('div',[id], null, null,{})
    const label = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_4__.makeNewElement)('label',[], null, labelText,{'for': id})
    const input = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_4__.makeNewElement)(tag,[],id,null,{
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
contact.appendChild(form)


const map = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_4__.makeNewElement)('div',[],'map',null,null)
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
/* harmony import */ var _makeNewElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeNewElement.js */ "./src/makeNewElement.js");


const home = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_0__.makeNewElement)('div',['content','home'],null,null,null)

const tagline = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_0__.makeNewElement)('h2',[],null,'The best pizza in the country since 1453',null)

const text = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_0__.makeNewElement)('p',[],null,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt minima ratione velit repellat placeat quia minus ut est illo vel aperiam dignissimos, praesentium consectetur alias, culpa debitis iste? Dolorem!', null)

home.appendChild(tagline)
home.appendChild(text)



/***/ }),

/***/ "./src/makeNewElement.js":
/*!*******************************!*\
  !*** ./src/makeNewElement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNewElement": () => (/* binding */ makeNewElement)
/* harmony export */ });
function makeNewElement(tag, classes, id, innerText, attributes) {
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
// Initialize and add the map, function as provided by Google documentation
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
/* harmony import */ var _makeNewElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeNewElement */ "./src/makeNewElement.js");
/* harmony import */ var _options_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.csv */ "./src/options.csv");
/* harmony import */ var _options_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_options_csv__WEBPACK_IMPORTED_MODULE_1__);



const menu = (0,_makeNewElement__WEBPACK_IMPORTED_MODULE_0__.makeNewElement)('div',['content','menu'])

for (let p of (_options_csv__WEBPACK_IMPORTED_MODULE_1___default())) {
    const pizza = (0,_makeNewElement__WEBPACK_IMPORTED_MODULE_0__.makeNewElement)('div',['pizza'])

    const name = (0,_makeNewElement__WEBPACK_IMPORTED_MODULE_0__.makeNewElement)('h3',['pizza-name'],null,p[0])
    pizza.appendChild(name)

    const description = (0,_makeNewElement__WEBPACK_IMPORTED_MODULE_0__.makeNewElement)('p',['pizza-description'],null,p[1])
    pizza.appendChild(description)

    menu.appendChild(pizza)
}



/***/ }),

/***/ "./src/icons/call.svg":
/*!****************************!*\
  !*** ./src/icons/call.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fbf5449d2e6df8de233c.svg";

/***/ }),

/***/ "./src/icons/clock.svg":
/*!*****************************!*\
  !*** ./src/icons/clock.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3a437317f4fdf29d9c54.svg";

/***/ }),

/***/ "./src/icons/email.svg":
/*!*****************************!*\
  !*** ./src/icons/email.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1136a977c37a9407321e.svg";

/***/ }),

/***/ "./src/icons/location.svg":
/*!********************************!*\
  !*** ./src/icons/location.svg ***!
  \********************************/
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
/* harmony import */ var _makeNewElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeNewElement.js */ "./src/makeNewElement.js");



const home = __webpack_require__(/*! ./home.js */ "./src/home.js")
const menu = __webpack_require__(/*! ./menu.js */ "./src/menu.js")
const contact = __webpack_require__(/*! ./contact.js */ "./src/contact.js")

const pageList = ['Home','Menu','Contact']

const createHeader = () => {
    const header = document.createElement('header')

    const logo = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_1__.makeNewElement)('h1',[],'logo','Pizzeria Gusto')

    const nav = document.createElement('nav')
    for (let x of pageList) {
        const button = (0,_makeNewElement_js__WEBPACK_IMPORTED_MODULE_1__.makeNewElement)('button',['nav-link'],x.toLowerCase(),x)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9vcHRpb25zLmNzdiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFrZU5ld0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBbW1wiTWFyZ2hlcml0YVwiLFwidG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhXCJdLFtcIkRpYXZvbGFcIixcInRvbWF0byBzYXVjZSwgbW96emFyZWxsYSwgc2FsYW1pIHBpY2FudGVcIl0sW1wiUXVhdHJvIFN0YWdpb25pXCIsXCJ0b21hdG8gc2F1Y2UsIG1venphcmVsbGEsIG9saXZlcywgYXJ0aWNob2tlcywgcHJvc2NpdXR0bywgbXVzaHJvb21zXCJdLFtcIlByb3NjaXV0dG9cIixcInRvbWF0byBzYXVjZSwgbW96emFyZWxsYSwgcHJvc2NpdXR0b1wiXSxbXCJCcmVzYW9sYVwiLFwidG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhLCBicmVzYW9sYSwgcm9ja2V0LCBwYXJtZXphbiBjaGVlc2VcIl0sW1wiQ2Fsem9uZVwiLFwidG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhLCBoYW1cIl0sW1wiQnVycmF0YVwiLFwidG9tYXRvIHNhdWNlLCBjaGVycnkgdG9tYXRvZXMsIGJ1cnJhdGEsIHJvY2tldCwgb3JlZ2FuXCJdLFtcIlF1YXRybyBGb3JtYWdnaVwiLFwibW96emFyZWxsYSwgZ29yZ29uem9sYSwgU3dpc3MgY2hlZXNlLCBwZWNvcmlubywgcGFybWV6YW5cIl1dIiwiaW1wb3J0IExvY2F0aW9uIGZyb20gJy4vaWNvbnMvbG9jYXRpb24uc3ZnJ1xuaW1wb3J0IENhbGwgZnJvbSAnLi9pY29ucy9jYWxsLnN2ZydcbmltcG9ydCBDbG9jayBmcm9tICcuL2ljb25zL2Nsb2NrLnN2ZydcbmltcG9ydCBFbWFpbCBmcm9tICcuL2ljb25zL2VtYWlsLnN2ZydcbmltcG9ydCB7bWFrZU5ld0VsZW1lbnR9IGZyb20gJy4vbWFrZU5ld0VsZW1lbnQuanMnXG5cbmNvbnN0IGNvbnRhY3QgPSBtYWtlTmV3RWxlbWVudCgnZGl2JyxbJ2NvbnRlbnQnLCdjb250YWN0J10sbnVsbCxudWxsLG51bGwpXG5cbmNvbnN0IGFwcGVuZENvbnRhY3REaXYgPSAoaW1hZ2UsIGlubmVyVGV4dCwgc3BhbkNsYXNzKSA9PiB7XG4gICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpXG4gICAgaWNvbi5zcmMgPSBpbWFnZVxuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHNwYW4uaW5uZXJUZXh0ID0gaW5uZXJUZXh0XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChzcGFuQ2xhc3MpXG4gICAgZGl2LmFwcGVuZENoaWxkKGljb24pXG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmFwcGVuZENvbnRhY3REaXYoTG9jYXRpb24sJ01pZGRsZSBvZiBOb3doZXJlLCBBdXN0cmFsaWEnLCAnYWRkcmVzcycpXG5hcHBlbmRDb250YWN0RGl2KENhbGwsJysxLTIzNC01NjctODk1MCcsICdwaG9uZS1udW1iZXInKVxuYXBwZW5kQ29udGFjdERpdihDbG9jaywgJ01vbiAtIEZyaTogMTE6MDAgLSAyMTowMCB8IFNhdCAtIFN1bjogMTE6MDAgLSAwMDowMCcsICd0aW1lcycpXG5hcHBlbmRDb250YWN0RGl2KEVtYWlsLCAnTWVzc2FnZSB1cyEnLCAnbWVzc2FnZScpXG5cbmNvbnN0IGdldEZvcm1JbnB1dCA9ICh0YWcsIGlkLCB0eXBlLCBsYWJlbFRleHQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBtYWtlTmV3RWxlbWVudCgnZGl2JyxbaWRdLCBudWxsLCBudWxsLHt9KVxuICAgIGNvbnN0IGxhYmVsID0gbWFrZU5ld0VsZW1lbnQoJ2xhYmVsJyxbXSwgbnVsbCwgbGFiZWxUZXh0LHsnZm9yJzogaWR9KVxuICAgIGNvbnN0IGlucHV0ID0gbWFrZU5ld0VsZW1lbnQodGFnLFtdLGlkLG51bGwse1xuICAgICAgICAndHlwZSc6IHR5cGUsXG4gICAgICAgICdpZCc6IGlkXG4gICAgfSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KVxuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuZm9ybS5hcHBlbmRDaGlsZChnZXRGb3JtSW5wdXQoJ2lucHV0JywnbmFtZScsJ3RleHQnLCAnTmFtZScpKVxuZm9ybS5hcHBlbmRDaGlsZChnZXRGb3JtSW5wdXQoJ2lucHV0JywnZW1haWwnLCdlbWFpbCcsJ0VtYWlsIGFkZHJlc3MnKSlcbmZvcm0uYXBwZW5kQ2hpbGQoZ2V0Rm9ybUlucHV0KCd0ZXh0YXJlYScsJ3RleHQnLCd0ZXh0YXJlYScsJ01lc3NhZ2UnKSlcbmNvbnRhY3QuYXBwZW5kQ2hpbGQoZm9ybSlcblxuXG5jb25zdCBtYXAgPSBtYWtlTmV3RWxlbWVudCgnZGl2JyxbXSwnbWFwJyxudWxsLG51bGwpXG5jb250YWN0LmFwcGVuZENoaWxkKG1hcClcblxuZXhwb3J0IHtjb250YWN0fSIsImltcG9ydCB7bWFrZU5ld0VsZW1lbnR9IGZyb20gJy4vbWFrZU5ld0VsZW1lbnQuanMnXG5cbmNvbnN0IGhvbWUgPSBtYWtlTmV3RWxlbWVudCgnZGl2JyxbJ2NvbnRlbnQnLCdob21lJ10sbnVsbCxudWxsLG51bGwpXG5cbmNvbnN0IHRhZ2xpbmUgPSBtYWtlTmV3RWxlbWVudCgnaDInLFtdLG51bGwsJ1RoZSBiZXN0IHBpenphIGluIHRoZSBjb3VudHJ5IHNpbmNlIDE0NTMnLG51bGwpXG5cbmNvbnN0IHRleHQgPSBtYWtlTmV3RWxlbWVudCgncCcsW10sbnVsbCwnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMgc3VudCBtaW5pbWEgcmF0aW9uZSB2ZWxpdCByZXBlbGxhdCBwbGFjZWF0IHF1aWEgbWludXMgdXQgZXN0IGlsbG8gdmVsIGFwZXJpYW0gZGlnbmlzc2ltb3MsIHByYWVzZW50aXVtIGNvbnNlY3RldHVyIGFsaWFzLCBjdWxwYSBkZWJpdGlzIGlzdGU/IERvbG9yZW0hJywgbnVsbClcblxuaG9tZS5hcHBlbmRDaGlsZCh0YWdsaW5lKVxuaG9tZS5hcHBlbmRDaGlsZCh0ZXh0KVxuXG5leHBvcnQge2hvbWV9IiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VOZXdFbGVtZW50KHRhZywgY2xhc3NlcywgaWQsIGlubmVyVGV4dCwgYXR0cmlidXRlcykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgICBpZiAoaWQpIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsaWQpXG4gICAgaWYgKGNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGMgb2YgY2xhc3Nlcykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlubmVyVGV4dCkgZWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHRcbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudFxufSIsIi8vIEluaXRpYWxpemUgYW5kIGFkZCB0aGUgbWFwLCBmdW5jdGlvbiBhcyBwcm92aWRlZCBieSBHb29nbGUgZG9jdW1lbnRhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgLy8gVGhlIGxvY2F0aW9uIG9mIFVsdXJ1XG4gICAgY29uc3QgdWx1cnUgPSB7IGxhdDogLTI1LjM0NCwgbG5nOiAxMzEuMDM2IH07XG4gICAgLy8gVGhlIG1hcCwgY2VudGVyZWQgYXQgVWx1cnVcbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICB6b29tOiA0LFxuICAgICAgY2VudGVyOiB1bHVydSxcbiAgICB9KTtcbiAgICAvLyBUaGUgbWFya2VyLCBwb3NpdGlvbmVkIGF0IFVsdXJ1XG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogdWx1cnUsXG4gICAgICBtYXA6IG1hcCxcbiAgICB9KTtcbiAgfSIsImltcG9ydCB7IG1ha2VOZXdFbGVtZW50IH0gZnJvbSAnLi9tYWtlTmV3RWxlbWVudCdcbmltcG9ydCBEYXRhIGZyb20gJy4vb3B0aW9ucy5jc3YnXG5cbmNvbnN0IG1lbnUgPSBtYWtlTmV3RWxlbWVudCgnZGl2JyxbJ2NvbnRlbnQnLCdtZW51J10pXG5cbmZvciAobGV0IHAgb2YgRGF0YSkge1xuICAgIGNvbnN0IHBpenphID0gbWFrZU5ld0VsZW1lbnQoJ2RpdicsWydwaXp6YSddKVxuXG4gICAgY29uc3QgbmFtZSA9IG1ha2VOZXdFbGVtZW50KCdoMycsWydwaXp6YS1uYW1lJ10sbnVsbCxwWzBdKVxuICAgIHBpenphLmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG1ha2VOZXdFbGVtZW50KCdwJyxbJ3BpenphLWRlc2NyaXB0aW9uJ10sbnVsbCxwWzFdKVxuICAgIHBpenphLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChwaXp6YSlcbn1cblxuZXhwb3J0IHttZW51fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtpbml0TWFwfSBmcm9tICcuL21hcC5qcydcbmltcG9ydCB7bWFrZU5ld0VsZW1lbnR9IGZyb20gJy4vbWFrZU5ld0VsZW1lbnQuanMnXG5cbmNvbnN0IGhvbWUgPSByZXF1aXJlKCcuL2hvbWUuanMnKVxuY29uc3QgbWVudSA9IHJlcXVpcmUoJy4vbWVudS5qcycpXG5jb25zdCBjb250YWN0ID0gcmVxdWlyZSgnLi9jb250YWN0LmpzJylcblxuY29uc3QgcGFnZUxpc3QgPSBbJ0hvbWUnLCdNZW51JywnQ29udGFjdCddXG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuXG4gICAgY29uc3QgbG9nbyA9IG1ha2VOZXdFbGVtZW50KCdoMScsW10sJ2xvZ28nLCdQaXp6ZXJpYSBHdXN0bycpXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGZvciAobGV0IHggb2YgcGFnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbWFrZU5ld0VsZW1lbnQoJ2J1dHRvbicsWyduYXYtbGluayddLHgudG9Mb3dlckNhc2UoKSx4KVxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpXG4gICAgcmV0dXJuIGhlYWRlclxufVxuXG5jb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1ob2xkZXInKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBob21lLmhvbWVcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50KVxuXG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBtZW51Lm1lbnVcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KVxuXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBjb250YWN0LmNvbnRhY3RcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KVxuICAgIGluaXRNYXAoKVxufVxuXG5jb25zdCBzZXRBY3RpdmVQYWdlID0gKGFjdGl2ZSkgPT4ge1xuICAgIGZvciAobGV0IHBhZ2Ugb2YgcGFnZUxpc3QpIHtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhZ2UudG9Mb3dlckNhc2UoKX1gKVxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbnRlbnQuJHtwYWdlLnRvTG93ZXJDYXNlKCl9YClcbiAgICAgICAgaWYgKHBhZ2UudG9Mb3dlckNhc2UoKSA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3aXRjaChhY3RpdmUpIHtcbiAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tWC10cmFuc2Zvcm0tY29udGVudCcsICcwJScpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1YLXRyYW5zZm9ybS1jb250ZW50JywgJzEwMCUnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tWC10cmFuc2Zvcm0tY29udGVudCcsICcyMDAlJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxufVxuXG5jb25zdCBoYW5kbGVOYXZMaW5rcyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IConKVxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRBY3RpdmVQYWdlKGJ1dHRvbi5pZCkpXG4gICAgfSlcbn1cblxuLy8gTW9kdWxlIGZ1bmN0aW9uIHRvIGluaXQgd2Vic2l0ZVxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKVxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBoYW5kbGVOYXZMaW5rcygpXG4gICAgZ2V0Q29udGVudCgpXG4gICAgc2V0QWN0aXZlUGFnZSgnaG9tZScpXG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9