$(document).ready(function(){

	var message = $("#message"); var email = $("#email"); var name = $("#name");

	$('form').submit(function() {
		$('input[type=submit]').attr('disabled', 'true');
	});

	$('form').submit(function() {
		var boton = $(this).find(':submit');
		boton.attr('disabled', 'true');
		boton.val('process');
	});

	message.on("focusout", function(){
		if($(this).val() == ""){
			message.css({"background": "#FFCECF",
								"border": "2px solid #FF726C"});
			for(var i = 0; i < message.length; i++){
				$(".ok1").remove();
				$(".cancel1").remove();
				message.after('<img class="cancel1" src="img/cancel.png" width="28" height="28">');
				message.attr("placeholder", "You must write a message");
			}
		}
		else{
			message.css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});

			for(var i = 0; i < message.length; i++){
				$(".cancel1").remove();
				$(".ok1").remove();
				message.after('<img class="ok1" src="img/check.png" width="28" height="28">');
			}
		}
	});
	email.on("focusout", function(){
		if($(this).val() == "" || $("#email").val().indexOf("@") == -1 || $("#email").val().indexOf(".") == -1){
			email.css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});

			for(var i = 0; i < email.length; i++){
				$(".ok2").remove();
				$(".cancel2").remove();
				email.after('<img class="cancel2" src="img/cancel.png" width="28" height="28">');
				email.attr("placeholder", "You must write your email");
			}

		}
		else{
			email.css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});

			for(var i = 0; i < email.length; i++){
				$(".cancel2").remove();
				$(".ok2").remove();
				email.after('<img class="ok2" src="img/check.png" width="28" height="28">');
			}
		}
	});
	name.on("focusout", function(){
		if($(this).val() == ""){
			name.css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});

			for( var i = 0; i < name.length; i++){
				$(".ok3").remove();
				$(".cancel3").remove();
				name.after('<img class="cancel3" src="img/cancel.png" width="28" height="28">');
				name.attr("placeholder", "You must write your name");
			}
		}
		else{
			name.css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});

			for(var i = 0; i < name.lenght; i++){
				$(".cancel3").remove();
				$(".ok3").remove();
				name.after('<img class="ok3" src="img/check.png" width="28" height="28">');
			}
		}
	});

	$("#range").on("change", function(){
		$("#count").html(this.value + "€");
	});
});