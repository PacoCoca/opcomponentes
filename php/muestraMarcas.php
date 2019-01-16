<?php  

include 'connection.php';

$marca = $_POST['marca'];


$query="SELECT c.*, a.idPromocion, a.fechaInicio, a.fechaFin FROM Catalogo_tiene c LEFT JOIN Anade a ON c.idCatalogo=a.idCatalogo WHERE marca='$marca'" ;
$rs = mysqli_query($conn,$query);
$array = array();
if($rs){
	$i=0;
	while($row = mysqli_fetch_array($rs)){
		$array[$i][0]=$row["idCatalogo"];
		$aux=$row["idPromocion"];
		$precio=$row["precio"];
		$today=date('Y-m-d');
		$fechaInicio=$row["fechaInicio"];
		$fechaFin=$row["fechaFin"];
		if ($aux && $today>$fechaInicio && $today<$fechaFin){
			$query="SELECT descuento FROM Promociones WHERE idPromocion='$aux'";
			$rs2 = mysqli_query($conn,$query);
			$row2 = mysqli_fetch_array($rs2);
			$desc = $row2["descuento"];
			$precio = $precio - $precio*$desc/100;
		}
		
		$array[$i][1]=$precio;
		$array[$i][2]=$row["descripcion"];
		$array[$i][3]=$row["nombre"];
		$array[$i][4]=$row["src"];

		$i++;
	}

	echo json_encode($array);
} else{
	echo "error";
}
?>