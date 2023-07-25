# addEventListener JAVASCRIPT


Este es el codigo que teniamos en la primera parte del addEventListener, vamos a utlizar el evento de (submit), el cual habiamos habaldo en la clase anterior, pero que no va a ser para un boton, si no, para un formulario, en tonces lo que vamos hacer, es modificar un poco el codigo.

```js

HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulaciondel DOM basico - Curso practico de JavaScript</title>
</head>
<body>
    <h1>Manipulacion del DOM basico</h1>

    <input id="calculo1" placeholder="Escribe algo aqui">
    <input id="calculo2" placeholder="Escribe algo aqui">
    <button id="btnCalcular">Calcular</button>

    <p id="result"></p>

<script src="./script.js"></script>   
</body>
</html>

```


JAVASCRIPT

```js

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);


function btnOnClick() {

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs; 

    
 }

```

En tonces vamos primero al codigo HTML, y vamos a tomar todos los inputs que tenemos, los cortamos y los vamos a meter dentro de una etiqueta <form> 

<form>
    <input id="calculo1" placeholder="Escribe algo aqui">
    <input id="calculo2" placeholder="Escribe algo aqui">
    <button id="btnCalcular">Calcular</button>

    <p id="result"></p>

</form>

Si nosotros fueramos al codigo JS, y comentaramos la funcion que construimos,


```js 
//btn.addEventListener('click', btnOnClick);


//function btnOnClick() {

   // const sumaInputs = input1.value + input2.value;
    //pResult.innerText = "Resultado: " + sumaInputs; 

```    

Recordemos que nuestros inputs y botones estan dentro de un formulario, y si le damos al click de calcular, lo que va a pasar es que se va a recargar la pagina, y no solo se recargo la pagina, si no que antes, estabamos en una ruta, y esta terminaba en /index.html, pero ahora que tenemos la funcion comentada, y que hemos metido los inputs en una etiqueta <form>, la ruta a cambiado, ahora tenemos /index.html?


Ahora esta ruta termiona con simblo de pregunta, por que?

Lo que pasa es que los formularios por defecto agarran el ultimo boton que se encuentran en el formulario, y lo interpretan, como que ese boton es de tipo submit, es decir, el boton para enviar el formulario, y la accion que cogen los formularios para enviarse, es cambiar la URL, si nosotros en estos inputs, si tuvieramos una propiedad (name), esta propiedad (name) se la concatenaria arriba donde sale la URL, por medio de una numenclatura que se llama los (queryparameters), en tonces lo que aria estos es poner depues de este simbolo de interrogacion el nombre y las demas cosas que podriamos tener como, apellido, y asi con todos los inputs que allamos tenido en el formulario, en tonces lo que hace es enviarlos a alguna ruta.

Lo que podemos hacer tambien es dentro la etiqueta <form> 
podriamos especificarle una ruta a la cual queremos hacerle una consulta, apenas le demos click a ese boton de submit, que recordemos es el ultimpo que aggarre, para escuchar ese evento de Submit, en otras palabras, esto no nos funciona.

Lo que queremos es no cambiar de pagina, lo que queremos es que se ejecute nuestro parrafo y que aparesca el resultado. 

Ahora bien, si nosotros descomentaramos el codigo anterior y escribieramos algun otro numero calculamos, lo que pasaria es que no apareceria nada, pero realmente si aparecio, aparecion por un milisegundo, lo que paso es que se recargo la pagina, por que?

Por que este codigo de escuchar el evento del click, se sigue ejecutando por que como nuestro formulario agarra el ultimo boton que tenemos,  lo interpreta como que su tipo es de (submit), como por defecto cuando tenemos este evento en el formulario, tenemos que hacer una solicitud a una URL o enviar los valores de nuestros inputs por la URL y todo esto, pues en tonces se rrecarga la pagina y nunca podemos ver el resultado.

En conclusion: Si lo que queremos es trabajar con formularios, no es talcual escuchar el evento de un botton.

```js

btn.addEventListener('click', btnOnClick);


function btnOnClick() {

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs; 

    
 }


```

Si no que lo que podemos hacer es aca en el <form> darle un (ID) y vamos a darle un nombre, esto en html, y en JS  le damos su respectivo selector.


Pero eso lo vamos a ver en la tercera parte de los addEventListener.