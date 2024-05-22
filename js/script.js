document.addEventListener('DOMContentLoaded', function () {
    const respuesta = `<select class="form-select" aria-label="Default select example">
                        <option selected>Si</option>
                        <option value="No">No</option>
                       </select>`;

    const diploma = `<select class="form-select" aria-label="Default select example">
                        <option selected>Aprovechamiento</option>
                        <option value="No">Asistencia</option>
                    </select>`
    const datos = [
        { NIF: "3234242A", Nombre: "Juan", Apellido1: "García", Apellido2: "Martín", Email: "jgarcia@email.es", Estado: "Inscrito", Certifica: respuesta, Finaliza: respuesta, Inicia: respuesta, Baja: respuesta, TipoDiploma: diploma, FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242A", Nombre: "Lucia", Apellido1: "Rodríguez", Apellido2: "Gómez", Email: "lrodriguez@email.es", Estado: "Inscrito", Certifica: respuesta, Finaliza: respuesta, Inicia: respuesta, Baja: respuesta, TipoDiploma: diploma, FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242A", Nombre: "Hugo", Apellido1: "González", Apellido2: "Sánchez", Email: "hgonzalez@email.es", Estado: "Inscrito", Certifica: respuesta, Finaliza: respuesta, Inicia: respuesta, Baja: respuesta, TipoDiploma: diploma, FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242B", Nombre: "Paula", Apellido1: "Fernández", Apellido2: "López", Email: "pfernandez@email.es", Estado: "Inscrito", Certifica: respuesta, Finaliza: respuesta, Inicia: respuesta, Baja: respuesta, TipoDiploma: diploma, FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242B", Nombre: "Mateo", Apellido1: "López", Apellido2: "Fernández", Email: "mlopez@email.es", Estado: "Inscrito", Certifica: respuesta, Finaliza: respuesta, Inicia: respuesta, Baja: respuesta, TipoDiploma: diploma, FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242B", Nombre: "Valeria", Apellido1: "Sánchez", Apellido2: "Muñoz", Email: "vsanchez@email.es", Estado: "Pendiente Validar", Certifica: respuesta, Finaliza: respuesta, Inicia: respuesta, Baja: respuesta, TipoDiploma: diploma, FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242C", Nombre: "Pablo", Apellido1: "Pérez", Apellido2: "González", Email: "pperez@email.es", Estado: "Inscrito", Certifica: respuesta, Finaliza: respuesta, Inicia: respuesta, Baja: respuesta, TipoDiploma: diploma, FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242C", Nombre: "Ema", Apellido1: "Gómez", Apellido2: "García", Email: "egomez@email.es", Estado: "Inscrito", Certifica: respuesta, Finaliza: respuesta, Inicia: respuesta, Baja: respuesta, TipoDiploma: diploma, FechaPreinscripcion: "23/07/2023" }
    ];

    const tbody = document.getElementById('tabla-alumnos').getElementsByTagName('tbody')[0];
    datos.forEach(alumno => {
        let fila = `<tr>
                        <td>
                        <div class="form-check d-flex align-items-center justify-content-center">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                        </td>
                        <td>${alumno.NIF}</td>
                        <td>${alumno.Nombre}</td>
                        <td>${alumno.Apellido1}</td>
                        <td>${alumno.Apellido2}</td>
                        <td>${alumno.Email}</td>
                        <td><div class="d-flex align-items-center justify-content-center"><div class="alumnoEstado">${alumno.Estado}</div></div></td>
                        <td>${alumno.Certifica}</td>
                        <td>${alumno.Finaliza}</td>
                        <td>${alumno.Inicia}</td>
                        <td>${alumno.Baja}</td>
                        <td>${alumno.TipoDiploma}</td>
                        <td>${alumno.FechaPreinscripcion}</td>
                    </tr>`;
        tbody.innerHTML += fila;
    });

    window.procesarEntrada = function (event) {
        if (event.keyCode === 13) {
            buscarTexto();
        }
    };

    // window.buscarTexto = function () {
    //     const texto = document.getElementById('busqueda-texto').value;
    //     const filas = document.querySelectorAll("#tabla-alumnos tbody tr");


    //     if (texto.trim() === '') {
    //         filas.forEach(fila => fila.style.display = "");
    //         return;
    //     }


    //     const segmentos = texto.split(/\s+/).filter(segmento => segmento !== '');
    //     let mapaNIFs = new Map();
    //     let nifActual = null;

    //     segmentos.forEach(segmento => {
    //         if (segmento.includes('@')) {

    //             if (mapaNIFs.has(nifActual)) {
    //                 mapaNIFs.get(nifActual).push(segmento);
    //             } else {
    //                 mapaNIFs.set(nifActual, [segmento]);
    //             }
    //         } else {

    //             nifActual = segmento;
    //             if (!mapaNIFs.has(nifActual)) {
    //                 mapaNIFs.set(nifActual, []);
    //             }
    //         }
    //     });


    //     const busquedas = Array.from(mapaNIFs.keys()).map(nif => {
    //         const emails = mapaNIFs.get(nif).join(', ');
    //         return `${nif}; ${emails}`;
    //     });


    //     filas.forEach(fila => fila.style.display = "none");
    //     busquedas.forEach(busqueda => {
    //         const [nif, emailsString] = busqueda.split(/\s*;\s*/);
    //         const emails = emailsString.split(/\s*,\s*/);
    //         filas.forEach(fila => {
    //             const emailCelda = fila.children[5].textContent.toLowerCase();
    //             const nifCelda = fila.children[1].textContent.toLowerCase();
    //             if (nifCelda.includes(nif.toLowerCase()) && emails.some(email => emailCelda.includes(email.toLowerCase()))) {
    //                 fila.style.display = "";
    //             }
    //         });
    //     });
    // };
    window.buscarTexto = function() {
        const texto = document.getElementById('busqueda-texto').value;
        const filas = document.querySelectorAll("#tabla-alumnos tbody tr");
    
        if (texto.trim() === '') {
            filas.forEach(fila => fila.style.display = "");
            return;
        }
    
        const busquedas = texto.split(/\s+|\n/).filter(term => term !== '').map(term => term.toLowerCase());
    
        filas.forEach(fila => {
            const nifCelda = fila.children[1].textContent.toLowerCase();
            const emailCelda = fila.children[5].textContent.toLowerCase();
            const mostrar = busquedas.some(busqueda => busqueda === nifCelda || busqueda === emailCelda);
    
            fila.style.display = mostrar ? "" : "none";
        });
    };
});
