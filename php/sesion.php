<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include 'connection.php';

class Cookies{
		private $usuario;

		function __construct(){
			session_set_cookie_params(0);
			session_start();
			if(isset($_SESSION['idUsuario']))
				$this->usuario = $_SESSION['idUsuario'];
			else
				$this->usuario = "";
		}

		function tipoConexion(){
			if($this->usuario!=""){
			$conn = openCon();
			$nombre = $_SESSION['idUsuario'];
			$tipoUsuario = "SELECT * FROM Usuario WHERE nombre = '$nombre' ";
 			$fila = mysqli_query($conn,$tipoUsuario);
 			if (!$fila)
    			die(mysql_error());
    		while ($row = mysqli_fetch_assoc($fila)){
    			$extract_admin = $row['admin'];
 			}
 			//$extract_admin = mysql_fetch_assoc($fila);
 			//echo $resultado ? 'true' : 'false';
			
				//if($_SESSION['idUsuario']!='admin')
				if($extract_admin == false)
					return 1;
				else
					return 0;
			}else
				return 3;
		}

		function obtenerUsuario(){

			return $this->usuario;
		}

		function destruir(){
			session_destroy();
		}
	}

?>