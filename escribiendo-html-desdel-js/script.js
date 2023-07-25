const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value); 


console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

/* Estas son las diferentes maneras de utilizar el inner */

/* Con este, puedo hacer cambios en el texto y en el HTML osea en las etiquetas  */
/* h1.innerHTML = 'Escribiendo HTML <br> en el JS'; */

/* Con este solo puedo hacer cambios en el Texto */
/* h1.innerText = 'Diferentes maneras de Escribiendo HTML en el JS'; */ 

/* (getAttribute) para modificar cualquier atributo */
/* console.log(h1.getAttribute('pantalla'));*/


/* console.log(h1.getAttribute('class'));*/

/* (setAttribute) para modificar cualquier classe del html */
/* h1.setAttribute('class', 'rojo');    */

/* Con esta funcion no quitamos una classe, agregamos una classe*/
h1.classList.add('rojo');

/* Con esta funcion podemos remover la classe elijamos, si existe. */
h1.classList.remove('verde');


/* h1.classList.toggle('verde'); */

/* h1.classList.contains('verde'); */

input.value = "456";

/* console.log(document.createElement('img')); */

/* console.log(document.createElement('span')); */

const img = document.createElement('img');

img.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/07/23/00/05/dog-2530301_640.jpg');
console.log(img);

pid.innerHTML = "";
pid.append(img);