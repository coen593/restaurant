(()=>{var e={556:e=>{e.exports=[["Margherita","tomato sauce, mozzarella"],["Diavola","tomato sauce, mozzarella, salami picante"],["Quatro Stagioni","tomato sauce, mozzarella, olives, artichokes, prosciutto, mushrooms"],["Prosciutto","tomato sauce, mozzarella, prosciutto"],["Bresaola","tomato sauce, mozzarella, bresaola, rocket, parmezan cheese"]]},637:()=>{},666:(e,t,o)=>{"use strict";o.r(t),o.d(t,{home:()=>a});const a=document.createElement("div");a.classList.add("content"),a.classList.add("home");const n=document.createElement("h2");n.innerText="The best pizza in the country since 1453!";const s=document.createElement("p");s.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt minima ratione velit repellat placeat quia minus ut est illo vel aperiam dignissimos, praesentium consectetur alias, culpa debitis iste? Dolorem!",a.appendChild(n),a.appendChild(s)},83:(e,t,o)=>{"use strict";o.r(t),o.d(t,{menu:()=>s});var a=o(556),n=o.n(a);const s=document.createElement("div");s.classList.add("content"),s.classList.add("menu");for(let e of n()){const t=document.createElement("div");t.classList.add("pizza");const o=document.createElement("h3");o.classList.add("pizza-name"),o.innerText=e[0],t.appendChild(o);const a=document.createElement("p");a.classList.add("pizza-description"),a.innerText=e[1],t.appendChild(a),s.appendChild(t)}}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=o(666),t=o(83),a=(o(637),["Home","Menu","Contact"]),n=()=>{const o=document.createElement("div");o.classList.add("content-holder"),container.appendChild(o);const a=e.home;o.appendChild(a);const n=t.menu;o.appendChild(n)},s=e=>{for(let t of a){const o=document.querySelector(`#${t.toLowerCase()}`);t.toLowerCase()===e?o.classList.add("active"):o.classList.remove("active")}};(()=>{const e=document.querySelector("#container"),t=(()=>{const e=document.createElement("header"),t=document.createElement("h1");t.innerText="Pizzeria Gusto",t.setAttribute("id","logo");const o=document.createElement("nav");for(let e of a){const t=document.createElement("button");t.setAttribute("id",e.toLowerCase()),t.classList.add("nav-link"),t.innerText=e,o.appendChild(t)}return e.appendChild(t),e.appendChild(o),e})();e.appendChild(t),buttons=document.querySelectorAll("nav *"),console.log(buttons),buttons.forEach((e=>{console.log(e.id),e.addEventListener("click",(()=>s(e.id)))})),s("home"),n()})()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxnQkFBa0JKLEVBQ3ZCRSxFQUFLL0MsVUFBVUMsSUFBSSxVQUVuQjhDLEVBQUsvQyxVQUFVa0QsT0FBTyxZQWVSLE1BQ3RCLE1BQU1ULEVBQVkzQyxTQUFTa0QsY0FBYyxjQUNuQ0csRUF4RFcsTUFDakIsTUFBTUEsRUFBU3JELFNBQVNDLGNBQWMsVUFFaENxRCxFQUFPdEQsU0FBU0MsY0FBYyxNQUNwQ3FELEVBQUtqRCxVQUFZLGlCQUNqQmlELEVBQUtDLGFBQWEsS0FBSyxRQUV2QixNQUFNQyxFQUFNeEQsU0FBU0MsY0FBYyxPQUNuQyxJQUFLLElBQUl3RCxLQUFLakIsRUFBVSxDQUNwQixNQUFNa0IsRUFBUzFELFNBQVNDLGNBQWMsVUFDdEN5RCxFQUFPSCxhQUFhLEtBQUtFLEVBQUVOLGVBQzNCTyxFQUFPeEQsVUFBVUMsSUFBSSxZQUNyQnVELEVBQU9yRCxVQUFZb0QsRUFDbkJELEVBQUlqRCxZQUFZbUQsR0FLcEIsT0FGQUwsRUFBTzlDLFlBQVkrQyxHQUNuQkQsRUFBTzlDLFlBQVlpRCxHQUNaSCxHQXNDUU0sR0FDZmhCLEVBQVVwQyxZQUFZOEMsR0FadEJPLFFBQVU1RCxTQUFTNkQsaUJBQWlCLFNBQ3BDQyxRQUFRQyxJQUFJSCxTQUNaQSxRQUFRSSxTQUFRTixJQUNaSSxRQUFRQyxJQUFJTCxFQUFPTyxJQUNuQlAsRUFBT1EsaUJBQWlCLFNBQVMsSUFBTXBCLEVBQWNZLEVBQU9PLFNBVWhFbkIsRUFBYyxRQUNkTCxLQU5zQixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9vcHRpb25zLmNzdiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBbW1wiTWFyZ2hlcml0YVwiLFwidG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhXCJdLFtcIkRpYXZvbGFcIixcInRvbWF0byBzYXVjZSwgbW96emFyZWxsYSwgc2FsYW1pIHBpY2FudGVcIl0sW1wiUXVhdHJvIFN0YWdpb25pXCIsXCJ0b21hdG8gc2F1Y2UsIG1venphcmVsbGEsIG9saXZlcywgYXJ0aWNob2tlcywgcHJvc2NpdXR0bywgbXVzaHJvb21zXCJdLFtcIlByb3NjaXV0dG9cIixcInRvbWF0byBzYXVjZSwgbW96emFyZWxsYSwgcHJvc2NpdXR0b1wiXSxbXCJCcmVzYW9sYVwiLFwidG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhLCBicmVzYW9sYSwgcm9ja2V0LCBwYXJtZXphbiBjaGVlc2VcIl1dIiwiY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5ob21lLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJylcblxuY29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbnRhZ2xpbmUuaW5uZXJUZXh0ID0gJ1RoZSBiZXN0IHBpenphIGluIHRoZSBjb3VudHJ5IHNpbmNlIDE0NTMhJ1xuXG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG50ZXh0LmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJmZXJlbmRpcyBzdW50IG1pbmltYSByYXRpb25lIHZlbGl0IHJlcGVsbGF0IHBsYWNlYXQgcXVpYSBtaW51cyB1dCBlc3QgaWxsbyB2ZWwgYXBlcmlhbSBkaWduaXNzaW1vcywgcHJhZXNlbnRpdW0gY29uc2VjdGV0dXIgYWxpYXMsIGN1bHBhIGRlYml0aXMgaXN0ZT8gRG9sb3JlbSEnXG5cbmhvbWUuYXBwZW5kQ2hpbGQodGFnbGluZSlcbmhvbWUuYXBwZW5kQ2hpbGQodGV4dClcblxuZXhwb3J0IHtob21lfSIsImltcG9ydCBEYXRhIGZyb20gJy4vb3B0aW9ucy5jc3YnXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubWVudS5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jylcbm1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpXG5cbmZvciAobGV0IHAgb2YgRGF0YSkge1xuICAgIGNvbnN0IHBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwaXp6YS5jbGFzc0xpc3QuYWRkKCdwaXp6YScpXG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncGl6emEtbmFtZScpXG4gICAgbmFtZS5pbm5lclRleHQgPSBwWzBdXG4gICAgcGl6emEuYXBwZW5kQ2hpbGQobmFtZSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncGl6emEtZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHBbMV1cbiAgICBwaXp6YS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQocGl6emEpXG59XG5cbmV4cG9ydCB7bWVudX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgaG9tZSA9IHJlcXVpcmUoJy4vaG9tZS5qcycpXG5jb25zdCBtZW51ID0gcmVxdWlyZSgnLi9tZW51LmpzJylcbmNvbnN0IGNvbnRhY3QgPSByZXF1aXJlKCcuL2NvbnRhY3QuanMnKVxuXG5jb25zdCBwYWdlTGlzdCA9IFsnSG9tZScsJ01lbnUnLCdDb250YWN0J11cblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGxvZ28uaW5uZXJUZXh0ID0gJ1BpenplcmlhIEd1c3RvJ1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsJ2xvZ28nKVxuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBmb3IgKGxldCB4IG9mIHBhZ2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJyx4LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtbGluaycpXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSB4XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgfVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdilcbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWhvbGRlcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgICBjb25zdCBob21lQ29udGVudCA9IGhvbWUuaG9tZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpXG5cbiAgICBjb25zdCBtZW51Q29udGVudCA9IG1lbnUubWVudVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpXG59XG5cbmNvbnN0IHNldEFjdGl2ZVBhZ2UgPSAoYWN0aXZlKSA9PiB7XG4gICAgZm9yIChsZXQgcGFnZSBvZiBwYWdlTGlzdCkge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFnZS50b0xvd2VyQ2FzZSgpfWApXG4gICAgICAgIGlmIChwYWdlLnRvTG93ZXJDYXNlKCkgPT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBoYW5kbGVOYXZMaW5rcyA9ICgpID0+IHtcbiAgICBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IConKVxuICAgIGNvbnNvbGUubG9nKGJ1dHRvbnMpXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbi5pZClcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0QWN0aXZlUGFnZShidXR0b24uaWQpKVxuICAgIH0pXG59XG5cbi8vIE1vZHVsZSBmdW5jdGlvbiB0byBpbml0IHdlYnNpdGVcbmNvbnN0IGluaXRpYWxpemVXZWJzaXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJylcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgaGFuZGxlTmF2TGlua3MoKVxuICAgIHNldEFjdGl2ZVBhZ2UoJ2hvbWUnKVxuICAgIGdldENvbnRlbnQoKVxufSkoKSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaG9tZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRhZ2xpbmUiLCJpbm5lclRleHQiLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJtZW51IiwicCIsInBpenphIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInBhZ2VMaXN0IiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJjb250YWluZXIiLCJob21lQ29udGVudCIsIm1lbnVDb250ZW50Iiwic2V0QWN0aXZlUGFnZSIsImFjdGl2ZSIsInBhZ2UiLCJsaW5rIiwicXVlcnlTZWxlY3RvciIsInRvTG93ZXJDYXNlIiwicmVtb3ZlIiwiaGVhZGVyIiwibG9nbyIsInNldEF0dHJpYnV0ZSIsIm5hdiIsIngiLCJidXR0b24iLCJjcmVhdGVIZWFkZXIiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==