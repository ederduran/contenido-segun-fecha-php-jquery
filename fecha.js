$(document).ready(function(){

	var now = jQuery.now()
	//hora inicial
	var dtA = '1373673003234' //inicio del evento
	//hora final
	var dtB = '1373673072606' //cierre del evento
	

	if ( now >= dtA && now <= dtB) {

		//$("body").html("<p>esto es durante del evento</p>");  //durante el evento
		$('#cambio-btn').attr('href', 'http://www.url.com');
		$('#cambio-btn>button').empty();
		$('#cambio-btn>button').prepend("¡Ve la transmisión de la rifa EN VIVO!");
	}
	else if (now < dtA){

		//$("body").html("<p>esto es antes del evento</p>"); //antes del evento
		$('#cambio-btn').attr('href', '');
		$('#cambio-btn>button').empty();
		$('#cambio-btn>button').prepend("¡Ve la transmisión de la rifa EN VIVO! El 13 de julio a partir de las 10:00 a.m.");
	}
	else {

		//$("body").html("<p>esto es despues del evento</p>"); //despues del evento
		$('#cambio-btn').attr('href', 'http://www.url.com');
		$('#cambio-btn>button').empty();
		$('#cambio-btn>button').prepend("Consulta la lista de ganadores.");
	}



	//$("body").prepend(jQuery.now()); //ver hora
});
