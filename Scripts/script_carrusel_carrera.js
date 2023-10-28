// Espera a que la página esté completamente cargada antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al botón por su ID
    const boton = document.getElementById("action-button");
    
    // Define la función que se ejecutará al hacer clic automáticamente
    function autoClick() {
        boton.click(); // Simula un clic en el botón
    }
    
    // Establece un intervalo para llamar a la función autoClick cada 2 segundos (2000 ms)
    const intervalo = setInterval(autoClick, 10000);
    
});