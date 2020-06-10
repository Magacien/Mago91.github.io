// metodo para despues de un tiempo ejecuta una funcion
// window.setTimeout(saludar, 4000) //Este metodo me ayuda a ejecutar una funcion despues de un tiempo establecido

// function saludar() {
//     alert("Feliz cumple Mariano !!!");
// }

// let contador = 1;

// let tiempo = window.setInterval(contar, 1000) // ejecuta una funcion cada ms que le de de parametro por ejemplo 2000ms

// function contar() {
//     document.write(contador + "<br>");
//     contador++;
//     if (contador > 15) {
//         clearInterval(tiempo)
//     }
// }

function crearHora() {
    let fecha = new Date(),
        hora = fecha.getHours(), //accedo al objeto fecha y creo el metodo getHours 
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(), // el numero de dia de la semana
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        anio = fecha.getFullYear();

    //Enviarle al html las variables 




    let pDiaSemana = document.getElementById("diaSemana"), //obtuvimos objetos del DOM
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("anio");

    //ASIGNAR VALORES A LOS OBJETOS DEL HTML

    pDia.innerText = dia;
    pAnio.innerText = anio;

    let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Ocutbre", "Noviembre", "Diciembre"];
    pDiaSemana.innerText = semana[diaSemana];
    pMes.innerText = meses[mes];

    // obtenes los objetos del html

    let pHora = document.getElementById("horas"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos");
    pAmPm = document.getElementById("ampm");

    if (hora >= 12) {
        pAmPm.innerText = "pm";
        hora = hora - 12;
    } else {
        pAmPm.innerText = "am";
    }


    if (segundos < 10) {
        pSegundos.innerText = "0" + segundos;
    } else {
        pSegundos.innerText = segundos;
    }

    if (minutos < 10) {
        pMinutos.innerText = "0" + minutos;
    } else {
        pSegundos.innerText = minutos;
    }
    if (hora < 10) {
        pHora.innerText = "0" + hora;
    } else {
        pHora.innerText = (hora + 2);
    }

}

window.setInterval(crearHora);