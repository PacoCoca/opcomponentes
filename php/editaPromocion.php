<?php
include 'connection.php';

$data = json_decode($_POST['data']);

$query = "UPDATE Anade SET idCatalogo='$data[1]', fechaInicio='$data[2]', fechaFin='$data[3]' WHERE idPromocion='$data[4]'";
$rs = mysqli_query($conn,$query);

if($rs){
	if($rs){
		$query = "UPDATE Promociones SET descuento='$data[0]' WHERE idPromocion='$data[4]'";
		$rs = mysqli_query($conn,$query);
		if($rs){
			echo "correcto";
		} else{
			echo "error";
		}
	} else{
		echo "error";
	}
} else{
	echo "error";
}

?>