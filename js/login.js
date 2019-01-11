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