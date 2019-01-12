<?php
include 'connection.php';

$data = json_decode($_POST['data']);

$query = "INSERT INTO Promociones(descuento) VALUES('$data[0]')";
$rs = mysqli_query($conn,$query);
if($rs){
	$query = "INSERT INTO Anade(fechaInicio,fechaFin,idCatalogo, idPromocion) VALUES('$data[2]', '$data[3]','$data[1]', LAST_INSERT_ID())";
	$rs = mysqli_query($conn,$query);
	if($rs){
		echo "correcto";
	} else{
		echo "error";
	}
} else{
	echo "error";
}

?>