const paia = document.getElementById('paia')
paia.addEventListener('mouseover', () => {
    paia.style.position = 'absolute';
    var x = Math.floor(Math.random()*500) + 1;
    var y = Math.floor(Math.random()*500) + 1;
    paia.style.left = x + 'px';
    paia.style.top = y + 'px';
    console.log(x)
})