var b1 = []
function f(s) {
    document.querySelector('#output').innerHTML = 
    b1.map((elem, i) => ` <div class="x${i % 2}">{elem}</div>
    `).join('')
}