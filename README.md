# Entrega Final del curso JavaScript comision 47060

## Actializacion
TENIENDO EN CUENTA LA PRESIMA DE ALUMNOS, SE CREO UN SISTEMA A BASE DE LOS TEMAS VISTOS EN LAS CLASES.
EL OBJETIVO DE ESTA ENTREGA FINAL ES DIFICIL EL CODIGO QUE SE HIZO EN LAS ENTREGAS ANTERIORES Y CONSOLIDAR TODO LO APRENDIDO EN CLASE EN UNA PAGINA FUNCIONAL.

## CONCEPTO E IDEA DEL CODIGO
-A DIFERENCIA DE LA PRIMERA PRE ENTREGA ESTE TRABAJO PRETENDE SIMULAR UN SISTEMA DE GESTION DE ALUMNOS QUE SEA SIMPLE INTERACTIVO Y MINIMAMENTE INTUITIVO PARA EL USUARIO.
-PARA ESTO SE INTENTO MINIMALIZAR LO MAS POSIBLE EL CODIGO HTML Y CSS, A SU VEZ PROFUNDIZAR EN EL CODIGO JS
-EL SISTEMA CONSISTE EN UNA LISTA DE ALUMNOS EL CUAL SE PUEDE OBSERVAR NOMBRE, APELLIDO, LEGAJO Y EDAD
-EN EL MISMO SE PRODRA BUSCAR, FILTRAR, ELIMINAR Y AGREGAR UN ALUMNO.
- AL MOMENTO DE BUSCAR SE ENCONTRARA Y MOSTRARA EN LA PAGINA LA PRIMERA BUSQUEDA QUE ENCUENTRE
- AL MOMENTO DE FILTRAR SE ENCONTRARA Y MOSTRARA TODOS LOS ALUMNOS QUE TENGAN COICIDENCIA EN LO BUSCADO
- EN EL APARTADO ELIMINAR SIMPLEMENTE SE PODRA ELIMINAR UN ALUMNO DE LA LISTA, SI O SI POR LEGAJO
- EN EL APARTADO AGREGAR SE PODRA AGREGAR UN NUEVO ALUMNO A LA LISTA, EL MISMO PODRA CONTAR CON LOS DATOS NOMBRE, APELLIDO, EDAD Y TENDRA COMO OBLIGATORIO EL DATO LEGAJO.
## A SABER DEL CODIGO

AL MOMENTO DE CARGAR EL CODIGO SE EJECUTARA UN ARCHIVO JSON GUARDADO EN LA CARPETA CLASSES EL CUAL CONTIENE LA LISTA DE ALUMNOS, EL MISMO SERA CARGADO EN EL LOCAL STORAGE AL MOMENTO DE INICIAR LA PAGINA SI Y SOLO SI NO EXISTE YA.
LA LLAMADA DEL ARCHIVO JSON AL CODIGO SE UTILIZA UN FETCH QUE ACCIONA UNA PROMESA UTILIZANDO ASYNC Y AWAIT Y A SU VEZ UTILIZA TRY Y CATCH PARA DAR SOLUCION COLOCANDO UN CARTEL QUE HAY UN ERROR(UTILIZANDO UNA LIBRERIA) SI EL LINKEO DEL ARCHIVO JSON POR ALGUNA RAZON NO SE CARGA.

DESPUES SE CARGARA UNA FUNCION CLICKINFO LA CUAL ESTA PARA CREAR UN ESPACIO EN LA PAGINA QUE BRINDA INFORMACION AL USUARIO DE COMO USAR EL SISTEMA Y QUE ES LO QUE PUEDE LLEGAR A HACER EL MISMO.
EL MISMO TIENE INTERACTIVIDAD CON EL DOM Y EVENTOS PARA IMPRIMIR EN LA PAGINA LA INFORMACION

APARTE DE LO ANTES MECIONADO EL CODIGO TIENE EN CADA ACCION, COMO GUARDAR UN NUEVO ALUMNO, BORRAR, BUSCAR O FILTRAR UN ALUMNO. AVISOS DE QUE ES LO QUE PASO AL MOMENTO DE ACCIONAR LA PAGINA. LO MISMO SE MUESTRA UTILIZANDO UNA LIBRERIA.

TODOS LOS PROBLEMAS QUE PUEDEN LLEGAR A OCURRIR SON AVISADOS O SOLVENTADOS INICIANDO UNA LIBRERIA QUE UTILIZA CARTELES LOS CUALES FUNCIONAN PARA DAR AVISO AL USUARIO DE QUE HUBO UN ERROR AL UTILIZAR EL SISTEMA.



# Pre entrega 3 del curso JavaScript comision 47060

## Actualizacion
TENIENDO EN CUENTA LA PREMISA DE ALUMNOS SE CREO UN SISTEMA A BASE DE LOS TEMAS VISTOS EN LAS CLASES.
EL OBJETIVO DE ESTA PRE ENTREGA ES DEFINIR EL CODIGO QUE SE HIZO EN LA ENTREGA ANTERIOR CONECTANDOLO CON DOM, EVENTOS, JSON Y STORAGE. PARA TENER UNA EXPERIENCIA MAS INTERACTIVA CON EL HTML.

# Pre entrega 2 del curso JavaScript comision 47060

## Actualizacion
TENIENDO EN CUENTA LA PREMISA DE ALUMNOS SE CREO UN SISTEMA A BASE DE LOS TEMAS VISTOS EN LAS CLASES POSTERIORES A FIN DE AGREGAR DICHO CONTENIDO AL CODIGO, SE AGREGO OBJETOS, ARRAYS Y FUNCIONES DE ORDEN SUPERIOR AL MISMO.<br>

SE PENSÓ DISEÑAR EL MISMO PROPONIENDO UN SISTEMA DE 4 OPCIONES PRINCIPALES<br><br>
1 BUSCAR ALUMNO<br>
2 FILTRAR ALUMNO<br>
3 ELIMINAR ALUMNO<br>
4 AGREGAR ALUMNO<br><br>

PARA ESTO SE AGREGO UNA LISTA DE ALUMNOS PREVIA A MODO DE EJEMPLO, LA CUAL ESTABA DISEÑADA COMO UNA ARRAY E INTERNAMENTE SEPARADA DE OBJETOS DONDE CONTENIAN LOS ELEMENTOS LOS DATOS DE LOS ALUMNOS.<br>

-PARA LA FUNCION "BUSCAR ALUMNO" SE PENSO UTILIZAR EL METODO FIND() <br>
-PARA LA FUNCION "FILTRAR ALUMNO" SE PENSO UTILIZAR EL METODO FILTER()<br>
-PARA LA FUNCION "ELIMINAR ALUMNO" SE PENSO UTILIZAR EN PRIMERA INSTANCIA UN FOREACH() PARA MOSTRAR LA LISTA DE ALUMNOS CON EL OBJETIVO DE PODER ELEGIR EL LEGAJO DEL ALUMNO A ELIMINAR, LUEGO DE QUE SE TUVIERA EL LEGAJO, SE UTILIZABA FIND() PARA BUSCAR EL OBJETO Y GUARDARLO EN UNA VARIABLE PARA LUEGO OBTENER EL INDICE DEL OBJETO A ELIMINAR UTILIZANDO INDEXOF() Y LUEGO SPLICE(INDICE, 1)<br>
-PARA LA FUNCION "AGREGAR ALUMNO" SE UTILIZO EL METODO PUSH() PIDIENDO INGRESAR POR TECLADO CADA DATO A GUARDAR.<br>



# Pre entrega 1 del curso JavaScript comision 47060

## Consigna
Se solicito armar un simulador interactivo con lo visto en las clases. <br>
-Para ello era necesario usar un algoritmo con un condicional como minimo <br>
-tambien era necesario usar un algoritmo con un ciclo como minimo <br>

## Concepto e idea del código
Como premisa del trabajo vamos a simular que estamos en una clase y necesitamos preguntar cantidad de alumnos y  separar a todos los alumnos menores de edad con los mayores de edad, luego de eso mostrar en pantalla la cantidad de alumnos menores y mayores de edad. (teniendo en cuenta que no puede haber menos de un alumno) <br>

-para esto el código primero preguntará si se conoce la cantidad de alumnos que se encuentran en el aula en el momento <br> 
_se utiliza un condicional para derivar a la opcion correspondiente, si se conoce la cantidad de alumnos se deriva a un ciclo **for**, si no se conoce la cantidad de alumnos se deriva a una ciclo **do-while**_ <br>

### En el caso del for
se solicita la cantidad de alumnos y empezara a pedir las edades que se iran contabilizando dependiendo de lo que se cargue, si es mayor de 18 años o no, luego el resultado se imprimira en pantalla con la cantidad de alumnos mayores y la cantidad de alumnos menores. <br>

### En el caso del Do-While
se cargará la edad del primer alumno considerando que hay por lo menos un alumno en el aula, se cargará la edad del alumno y se ira contabalizando dependiendo lo que se cargue, al final se consulta si todavia hay alumnos para contabilizar. <br>

### A tener en cuenta
_Cada ciclo esta dentro de una funcion para facilidad el llamammiento del mimso dentro de el condicional_ <br>
_en los prompt donde se solicita ingresar numero se utiliza parseInt para convertir el valor a numero entero_ <br>
_en los prompt donde se solicita ingresar un valor string como si o no se utiliza luego trim() para eliminar espacios de mas y toLowerCase() para convertir a minuscula el valor ingresado_ <br>
_los valores en las variables las cuales se imprimen en pantalla estan definidas dentro de una funcion_ <br>
