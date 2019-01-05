<?php

$nombre = filter_input(INPUT_POST, 'nombre');
$contrasena = filter_input(INPUT_POST, 'password');
$correo = filter_input(INPUT_POST, 'correo');
$telefono = filter_input(INPUT_POST, 'telefono');
$direccion = filter_input(INPUT_POST, 'direccion');


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

 $buscarUsuario = "SELECT * FROM Usuario WHERE nombre = '$nombre' ";
 $result = $conn->query($buscarUsuario);
 $count = mysqli_num_rows($result);

 //if($count == 1){
 	//echo "Error:El nombre de usuario ya existe. ";
 	//echo "<a href='index.html'>Por favor escoga otro nombre</a>";

 //}
 //else{

  $sql = "INSERT INTO Usuario (nombre,correo,pass,telefono,direccion)
  VALUES ('$nombre','$correo','$contrasena','$telefono','$direccion')";
  if ($conn->query($sql)){
    //echo "Insertado correctamente";
   //header('Location: login.html/?exito=true');
  	header('Location: modales.html');

  //<a href="login.html/?exito=true">Enlace a página de destino</a>;
  
  }
  else{
    echo "Error: ". $sql ."
". $conn->error;
  }
  $conn->close();
}

?>