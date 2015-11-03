var area = $("textarea");
var email = $("input[type='email']");
var text = $("input[type='text']");

function limpiarArea(){
    $("#ok1").remove();
    $("#cancel1").remove();
    $("#bad-message").remove();
}

area.on("focusout", function(){
        if($(this).val() == ""){
                area.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                limpiarArea();
                area.after('<img id="cancel1" src="img/cancel.png" width="28" height="28">');
                area.attr("placeholder", "You must write an email");
                area.before('<p id="bad-message">! Bad message</p>');
                $("#bad-message").css({"color": "red",
                    "margin-bottom": "0"});
        }
        else{
                $("textarea").css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                limpiarArea();
                $("textarea").after('<img id="ok1" src="img/check.png" width="28" height="28">');
        }
    });

    function limpiarEmail(){
        $("#ok2").remove();
        $("#cancel2").remove();
        $("#bad-email").remove();
    }

    email.on("focusout", function(){
        if($(this).val() == "" || email.val().indexOf("@") == -1 || email.val().indexOf(".") == -1){
                email.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
               limpiarEmail();
                email.after('<img id="cancel2" src="img/cancel.png" width="28" height="28">');
                email.attr("placeholder", "You nust write your email");
                email.before('<p id="bad-email">! Bad E-mail</p>');
                $("#bad-email").css({"color": "red",
                    "margin-bottom": "0"});
        }
        else{
                limpiarEmail();
                email.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                email.after('<img id="ok2" src="img/check.png" width="28" height="28">');
        }
    });

    function limpiarTexto(){
        $("#ok3").remove();
        $("#cancel3").remove();
        $("#bad-name").remove();
        $("#bonito-nombre").remove();
    }

    text.on("focusout", function(){
        if($(this).val() == ""){
                text.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                limpiarTexto();
                text.after('<img id="cancel3" src="img/cancel.png" width="28" height="28">');
                text.attr("placeholder", "You must write your name");
                text.before('<p id="bad-name">! Bad name</p>');
                $("#bad-name").css({"color": "red",
                    "margin-bottom": "0"});
        }
        else{
            limpiarTexto();
            text.before('<p id="bonito-nombre">Nice name!.</p>');
                $("#bonito-nombre").css({"color": "#52FD8B", "margin-bottom": "0" });
                text.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                text.after('<img id="ok3" src="img/check.png" width="28" height="28">');
        }
    });//FIN VALIDACIÓN VISUAL EMAIL