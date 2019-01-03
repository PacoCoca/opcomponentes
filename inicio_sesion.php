
<script type="text/javascript">
	function funcionAlerta(alerta){
		alert(alerta);
	}
</script>
<?php

$contrasena = filter_input(INPUT_POST, 'password');
$correo = filter_input(INPUT_POST, 'correo');
//$nombre = filter_input(INPUT_POST, 'nombre');


$dbhost = "localhost";
$db = "test";
$user = "root";
$clave = "";

$conn = new mysqli($dbhost,$user,$clave,$db) or die("Conexion fallida: %s\n". $conn -> error);

if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
}
else{

 $buscarUsuario = "SELECT * FROM Usuario WHERE correo = '$correo' ";
 $resultado = $conn->query($buscarUsuario);
 //$num_filas = mysqli_num_rows($resultado);
 $num_filas = mysqli_affected_rows($conn);


 if($num_filas > 0){
 	$extract_pass = mysqli_fetch_assoc($resultado); //obtengo la fila que tiene lainfo de la contrasena
 	
 	//if(password_verify($contrasena,$extract_pass['pass'])){  asi no devuelve nada porque hay que hacerle un hash antes a la contrasena
 	if($contrasena == $extract_pass['pass']){
 		session_start();
    $_SESSION['idUsuario'] = $correo;
 		//$_SESSION['idUsuario'] = $extract_pass['idUsuario'];
 		//$var = $extract_pass['idUsuario'];
 		$nombre = $extract_pass['nombre'];//Coge bien el id.
 		$mensaje = "Login realizado con exito $correo.";
    echo'<script type="text/javascript">funcionAlerta("'.$mensaje.'");window.location.href="index2.php"</script>';
 	}else{
 		$mensaje = "Introdujo mal la contraseña.";
    echo'<script type="text/javascript">funcionAlerta("'.$mensaje.'");window.location.href="login.html"</script>';
 	}
 	//echo "Error:El nombre de usuario ya existe. ";
 	//echo "<a href='index.html'>Por favor escoga otro nombre</a>";
  
  }else{
  	$mensaje = "No existe el usuario $correo";
    echo'<script type="text/javascript">funcionAlerta("'.$mensaje.'");window.location.href="login.html"</script>';
  }

  $conn->close();
  //echo'<script type="text/javascript">funcionAlerta("'.$mensaje.'");window.location.href="index.php"</script>';
  //header('Location: index.php');
  //header("index.php?user=$correo");
  //header('Location: index.php?user='.$correo);
}




?>