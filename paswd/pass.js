function verificarContrasena() {
    var contrasenaIngresada = document.getElementById("password").value;
    // Aquí deberías comparar la contraseña ingresada con la que desees
    if (contrasenaIngresada === "ProjectX") {
        // Redirigir a otra página si la contraseña es correcta
        window.location.href = "projectx.html";
    } else {
        // Mostrar un mensaje de error si la contraseña es incorrecta
        document.getElementById("mensaje").textContent = "Error: Contraseña incorrecta";
    }
}