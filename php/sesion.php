<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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
				if($_SESSION['idUsuario']!='admin')
					return 1;
				else
					return 0;
			}else
				return 3;
		}

		function obtenerUsuario(){
			//$saludo = "saludo";
			return $this->usuario;
			//return $saludo;
		}

		function destruir(){
			session_destroy();
		}
	}
//FUNCIONA PERFECTO EN CUANTO A SINTAXIS
	//echo "holaholahola";
?>