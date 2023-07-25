# Manipulacion del DOM

En esta clase vamos aprender como leer codigo html desde nuestro codigo JS, en este caso vamos a escribir en nuestro codigo cosas que se puedan leer, por ejemplo.

```js

<h1>Manipulacion del DOM basico</h1>
   
   <p>Esto es un parrafo solo</p>
   <p class="parrafito">Esto es un parrafo con clase</p>
   <p id="pid">Esto es un parrafo con ID</p> 
   <input placeholder="Escribe algo aqui">
   
```

Si recargamos en el navegador, podremos ver como lo que hemos creado, y tambien podremos ver en la consola del navegador que se inprime nuestro codigo JS.

Ahora como podemos permitir que nuestro archivo html, entre a nuestro archivo JS, y podamos ver todo en la consola del navegador?.

Tenemos una funcion que llama. 

```js

document.getElement

```

y con este muchos elementos que nos pueden servir de diferentes formas como (ById, ByClassName, ByName, etc)

Hay miuchas de esta s funcione s que nos ayudan a leer html desde JS.

Tambien tenemos otro que se llama .

```js

document.querySelector

```

Y recordemos que esto solo funciona si ejecutamos JS en el navegador, en vez de en Node.js

Prosigamos:

La forma profesional de trabajar es crear variables que representen los selectores de cada uno de los elementos html, como puden ser  (h1, h2, p, etc).

En este caso vamos a crear una variable que se va a llamar (h1) y que sera igual a (document.querySelector).
(Antes de proseguir debemos tener en cuenta que debemos leer muy bien nuestro html, y debemos saber que tenemos (class, id, pero tendremos otros que estaran suelto, solo estaran las etiquetas html sin clase y sin nada).

Y este (documenct.querySelector) sera una function(""), y aqui debemos de seleccionar cual va a ser el selector de html, con el que queremos trabajar.

Este (documenct.querySelector) nos pide que seleccionemos cuales son las etiquetas, o los Id, o las classes con las que queremos seleccionar a algo en html, recordemos que si queremos trabajar con un Id, debemos de poner en el querySelector el signo de numero, este sera un ejemplo segun lo que vallamos a utlizar..

```js

const h1 = document.querySelector('h1');

const p = document.querySelector('p');

const parrafito = document.querySelector('parrafito');

const pid = document.querySelector('#pid');

const input = document.querySelector('input');

```
Ahora con esto vamos hacer un console.log y veremos que significa todas estas variables..

Nota:
Nosotros podriamos tener un console.log para cada una de estas variables.

```js

console.log("h1");
console.log("p");
console.log("parrafito");
console.log("#pid");

etc
```




 pero a la final tendremos solo uno, y para hacer esto debemos de utilizar los corchetes {} dentro del console.

 Esto lo que va a ser es que va a interpretar el objeto osea todo lo que halla dentro de los corchetes, sera un objecto, y en la consola nos va a mostrar ese objecto con todas las propiedades, no solo el valor, si no tambiel el nombre, vamos a la consola.


```js

const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
   h1, 
   p,
   parrafito,
   pid,
   input,
});


```
Si vamos a la consola veremos que nos arroja todo el objeto, 

h1: h1
p: p
parrafito: parrafito

pero notemos algo, si nosotros abrimos cada uno de estos, nos vamos a encontar que el navegador les va a otorgar unas classes especiales, con las que nosotros podemos trabajar, y si nosotros quisieramos entrar en alguno de estos atributos atra vez de JS, tendriamos que tomar el objecto y seguido de punto, poner el atributo que queramos y podremos ver la classe de ese atributo que nos a proporcionado el navegador..

```js

const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({h1.ariaBusy});

```

Con esto podremos ver la classe que tenemos con ese atributo, incluso nos puede dejar escuchar eventos que pasen sobre ese elemento, si los usuarios le dan click vamos a poder escuchar ese evento, para poder reaccionar a ese evento, como por ejemplo a un bottom.

Vamos a ver un ejemplo practico con el input.
Si nosotros tomamos un console.log({input.value}), este value nos lo dio el navegador, si nosotros nos vamos al input y escribimos cualquier cosa, vamos a ver como ese valor que hemos escrito en el navegador, se imprimi en la consola, y nosotro vamos a poder ver lo que nuestro usuario nos escribio.

```js

const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({input.value});

```

console.log(input.value);
jhdfggsggteggsd
undefined


Esto seria lo que nos devolveria el navegador, nos dio automaticamente lo que el usuario escribio en el formulario,  y lo pudimos ver en la consola, gracia a JS.

Para recapitular con esta clase, recordemos, que tenemos funciones o metodos que nos da nuestro entorno, nuestro navegador, estamos ablando de los diferentes (query...) estos para seleccionar los elementos que tenemos en el html que esta ejecutando nuestro codigo JS, para esto podemos utlizar (querySelector y mas ), y si quicieramos celeccionar en forma de Array, una lista de todos los selectores que cumplan con un parrafo, con un nombre de etiqueta, como por ejemplo la etiqueta "p" que tenemos, es un parrafo, notemos que aqui no se esta refiriendo a todos los parrafos, si no al primer parrafo que se encuentra.
Si por ejemplo nosotros ocuparamos (querySelectoAll("p");  ), veremos que este nos selecciona todas las etiquetas de parrafo que se encuentra en todo el documento html, osea seria una lista con tadas las etiquetas "p".

Con esto hemos terminado esta clase de como podemos leer el documento html desde nuestro JS.