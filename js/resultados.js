let conteo = 0;

window.onload = () => {
    evaluar();
};

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

    // Mostrar hasta dos trastornos correspondientes según las respuestas
    if (respuestaPregunta1 === "Si" && respuestaPregunta2 === "Si") {
        document.getElementById("trastornoDepresivoMayor").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta1 === "Si" && respuestaPregunta2 === "No") {
        document.getElementById("trastornoBipolar").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta5 === "Si") {
        document.getElementById("trastornoAnsiedad").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta5 === "No" && respuestaPregunta7 === "Si") {
        document.getElementById("trastornoAnsiedadGeneralizada").style.display = "block";
        conteo++;
    }
    if (respuestaPregunta5 === "No" && respuestaPregunta6 === "Si") {
        document.getElementById("trastornoEstresPostraumatico").style.display = "block";
        conteo++;
    }
    if (conteo >= 8) {
        window.location.href = "moreInformation.html";
    }
    if (conteo <= 0) {
        document.getElementById("mensajeNormal").style.display = "block";
        document.getElementById("mensajeNormal").classList.add("mostrar");
    } else {
        document.getElementById("listaResultados").classList.add("mostrar");
    }
    // Limpiar el localStorage después de mostrar los resultados
    localStorage.clear();
};
