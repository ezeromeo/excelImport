document.addEventListener('DOMContentLoaded', function() {
    const datos = [
        { NIF: "3234242A", Nombre: "Juan", Apellido1: "García", Apellido2: "Martín", Email: "jgarcia@email.es", Estado: "Inscrito", Certifica: "Sí", Finaliza: "Sí", Inicia: "Sí", Baja: "No", TipoDiploma: "Aprovechamiento", FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242A", Nombre: "Lucia", Apellido1: "Rodríguez", Apellido2: "Gómez", Email: "lrodriguez@email.es", Estado: "Inscrito", Certifica: "Sí", Finaliza: "Sí", Inicia: "Sí", Baja: "No", TipoDiploma: "Asistencia", FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242A", Nombre: "Hugo", Apellido1: "González", Apellido2: "Sánchez", Email: "hgonzalez@email.es", Estado: "Inscrito", Certifica: "No", Finaliza: "Sí", Inicia: "No", Baja: "No", TipoDiploma: "Aprovechamiento", FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242A", Nombre: "Paula", Apellido1: "Fernández", Apellido2: "López", Email: "pfernandez@email.es", Estado: "Inscrito", Certifica: "Sí", Finaliza: "Sí", Inicia: "Sí", Baja: "No", TipoDiploma: "Asistencia", FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242A", Nombre: "Mateo", Apellido1: "López", Apellido2: "Fernández", Email: "mlopez@email.es", Estado: "Inscrito", Certifica: "Sí", Finaliza: "Sí", Inicia: "Sí", Baja: "No", TipoDiploma: "Asistencia", FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242A", Nombre: "Valeria", Apellido1: "Sánchez", Apellido2: "Muñoz", Email: "vsanchez@email.es", Estado: "Pendiente Validar", Certifica: "No", Finaliza: "No", Inicia: "No", Baja: "No", TipoDiploma: "Asistencia", FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242A", Nombre: "Pablo", Apellido1: "Pérez", Apellido2: "González", Email: "pperez@email.es", Estado: "Inscrito", Certifica: "Sí", Finaliza: "Sí", Inicia: "Sí", Baja: "No", TipoDiploma: "Aprovechamiento", FechaPreinscripcion: "23/07/2023" },
        { NIF: "3234242A", Nombre: "Ema", Apellido1: "Gómez", Apellido2: "García", Email: "egomez@email.es", Estado: "Inscrito", Certifica: "Sí", Finaliza: "Sí", Inicia: "Sí", Baja: "No", TipoDiploma: "Aprovechamiento", FechaPreinscripcion: "23/07/2023" }
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
                        <td class="d-flex align-items-center justify-content-center"><div class="alumnoEstado">${alumno.Estado}</div></td>
                        <td>${alumno.Certifica}</td>
                        <td>${alumno.Finaliza}</td>
                        <td>${alumno.Inicia}</td>
                        <td>${alumno.Baja}</td>
                        <td>${alumno.TipoDiploma}</td>
                        <td>${alumno.FechaPreinscripcion}</td>
                    </tr>`;
        tbody.innerHTML += fila;
    });

    window.buscarTexto = function() {
        const texto = document.getElementById('busqueda-texto').value.toLowerCase();
        const filas = document.querySelectorAll("#tabla-alumnos tbody tr");
        filas.forEach(fila => {
            const visible = [...fila.children].some(td => td.textContent.toLowerCase().includes(texto));
            fila.style.display = visible ? "" : "none";
        });
    };

    window.leerExcel = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = e.target.result;
            const workbook = XLSX.read(data, {type: 'binary'});
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const emailsNIFs = XLSX.utils.sheet_to_json(sheet, {header: 1})
                                .map(row => row[Object.keys(row)[0]]);
            buscarPorLista(emailsNIFs);
        };
        reader.readAsBinaryString(file);
    };
    

    function buscarPorLista(lista) {
        const filas = document.querySelectorAll("#tabla-alumnos tbody tr");
        filas.forEach(fila => {
            const visible = [...fila.children].some(td => lista.includes(td.textContent));
            fila.style.display = visible ? "" : "none";
        });
    }
});
