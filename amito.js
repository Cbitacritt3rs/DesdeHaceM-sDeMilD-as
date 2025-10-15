function ant(event) {
    const targ = event.target;
    targ.parentElement.parentElement.style.display = 'none';
}

function cambio1() {
    document.getElementsByClassName('parte2')[0].style.display = 'flex';
}
function cambio2() {
    document.getElementsByClassName('parte3')[0].style.display = 'flex';
}
function cambio3() {
    document.getElementsByClassName('parte4')[0].style.display = 'flex';
}

let estado = true

function ocultxt() {
    estado = !estado;
    const display = estado ? 'flex' : 'none';
    
    document.querySelectorAll('.texto1, .texto2, .texto3, .texto4')
        .forEach(el => el.style.display = display);
}