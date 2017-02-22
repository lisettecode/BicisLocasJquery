function validateForm(){

var letrasnormales = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
	
	function validarNombre(){
		valor = $('#name').val();
		if (valor==null || valor.length ==''){
			$("#name").parent().append("<span>¡Debe ingresar su nombre!</span>");
		}  else if(!letrasnormales.test(valor)){
			$("#name").parent().append("<span>¡Deben ser solo letras!</span>");
		} else if (valor.charAt(0) != valor.charAt(0).toUpperCase()){
			$("#name").parent().append("<span>¡Comenzar con Mayus!</span>");
		}	
	}
	validarNombre();

	function validarApellido(){
		valor = $('#lastname').val();
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor)){
			$("#lastname").parent().append("<span>¡está vacio y es OBLIGATORIO!</span>");
		}	else if(!letrasnormales.test(valor)){
			$("#lastname").parent().append("<span>¡Deben ser solo letras!</span>");
		}   else if (valor.charAt(0) != valor.charAt(0).toUpperCase()){
			$("#lastname").parent().append("<span>¡Comenzar con Mayus!</span>");
		}		
	}	
	validarApellido();


	function validarEmail(){
	    var	caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
		
		valor = $('#input-email').val();
		if(valor === null || valor.length === ''){
			$("#input-email").parent().append("<span>¡verifique su e-mail!</span>");
		}  else if(!caracteres.test(valor)){
			$("#input-email").parent().append("<span>¡caracter invalido!</span>");
		}
	}	
	validarEmail();

	function CheckPassword(){

		valor = $('#input-password').val();
		if(valor == null || valor.length === ''){
			$("#input-password").parent().append("<span>¡la contraseña debe tener al menos 6 caracteres!</span>");
		}else if(valor.length < 6){
			$("#input-password").parent().append("<span>¡incorrecto, deben ser más de 6 caracteres!</span>");
		} 
	}		
	CheckPassword();


	function SelectBici(){
		valor = $('select').val();
		if(valor == null || valor === '0'){
			$('select').parent().append("<span>¡Selecciona un tipo de bici!</span>");
		}	
	}		
	SelectBici();

}

