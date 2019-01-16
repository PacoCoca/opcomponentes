<?php

include 'sesion.php';

$idsCantidad = json_decode($_POST['idsCantidad']);

$hoy = date('Y-m-d h:i:s',time());
$sesion = new Cookies();
$user = $sesion->getId();
if($user){
	for ($i=0; $i<sizeof($idsCantidad) ;$i++) {
		$idCatalogo=$idsCantidad[$i][0];
		$query2 = "SELECT idProducto FROM Catalogo_tiene WHERE idCatalogo='$idCatalogo'";
		$rs2 = mysqli_query($conn,$query2);
		$row2 = mysqli_fetch_array($rs2);
		$idProducto = $row2["idProducto"];

		$cantidad=$idsCantidad[$i][1];
		$query = "INSERT INTO compra(fecha, idUsuario, idProducto, cantidad) VALUES('$hoy', '$user', '$idProducto','$cantidad')";
		$rs = mysqli_query($conn,$query);
		if($rs){
			$res = "correcto";
		} else{
			$res = "error";
		}
	}
} else{
	$res="noUsuario";
}
echo $res;

?>