$(document).ready(function(){
	$(".containerPlus").containerize();
});

function openContainer(id) {
	$("#"+id).containerize("open");
}