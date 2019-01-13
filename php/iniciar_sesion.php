<?php
include 'connection.php';

$correo = $_POST['correo'];
$contrasena = $_POST['password'];

 $buscarUsuario = "SELECT * FROM Usuario WHERE correo = '$correo' ";
 $resultado = mysqli_query($conn,$buscarUsuario);
 $num_filas = mysqli_affected_rows($conn);


 if($num_filas > 0){
 	$extract_pass = mysqli_fetch_assoc($resultado); //obtengo la fila que tiene la info de la contrasena
 	
 	//if(password_verify($contrasena,$extract_pass['pass'])){  asi no devuelve nada porque hay que hacerle un hash antes a la contrasena
 	if($contrasena == $extract_pass['pass']){
 		$nombre = $extract_pass['nombre'];//Coge bien el id.
 		session_start();
    	//$_SESSION['idUsuario'] = $correo;
 		$_SESSION['idUsuario'] = $nombre;
 		//$mensaje = "Login realizado con exito $correo.";
    $mensaje = "Login realizado con exito.";
    echo "correcto";
 	}else{
 		$mensaje = "Introdujo mal la contraseña.";
    echo "contrasena";
 	}
  
  }else{
  	$mensaje = "No existe el usuario.";
    echo "usuario";
  }

?>
