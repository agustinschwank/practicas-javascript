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
const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');

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
		document.querySelector(`#${camp}`).classList.add('succes');
		document.querySelector(`#${camp}`).classList.remove('warning');
		document.querySelector(`#${camp} span`).classList.remove('error');
		document.querySelector(`#${camp} i`).style.opacity = 1;
		document.querySelector(`#${camp} i`).classList.replace('fa-times-circle','fa-check-circle');
		estatus.camp.substring(6) = true;
	} else {
		document.querySelector(`#${camp}`).classList.add('warning');
		document.querySelector(`#${camp}`).classList.remove('succes');
		document.querySelector(`#${camp} span`).classList.add('error');
		document.querySelector(`#${camp} i`).style.opacity = 1;
		document.querySelector(`#${camp} i`).classList.replace('fa-check-circle','fa-times-circle');
		estatus.camp.substring(6) = false;
	}
}

//Validate Passwords
const validatePassword = () => {
	var pass = document.getElementById('pass').value;
	var vpass = document.getElementById('vpass').value;
	if(pass===vpass && pass.length!=0 && vpass.length!=0) {
		document.querySelector(`#group_vpass`).classList.add('succes');
		document.querySelector(`#group_vpass`).classList.remove('warning');
		document.querySelector(`#group_vpass span`).classList.remove('error');
		document.querySelector(`#group_vpass i`).style.opacity = 1;
		document.querySelector(`#group_vpass i`).classList.replace('fa-times-circle','fa-check-circle');
		estatus.vpass = true;
	} else {
		document.querySelector(`#group_vpass`).classList.add('warning');
		document.querySelector(`#group_vpass`).classList.remove('succes');
		document.querySelector(`#group_vpass span`).classList.add('error');
		document.querySelector(`#group_vpass i`).style.opacity = 1;
		document.querySelector(`#group_vpass i`).classList.replace('fa-check-circle','fa-times-circle');
		estatus.vpass = false;
	}
}

//Call to Inputs
inputs.forEach((input)=>{
	input.addEventListener('keyup', formValidation);
	input.addEventListener('blur', formValidation);
});

//Call to Form
form.addEventListener('submit',(event)=>{
	event.preventDefault();
	if(estatus.user && estatus.name && estatus.pass && estatus.vpass && estatus.email) {
		document.getElementsByClassName('form_group-alertwarning')[0].style.display = 'none';
		document.getElementsByClassName('form_group-alertsend')[0].style.display = 'block';
		setTimeout(()=>{
			document.getElementsByClassName('form_group-alertsend')[0].style.display = 'none';
		},5000);
		// ENVIAR A CODIGO BACKEND
		document.querySelectorAll('i').forEach((icon)=>{
			icon.style.opacity = 0;
		});
		document.querySelectorAll('.form_group').forEach((reset)=>{
			reset.classList.remove('succes');
		});
		form.reset();
		estatus.user = estatus.name = estatus.pass = estatus.vpass = estatus.email = false;
	} else {
		document.getElementsByClassName('form_group-alertwarning')[0].style.display = 'block';
	}
});