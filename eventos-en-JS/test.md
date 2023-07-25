# EVENTOS EN JAVASCRIPT

Ya aprendimos a leer nuestros archivos html desde JS, su contenido, sus atributos, tambien a como editarlos, cambiarlos, y ademas a crear nuestras propias etiquetas, para insertarlas en algun contenedor que tengamos en el html.

Pero la verdad esto no es muy practico y util, si lo que hacemos es editar la primera version que van a ver los ususarios de nuestro html, por que a final de cuentas, podriamos haberlo hecho con html y ya, no hacia falta hacerlo con JS.

Lo verdaderamente util seria es que toda esta manipulacion del DOM, cuando los usuarios hagan algo, 

Cuando presionen un   botom, hagan clic en alguna parte, pasen el mause por encima de alugun elemento, cuando consulten alguna informacion.

Es ahora cuando vale completamente la pena que agarremos JS, Para editar o cambiar de la forma que necesitemos nuestro html, para que los usuarios vean que la pagina esta viva.

En tonces vamos aver como hacemos esto utlizando los eventos con JS.

Tomemos en documento html que teniamos y vamos a hacer algo mas serio,

Vamos a desirle que queremos tener dos  input id="calculo para sumar o multiplicar, al primero le vamos a llamar (calculo1 y al otro calculo2), 

y ademas vamos a agregar un bottom y a este le vamos a llamar de id="btnCalcular", y a este vamos a decir que lo necesitamos para calcular, pero para ser mas especificos vamos a tener dos input, y a estos le vamos a llamar "calculo1", y "calculo2", mas el button que llamamos al principio.
 
si hacemos esto y salavamos vamos al navegador y veremos lo que tenemos.


** **, 

```js

<body>
    <h1>Manipulacion del DOM basico</h1>

    <input id="calculo1"  placeholder="Escribe algo aqui">
    <input id="calculo2"  placeholder="Escribe algo aqui">
    <button id="btnCalcular">Calcular</button>

<script src="./script.js"></script>   
</body>
</html>

```

```js

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

```

Lla que tenemos los elementos seleccionados en html, con los que queremos trabajar, Ahora lo que queremos es escuchar los elementos de los botones que tenemos, queremos que pase algo con estos botones, que cuando clikiemos en el boton (Calcular), haga algo desde los otros botones, que sume los valores etc.

Una de las formas de escuchar eventos de algun elemento html desde JS, en html agrgando el atributo (onclik), pero tengamos en cuenta que este no es el unico que existe, si estuvieramos trabajando con otros elemento, como por ejemplo, si estamos trabajando con un (input), para este tenemos el atributo (onchange).

por ejemplo, siguiendo la sintaxis de cualquier atributo de html, debemos decirle cual es el nombre de la funcion, o el codigo de JS que debe de ejecutar en cualqioera de estos casos, ya sea en el (onklick) de un boton, o en el (onchange) de un input, a si.


```js

<body>
    <h1>Manipulacion del DOM basico</h1>

    <input id="calculo1"  placeholder="Escribe algo aqui">
    <input onchange="---" id="calculo2"  placeholder="Escribe algo aqui">
    <button id="btnCalcular" onclick="">Calcular</button>

<script src="./script.js"></script>   
</body>
</html>

```

Vamos hacer una prueba de esta manera.

vamos a decirle en el (onchange), y en el button. 

```js

 <input onchange="console.log('cambio el input')" id="calculo2"  placeholder="Escribe algo aqui">
 <button id="btnCalcular" onclick="console.log('click del btn')">Calcular</button>

``` si nosotros hacemos esto en el codigo, vamos a ver que pasa. si escribimos en el input y nos vamos a la consola del navegador veremos como nos dispara un console.log con el mensaje.


```js

<body>
    <h1>Manipulacion del DOM basico</h1>

    <input id="calculo1"  placeholder="Escribe algo aqui">
    <input onchange="console.log('cambio el input')" id="calculo2"  placeholder="Escribe algo aqui">
    <button id="btnCalcular" onclick="console.log('click del btn')">Calcular</button>

<script src="./script.js"></script>   
</body>
</html>

```


Y nosotros escribimos cualquier cosa en el input segundo, donde nosotros colocamos el mensaje, veremos que nos devuelve por consola el mensaje del console.log, ('cambio el input')".

Esto es lo que nois permite hacer este atributo (onchange), que es escuchar cuando los usuarios terminaron de escribir, ahora comprovemos lo que pasa cuando un ussario termina de clickear en el boton, nos dispara el mensaje en la consola, ('click del btn').

Pero algunos nos preguntamos, tener un monton de codigo JS aqui, no es la mejor idea del mundo, para esto lo que solemos hacer es crear una function en nuestro codigo JS, como por ejemplo 

```js

function btnOnClick() {}

```

btnOnClick es simplemente una function que se debe ejecutar cada vez que le damos click a un boton, una vez que tengamos esta funcion, lo que debemos es ir al html y con el nombre de la function, insertarla dentro de nuestro (onClick) y ejecutarla con los parentesis para que asi se ejecute cada vez que se ejecute el evento del onClick asi.


```js

 <button id="btnCalcular" onclick="btnOnClick">Calcular</button>

```

vamos hacer estos cambios dentro de nuestro codigo, por el momento vamos a borrar el console.log del input, y nos quedamos con el button.

JS


```js


const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');


function btnOnClick() {}

```


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
    <!-- <input onchange="console.log('cambio el input')" id="calculo2"        placeholder="Escribe algo aqui"> -->
    <input id="calculo2" placeholder="Escribe algo aqui">
    <!-- <button id="btnCalcular" onclick="console.log('click del btn')">Calcular</button> -->
    <button id="btnCalcular" onclick="btnOnClick()">Calcular</button>

<script src="./script.js"></script>   
</body>
</html>

```

Miremos esto, si nosotros colocaramos un console.log dentro de esta function, de esta manera.


```js

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');


function btnOnClick() {
    console.log('Escuchando el otro evento de click')
}

```

Si salvamos y clickeamos, vamos aver que se esta ejecutando el mensaje de esa function en consola, en tonces veremos que dentro de nuestro codigo JS, podemos tener una cantidad infinita de codigo que queramos, y no va a pasar nada, por que tendremos nuestro propio arachivo de JS, ya nolo tendremos dentro del html, que seria una mala practica.

Y esta seria la mejor manera de trabajar.

Ahora, tenemos que escuchar el .value del primer input, pero tambien queremos escuchar el .value del otro input, y que cuando le demos click al boton, se haga algo con ellos.
inprimirlos, sumarlos, restarlos, lo que nosotros queramos.

Para esto recordemos que tenemos estos selectores.

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

y ya estamos ejecutando la function de onClick, cada vez que le picamos al boton ara algo.


function btnOnClick() {
   
}


Pero como cogemos esos valores de los inputs cuando le clickiemos al boton y nos sume,  o nos reste, lo que sea?
recordemos que eso ya lo vimos, si cogemos por ejemplo 
input1.value por que asi se llama esa variable que estamos seleccionando, al elemento que tenga elo ID del primer input, pues esto va a ser el valor del primer input.

input1.value

pero si ademas le sumamos el valor del segundo input.

input1.value + input2.value

entonces tendriamos por ejemplo un 555 si estubieramos concatenando, o un 60 si estubieramos sumando, si en un input colocamos 5, y en el otro input colocamos 55.


```js

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');


function btnOnClick() {
   console.log(input1.value + input2.value);
}

```

Ya estamos ejecutando nuestro codigo JS, en este caso lo que hemos hecho es una concatenacion, pero si lo que quicieramos hacer, es una suma, lo que debemos hacer es convertir estos valores (input1.value + input2.value) a  numeros, hay muchas funciones de JS  por defecto que nos ayudad.

No es muy normal que los resultados terminenen en la consola, por que los ususarios quieren ver el resultado de lo que sea que estemos haciendo, como por ejemplo lo queremos es que se vea algun resultado en la pantalla, en tonces vamos hacer lo siguiente.

Vamos a crear en el html un parrafo y le vamos a poner como ID resultado, vamos hacer que este parrafo por defecto, no tenga nada, que los ususarios no lo puedan ver, pero cuando le demos click al botton CALCULAR, que nos muestre la suma o la concatenacion de los dos inputs.
Crearemos el parrafo.



```js

<p id="result"></p>


```

Lo siguienete que debemos hacer, es que lo vamos a selecionar en el JS, 


```js

const pResult = document.querySelector('#result');



```

Ahora lo que vamos hacer es guardar en una variable const y le ponemos un nombre randon por ejemplo, (sumaInputs) y aqui guardaremos la suma o concatenacion de los input.values.
Y ahora anuestro (pResult) le vamos a llamar algunas de sus funciones como por ejemplo, innerHTML, innerText, ETC
En este caso vamos a llamar innerText, con este le vamos a decir que nos concatene, ya no un texto, si no la suma de estos inputs (sumaInputs), o mejor todabia, vamos a decirle otra concatenacion, la sume con la otra concatenacion, y su sintaxis quedaria asi.


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
    <button id="btnCalcular" onclick="btnOnClick()">Calcular</button>

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




function btnOnClick() {

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs; 

 }



```


Ahora si vamos al navegador, y escribimos cualquier valor en los inputs, y le clickeamos al botton calcular, esto seria lo que nos devuelve.

Si pongo en un input (2023) y en el otro input (oportunidad), esto se sumaria y me devuelve esto.

Resultado: 2023oportunidad



Esta es la forma como podemos escuchar eventos de nuestros ususarios desde JS, tenemos que selecionar nuestros elementos del html desde JS, CON LAS FUNCIONES QUE YA APRENDIMOS COMO ES EL ( querySelector ), y ademas utlizando atributos del html como el (onclick) entre otros, conesto podemos escuchar eventos de los usuarios, para que ellos puedan interactuar con la pagina, y devolviendoles el resultado que ellos estaban buscando, de esta manera hemos aprendido como se escuchan estos eventos.


