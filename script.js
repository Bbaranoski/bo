const body = document.body
const paia = document.getElementById('paia')
paia.addEventListener('mouseover', () => {
    paia.style.position = 'absolute';
    var x = Math.floor(Math.random()*body.offsetWidth - 75) + 1;
    var y = Math.floor(Math.random()*body.offsetHeight - 50) + 1;
    paia.style.left = x + 'px';
    paia.style.top = y + 'px';
    console.log(body.offsetHeight)
})