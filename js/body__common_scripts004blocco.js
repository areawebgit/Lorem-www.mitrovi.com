function last_msg_funtion() {
	$("#vedi_tutte_le_aziende_loader").show();
	var ranking_aziende = $(".numeratore_aziende_trovate:last").attr("ranking_aziende");
	var id_aziende = $(".numeratore_aziende_trovate:last").attr("id_aziende");
	if ($("#geo_citta_trovata_check").val() == "ok") {
		var ricerca_veloce = $(".ricerca_libera").val() + $("#singola_ricerca_veloce_geo_citta_check").val().replace(" ", "_");
	}
	else {
		var ricerca_veloce = $(".ricerca_libera").val() + "";
	}
	var ricerca_categoria = $("#searchDropdownBox").val();
	var ricerca_localita = $("#searchDropdownBoxLocalita").val();
	var Search_Str_Localita = ricerca_localita;
	var Search_Str = ricerca_categoria;
	var ricerca_veloce_chiamata = "";
	var ricerca_categoria_chiamata = "";
	var ricerca_localita_chiamata = "";
	if (ricerca_categoria == undefined) {
		ricerca_categoria = "";
	}
	if (ricerca_localita == undefined) {
		ricerca_localita = "";
	}
	ricerca_veloce = $.trim(ricerca_veloce);
	ricerca_categoria = $.trim(ricerca_categoria);
	ricerca_localita = $.trim(ricerca_localita);
	ricerca_veloce = ricerca_veloce.replace(jquery_ucwords(ricerca_categoria,true));
	ricerca_veloce = ricerca_veloce.replace(jquery_ucwords(ricerca_localita,true));
	ricerca_localita = ricerca_localita.replace(/\  /g, '_');
	ricerca_localita = ricerca_localita.replace(/\ /g, '_');
	ricerca_localita = ricerca_localita.toLowerCase();
	ricerca_localita = ricerca_localita.replace(/\'/g, '_');
	ricerca_localita = ricerca_localita.replace(/\"/g, '_');
	ricerca_localita = ricerca_localita.replace("à", "a");
	ricerca_localita = ricerca_localita.replace("è", "e");
	ricerca_localita = ricerca_localita.replace("é", "e");
	ricerca_localita = ricerca_localita.replace("ì", "i");
	ricerca_localita = ricerca_localita.replace("ò", "o");
	ricerca_localita = ricerca_localita.replace("ù", "u");
	ricerca_veloce = ricerca_veloce.replace(/\  /g, ' ');
	ricerca_veloce = ricerca_veloce.replace(/\ /g, '_');
	ricerca_veloce = ricerca_veloce.toLowerCase();
	ricerca_veloce = ricerca_veloce.replace(/\'/g, '_');
	ricerca_veloce = ricerca_veloce.replace(/\"/g, '_');
	ricerca_veloce = ricerca_veloce.replace("à", "a");
	ricerca_veloce = ricerca_veloce.replace("è", "e");
	ricerca_veloce = ricerca_veloce.replace("é", "e");
	ricerca_veloce = ricerca_veloce.replace("ì", "i");
	ricerca_veloce = ricerca_veloce.replace("ò", "o");
	ricerca_veloce = ricerca_veloce.replace("ù", "u");
	ricerca_categoria = ricerca_categoria.replace(/\  /g, ' ');
	ricerca_categoria = ricerca_categoria.replace(/\ /g, '_');
	ricerca_categoria = ricerca_categoria.toLowerCase();
	ricerca_categoria = ricerca_categoria.replace(/\'/g, '_');
	ricerca_categoria = ricerca_categoria.replace(/\"/g, '_');
	ricerca_categoria = ricerca_categoria.replace("à", "a");
	ricerca_categoria = ricerca_categoria.replace("è", "e");
	ricerca_categoria = ricerca_categoria.replace("é", "e");
	ricerca_categoria = ricerca_categoria.replace("ì", "i");
	ricerca_categoria = ricerca_categoria.replace("ò", "o");
	ricerca_categoria = ricerca_categoria.replace("ù", "u");
	if (ricerca_categoria == "ricerca_in_categorie" || ricerca_categoria == "Ricerca_in_categorie") {
		ricerca_categoria = "";
	}
	if (ricerca_localita == "ricerca_in_localita" || ricerca_localita == "Ricerca_in_localita") {
		ricerca_localita = "";
	}
	if (ricerca_veloce != "") {
		ricerca_veloce_chiamata = "&ricerca_veloce=" + ricerca_veloce;
	}
	if (ricerca_categoria != "" && ricerca_categoria != $("#input_scritta_select_ricerche_check").val()) {
		ricerca_categoria_chiamata = "&ricerca_categoria=" + ricerca_categoria;
	}
	if (ricerca_localita != "" && ricerca_localita != $("#input_scritta_select_ricerche_check").val()) {
		ricerca_localita_chiamata = "&ricerca_localita=" + ricerca_localita;
	}
	var url;
	url = "http://" + $("#opzioni_sito_web")
		.val() + "/pagine_del_sito.php?url_rewrite=" +
		url_rewrite_pagine_del_sito_principale + "&azione_jquery_get=ok" +
		ricerca_veloce_chiamata + ricerca_categoria_chiamata +
		ricerca_localita_chiamata + "&ranking_aziende_paging_index=" +
		ranking_aziende + "&id_aziende_paging_index=" + id_aziende;
	var contenuto_precedente_row_aziende_trovate;
	contenuto_precedente_row_aziende_trovate = $("#row_aziende_trovate").html;
	$.get(url, function(data) {
		$("#vedi_tutte_le_aziende_loader").hide();
		if (data != "") {
			$("#row_aziende_trovate").append(data);
			$('#jquery_asincrono_ricerca_aziende').remove();
		}
		else {}
	});
};
$(window).scroll(function() {
	var numero_aziende_ancora_da_listare = $(".numero_aziende_ancora_da_listare:last").attr("id");
	numero_aziende_ancora_da_listare = parseInt(numero_aziende_ancora_da_listare);
	if (numero_aziende_ancora_da_listare == 9) {
		var row_aziende_trovate_height = $("#row_aziende_trovate").height();
		row_aziende_trovate_height = parseInt(row_aziende_trovate_height);
		row_aziende_trovate_height = row_aziende_trovate_height - 500;
		if ($(window).scrollTop() > row_aziende_trovate_height) {
			$('.numero_aziende_ancora_da_listare').remove();
			last_msg_funtion();
		}
	}
});