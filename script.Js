const btn = document.getElementById('but1');
const h1 = document.getElementById('h1');
const btn1 = document.getElementById('but2');

btn1.addEventListener('click', () => {
    let currentNumber = parseInt(h1.textContent); 
    currentNumber--; 
    h1.textContent = currentNumber;
});
btn.addEventListener('click', () => {
    let currentNumber = parseInt(h1.textContent); 
    currentNumber++; 
    h1.textContent = currentNumber;
});

function sendText() {
    const text = document.getElementById('inputText').value;
    document.getElementById('h1').textContent = text;
}