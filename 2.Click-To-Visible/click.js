const V = document.getElementById('V')
const I = document.getElementById('I')
const K = document.getElementById('K')
const A = document.getElementById('A')
const S = document.getElementById('S')

const complete = document.getElementById('complete');

V.addEventListener('click' , ()=>{
    V.style.display = 'none'
    I.style.display = 'block'
});

I.addEventListener('click' , ()=>{
    I.style.display = 'none'
    K.style.display = 'block'
});

K.addEventListener('click' , ()=>{
    K.style.display = 'none'
    A.style.display = 'block'
});

A.addEventListener('click' , ()=>{
    A.style.display = 'none'
    S.style.display = 'block'
});

S.addEventListener('click' , ()=>{
    S.style.display = 'none'
    complete.style.display = 'block'
});