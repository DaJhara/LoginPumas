function login() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("clave").value;

    if (user == "userprueba" && password == "Prueba.2023") {
        console.log(user)
        console.log(password)
        alert("Iniciaste Sesión")
        window.location = "home.html";
        
    } else {
        alert("Datos incorrectos")
    }
}