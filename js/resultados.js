let conteo = 0
window.onload = () => {
    evaluar()
}
const evaluar = () => {
    let respuestaPregunta1 = localStorage.getItem("pregunta1");
    let respuestaPregunta2 = localStorage.getItem("pregunta2");
    let respuestaPregunta3 = localStorage.getItem("pregunta3");
    let respuestaPregunta4 = localStorage.getItem("pregunta4");
    let respuestaPregunta5 = localStorage.getItem("pregunta5");
    let respuestaPregunta6 = localStorage.getItem("pregunta6");
    let respuestaPregunta7 = localStorage.getItem("pregunta7");
    let respuestaPregunta8 = localStorage.getItem("pregunta8");

    if (
        respuestaPregunta1 == null ||
        respuestaPregunta2 == null ||
        respuestaPregunta3 == null ||
        respuestaPregunta4 == null ||
        respuestaPregunta5 == null ||
        respuestaPregunta6 == null ||
        respuestaPregunta7 == null ||
        respuestaPregunta8 == null
    ) {
        window.location.href = 'index.html';
    }

    // Mostrar las enfermedades correspondientes según las respuestas
    if (respuestaPregunta3 === "Si" && respuestaPregunta8 === "Si") {
        document.getElementById("psicosis").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta1 === "Si" && respuestaPregunta2 === "Si") {
        document.getElementById("maniacoDepresivo").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta7 === "Si") {
        document.getElementById("depresionReactivaEndogena").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta4 === "Si") {
        document.getElementById("suicidio").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta5 === "Si") {
        document.getElementById("neurosis").style.display = "block";
        document.getElementById("ansiedad").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta3 === "Si") {
        document.getElementById("compulsiva").style.display = "block";
        document.getElementById("histerica").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta8 === "Si") {
        document.getElementById("paranoia").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta6 === "Si") {
        document.getElementById("esquizofrenia").style.display = "block";
        conteo++;
    }

    if (conteo <= 0) {
        document.getElementById("mensajeNormal").style.display = "block";
        document.getElementById("mensajeNormal").classList.add("mostrar");
    } else {
        document.getElementById("listaResultados").classList.add("mostrar");
    }
    // Limpiar el localStorage después de mostrar los resultados

}
