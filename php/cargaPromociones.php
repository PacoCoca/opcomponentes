<?php  

include 'connection.php';

$query="SELECT P.idPromocion, P.descuento, A.fechaInicio, A.fechaFin, A.idCatalogo FROM Promociones P INNER JOIN Anade A WHERE P.idPromocion=A.idPromocion ORDER BY A.fechaFin DESC, A.fechaInicio DESC";
$rs = mysqli_query($conn,$query);
$array = array();

if($rs){
	$i=0;
	while($row = mysqli_fetch_array($rs)){
		$array[$i][0]=$row["descuento"];
		$array[$i][1]=$row["idCatalogo"];
		$array[$i][2]=$row["fechaInicio"];
		$array[$i][3]=$row["fechaFin"];
		$array[$i][4]=$row["idPromocion"];
		$i++;
	}

	echo json_encode($array);
} else{
	echo "error";
}
?>