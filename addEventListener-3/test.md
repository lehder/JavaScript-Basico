Ahora bien, si nosotros descomentaramos el codigo anterior y escribieramos algun otro numero calculamos, lo que pasaria es que no apareceria nada, pero realmente si aparecio, aparesio por un milisegundo, lo que paso es que se recargo la pagina, por que?

Por que este codigo de escuchar el evento del click, 

(btn.addEventListener('click', btnOnClick);


function btnOnClick() {

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs; 

    
 }
) 
se sigue ejecutando por que como nuestro formulario agarra el ultimo boton que tenemos,  lo interpreta como que su tipo es de (submit), como por defecto cuando tenemos este evento en el formulario, tenemos que hacer una solicitud a una URL o enviar los valores de nuestros inputs por la URL y todo esto, pues en tonces se rrecarga la pagina y nunca podemos ver el resultado.

En conclusion: Si lo que queremos es trabajar con formularios, no es talcual escuchar el evento de un botton, como el que tenemos aqui.

```js

btn.addEventListener('click', btnOnClick);


function btnOnClick() {

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs; 

    
 }


```

Si no que lo que podemos hacer es aca en el formulario <form> darle un (ID) y vamos a darle un nombre como por ejemplo <form id="formulario">, esto en html, y en JS  le creamos su respectivo selector, y seleccionamos su correspondiente elemento que tenga su id (formulario), 


```js

const form = document.querySelector('#formulario')

```

Y por consiguiente ya no vamos hacer un (addEventListener) del botton, btn.addEventListener('click', btnOnClick);

Si no que lo vamos hacer de nuestro formulario, y ademas ya no vamos a escuchar su evento de (click), si no que lo vamos a reemplazar por su evento de (submit).

Y vamos a seguir ejecutando la misma function que teniamos, pero en este caso le vamos a cambiar el nombre a la function, por que no tendria caso seguirlo lllamarlo (btnOnClick) por que lla no concuerda, ahora lo vamos a llamr (sumarInputValue).

esto cambiaria de esta manera.

```js

btn.addEventListener('click', btnOnClick);


function btnOnClick() {

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs; 

    
 }


```

A esta manera.

```js

form.addEventListener('submit', sumarInputValue);


function sumarInputValue() {

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs; 

    
 }


```

Por el momento el codigo HTML, y el codigo JS, quedaria de la siguiente manera.


HTML

```js

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="formulario">
        <input id="calculo1" placeholder="Escribe algo aqui">
        <input id="calculo2" placeholder="Escribe algo aqui">
        <button id="btnCalcular">Calcular</button>
    
        <p id="result"></p>
    
    </form>

<script src="./script.js"></script>  
</body>
</html>

```



```

const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);


function sumarInputValues() {

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs; 
    
} 


 

Ahora si guardamos y recargamos y escribiimos algo dentro del formulario, y veremos que nos arroja.

AAAAJJJAAAAAA

Seguimos teniendo el mismo error, aparesio el resultado por un milisegundo pero se biorra y se rrecarga la pagina de nuevo, por que si lla le estamos pasando el evento de (submit) ? y que ejecute la function?

----------------------------------------------------------

Afortunadamente ahy una forma de evitarlo, como nosotros no ponemos los parentecis en el (sumarInputValues), si no que los pone el mismo metodo (addEventListener), cuando sea que escuche ese evento de (submit), le va a enviar como argumento, es decir que nosotros vamos a poder recibir como parametro, un evento, que normalmente lo llamamos (event), en tonces vamos a llamar a ese parametro en la function.















