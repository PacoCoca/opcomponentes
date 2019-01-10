$(document).ready(function(){
	$(".containerPlus").containerize();
});

function openContainer(id) {
	$("#"+id).containerize("open");
}

function cargaProductos(){
	$.ajax({
		url: "php/cargaProductos.php",
		type: "POST",
		success: function(respuesta){
			if(respuesta!="noProductos"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("bodyTableProducto").innerHTML = "";
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<tr>";
					row+="<td>"+fila[0]+"</td>";
					row+="<td>"+fila[1]+"</td>";
					row+="<td>"+fila[2]+"</td>";
					row+="<td>"+fila[3]+"</td>";
					row+="<td>"+fila[4]+"</td>";
					row+="<td>"+fila[5]+"</td>";
					row+="<td>"+fila[6]+"</td>";
					row+="<td><button class='btn-warning'><i class='fa fa-minus'></i></button> <button class='btn-success'><i class='fa fa-edit'></i></button></td>";
					row+="</tr>";
	
					document.getElementById("bodyTableProducto").innerHTML += row;
				}
			}
		}
	});
}

function cargaPromociones(){
	
}

function cargaCatalogo(){
	
}

function cargaProveedores(){
	
}