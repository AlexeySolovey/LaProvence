$(function() {
	$.validator.setDefaults({
		errorPlacement: function(error, element) {
/*			  if (element.attr("name") == "email" || element.attr("name") == "lname" ) {
      error.insertAfter("#name");
    } else {
      error.insertAfter(element);
    }*/
	/*		error.insertBefore(element.parents("form:first"));*/
			error.insertBefore(element.parent().parent().parent().parent());
		}
	});
	$('#form').validate({
		rules: {

			email: {
				required: true,
				email: true
			},
			password: {
				required: true
			},
			password2:{
				required: true,
				equalTo: "#passId"
			}
		},
		messages: {
			email: {
				required: "! E-mail необходимо заполнить",
				email: "! E-mail введен некорректно"
			},
			password: {
				required: "! Пароль необходимо заполнить"
			},
			password2: {
				required: "! Подтвержение для пароля необходимо заполнить",
				equalTo: "! Пароли должны совпадать"
			}
		}
	});
});
