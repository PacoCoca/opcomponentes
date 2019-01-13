<?php  

include 'connection.php';

$query="SELECT * FROM Usuario";
$rs = mysqli_query($conn,$query);
$array = array();

if($rs){
	$i=0;
	while($row = mysqli_fetch_array($rs)){
		$array[$i][0]=$row["idUsuario"];
		$array[$i][1]=$row["nombre"];
		$array[$i][2]=$row["correo"];
		$array[$i][3]=$row["pass"];
		$array[$i][4]=$row["telefono"];
		$array[$i][5]=$row["direccion"];
		$array[$i][6]=$row["admin"];
		$i++;
	}

	echo json_encode($array);
} else{
	echo "error";
}
?>