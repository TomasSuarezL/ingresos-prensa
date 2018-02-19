$(document).ready(function() {

   getEvento();

});

function getEvento() {

    $.get("http://192.168.2.4/sociosapi/api/partido/evento")
    .then(data => {
        let evento = $('.evento-bar');
        
        evento.append(`<div>Evento: ${data.descripcion}</div>`);
        evento.append(`<div>Fecha: ${data.fechaEvento.slice(0,10)}</div>`);
        return $.get(`http://192.168.2.4/sociosapi/api/registros/prensa?fecha=${data.fechaEvento.slice(0,10)}`)
    })
    .then(data => {
        console.log(data);
        $('#ingresos-table').dynatable({
            dataset: {
              records: data
            }
        });
    })
    .catch(err => console.log(err));
}

