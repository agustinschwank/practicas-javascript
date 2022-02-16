

/*
	Utilizando el formulario anterior (utilizado en desarollo JavaScript) modificar para que el mismo funciones an Jquery
*/

$(document).ready(()=>{
	'use strict'
		// Regular Expresions to Validation
		const expresiones = {
			user: /^[a-zA-Z0-9\_\-]{5,10}$/, // Letras, numeros, guion y guion_bajo
			name: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
			pass: /^.{4,10}$/, // 4 a 10 digitos.
			email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			phone: /^\d{7,14}$/ // 7 a 14 numeros.
		}
		const estatus = {user: false, name:false, pass:false, vpass:false, email:false};
		const form = $('#form');
		const inputs = $('input');

		//Validation Inputs
		const formValidation = (event) => {
			switch (event.target.name) {
				case 'user': controlDesign(expresiones.user, event.target.value, 'group_user');break;
				case 'name': controlDesign(expresiones.name, event.target.value, 'group_name');break;
				case 'pass': controlDesign(expresiones.pass, event.target.value, 'group_pass');validatePassword();break;
				case 'vpass': controlDesign(expresiones.pass, event.target.value, 'group_vpass');validatePassword();break;
				case 'email': controlDesign(expresiones.email, event.target.value, 'group_email');break;
			}
		}

		//Control DOM
		const controlDesign = (exp,value, camp) => {
			if(exp.test(value)){ 
				$(`#${camp}`).addClass('succes').removeClass('warning');
				$(`#${camp} span`).removeClass('error');
				$(`#${camp} i`).css('opacity',1).addClass('fa-check-circle').removeClass('fa-times-circle');
				estatus[camp.substr(6)] = true;
			} else {
				$(`#${camp}`).addClass('warning').removeClass('succes');
				$(`#${camp} span`).addClass('error');
				$(`#${camp} i`).css('opacity',1).addClass('fa-times-circle').removeClass('fa-check-circle');
				estatus[camp.substr(6)] = false;
			}
		}

		//Validate Passwords
		const validatePassword = () => {
			var pass = $('#pass').val();
			var vpass = $('#vpass').val();
			if(pass===vpass && pass.length!=0 && vpass.length!=0) {
				$(`#group_vpass`).addClass('succes').removeClass('warning');
				$(`#group_vpass span`).removeClass('error');
				$(`#group_vpass i`).css('opacity',1).addClass('fa-check-circle').removeClass('fa-times-circle');
				estatus[vpass] = true;
			} else {
				$(`#group_vpass`).addClass('warning').removeClass('succes');
				$(`#group_vpass span`).addClass('error');
				$(`#group_vpass i`).css('opacity',1).addClass('fa-times-circle').removeClass('fa-check-circle');
				estatus[vpass] = false;
			}
		}

		//Call to Inputs
		inputs.find(()=>{
			inputs.keyup(formValidation);
			inputs.blur(formValidation);
		});


		//Call to Form
		form.submit((event)=>{
			event.preventDefault();
			if(estatus.user && estatus.name && estatus.pass && estatus.vpass && estatus.email) {
				$('.form_group-alertwarning').css('display','none');
				$('.form_group-alertsend').css('display','block');
				setTimeout(()=>{
					$('.form_group-alertsend').css('display','none');
				},5000);

				// ENVIAR A CODIGO BACKEND
				$('i').find(()=>{
					$('i').css('opacity','0');
				});
				$('.form_group').find(()=>{
					$('.form_group').removeClass('succes');
				});
				//form.trigger('reset');
				form[0].reset();
				estatus.user = estatus.name = estatus.pass = estatus.vpass = estatus.email = false;
			} else {
				$('.form_group-alertwarning').css('display','block');
			}
		});

});