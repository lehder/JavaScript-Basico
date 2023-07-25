# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones



### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

(Respuesta)
- Espacios en memoria donde podemos guardar informacion, que tipo de datos?
Caracteres, Strings, Numeros, Booleanos (true, false).
De forma especial tambien podemos guardar funciones, funciones con siertos argumentos.
Esto tambien depende del lenguaje y la estructura de datos que soporte el lenguaje.


- ¿Cuál es la diferencia entre declarar e inicializar una variable?

(Respuesta)
-Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre (x).
-Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.
```js
let nombre = "Lehder"
undefined
nombre
'Lehder'
nombre = "Hernadez"
'Hernadez'

const apellido = "Henao"
undefined
apellido
'Henao'
apellido = "Lenis"
VM1625:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:10
(anonymous) @ VM1625:1

```

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

(Respuesta)
El operador que nos permite sumar o concatenar es +, este operador nos permite sumar numeros cuando lo usamos con numeros. Pero cuando los strings, lo que hace es unir (concatenar, asi se dice) ambos strings.

```js

let suma = 2 + 2;
undefined
suma
4
let sumaStrings = "Hola, " + "Lehder";
undefined
sumaStrings
'Hola, Lehder'

```


- ¿Cuál operador me permite sumar o concatenar?

(Respuesta)
El operador que nos permite sumar o concatenar es +.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: String.
- Apellido: String.
- Nombre de usuario en Platzi: String, pero esto podria ser una concatenacion, dado que los nombres de Usuario, normalmente comienzan con arroba (@).
- Edad: number.
- Correo electrónico: String.
- Mayor de edad: boolean.
- Dinero ahorrado: number.
- Deudas: boolean.

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.


(Respuesta)
.....
```js


let nombre = "Lehder";
let apellido = "Hernandez";
let username = "Lehderjhoyy";
let edad = 19;
let mail = "lehderjhoyy38@gmail.com";
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

```
......

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

(Respuesta)

```js

let nombre = "Lehder";
let apellido = "Hernandez";
let username = "Lehderjhoyy";
let edad = 19;
let mail = "lehderjhoyy38@gmail.com";
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

undefined

let nombreCompleto = nombre + " " + apellido;
undefined
nombreCompleto
'Lehder Hernandez'

```


- Dinero real (dinero ahorrado menos deudas)

(Respuesta)

```js

let nombre = "Lehder";
let apellido = "Hernandez";
let username = "Lehderjhoyy";
let edad = 19;
let mail = "lehderjhoyy38@gmail.com";
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

undefined

let dineroReal = dineroAhorrado - deudas;
undefined
dineroReal
900

```


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

(Respuesta)

Las funciones nos permiten encapsular (Guardar) bloques de codigo para reutilizarlos y ejecutarlos en el futuro.


(Ejercisio)

```js

function nombreCompleto(name, lastName) {
    return name + " " +  lastName
}
undefined
nombreCompleto
ƒ nombreCompleto(name, lastName) {
    return name + " " +  lastName
}
nombreCompleto()
'undefined undefined'
nombreCompleto("Caterine", "Henao")
'Caterine Henao'
let nombre = "Lehder";
let apellido = "Hernandez";
let username = "Lehderjhoyy";
let edad = 19;
let mail = "lehderjhoyy38@gmail.com";
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

undefined
nombreCompleto(nombre, apellido)
'Lehder Hernandez'

```


- ¿Cuándo me sirve usar una función en mi código?

(Respuesta)
Nos sirve cuando tenemos variables o bloques de codigo muy paresidos (con cambios que podrian ser parametros y argumentos) que podemos encapsular para reutilizar mas de una vez en el futuro.
   
Tambien nos sirve cuando tenemos un programa de codigo muy grande, cuando es asi es muy facil que nos peradmos con tanto codigo, como saber que lineas de codigo estan unidas entre si?
De esta manera sera muy util encapsular cada parte de codigo que estan unidas entre si, encapsularlas en funciones, y estas ejecutarlas, ayudandonos a poder leer de manera legible este codigo, y ademas la calidad va a subir, y podemos asi mandar a llamar esta funcion cuando la necesitemos.

Cuando tenemos codigo repetido, o cuando tenemos variables muy parecidas las unas con las otras, o cuando tenemos bloques de codigo que haces casi lo mismo cambiando siertas cosas pequeñas, como parametros u/  argumentos



- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

(Respuesta)
Nosotros temos una funcion la cual vamos a declarar y la mandamos llamar.

```js

function nombreCompleto(name, lastName) {
    return name + " " +  lastName
}
undefined
nombreCompleto("venus", "hernandez")
'venus hernandez'

```

Cual es la diferencia entre estos bloques de codigo?

* Los parametros son lo que recibe una funcion cuando la estamos creando, en este caso
(name, lastName), o cualquier otro parametro que queramos utlizar, las funciones reciben parametros.
*Pero cuando mandamos a ejecutar esa funcion, ya no estamos recibiendo (Parametros), ahora estamos enviando (Argumentos), en este caso ("venus", "hernandez"), son los Argumentos que estamos enviando de esta funcion.

*En resumen:
Las funciones reciben Parametros cuando las estamos creando.
Y les enviamos Argumentos cuando las ejecutamos.



### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

(Respuesta)

```js

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
VM1024:6 Mi nombre es Juan DavidCastro Gallego, pero prefiero que me digas juandc.
undefined
function nombreCompleto(name, lastName) {
    return name + " " +  lastName
}
undefined
function saludo(name, lastName, userName) {
    const completeName = nombreCompleto(name, lastName);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas" + userName + ".");
}
undefined
saludo("Rouse", "Hernandez", "acahispita")
VM2769:4 Mi nombre es Rouse Hernandez, pero prefiero que me digasacahispita.
undefined

```



## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

(Respuesta)

Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validacion.



- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

(Respuesta)

*IF (else y else if)
El condicional if (con else y else if ) nos permite hacer validaciones completamente distintas (si asi queremos) en cada validacion o condicional.

*SWITCH
En el switch, todos los case (casos) se comparan con la misma variable o condicion que definimos en el switch.


- ¿Puedo combinar funciones y condicionales?

(Respuesta)

Si, Las funciones encapsulan cualquier bloque de codigo, incluyendo las Condicionales.



### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

.....
(Respuesta)

```js

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
VM598:8 
VM2755:8 Puedes tomar casi todos los cursos de Platzi durante un mes
8
if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Plazit durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExperDuo") {
    console.log("Tu y alguien mas puede tomar TODOS los cursos de Platzi durante un año");
}
VM4065:4 Puedes tomar casi todos los cursos de Plazit durante un mes
undefined

```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

(Respuesta)

Cuando nosotros tenemos un (if), y tenemos otros condicionales

```js

if () {

}else if ()

```
Tenemos una opcion, que es meter todo estos condicionales dentro de una funcion 

```js

function () { 
   if () {

} else if () { 

}
}

```
 Y si no queremos que se ejecute lo que biene despues de estos condicionales, si no que por ejemplo la supcricion es (basic) y hemos llegado al final y no queremos hacer nada mas, osea queremos que aqui termine la funcion, si ese es el caso, pues lo que vamos a utlizar para que no siga corriendo el codigo, es hacer un (return) asi.

 ```js

function () { 
   if (basic) {
    //  Queremos que termine la funcion, en toces, la terminamos con un (return).
   return;
} else if () { 
   //
}
}

``` 
Y gracias a este (return), nuestra funcion deja de ejecutarse apenas se enecuentre con este (return), y si no se cumple, lo que va a hacer la funcion es ejecutar en siguiente paso asta que se lo encuentre, y esto es precisamete lo que nos va a ayudar a resolver la pregunta anterior. 

recordemos que anteriormente teniamos esta funcion con (if) y con (else if)

```js

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Plazit durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExperDuo") {
    console.log("Tu y alguien mas puede tomar TODOS los cursos de Platzi durante un año");
}

```
Ahora lo que queremos hacer es trabajar sin los (else if)


..........................
Lo primero que vamos hacer es que vamos a crear la funcion desde cero, y pasaremos como parametro (suscripcion)
y dentro pondremos la funcion de antes, 
function conseguirTipoSuscripcion(suscripcion) {

lo que debemos hacer es eliminar todos lo (else if), y solo trabajar con (if) y aun asi esto debe de funcionar.

Recordemos que debmos de corregir el parametro en todos los (if) ya no sera 
tipoDeSuscripcion, si no suscripcion.

Ahora que tenemos todo en orden, vamos a la consola y probamos esto, y mandamos llamar el parametro (suscripcion).



```js
function conseguirTipoSuscripcion(suscripcion) { 

if (suscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} 

if (suscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Plazit durante un mes");
} 

if (suscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} 

if (suscripcion == "ExperDuo") {
    console.log("Tu y alguien mas puede tomar TODOS los cursos de Platzi durante un año");
}
}

undefined
conseguirTipoSuscripcion("Free")
Solo puedes tomar los cursos gratis
undefined

```

Funciono, no son trajo ningun fallo, y si probaramos con los otros tipos de condicional como (Expert), (ExpertDuo), de la misma forma nos funcionaria, y si enviamos alguno que no exista (lalalala), pues no nos inprime nada.

Es muy facil que nosotros pudieramos dar una respuesta por defecto si el tipode suscripcion que nosotros enviamos no existe, como por ejemplo en este condicional (if).
Si solo utlizamos los condicionales de tipo (if),  no podriamos hacer eso a menos de que utlicemos el truco del (return).

Vamos a provarlo.


```js
function conseguirTipoSuscripcion(suscripcion) { 

if (suscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} 

if (suscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Plazit durante un mes");
} 

if (suscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} 

if (suscripcion == "ExperDuo") {
    console.log("Tu y alguien mas puede tomar TODOS los cursos de Platzi durante un año");
}
  console.warn("Este tipo de suscripcion no existe")
}

```

para que esto nos funcione vamos a utlizar un console, pero ya no un .log, si no un console.warn("Este tipo de suscripcion no existe)
(warn) para que nos de un amarillito feo. 

```js

function conseguirTipoSuscripcion(suscripcion) { 

if (suscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} 

if (suscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Plazit durante un mes");
} 

if (suscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} 

if (suscripcion == "ExperDuo") {
    console.log("Tu y alguien mas puede tomar TODOS los cursos de Platzi durante un año");
}
  console.warn("Este tipo de suscripcion no existe")
}
undefined
conseguirTipoSuscripcion("Expert")
Puedes tomar casi todos los cursos de Platzi durante un año

>Este tipo de suscripcion no existe
conseguirTipoSuscripcion 
undefined

```
En tonces nos devuelve que con la suscripcion (Expert) puedo tomar casi todos los cursos.

Pero al final sigui ejecutando ese console.warn

Pero como podemos hacer para que no lo ejecute si 
ese tipode suscripcion si existe.

Por esta razon es que debemos utlizar el (return), si en al final de cada condicional utlizamos un (return), en tonces cada vez que se ejecute cual quiera de estos condicionales, en tonces vamos a terminar ahy, la ejecucion de nuestra funcion, vamos a provarlo.

```js

function conseguirTipoSuscripcion(suscripcion) { 

if (suscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
    return;
} 

if (suscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Plazit durante un mes");
    return;
} 

if (suscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
} 

if (suscripcion == "ExperDuo") {
    console.log("Tu y alguien mas puede tomar TODOS los cursos de Platzi durante un año");
    return;
}
  console.warn("Este tipo de suscripcion no existe")
}

undefined
conseguirTipoSuscripcion("Expert")

Puedes tomar casi todos los cursos de Platzi durante un año
undefined

```

Fijemosno que ya no se ejecuto el (console.warn).

Pero si volvemos a invocar esta funcion con un tipo de suscripcion que no existe, por ejemplo

(  conseguirTipoSuscripcion("lalalalal")  )

Ahora si nos devuelve el console.warn con las letras amarillitas 

(Este tipo de suscripcion no existe)

```js

function conseguirTipoSuscripcion(suscripcion) { 

if (suscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
    return;
} 

if (suscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Plazit durante un mes");
    return;
} 

if (suscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
} 

if (suscripcion == "ExperDuo") {
    console.log("Tu y alguien mas puede tomar TODOS los cursos de Platzi durante un año");
    return;
}
  console.warn("Este tipo de suscripcion no existe")
}
undefined

conseguirTipoSuscripcion("Expert")
Puedes tomar casi todos los cursos de Platzi durante un año
undefined

conseguirTipoSuscripcion("lalalalal")
Este tipo de suscripcion no existe

conseguirTipoSuscripcion 
undefined

```
De esta manera respondemos a la pregunta, este sera nuestro codigo.

....................................................
> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u/ objectos y un solo condicional. 😏

(Respuesta)

Debemos hacer que con un solo condicional podamos replicar todos estos comportamientos.

Imaginemos que platzi tiene mas de estas condiciones, por decir algo, unas 50 mas, es decir que para que el codigo que utilizamos antes funcionara, tendriamos que hacer un nuevo condicional por cada uno de los tipos de condicionales que tenemos, osea que cada uno de estos llevaria su respectivo console.log y su return.

De esta manera nuestro codigo no escalaria, serian demaciadas linea de codigo, pero en tonces hay alguna manera de hacerlo?

Si, para esto hay una forma, y seria crear un (objecto) le daremos un nombre como por ejemplo (tiposDeSuscripciones), notemos que aqui hemos terminado en plurar, esto es muy importante, y esto lo vamos a crear como un objecto.


```js

const tiposDeSuscripcione = {

};

```
A este objecto, vamos a crearles distinto elementos, cada elemento va a ser un mensje de cada suscripcion, y el nombre clave de cada uno de esos mensajes, va a ser el nombre de la suscripcion como tal.

Como asi?

Si, de esta manera.

```js

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    experduo: "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año",
}

```
Si ahora nosotros vamos a la consola y mandamos llamar el nombre de esta variable mas punto mas el nombre de la suscripcion, esto nos devolvera el mensaje de este elemento asi.

```js

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    experduo: "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año",
}

undefined
tiposDeSuscripciones.free
'Solo puedes tomar los cursos gratis'

```

Y de esta manera podriamos traer cualqueira de los mensajes, utilizando despues del nombre de la variable . y cualqueira de las suscripciones.


* Ahora, tenemos una Nota importante que deberiamos de saber.

Nosotros podemos entrar a cualquiera de los objectos
con la sintaxis de [] corchetes si dentro de estos y entre comillas le especificamos el nombre de la propiedad, y seria exactamente lo mismo que cuando utlizamos 

tiposDeSuscripciones.free

veamoslo en pantalla.

```js

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    experduo: "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año",
}

undefined
tiposDeSuscripciones["free"]
'Solo puedes tomar los cursos gratis'
```

Nos devolveria la misma respuesta.

Pero tenemos otro truco, si nosotros creamos una nueva variable y le llamamos por ejemplo (ejemploSuscripcion), y esta es igual a = al nombre de la suscripcion, por ejemplo "free".
En tonces tambien funcionaria, asi.


```js

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    experduo: "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año",
}

undefined

const ejemploSuscripcion = "free"
undefined

tiposDeSuscripciones["ejemploSuscripcion"]
'Solo puedes tomar los cursos gratis'
```

Vemos que tambien funciona, por que como ["ejemploSuscripcion"] es igual a  "free", pues cuando tiposDeSuscripciones busque si hay alguna propiedad que se llame "free", la va a encontar y no la va a devolver, en tonces si esa variable la convertimos en una funcion, que como parametro resiva la suscripcion que queremos ver si existe, esto nos va ayudar a, encontrar el mensaje que debamos retornar dentro del objecto de tipoDeSuscripciones.

* Vamos a crear una funcion donde ya no vamos a utlizar todos los condicionales anteriores, si no que vamos a crear un solo condicional, aqui es donde entra la magia.

Hacemos un (if) como condicional con (tiposDeSuscripciones) y vamos a entra a [suscripcion], recordemos que la constante tiene como parametro (suscripcion) que va a decir el nombre del tipo de suscripcion que querramos ver si existe,ese mismo parametro se lo vamos a enviar por medio de los corchetes a nuestro objecto de if (tiposDeSuscripciones).
Si esto if (tiposDeSuscripciones), nos devuelve algo, este condicional se va a ejecutar, en tonces si este es el caso {}, en tonces vamos a tener hay mismo el mensaje que queremos inprimir, el mensaje sera este console console.log(tiposDeSuscripciones[suscripcion]) y le enviamos este tiposDeSuscripciones, y adentro le enviamos ese parametro suscripcion.

Fujemosno, que solo esto es un condicional.

if (tipoDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion])
    }

Gracias a que estamos trabajando con objectos, vamos a poder hacer console.log de cual se que sea el tipo de suscripcion que tengamos en este parametro (suscripcion), y si lo que queremos hacer es devolver un ,mensaje de error si esa suscripcion no existe, pues hacemos un (return) dentro de esta condicional, para que si la suscripcion entra aqui, se detenga y no imprima el 
console.warn

Ahora vamos a la consola y mandemos llamar el nombre de esta funcion.

conseguiorTipoSuscripcion("free")






.........................

```js

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    experduo: "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año",
}

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("Ese tipo de suscripcion no existe")
}

```

.........................




```js

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    experduo: "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año",
}

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn("Este tipo de suscripcion no existe")
}

undefined
conseguirTipoSuscripcion("free")
Solo puedes tomar los cursos gratis
undefined

undefined
conseguirTipoDeSuscripcion("experduo")
Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año
undefined

```

Este nos dice si, Solo puedes tomar los cursos gratis.

y si le preguntamos por la suscripcion "expertduo"
nos dice, si, Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año

Y todo esto lo hicimos con una sola condicional gracias a trabajar con objectos, como recordaremos.

(tipoDeSuscripciones) es un objecto donde cada propiedad, o nombre de propiedad en este caso (free, basic, expert, o expertduo) es el nombre de la propiedad que existe, ademas el valor de esa propiedad, en este caso seria cada mensaje como ejemplo ("Solo puedes tomar los cursos gratis"), es el mensaje que vamos a enviar.

Gracias a esto es que podemos crear una funcion con un solo condicional, que de nuestro obcjeto de uscripcion busque si hay alguna propiedad, que se llame como el nombre de propiedad que estamos buscando a ver si existe, y si si existe, en tonces inprimimos el mensaje que guarda ese nombre de propiedad de nuestro objecto, y si no existe inprimimos el mensaje de que no existe esa suscripcion.





....................................................
## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

(Respuesta)

Es la forma de ejecutar un Bloque de codigo hasta que se cumpla cierta condicion.

A diferencia de los condicionales se ejecuta el codigo solo una vez, los Ciclos son muy parecidos a los Condicionales, por que tambien estan validando Condiciones haciendo validaciones, pero se ejecutan asta que eso se cumplan

- ¿Qué tipos de ciclos existen en JavaScript?

(Respuesta)

while, for, do while.

(Nota)
El Ciclo while es muy parecido al Ciclo do while, la diferencia es que el.
* while, hace la validacion antes de ejecutar la primera vez el bloque de codigo, y por supuesto antes de ejecutar ese mismo bloque de codigo, una y otra vez, como lo es por naturaleza un Ciclo.
* Lo mismo pasa con el do while, pero la primera vez no pregunta, no hace la validacion.
Primero ejecuta el codigo, luego hace la validacion, y dependiendo de la validacion, vuelve hacer el Ciclo, y asi susesibamente. 

* La diferencia entre el while y el for, es que el.
* for automaticamente nos obliga a definir que pasa al principiop al final de cada ejecucion de codigo en nuestro Ciclo



- ¿Qué es un ciclo infinito y por qué es un problema?

(Respuesta)

Es cuando la validacion de nuestros condicionales nunca se cumple y termina toteando la aplicacion..


- ¿Puedo mezclar ciclos y condicionales?

(Respuesta)
Si, aunque los Ciclos son una especie Condicionales, nada nos impide agregar mas condicionales dentro del Ciclo.



### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

```
............................
(Respuesta)

Si ejecutamos este codigo veremos que estamos creando una variable (let i) que es igual a cero (= 0), y le estamos diciendo a nuestro ciclo que se ejecute unica y esclusivamente asta que (i) sea mayo a (5), y al final de cada ejecucion de nuestro codigo vamos a sumarle (i++) uno a (i), en tonces como (i) comenzo en cero, en tonces el primer console sera igual a cero, el siguiente console sera = a 1, por que le digimos que se incrementara en 1 (i++).
y haci asta que llegamos a cuatro, hay es cuando (i) como le hicimos el (i++) pasaria hacer cinco, como la pregunta es (i < 5) i menor a cinco, en tonces no se vuelve a ejecutar, y hay termina nuestro codigo.
............................

```js

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
VM45:2 El valor de i es: 0
VM45:2 El valor de i es: 1
VM45:2 El valor de i es: 2
VM45:2 El valor de i es: 3
VM45:2 El valor de i es: 4
undefined
let i = 0;
undefined

```

............................
Hagamos lo mismo con un (while), entonces while 
(i < 5) i es menor que cinco, pero que es (i)?
si ejecutamos esto nos va a devolver un undefined.
Recoordemos que el ciclo (for) nos deja crear la variable hay mismo para hacer la ejecucion de nuetro ciclo.

En cambio el ciclo (while) nos pide crear aparte las variables con las que queremos hacer el condicional que vamos a utilizar para hacer ese ciclo.
Por eso hacemos fuera la variable

```js

let i = 0;

en este caso while (i < 5) {

}
y es aqui dentro donde debemos poner el console.

let i = 0;

while (i < 5) {
   console.log("El valor de i es: " + i);
}

```

Pero si llegaramos a ejecutar esto, corremos con el problema de caer en el ciclo infinito.
Por que ?
por que (i) sienpre es cero ( let i = 0; )
y nunca lo estamos cambiando, y por lo tanto esta validacion (i < 5) de i es menor que cinco, nunca se esta ejecutando, nunca lo estamos validando de verad, por esta razon se terminaria ejecutando, y ejecutando siempre.

Como podriamos parar esto?

al final de la ejecucion
debemos poner el (i++;) para que ahora (i) cambien en cada ejecucion del bloque de codigo de nuestro ciclo, y cuando llegue a cinco pare y no ejecute mas este condicional.

```js

let i = 0;

while (i < 5) {
   console.log("El valor de i es: " + i);
   i++;
}

```

Vamos hacer toda la ejecucion.

............................

```js

let i = 0;

while (i < 5) {
        console.log("El valor de i es : " + i);
    i++;
}
VM609:2 El valor de i es : 0
VM609:2 El valor de i es : 1
VM609:2 El valor de i es : 2
VM609:2 El valor de i es : 3
VM609:2 El valor de i es : 4
4

```

..................
 De la misma manera vamos hacere el siguiente ejercicio.
........................... 

```js

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
...........................

```js

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
VM695:2 El valor de i es: 10
VM695:2 El valor de i es: 9
VM695:2 El valor de i es: 8
VM695:2 El valor de i es: 7
VM695:2 El valor de i es: 6
VM695:2 El valor de i es: 5
VM695:2 El valor de i es: 4
VM695:2 El valor de i es: 3
VM695:2 El valor de i es: 2
undefined

```
...........................

Veamos el ciclo (for), dice que (i = 10) dice que i es igual a diez, la condicion es que la varaiable i sea mayor o igual a dos  (let i = 10; i >= 2;) pero aparte de esto ya no vamos a sumarle a i en cada ejecucion (i++), por que ahora lo que vamos hacer es todo lo contrario, vamos a restarle uno menos a (i)   (let i = 10; i >= 2; i--), y pra terminar hacemos un console.
............................

Ahora para hacer el condicional (while) debemos crear una nueva variable asi

```js

let i = 10;

```

fijemosnos que anterior mente comenzamos en cero, pero ene este caso comenzaremos en diez, 

Ahora creamos el (while), y le hacemos la validacion, o lo que se debe cumplir para que nuestro codigo se cumpla, de esta manera.

```js

let i = 10;

while (i >= 2) {

}

y ahora dentro debemos poner el console.

let i = 10;

while (i >= 2) {
   console.log("El valor de i es: " + i); 
}

```

Ahora debemos rromper el ciclo, para que esto no se quede infinito, debemos hacer que esto se rrompa en algun punto, como debemos hacer esto?

Recoordemos que le estabamos diciendo que se restara en uno al final de cada ejecucion del ciclo, pues le vamos a decir lo mismo.

```js

let i = 10;

while (i >= 2) {
   console.log("El valor de i es: " + i); 
   i--;
}

```

y de esta forma vamos a tener el mismo resultado, vamos a ejecutar esto en consola.
............................

```js

let i = 10;

while (i >= 2) {
   console.log("El valor de i es: " + i); 
   i--;
}

El valor de i es: 10
El valor de i es: 9
El valor de i es: 8
El valor de i es: 7
El valor de i es: 6
El valor de i es: 5
El valor de i es: 4
El valor de i es: 3
El valor de i es: 2
2

```
............................

De esta manera rompemos el ciclo y no entra en bucle infinito, si no que se para cuando se cumple la condicion.

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

* (Respuesta)

Podemos recoordar que cuando vimos las funciones, no solamente podemos crear y ejecutar nuestras propias funciones, si no que muchas veces los entornos de ejecucion de JavaScript como por ejemplo un navegador en la consola, nos dan algunas funciones por defecto, como por ejemplo el (console.log), tambien tenemos el (console.warn),(console.table), tenemos el (alert() ), que nos permite dar un aviso gigante a los usuarios, otambien tenemos el (prompt() ), que es el que vamos a utlizar ahora, este no solo le da un aviso a los usuarios, si no que tambien les deja escribir algo.

Es presisamente lo que vamos hacer para resolver el siguiente ejercicio.
............................
Como podemos hacer para que un bloque de codigo se guiga ejecutando asta que los ususarios pongan una respuesta correta?

Lo primero es que vamos hacer una variable que diga.

let respuesta = prompt('Cuanto es 2 + 2');

Si hacemos esto en consola, lo que pasara es que me devolvera un recuadro para rellenar.
Nosotros podemos poner cualquier cosa aqui y lo que nos devolvera sera un (undefined), como hacemos que este ciclo se siga repitiendo asta que los ususarios respondan bien?

Si nosotros ponemos una respueta cualquiera, y luego mandamos llamar la variable (respuesta) nos traera justo lo que hemos escrito asi.
............................
```js

let respuesta = prompt('Cuanto es 2 + 2');
undefined
respuesta
'134673'

```
............................

Justo lo que escriban los ususarios, se va a guardar en la variable (respuesta).

Ok, tenemos una variable (respuesta), que es con la que vamos hacer la validacion si debemos seguir, y seguir ejecutando nuestro ciclo para que los usuarios respondan bien.
...........................
```js

let respuesta;
undefined

while (respuesta == '4'){

}

```
............................
 Dentro de este ciclo estamos haciendo la pregunta como respuesta la primera vez que lo ejecutemos, esta no es correcta por que 4 no es la respuesta, niciquiera esta inizializada aun, en tonces vamos a entrar al ciclo por primera vez.

 esta sera la pregunta..
............................
 ```js
 
 let pregunta = prompt('Cuanto es 2 + 2?')

```
............................

Esta funcion (prompt) nos va a devolver un resultado, sea lo que los usuarios escriban dentro de ese (prompt), y dependiendo de la respuesta que nos den, esa respuesta se la vamos a asignar a la variable que esta por fuera de nuestro ciclo, para que en la siguiente ejecucion de nuestro ciclo volvamos hacere la validacion.

Recordemos en los ejercicios pasados en uno de los while que hicimos, la condicion era while (i >= 2) si (i) es mayor o igual a 2, esta seria la condicion para que se ejecute la validacion de dicho bloque de codigo, este es un condicional.

```js

(i >= 2) 

```
Si este condicional se cumple ejecutamos el bloque de codigo dentro de nuestro ciclo,  si no se cumple, lo dejamos de ejecutar.

Vovemos a nuestro ejemplo, la condicion para que se ejecute mi condicional, (No debe ser la respuesta correcta !=), se escucha diferente verdad, osea,
para que se ejecute este bloque de codigo una y otra vez, 

```js
{
    let pregunta = prompt('Cuanto es 2 + 2?')
    respuesta =pregunta;
}
```

Los usuarios deben tener una respuesta incorreta, cuando la respuesta si sea correcta, debemos de dejar de ejecutar este bloque de codigo

```js
while (respuesta != '4') {
    let pregunta = prompt('Cuanto es 2 + 2?')
    respuesta =pregunta;
}
```

Y cuando deberia dejar de ejecutar este bloque de codigo? cuando la respuesta no sea correcta y no querramos seguirle preguntando.

Entonces la pregunta debe ser, respuesta es diferente a cuatro.
```js
(respuesta != '4')
```
esto es lo que significa este pequeño bloque de codigo.

Entonces ejecutemos este bloque de codigo y miremos que nos devuelve.

............................
```js
let respuesta;
undefined
while (respuesta != '4') {
    let pregunta = prompt('Cuanto es 2 + 2?')
    respuesta = pregunta;
}

'4'

```
............................

Como definimos que era cuatro en el cuadro de respuesta, termina el ciclo, no se ejecuta mas, si ponemos una respuesta incorretacta, esto seguiria corriendo asta que coloquemos la respuesta correcta.




## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

(Respuesta)

* Es una lista de elementos.

```js

const array = [1, 'Hola', true, false];

```

- ¿Qué es un objeto?

(Respuesta)

* Es una lista de elementos, PERO cada elemnto tiene un nombre clave. 
No solamente podemos guardar los elementos en la lista, si no que tambien podemos darle un nombre clave a cada elemento, para que cuando querramos buscar alguno de estos elementos, no tengamos que buscarlo por su posicion de si es el primero, o el segundo, etc

Si no que a cada uno le damos un nombre, y este nombre sera el que nos ayude a encontrar ese valor, de esta manera.

```js

const obj = {
    nombre: "Lehder",
    edad: 45,
};

```


- ¿Cuándo es mejor usar objetos o arrays?

(Respuesta)

* Como ya lo habiamos visto
antes, las listas nos deja guardar elementos y ya.

Cuando un elemento no es espesial por si solo, si no que todo lo que hagamos para un elemento y lo vamos hacer en todo el resto de elementos tambien, si ese es el caso, puede valer la pena utlizar un Array.
(La regla se puede incumplir).

* Pero si necesitamos hacer cosas distintas, o guardar informacion con un nombre, y ese nombre es importante, vale la pena utilizar los Objetos.


- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

(Respuesta)

* si. Los Arrays pueden guardar objectos, Y los objectos pueden guardar arrays en sus propiedades.
Por ejemplo dentro de un Objeto.


```js

const obj = {
    nombre: "Lehder",
    edad: 45,
    comidasFavoritas: ["Pollo frito", "Vegetales"]
};

```

* Dentro de un Array.

```js

const array = [1, "rojo", true, false, { nombre: "Lehder", edad: 45}];

```


### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

(Respuesta)
.........................









.......
```js

function imprimirArray(cualquiercosa) {
    console.log(cualquiercosa[1])
}
undefined
imprimirArray(["Lehder", "Caterine", "Venus", "Rouse"])
VM1722:2 Caterine
undefined

```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

(Respuesta)

Para esto yo podria hacerlo de la siguiente manera.
```js

console.log(["Juanita", "Rigoberto", "Natilla"])

(3) ["Juanita", "Rigoberto", "Natilla"]

```

Pero esto no es lo que me estan poidiendo, lo que yo debo hacer es traer cada elemento, uno por uno.

Lo que debo hacer es hacer una function colacarle un nombre, y esta tendra un arreglo por parametro.

Para hacerle un arreglo, hay varias formas de trabajar.

Podriamos hacer un Ciclo, para que nos de un Numero, 
que el Ciclo se termine de ejecutar, es que nuestro arreglo se termine, cuando el Ciclo se ejecute tres veces, si es que tenemos tres objectos, y que nuestra variable (i) sea (1, 2, 3) o la cantidad de numeros que sean necesarios, asta llegar a esa cantidad de elementos y hay termine nuestro Ciclo.

Es decir vamos acrear un Ciclo for, y nos debemos preguntar, cuantas veces se debe ejecutar (i)?
Y aque numero debe de llegar para que no se ejecute mas?

vamos hacer un parentesis. 
(Resulta que todos los arreglos tienen una propiedad que se llama (length) Es decir que si entramos a cualquier Array y con un punto entramos a su propiedad nos va adecir cuantos elementos tiene dicho Array, por ejemplo.

```js

console.log(["Juanita", "Rigoberto", "Natilla"].length)

3
undefined

```
No nos imprimio cada uno de los elementos del Array, si no que nos inprimio la cantida de elementos que hay en el Array

Justo esto es lo que necesitamos 

```js

console.log(["Juanita", "Rigoberto", "Natilla"])
(3) ['Juanita', 'Rigoberto', 'Natilla']

undefined

console.log(["Juanita", "Rigoberto", "Natilla"].length)
3

undefined

function imprimirElemento(cualquiercosa) {
    for (let i = 0; i < cualquiercosa.length; i++)
}

```
Con esto le estamos diciendo a la variable que no puede superar esta longitud, cuando llegue o la supere, deberiamos de parar de ejecutar nuestro bloque de codigo.

Ahora para acabar con este bloque, debemos de poner un console.log de nuestro arreglo, console.log([]) 
Vamos a inprimir alguna posicion, no sabemos cual, si la 1, si la 0, si la 2.
Por que esta [i] arranca en cero, pero va a terminar en lo que tenga que terminar, para darnos una por una la posicion d nuestro arreglo.

```js

console.log(["Juanita", "Rigoberto", "Natilla"])
VM79:1 (3) ['Juanita', 'Rigoberto', 'Natilla']

undefined

console.log(["Juanita", "Rigoberto", "Natilla"].length)
3

undefined

function imprimirElemento(cualquiercosa) {
    for (let i = 0; i < cualquiercosa.length; i++) {
        console.log(cualquiercosa[i])
    }
}
undefined

imprimirElemento(["Juanita", "Rigoberto", "Natilla"])

undefined

Juanita
Rigoberto
Natilla
undefined

```
Observemos aqui, que no nos inprimio el arreglo conpleto, si no que nos inprimio uno por uno, esto esta bien, pero que pasaria si nosotros en vez de decirle que ( i sea menor <), le decimos que sea ( <= ) menor o igual a....

Si volvemos a ejecutar.

```js

console.log(["Juanita", "Rigoberto", "Natilla"])
VM79:1 (3) ['Juanita', 'Rigoberto', 'Natilla']

undefined

console.log(["Juanita", "Rigoberto", "Natilla"].length)
3

undefined

function imprimirElemento(cualquiercosa) {
    for (let i = 0; i <= cualquiercosa.length; i++) {
        console.log(cualquiercosa[i])
    }
}

undefined

imprimirElemento(["Juanita", "Rigoberto", "Natilla"])

Juanita
Rigoberto
Natilla
undefined
undefined

```
Notemos aqui que nos a devuelto dos (undefined), el primero es por que ya por defecto JavaScript tyrata de ejecutar lo que sea que retorne nuestra funcion, y como no retorno nada, nos dice, undefined.
Ahora por que el otro undefined?
Esto fue por que como pusimos el (<=) menor o igual, nuestro Ciclo se ejecuto una vez mas y cuando (i) ya era 3, que es la cantidad de elementos que tiene nuestro Array, intento entrar al console.log de Array en la pocicion 3, y cocmo comenzamos a contar en cero, ya no es a pocicion 3, el tercer elemento es la pociccion 2, recordemos que la pocicon 0 es la 1, la 1 es la 2, y la 2 es la 3.
por eso nos arrojo un undefined.

Por esta razon es que cuando trabajamos con Ciclo y Arrays, no debemos hacer (<=) menor o igual, si no, (<) menor y ya, o restarle uno a, en este caso ( cualquiercosa.length )para que el indice de nuestra variable entre a la pocicion correcta de nuestros Arrays.


### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

(Respuesta)

Para esta pregunta nos vamos a servir de un ejemplo que teniamos antes.

```js

const obj = {
    nombre: 'Fulanito ',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'Vegetales'],
};

undefined
obj
{nombre: 'Fulanito ', edad: 3, comidasFavoritas: Array(2)}

```

Si nosotros tomamos todo el objecto completo, por suspuesto que no lo inprime todo completo con todas sus propiedades, pero el ejercisio no nos esta pidiendo esto.
Lo que el ejercicio nos esta pidiendo es que en una linea inprima el nombre, en otro la edad, en otra las comidas etc.

La respuesta es mas compleja que con los arreglos, como podemos imaginar, como cada una de las propiedades de nuestro objecto tiene un nombre, pues podemos entrar a cada una de ellas con el nombre de su propiedad, por ejemplo.

obj. nombre
obj. edad
obj. comidasFavoritas

Todo esto funciona, pero si hacemos obj[] y tratamos de entrar a su primer elemento
obj[0]
no nos dice nada mas que undefined
si entramos al segundo con el uno.
obj[1]
undefined
tampoco nos dice nada, por que?
Por que nuestro objecto, lo que esta tratando de encontrar es que el nombre de nuestras propiedades, y como no hay ningun nombre clave que este guardadndo un valor con el nombre, o con la llave clave, por esto nos esta devolviendo undefined.
Y en el curso basico de JavaScript no lo vimos, y esto requeria de bastante investigacion, en tonces decidimos hacer lo siguiente.

Vamos por ejemplo a Google, y debemos preguntarnos.

que queremos preguntarle a SanGoogle?

Por ejemplo de muchos que pueden haber, es convertir en un Array, todas las propiedades de nuestro Objecto, tenemos que deirle a nuestro objecto que se convierta en un Array y que cada una de sus elemntos sea las proìedades de nuestro Objecto, como aremos esto?

Vamos a Google y le preguntamos.

(Javascript como convertir objecto en Array)

Y hay una pagina muy buena para esto.

developer.mozilla.org

Fijemonos que esta nos arroja una respuesta muy curiosa.

Object.values()

Y esta es una funcion especial de JavaScript, que nos ayuda a crear un Array con cada uno de los valores, no de los nombres claves, si no de los valores de un Objecto, lo que nos dice es que debemos de llamar a object.values() y entre sus parentecis (recordemos que esto es una funcion), debemos enviarle el nombre de nuestro objecto, en tonces

Vamos a llamar 
Object.values()
y dentro ponemos el objeto que en eeste caso era (obj)
Object.values(obj)

```js

const obj = {
    nombre: 'Fulanito ',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'Vegetales'],
};
undefined
obj
{nombre: 'Fulanito ', edad: 3, comidasFavoritas: Array(2)}

Object.values(obj)
(3) ['Fulanito ', 3, Array(2)]

```


Fijemosnos en lo que nos devolvio, nos devolvio un arreglo, con cada uno de los valores de nuestro obcjeto

```js

Object.values(obj)
(3) ['Fulanito ', 3, Array(2)]0: "Fulanito "1: 32: (2) ['Pollo frito', 'Vegetales']length: 3[[Prototype]]: Array(0)

```
Nos devolvio tal cual el nombre, la edad, y comidas favoritas, el nombre es un String, la edad un Numero, y comidas favoritas un Arreglo.

Ahora si tratamos este Object.value() como un arreglo, si hacemos esto

```js

const arr = Object.values(obj)

```
 Si guardamos lo que nos devlovio Object.values(obj), en una variable, esta variable ya es una Array, y este Array podemos iterarlo, asi como hicimos con nuestra funcion anterior, osea esta.

```js

function imprimirElemento(cualquiercosa) {
    for (let i = 0; i <  cualquiercosa.length; i++) {
        console.log(cualquiercosa[i])
    }
}

 ```

 A este vamos hacerle algunos cambios, vamos a agregarle (Objeto) al final para que se entienda que es otra funcion, en los parametros ya no vamos a recibir un arreglo, si no un objeto,y lo que vamos hacer para que este codigo siga funcionando, es que vamos a crearle una variable con el nombre (arr) de Array y le vamos a decir que sea igual = a Object.values de ese parametro (obj) que estabamos recibiendo antes, como esto ya es un arreglo, nosotros podemos entrar a su primera, segunda, o tercera pocicion dependiendo del indixe y ya funcionaria comun y corriente.

 En tonces vamos a la consola y vamos a llamar esta variable

 imprimirElementoObjecto(obj)

```js

const obj = {
    nombre: 'Fulanito ',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'Vegetales'],
};

undefined

function imprimirElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i <  arr.length; i++) {
        console.log(arr[i])
    }
}

undefined

imprimirElementoObjeto(obj)
Fulanito 
3
(2) ['Pollo frito', 'Vegetales']
0
: 
"Pollo frito"
1
: 
"Vegetales"
length
: 
2
[[Prototype]]
: 
Array(0)

undefined

 ```

Fijemosno ahora que ya no nos inprimio ya no todo el objecto, si no, elemento, por elemento.

Cada uno de los elementos, de nuestro objecto, y esto fue gracias a ( Object.value ), y asi como este hay mucho mas funciones



## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!
