# Escribiendo HTML desde JavaScript

Dbemos tener en cuenta que aun nos falta mucho por aprender JS, pero vamos por buen camino, el siguiente curso que debemos tomar despues de este, sera el (Curso de Manipulacion del DOM) donde apredenderemos a utlizar mucho mas propiedades para leer, escribir, y hacer muchas cosas mas profesionales con JS.

Ahora para esta clase vamos a inventarnos cualquier cosa, vamos a utlizar el mismo codigo html, de la clase anterior.

Digamos que queremos hacerle cambios a ese documento, por ejemplo el titulo.

Tenemos un <title>Manipulacion del DOM</title>

Pero queremos cambiar este titulo, como lo podemos hacer?

Vamos a ir a nuestro JS, y recordemos que ya tenemos todos los celectores para seleccionar todas estas etiquetas, y recordemos que tenemos un celector que nos apunta a la etiqueta de <title> con su query

```js
const h1 = document.querySelector('h1');
```

Y es esta etiqueta la que queremos modificar, si nosotros ocupamos la propiedad (innerHTML) pero antes elegimos la etiqueta que queremos modificar seguida de un punto, y a este le damos un valor, que sera la palabra o el parrafo que queremos que aparesca ahora en vez de la que teniamos, pues con este (inner) podremos modificarlo.

h1.innerHTML

```JS

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

console.log(input.value);

h1.innerHTML = 'Escribiendo HTML en el JS';  

```

Ahora hemos visto como se an efectuado estos cambios, si nosvamos al inspector de elementos, podremos ver que con este (innerHTML) no solo nos ayuda a cambiar texto, si no tambienetiquetas html, si por ejemplo nosotros hacemos lo siguiente.

```js
h1.innerHTML = 'Escribiendo <br> HTML en el JS';
```
-------------------------

```JS

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

console.log(input.value);

h1.innerHTML = 'Escribiendo HTML <br> en el JS';  

```


Si hacemos esto y rrecargamos, podremos ver, que no solo insertamos texto, si no que tambien podemos escribir etiquetas html dentro de la etiqueta h1.
------------------------
Si por algun caso, nosotros no escribieramos algo, si no que fuera algun usuario, y escribiera html malisioso, podriamos utilizar para protegernos (innerText), la diferencia entre (innerHTML) y (innerText), es que el primero escribe texto y html, y el segundo como su nombre lo dice, es soslo texto, pero esto lo veremos mas adelante.

```JS

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerText = 'Diferentes maneras de Escribiendo HTML en el JS'; 

```
--------------------------
Como podriamos darle una classe a una etiqueta desde el JS?

Tenemos varias opciones, como por ejemplo (getAttribute= este nos ayuda a leer alguno de los atributos que tenga nuestro elemnto) o (setAttribute).

Si tuvieramos por ejemplo un atributo metido dentro de una etiqueta h1, 

<h1 pantalla="platzilg">Manipulacion del DOM basico<h1>

Y luego nos vamos a JS, y hacemos lo siguiente.

```JS

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})


console.log(h1.getAttribute('pantalla'));
```

si vamos a la consola podremos ver como nos imprime "plazilg", por que este fue el atributo (pantalla) que guardamos en el elemento h1 del html,
esta es una de las formas que podemos adcceder ya no al atributo inventado (pantalla), si no a acualquier otro.. 
---------------------------
Por ejemplo tambien si nosotros queremos adceder a las clases, vamos ahacerlo asi.
crearemos una clase (verde) en el h1 del html.

<h1 class="verde">Manipulacion del DOM basico<h1>

y luego en el JS, le decimos
```js
console.log(h1.getAttribute('class'))
```

si hacemos esto podremos leerlo en la consola de igual forma y nos lo inprime, nos dice (verde).


```JS

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

console.log(h1.getAttribute('class'))

```

---------------------------

Ahora, tratemos de modificar este atributo, para esto vamos a utlizar la funcion (setAttribute) para poder modificar esa classe.

Lo primero que debemos decirle es cual es la classe que queremos modificar, en este caso sera (class) y vamos a decirle que su nuevo valor, va a ser (rojo), de esta manera.


```js

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.setAttribute('class', 'rojo'); 
```

Si hacemos esto y rrecargamos, veremos que nos lo imprime, y si vamos al inspector, vemos que aun que la clase es verde en el html, pero en el JS se ha modificado a rojo.

y esta es una forma para modificar los atributos de los elementos en html, es una cosa muy buena.

Pero si hablamos de (classes) en espesifico, hay otra funcion que funciona espesificamente con las classes y esto es
(classList).
Si utlisamos esta podemos agregarle (.add), puntualizo, no quitarle, agregarle.
Si seguimos trabajando con la etiqueta h1, su sintaxis seria.

```js
h1.classList.add('rojo');
```


```js

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo'); 
```

Si hacemos esto, y rrecargamos, veremos como nos devuelve la class rojo, y veremos las dos classes (verde, rojo), verde que es la viene por defecto, y rojo que es la que hemos agregado con JS.

---------------------------

tambien podemos hacer un (remove) para ya no eliminar todas las classes que tenga, si no, en este caso la classe verde, si es que la tenemos, de esta manera.

```js
h1.classList.remove('rojo');
```


```js

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo');
h1.classList.remove('verde'); 
```

Y asi estemos ejecutando, esa eliminacion, ese delete de la classe verde, aun asi se quedo la classe rojo.

Esta es una de las ventajas de trabajar con classes, utilizando (classList).

Tenemos otras propiedades como es (classList.toggle) que sirve por ejemplo cuando tenemos eventos en JS, para no solamente quitemos o agreguemos, si no, que dependiendo de si tenmos la classe o no, se la pongamos y se la quitemos, se la pongamos o se la quitemos cada vez que ejecutemos este (toggle).

Tambien tenemos (classList.contains) y este es una especie de condicional, que nos devuelve (true o false), dependiendo de si mi elemento tiene la classe que le estamos preguntando, todo esto nos es muy util y nos ahorra vastantes lineas de codigo.

```js

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo');
h1.classList.remove('verde'); 

/* h1.classList.toggle('verde'); */

/* h1.classList.contains('verde'); */
```

-------------------------

Ahora tratemos de modificar el (value) de nuestro (input) solo por diversion.
Asi como podemos decirle en el html que su valor por defecto sea 1,2,3

<input placeholder="Escribe algo aqui" value="123">

Podemos decirselo desde nuestro JS.
NOTA: El value en el caso de los inputs, no necesariamente debe de empezar con (getAttribute )
y despues con un (setAttribute), si no que puede comenzar directamenete con el (value) y modificarlo, por ejemplo.

```js
input .value = "456";
```

```js

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo');
h1.classList.remove('verde'); 

/* h1.classList.toggle('verde'); */

/* h1.classList.contains('verde'); */

input.value = "456";
```

Aqui vemos como el valor cambia a 456 por defecto, los usuarios pueden cambiarlo, pero nosoptros ya escribimos el por defecto, y asi como el value, podemos hacerlo con el placeholder, cualquier atributo que nosotros querramos, esto es modificar html desde JS, para finalizar, lo unico que hemos hecho es cambiar lo que ya estaba, es decir ya teniamos un h1, un parrafo, un titulo, y les hemos hecho cambios.

Como creamos un elemento desde cero?

Para esto tenemos un elemento llamado (document.createElement() )
Este nos ayuda a crear el elemento html que nosotros querramos.

```js
document.createElement();
```

Si nosotros quicieramos crear una imagen, si nosotros hacemos un console.log de esta manera.

```js
console.log(document.createElement('img'));
```
Si esto lo hacemos con todo el codigo que tenemos, vamos aber que nos imprime en la consola.

```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo');
h1.classList.remove('verde'); 

/* h1.classList.toggle('verde'); */

/* h1.classList.contains('verde'); */

input.value = "456";


console.log(document.createElement('img'));
```

Vemos como en consola se imprime la etiqueta <img>, 
solo por llamar a (document.createElement), y decirle que creara una imagen, si por ejemplo no fuera una <img>, si no un <span> 


```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo');
h1.classList.remove('verde'); 

/* h1.classList.toggle('verde'); */

/* h1.classList.contains('verde'); */

input.value = "456";


/* console.log(document.createElement('img')); */

console.log(document.createElement('span'));
```

Si rrecargamos veremos en la consola que cambia la etiqueta de <img>, a <span>, y fijemonos que automaticamente JS supo que una etiqueta se debe habrir y cerrar o en el caso de las imagenes se tenia que cerrar a si misma.

Sigamos con el ejemplo de las imagenes.
Como podemos hacer para que esta etiqueta no solo se pueda ver en la consola, siendo esto algo inutil, si no que tambien se pueda ver por los usuarios?

Para esto debemos utilizar ya un elemento que exista dentro de nuestro html, y meter la imagen por dentro.

Vamos a ir a nuestro codigo html, y vamos a meter esta imagen dentro de la etiqueta de parrafo que ya tenemos, esto sera un ejemplo.

vamos a crear una variable dentro de nuestro archivo JS, y vamos a insertar hay la imagen de esta manera.

```js
const img = document.createElement('img');
```


```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo');
h1.classList.remove('verde'); 

/* h1.classList.toggle('verde'); */

/* h1.classList.contains('verde'); */

input.value = "456";

const img = document.createElement('img');
```

Esta Imagen funciona como cualquier selector de html, tine la propiedad (classList, getAtribute, setAtribute) etc.

para que podamos ver reflejada alguna imagen en pantalla, vamos a crearla de esta forma.


```js
const img = document.createElement('img');

img.setAtribute('src', 'https://cdn.pixabay.com/photo/2017/07/23/00/05/dog-2530301_640.jpg');
console.log(img);

```
Lo que hemos hecho, es que hemos llamado la etiqueta <img> le hemos aplicado el atributo (setAtribute) dentro de los parentesis hemos llamado el atributo (src) y despues hemos hecho una llamada al link de una imagen cualquiera, aqui podemos poner la ruta de la imagen.

Luego hemos puesto un console.log de (img) haber que nos retornaba en consola, si vamos a la consola, veremos que nos muestra la imagen con el atributo src y por consiguiente la url.


```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo');
h1.classList.remove('verde'); 

/* h1.classList.toggle('verde'); */

/* h1.classList.contains('verde'); */

input.value = "456";

const img = document.createElement('img');

img.setAtribute('src', 'https://cdn.pixabay.com/photo/2017/07/23/00/05/dog-2530301_640.jpg');
console.log(img);
```

Si vamos a la consola veremos como se muestra no solo la etiqueta de <img> si no tambien el atributo src con la url de la imagen que hemos puesto.

Ahora lo que vamos hacer es meter esta imagen en alguna parte, para esto vamos a ponerla en la etiqueta de parrafo <p>, y vamos a utlizar el selector de identificacion que le pusimos para el JS, en este caso fue (pid), y con esta podemos poner cualquier propiedad de JS como puede ser el (innerHTML), podemos llamar otras propiedades como (append, o appendChild), todas estas tienen funcionamientos diferentes, por ahora vamos a utilizar el (append), y le vamos a pasra como argumento a nuestra imagen, de esta manera.

```js
const img = document.createElement('img');

img.setAtribute('src', 'https://cdn.pixabay.com/photo/2017/07/23/00/05/dog-2530301_640.jpg');
console.log(img);


pid.append(img);
```
Recapitules, hemos creado una imagen con
const img = document.createElement('img');

a esta imagen le pusimos los atributos y el resto de cosas, 
img.setAtribute('src', 'https://cdn.pixabay.com/photo/2017/07/23/00/05/dog-2530301_640.jpg');

y por ultimo estamos insertando esta imagen dentro de un contenedor del html con el id="pid".

Nota: Tengamos cuidado de como hemos escrito el codigo, por que sien una linea hemos escrito, por ejemplo en los ejemplos anteriores nosotros llamamos a nuestro id con un document.getElementById('#pid') seguido de un numeral y el id,como si fuera un querySelector, si fuera asi, ya no tendriamos que llamarl el id con el numeral, vastaria solo el id. 

 y vamos a ver lo que va a pasar.

```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo');
h1.classList.remove('verde'); 

/* h1.classList.toggle('verde'); */

/* h1.classList.contains('verde'); */

input.value = "456";

const img = document.createElement('img');

img.setAtribute('src', 'https://cdn.pixabay.com/photo/2017/07/23/00/05/dog-2530301_640.jpg');
console.log(img);

pid.append(img);
```

Y vemos como nos a imprimido la imagen en pantalla, ya nuestros ususarios pueden ver la imagen, a pesar de que en nuestro index.html, nunca tuvo esta imagen, pero en el script se la agregamos gracias al JS, como utilizamos append, no borro el contenido anterior de nuestro parrafo, si no que metio la imagen despues.

Pero si utlizaramos por ejemplo 

```js
   pid.appendChild(img);
```

Seguiria funcionando igual, por que (append, y appendChild) funcionan igual, agregan el elemento despues del contenido que tuviera nuestro parrafo, pero que pasaria si utilizaramos un (innerHTML), con esto borrariamos de nuevo la imagen.

Como podriamos boorar el contenido del parrafo y por consiguiente agregar la imagen?

Simplemente mandamos llamar a pid.innerHTML y que este sea igual a un string vacio.

```js
pid.innerHTML = "";
```
con este no estamos borrando el parrafo, si no todo lo que halla por dentro, y si hacemos un appendChild de la imagen, ya no apareceria el contenido de antes, pero podriamos ver nuestra imagen.  

```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.classList.add('rojo');
h1.classList.remove('verde'); 

/* h1.classList.toggle('verde'); */

/* h1.classList.contains('verde'); */

input.value = "456";

const img = document.createElement('img');

img.setAtribute('src', 'https://cdn.pixabay.com/photo/2017/07/23/00/05/dog-2530301_640.jpg');
console.log(img);

pid.innerHTML = "";
pid.append(img);
```

A esto es lo que le llamamos, Manipulacion del DOM desde JS, donde podremos editar he incluso crear nuevos elementos para nuestro html, utilizando JS, pero no tiene mucho sentido desdel principio y ya,lo que tiene sentido es que nuestro html cambie cada vez que los ususarios hagan algo, una accion, una interaccion, pero esto lo veremos en la siguiente classe .


   
