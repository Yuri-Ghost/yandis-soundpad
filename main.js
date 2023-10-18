function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}


const listaDeTeclas = document.querySelectorAll ('.tecla');

let contador = 0;


while (contador < 9) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console.log(contador);
}