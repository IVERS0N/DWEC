function guardar(){
    var hora_lunes = document.getElementById("lunes");
    localStorage.setItem("lunes", hora_lunes);

    var hora_martes = document.getElementById("martes");
    localStorage.setItem("martes", hora_martes);

    var hora_miercoles = document.getElementById("miercoles");
    localStorage.setItem("miercoles", hora_miercoles);

    var hora_jueves = document.getElementById("jueves");
    localStorage.setItem("jueves", hora_jueves);

    var hora_viernes = document.getElementById("viernes");
    localStorage.setItem("viernes", hora_viernes);

    var hora_sabado = document.getElementById("sabado");
    localStorage.setItem("sabado", hora_sabado);

    var hora_domingo = document.getElementById("domingo");
    localStorage.setItem("domingo", hora_domingo);
}