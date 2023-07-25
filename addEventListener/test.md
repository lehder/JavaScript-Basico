# addEventListener JAVASCRIPT

En la clase anterior donde comenzamos a ver los Eventos en JS, donde aprendimos donde escuchar eventos de nuestros usuarios utilizando onckli, y otros atributos, directamnete en el html, esto esta bien.

Pero ahora vamos a ver como podemos pasar toda esa logica de escuchar los eventos, a directamente nuestro codigo JS, para que nuestro html quede mucho mas limpio, y utilize unicamente lo que debe utilizar.

Para esto vamos a utilizar la erramienta de los (addEventListener), para esto vamos a utilizar el mismo codigo anterior, 


```js

<body>
    <h1>Manipulacion del DOM basico</h1>

    <input id="calculo1" placeholder="Escribe algo aqui">
    <!-- <input onchange="console.log('cambio el input')" id="calculo2" placeholder="Escribe algo aqui"> -->
    <input id="calculo2" placeholder="Escribe algo aqui">
    <!-- <button id="btnCalcular" onclick="console.log('click del btn')">Calcular</button> -->
    <button id="btnCalcular" onclick="btnOnClick()">Calcular</button>

    <p id="result"></p>

<script src="./script.js"></script>   
</body>
</html>

```



Y vemos que aun estamos utilzando el (onklick), esta mucho mas limpio por que no estamos guardando el codigo en el html, por que utlizamos JS para ejecutar una parte del codig.


```js

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

const pResult = document.querySelector('#result');


function btnOnClick() {

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs; 

    
 }

``` 

Pero para dejar nuestro codigo mucho mas limpio, lo que vamos hacer es que vamos a borrar ese (btnOnClick), esto es para no estar guardadndo el codigo JS, en el html, o en la mitad de un atributo html, si no, que vamos a crear una funcion con su correcto nombre entendible, y en el archivo JS vamos a crear esa funcion.
Por el momento asta aqui, ya nuestro codigo no tiene nada que ver con escuchar eventos, el html solo nos esta mostrando contenido y guaradando cada etiqueta que podamos necesitar en el futuro, con un ID, o una clase, depende lo que vamos a utlizar o seleccionar.
```js

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

Ahora el html solo esta mostrando contenido y guardando las etiquetas necesarias para mostrar en el futuro, con un ID, o una classe, etc

Ahora lo que vamos hacer es tomar ese (btnOnClick), y poner en nuestro archivo JS, vamos a poner el selector que pusimos en html, en este caso es (btn) y depues utlizar su metodo, u/o propiedad, en este caso (addEventLiatener) lo que significa esto en español es (agrega un escuchador de eventos).

Escucha cada vez que suceda sierto evento, y cada vesz que escucha, ejecuta el codigo JS que yo te diga, eso es lo que hace (addEventListener)

Vamos a utlizar ese mismo (OnClick) pero para nuestyro boton desde JS, vamos a utlizar esto en el (btn), que selecciona a nuestro boton ene html que tiene el ID, en este caso (btnCalcular), tengamos en cuenta que si vamos a utlizar esto en JS debe de ir presedido un el signo de numero (#), esto quedara asi, (#btnCalcular), 

```js 
const btn = document.querySelector('#btnCalcular');

```

Ahora a ese selector (btn) podemos aderirle su metodo (addEventListener) tengamos en cuenta que cada palabra comienza en mayuscula.

```js

btn.addEventListener

```

Este en español traduce algo asi, como un escuchador de eventos, (add= agrega un Listener= escuchador de eventos), de otra manera seria, escucha cada vez que alla un evento, y cada vez que escucha, ejecutra el codigo que yo te diga.

Esto es un evento, por lo tanto este metodo termina con parentecis (), y estos parentecis seran para poner los argumentos, en este caso debemos pasarle deos argumentos

El primero sera el nombre del evento al que queramos ejecutar, y el segundo sera el codigo JS que queramos mandar llamar, cuando suceda el primer evento, en este caso el primer evento sera (click), y el segundo evento JS sera (btnOnClick), 

 esto de esta manera.


```js

btn.addEventListener('click' btnOnClick);

```

Pero cuidado que esta es una diferencia importante, y pregunta de examen, este (btnOnClick), si recoordamos cuando lo teniamos en el botn en el html, lo teniamos que llamar con parentecis, btnOnClick().

pero cuando lo llamamos en el JS cuando lo tenemos con el addEventListener, no debemos de ponerlo con los parentecis, a esa funcion que quqeramos mandar llamar, cada vez que suceda el evento de click.
En el caso de cuando teniamos el (onclick="btnOnClick()") en el html, era que se ejecutaba lo que pasara en ese evento, teniamos que mandar a llamar esta funcion, pero en JS no es como funciona nuetro (addEventListener), 

```js

btn.addEventListener('click' btnOnClick);

```

Nuestro (addEventListener) lo que hace primero, es saber de cual selector o elemnto html estamos hablando, en este caso seria de nuestro boton (btn).

Luego de todos los eventos que tenemos, queremos escuchar, en este caso nuestro evento sera  el de (click).

Luego quiere saber cual es la funcion que debe mandar a llamar cuando sea que tengamos ese evento de (click), si le pusieramos los parentecis en frente


 ```js

btn.addEventListener('click' btnOnClick());

```

Lo que JS interpretaria, es que debe ejecutar esta funcion (btnOnClick()), y despues nuestro addEventListner, por dentro del codigo del  addeventListener, lo que va a hacer es ponerle otros parentecis,

```js

btn.addEventListener('click' btnOnClick()());

```

 en tonces lo que vamos hacer es ejecutar una funcion que ya fue ejecutada? por decirlo de alguna manera.

Esto seria erroneo, 
No, no debemos hacer esto, para esto solo debemos darle el nombre de la funcion que queremos ejecutar, en este caso solo, (btnOnClick), y ya nuestro addEventListener, se encargara de ejecutarlo, en tonces por el momento nuestro codigo quedaria de esta manera, tanto el html, como el JS.


HTML

```js

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


Si nosotros guardamos y vamos a la consola, poenes algunos numeros en el input y damos al boton calcular, este nos devolvera el resultado del valor de los inputs que tenemos.
Replicamos el mismo comportamoiento de antes, pero dejando un poco mas limpio nuestro html, y nuestro codigo JS con una function, un nombre mas desciptibo que nos dice que hacer, si no tambien tenemos directamnete una funcion que va a mandar llamar esa funcion con el nom,bre descriptibo, en conclusion la forma del JS que tenemos, va a ser la forma que mas nos vamos a encontrar, cuando tenemos un addEventListener, y esto es lo que va a venir mejor para la legibilidad

