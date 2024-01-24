const key = document.getElementById('key');
const code = document.getElementById('code');
const keyCode = document.getElementById('Key-Code');

window.addEventListener('keydown' , (e)=>{
    key.innerHTML = e.key;
    code.innerHTML = e.code;
    keyCode.innerHTML = e.keyCode
})