<?php  

include 'connection.php';

$marca = $_POST['marca'];


$query="SELECT * FROM Catalogo_tiene WHERE marca='$marca'" ;
$rs = mysqli_query($conn,$query);
$array = array();

if($rs){
	$i=0;
	while($row = mysqli_fetch_array($rs)){
		$array[$i][0]=$row["idCatalogo"];
		$array[$i][1]=$row["precio"];
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