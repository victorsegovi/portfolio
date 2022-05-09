let bars = document.getElementById('button');
let list = document.getElementById('list');
let main = document.querySelector('main');

let display = bars.addEventListener('click',()=>{
    list.style.display = 'block';
})

let hidden = main.addEventListener('click',()=>{
    list.style.display = 'none';
})