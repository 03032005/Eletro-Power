 let formulario = document.querySelector('.formulario');
 let mascara = document.querySelector('.mascara-form');

  function mostrarForm() {
     document.querySelector('.formulario').classList.add('centralizado');
    document.querySelector('.mascara-form').style.visibility = 'visible';
 }



 function esconderForm() {
    document.querySelector('.formulario').classList.remove('centralizado');
    document.querySelector('.mascara-form').style.visibility = 'hidden';
 }

