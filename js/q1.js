
function guardarRespuesta(respuesta) {
    let page = 1
    localStorage.setItem("progreso1", page);
    localStorage.setItem("pregunta1", respuesta);
    window.location.href = "pregunta2.html";
    pagina++;
}
function guardarRespuesta2(respuesta) {
    let page = 2;
    localStorage.setItem("progreso2", page);
    localStorage.setItem("pregunta2", respuesta);
    window.location.href = "pregunta3.html";
    pagina++;
}
function guardarRespuesta3(respuesta) {
    let page = 3
    localStorage.setItem("progreso3", page);
    localStorage.setItem("pregunta3", respuesta);
    window.location.href = "pregunta4.html";
    pagina++;
}
function guardarRespuesta4(respuesta) {
    let page = 4
    localStorage.setItem("progreso4", page);
    localStorage.setItem("pregunta4", respuesta);
    window.location.href = "pregunta5.html";
    pagina++;
}
function guardarRespuesta5(respuesta) {
    let page = 5
    localStorage.setItem("progreso5", page);
    localStorage.setItem("pregunta5", respuesta);
    window.location.href = "pregunta6.html";
    pagina++;
}
function guardarRespuesta6(respuesta) {
    let page = 6
    localStorage.setItem("progreso6", page);
    localStorage.setItem("pregunta6", respuesta);
    window.location.href = "pregunta7.html";
    pagina++;
}
function guardarRespuesta7(respuesta) {
    let page = 7
    localStorage.setItem("progreso7", page);
    localStorage.setItem("pregunta7", respuesta);
    window.location.href = "pregunta8.html";
    pagina++;
}
function guardarRespuesta8(respuesta) {
    let page = 8
    localStorage.setItem("progreso8", page);
    localStorage.setItem("pregunta8", respuesta);
    window.location.href = "resultados.html";
}

function verficar() {
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
        window.location.href = '../index.html';
    }
}