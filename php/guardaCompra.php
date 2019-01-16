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

		$query3 = "UPDATE Producto_suple SET cantidadProducto =cantidadProducto-'$cantidad' WHERE idProducto='$idProducto' and cantidadProducto > 0";
		$rs3 = mysqli_query($conn,$query3);

		if($rs && $rs3){
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