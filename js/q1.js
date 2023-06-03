
function guardarRespuesta(respuesta) {
    localStorage.setItem("pregunta1", respuesta);
    window.location.href = "pregunta2.html";
}
function guardarRespuesta2(respuesta) {
    localStorage.setItem("pregunta2", respuesta);
    window.location.href = "pregunta3.html";
}
function guardarRespuesta3(respuesta) {
    localStorage.setItem("pregunta3", respuesta);
    window.location.href = "pregunta4.html";
}
function guardarRespuesta4(respuesta) {
    localStorage.setItem("pregunta4", respuesta);
    window.location.href = "pregunta5.html";
}
function guardarRespuesta5(respuesta) {
    localStorage.setItem("pregunta5", respuesta);
    window.location.href = "pregunta6.html";
}
function guardarRespuesta6(respuesta) {
    localStorage.setItem("pregunta6", respuesta);
    window.location.href = "pregunta7.html";
}
function guardarRespuesta7(respuesta) {
    localStorage.setItem("pregunta7", respuesta);
    window.location.href = "pregunta8.html";
}
function guardarRespuesta8(respuesta) {
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