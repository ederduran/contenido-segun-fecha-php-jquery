<?php




$now = new date(date_timestamp_get('Y-m-d H:i'));
//hora inicial
$dtA = new date('2013-07-12 17:02'); //inicio del evento
//hora final
$dtB = new date('2013-07-12 17:04'); //cierre del evento
//hora  llegada
//$dtC = new DateTime('08/12/2013 09:00AM');

if ( $now >= $dtA && $now <= $dtB) {
  echo 'Estas a tiempo'; //durante el evento
}
else if ($now < $dtA){
  echo 'Llegas temprano'; //antes del evento
}
else {
	echo 'Llegas tarde'; //despues del evento
}



?>
