import './style.css'
import { num, add, sub, set, setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <h1 id="number"></h1>
      <button id="add" type="button">+</button>
      <button id="sub" type="button">-</button>
      <button id="set" type="button">reset</button>
      <h1 id="b"></h1>
  </div>
`

num(document.querySelector('#number'))
add(document.querySelector('#add'))
sub(document.querySelector('#sub'))
set(document.querySelector('#set'))
setupCounter(document.querySelector('#b'))