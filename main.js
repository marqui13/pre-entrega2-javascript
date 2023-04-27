const formularioinicial = document.getElementById('formularioInicial')
const resultado = document.getElementById('resultado')
document.getElementById('calcular').addEventListener('click', function() {
    formularioinicial.classList.add("hidden")
    resultado.classList.remove("hidden")
    const capital = parseFloat(document.getElementById('capital').value);
    const intereses = parseFloat(document.getElementById('intereses').value) / 100;
    const cuotas = parseInt(document.getElementById('cuotas').value);

    const interesMensual = intereses / 12;
    const cuotaMensual = capital * (interesMensual * Math.pow(1 + interesMensual, cuotas)) / (Math.pow(1 + interesMensual, cuotas) - 1);
    const totalPago = cuotaMensual * cuotas;

    let informacion = `
        <p>Capital: $${capital.toFixed(2)}</p>
        <p>Intereses anuales: ${(intereses * 100).toFixed(2)}%</p>
        <p>Número de cuotas: ${cuotas}</p>
        <p>Cuota mensual: $${cuotaMensual.toFixed(2)}</p>
        <p>Total a pagar: $${totalPago.toFixed(2)}</p>
    `;
    const btnContactarAsesor = document.getElementById("contactarAsesor");
    btnContactarAsesor.classList.remove("hidden")

    document.getElementById('informacion').innerHTML += informacion;

    // Mover la vinculación del evento 'click' aquí
    btnContactarAsesor.addEventListener('click', function() {
        console.log("nuevo")
    });
});
