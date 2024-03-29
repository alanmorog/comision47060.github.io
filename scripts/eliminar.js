/*---------------------------------- PRE ENTREGA 3 ----------------------------------*/

//SIGUIENDO CON LA TEMATICA DE ALUMNOS COMO PREMISA VAMOS A ARMAR UN CODIGO QUE INDIQUE 4 OPCIONES,
/*
1 BUSCAR ALUMNO
2 FILTRAR ALUMNOS
3 ELIMINAR ALUMNO
4 AGREGAR ALUMNO
*/

//PARA ESO PREVIAMENTE SE ARMARA UNA LISTA DE ALUMNOS AGREGADOS


//definimos en variables los queryselector

const buscarForm = document.querySelector("#buscar-form");
const opcionInput = document.querySelector("#opcion-input");
const datoInput = document.querySelector("#dato-input");
const objetoEncontrado = document.querySelector("#tbody-buscar");

const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));


const descriptionUso = document.querySelector("#button-info");
const contenedorInfo = document.querySelector("#contenedor-info");

//Creando un fetch a partir de un JSON local usando async y await--------------
const ruta = "../scripts/listaAlumnos.json";
listaAlumnosFlecha(ruta);

//funcion que crea en el page informacion que puede ayudar a entender el sistema al usuario
descriptionUso.addEventListener("click", clickInfoDelete);






if (localStorage.getItem("listaAlumnos") != null) {
    alumnosEnLs.forEach(alumno => {
        const teErre = document.createElement("tr");
        objetoEncontrado.appendChild(teErre);
        const nombreLS = document.createElement("th");
        const printNombre = JSON.stringify(alumno.nombre);
        nombreLS.innerHTML = printNombre.replace(/"/g, '');
        teErre.appendChild(nombreLS);

        const apellidoLS = document.createElement("th");
        const printApellido = JSON.stringify(alumno.apellido);
        apellidoLS.innerHTML = printApellido.replace(/"/g, '');
        teErre.appendChild(apellidoLS);
        const legajoLS = document.createElement("th");
        const printLegajo = JSON.stringify(alumno.legajo);
        legajoLS.innerHTML = printLegajo;
        teErre.appendChild(legajoLS);

        const edadLS = document.createElement("th");
        const printEdad = JSON.stringify(alumno.edad);
        edadLS.innerHTML = printEdad;
        teErre.appendChild(edadLS);
        buscarForm.reset();
    });
}


if (localStorage.getItem("listaAlumnos") != null) {
    buscarForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.legajo == datoInput.value); 
        if (printAlumno == null) {
            Swal.fire({
                icon: 'error',
                title: 'Atención...',
                text: 'El legajo no pertenece a ningun alumno!',
                showConfirmButton: false,
                timer: 3000
            });
            buscarForm.reset();
        }
        else {
            let indiceAlumno = alumnosEnLs.indexOf(printAlumno);
            alumnosEnLs.splice(indiceAlumno, 1);
            const listaAlumnosJSON = JSON.stringify(alumnosEnLs);
            localStorage.setItem("listaAlumnos", listaAlumnosJSON.toLowerCase().trim());
            buscarForm.reset();
            Toastify({
                text: "Se Eliminó a: " + printAlumno.nombre.replace(/"/g, '') + " " + printAlumno.apellido.replace(/"/g, ''),
                duration: 3000,
                className: "info",
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to bottom, #42ab49, #77dd77)",
                }
            }).showToast();
            let limpiarLista = objetoEncontrado.querySelectorAll("tr");
            limpiarLista.forEach(function (limpiarLista) {
                objetoEncontrado.removeChild(limpiarLista);
            })
            alumnosEnLs.forEach(alumno => {
                const teErre = document.createElement("tr");
                objetoEncontrado.appendChild(teErre);
                const nombreLS = document.createElement("th");
                const printNombre = JSON.stringify(alumno.nombre);
                nombreLS.innerHTML = printNombre.replace(/"/g, '');
                teErre.appendChild(nombreLS);

                const apellidoLS = document.createElement("th");
                const printApellido = JSON.stringify(alumno.apellido);
                apellidoLS.innerHTML = printApellido.replace(/"/g, '');
                teErre.appendChild(apellidoLS);

                const legajoLS = document.createElement("th");
                const printLegajo = JSON.stringify(alumno.legajo);
                legajoLS.innerHTML = printLegajo;
                teErre.appendChild(legajoLS);

                const edadLS = document.createElement("th");
                const printEdad = JSON.stringify(alumno.edad);
                edadLS.innerHTML = printEdad;
                teErre.appendChild(edadLS);
                buscarForm.reset();
            });
        }
    });
}
