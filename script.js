const p1 = document.querySelector('.p1');
const b1 = document.querySelector('#play1');
const p2 = document.querySelector('.p2');
const b2 = document.querySelector('#play2');
const select = document.querySelector('select');
const reset = document.querySelector('#reset');
const h1 = document.querySelector('.result');
var x = 0;

for (let i = 1; i <= 100; i++) {
    const op = document.createElement('option');
    op.innerHTML = i;
    op.value = i;
    select.appendChild(op);
}
select.addEventListener('change', () => {
    x = select.value;
    p1.innerHTML = '0';
    p2.innerHTML = '0';
})

const winner = (e) => {
    h1.innerHTML = `Winner is ${e.title}`
}

b1.addEventListener('click', () => {
    if (x == 0) return;
    if (parseInt(p1.innerHTML) >= parseInt(x) || parseInt(p2.innerHTML) >= parseInt(x)) return;
    let y = p1.innerHTML;
    y++;
    p1.innerHTML = y;
    if (y == x)
        winner(p1);
})
b2.addEventListener('click', () => {
    if (x == 0) return;
    if (parseInt(p1.innerHTML) >= parseInt(x) || parseInt(p2.innerHTML) >= parseInt(x)) return;
    let y = p2.innerHTML;
    y++;
    p2.innerHTML = y;
    if (y == x)
        winner(p2);
})
reset.addEventListener('click', () => {
    if (p2.innerHTML == x || p1.innerHTML == x) {
        p1.innerHTML = 0;
        p2.innerHTML = 0;
        select.value = 'select';
        h1.innerHTML = "";
    }
})