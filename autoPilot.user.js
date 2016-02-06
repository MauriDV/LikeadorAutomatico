// ==UserScript==
// @name AutoLiker
// @namespace Violentmonkey Scripts
// @author       @Mauri934
// @grant none
// ==/UserScript==

var box = '<div class="box" id="actions"><div class="title clearfix"><h2>Funciones</h2></div></div>';
var button = '<button class="btn" id="{{ id }}">{{ text }}</button>';
var aux = 0;

$("#sidebar").prepend(box);
$("#actions").append(Mustache.render(button, { id: "autoPilot", text: "Piloto automatico" }));

function inicio(){
	aux=1
	$('.Feed-load.active').click()
	$(".require-login.button-action-s.action-vote.hastipsy.pointer").click()
	$(window).scrollTop(0,0)
	setTimeout(inicio, 10)
}

$("body").on("click", "#autoPilot", function(){
	if(aux==0){
		$("#autoPilot").css("Background","red")
		inicio()
	}else{
		alert("la pagina se recargara, Salu2")
		location.reload()
	}
});

