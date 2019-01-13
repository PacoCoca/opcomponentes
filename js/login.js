$(document).ready(function(){
	$("#nuevoUsuarioForm").submit(function(e) {
		e.preventDefault();
	});
});



function registroNuevoUsuario() {
	var formData = new FormData($('#nuevoUsuarioForm')[0]);

	$.ajax({
		url: "php/crear_usuario.php",
		type: "POST",
		data: formData,
		contentType: false,
		processData: false,
		success: function(respuesta){
			if (respuesta=="correcto"){
				alert("Registro realizado correctamente");
				$('#nuevoUsuarioForm').trigger("reset");
			} else{
				alert("Hay un error en el registro, revise los datos");
			}
		}
	});
}

$(document).ready(function(){
	$("#inicioUsuarioForm").submit(function(e) {
		e.preventDefault();
	});
});

function iniciarSesion() {
	nombre = document.getElementById("correo").value;
	contra = document.getElementById("password").value;
	$.ajax({
		url: "php/iniciar_sesion.php",
		type: "POST",
		data: {correo:nombre, password:contra},
		success: function(respuesta){
			if (respuesta=="correcto"){
				alert("Login realizado correctamente.");
				$('#inicioUsuarioForm').trigger("reset");
				location.href="index.php";
			} else if(respuesta=="usuario"){
				alert("El usuario que ha introducido no existe.");
			} else if(respuesta=="contrasena"){
				alert("La contraseña que ha introducido es incorrecta.");
			}
			else
				alert("Error: " + respuesta);
		}
	});
}
