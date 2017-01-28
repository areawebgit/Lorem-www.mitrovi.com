$(document).ready(function(){

var commenti_js = "JS PER IL READY DELLA PAGINA - PER LA HOME PAGE";

var ricerca_veloce=$(".ricerca_libera").val();

var ricerca_categoria=$("#searchDropdownBox").val();
var ricerca_categoria_vis = $('#searchDropdownBox').find('option:selected').text();

var ricerca_localita=$("#searchDropdownBoxLocalita").val();
var ricerca_localita_vis=$('#searchDropdownBoxLocalita').find('option:selected').text();

var Search_Str=ricerca_categoria_vis;
var Search_Str_Localita=ricerca_localita_vis;

$("#nav-search-in-content").text(Search_Str);
$("#nav-search-in-content-localita").text(Search_Str_Localita);

$(".ricerca_libera").keyup(function(){
	var commenti_js = "ABILITA(OK) OPPURE ABILITA (KO) PER L'AZZERAMENTO DEI VALORI DELLE DUE SELECT RICERCA ALLA MODIFICA DELLA INPUT ricerca_libera DI RICERCA";
var abilitazione = "ko";
if(abilitazione == "ok"){
$("#searchDropdownBox").val($("#scritta_select_ricerche_categorie").val());
$("#nav-search-in-content").text($("#scritta_select_ricerche_categorie").val());
$("#searchDropdownBoxLocalita").val($("#scritta_select_ricerche_geo_citta").val());
$("#nav-search-in-content-localita").text($("#scritta_select_ricerche_geo_citta").val());
}
});

$(".ricerca_libera").val($.trim($(".ricerca_libera").val().replace(jquery_ucwords(ricerca_categoria, true), "")));$(".ricerca_libera").val($.trim($(".ricerca_libera").val().replace(jquery_ucwords(ricerca_localita, true), "")));$(".ricerca_libera").val($.trim($(".ricerca_libera").val().replace(jquery_ucwords(ricerca_categoria, true), "")));$(".ricerca_libera").val($.trim($(".ricerca_libera").val().replace(jquery_ucwords(ricerca_localita, true), "")));$(".ricerca_libera").val($.trim($(".ricerca_libera").val().replace(jquery_ucwords(ricerca_categoria, true), "")));$(".ricerca_libera").val($.trim($(".ricerca_libera").val().replace(jquery_ucwords(ricerca_localita, true), "")));$(".ricerca_libera").val($.trim($(".ricerca_libera").val().replace(jquery_ucwords(ricerca_categoria, true), "")));$(".ricerca_libera").val($.trim($(".ricerca_libera").val().replace(jquery_ucwords(ricerca_localita, true), "")));ricalcolo_posizione_valori_select_ricerca();
});