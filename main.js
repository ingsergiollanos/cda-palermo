const menu=document.querySelector('.hamburgesa');
const navegacion=document.querySelector('.navegacion');

document.addEventListener('DOMContentLoaded',()=>{ //esta declaracion es para leer la pagina y lueego ejecutar la funcion.
eventos();

});

const eventos=()=>{
     menu.addEventListener('click',abrirmenu);

}
const abrirmenu=()=>{
     navegacion.classList.remove('ocultar');
     botoncerrar();

}

const botoncerrar=()=>{
    const btncerrar=document.createElement('p');
    const overlay=document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body=document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length>0)return;
    body.appendChild(overlay);
     btncerrar.textContent= 'X';
     btncerrar.classList.add('btn-cerrar');
     navegacion.appendChild(btncerrar);
     cerrarmenu(btncerrar,overlay);
}

const cerrarmenu= (boton,overlay)=>{
boton.addEventListener('click', ()=>{
navegacion.classList.add('ocultar');
overlay.remove();
boton.remove();
})
overlay.onclick=function(){
    overlay.remove();
    navegacion.classList.add('ocultar');
    boton.remove();
}

}


const botonosotros =()=>{
botonnos.addEventListener('click');

}

// pagina  de informacion para cda palermo
