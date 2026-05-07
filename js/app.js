const dolor = document.getElementById("dolor");
const valorDolor = document.getElementById("valorDolor");
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

// mostrar valor del range
dolor.addEventListener("input", function(){
    valorDolor.textContent = dolor.value;
});

// enviar formulario
formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;
    const sangre = document.getElementById("sangre").value;

    resultado.innerHTML =
    `
    Encuesta enviada correctamente <br><br>

    Edad: ${edad} años <br>
    Peso: ${peso} kg <br>
    Dolor: ${dolor.value}/10 <br>
    Tipo de sangre: ${sangre}
    `;
});
