$(document).ready(function(){
	$('form').submit(function() {
		$('input[type=submit]').attr('disabled', 'true');
	});
	$('form').submit(function() {
		var boton = $(this).find(':submit');
		boton.attr('disabled', 'true');
		boton.val('process');
	});
	$("#message").on("focusout", function(){
		if($(this).val() == ""){
			$("#message").css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});
			$(".ok1").remove();
			$("#message").focusout($(".cancel1").remove());
			$("#message").after('<img class="cancel1" src="img/cancel.png" width="28" height="28">');
			$("#message").attr("placeholder", "You must write a message");
		}
		else{
			$("#message").css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});
			$('.cancel1').remove();
			$("#message").focusout($(".ok1").remove());
			$("#message").after('<img class="ok1" src="img/check.png" width="28" height="28">');
		}
	});
	$("#email").on("focusout", function(){
		if($(this).val() == "" || $("#email").val().indexOf("@") == -1 || $("#email").val().indexOf(".") == -1){
			$("#email").css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});
			$(".ok2").remove();
			$("#email").focusout($(".cancel2").remove());
			$("#email").after('<img class="cancel2" src="img/cancel.png" width="28" height="28">');
			$("#email").attr("placeholder", "You must write your email");
		}
		else{
			$("#email").css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});
			$(".cancel2").remove();
			$("#email").focusout($(".ok2").remove());
			$("#email").after('<img class="ok2" src="img/check.png" width="28" height="28">');
		}
	});
	$("#name").on("focusout", function(){
		if($(this).val() == ""){
			$("#name").css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});
			$(".ok3").remove();
			$("#mensaje").focusout($(".cancel3").remove());
			$("#name").after('<img class="cancel3" src="img/cancel.png" width="28" height="28">');
			$("#name").attr("placeholder", "You must write your name");
		}
		else{
			$("#name").css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});
			$(".cancel3").remove();
			$("#mensaje").focusout($(".ok3").remove());
			$("#name").after('<img class="ok3" src="img/check.png" width="28" height="28">');
		}
	});
	$("#range").on("change", function(){
		$("#count").html(this.value + "€");
	});
})