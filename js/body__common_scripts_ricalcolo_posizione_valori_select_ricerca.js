function ricalcolo_posizione_valori_select_ricerca(){
	var lunghezza_totale_finestra=Math.round(parseInt($(window).width()));var lunghezza_totale_ricerca_libera=Math.round(parseInt($('.ricerca_libera').width()));$('#lunghezza_totale_finestra').val(lunghezza_totale_finestra);$('#lunghezza_totale_ricerca_libera').val(lunghezza_totale_ricerca_libera);var singola_lunghezza_totale_ricerca_libera=Math.round(parseInt(220 * 1));var doppia_lunghezza_totale_ricerca_libera=Math.round(parseInt(220 * 2));var tripla_lunghezza_totale_ricerca_libera=Math.round(parseInt(220 * 3));var mezza_lunghezza_totale_ricerca_libera_margine_mezza=Math.round(parseInt(singola_lunghezza_totale_ricerca_libera / 2));var singola_lunghezza_totale_ricerca_libera_margine_singola=Math.round(parseInt(singola_lunghezza_totale_ricerca_libera + 10));var doppia_lunghezza_totale_ricerca_libera_margine_doppia=Math.round(parseInt(doppia_lunghezza_totale_ricerca_libera + 20));var tripla_lunghezza_totale_ricerca_libera_margine_tripla=Math.round(parseInt(tripla_lunghezza_totale_ricerca_libera + 10));
	if(lunghezza_totale_finestra>tripla_lunghezza_totale_ricerca_libera_margine_tripla+singola_lunghezza_totale_ricerca_libera_margine_singola){
		var html_ricerca_select_categoria_appoggio=$('#ricerca_select_categoria_appoggio').html();
		var html_ricerca_select_geo_citta_appoggio=$('#ricerca_select_geo_citta_appoggio').html();
		$('#ricerca_select_categoria_sotto').html("");
		$('#ricerca_select_geo_citta_sotto').html("");$('#ricerca_select_categoria_sopra').html("");
		$('#ricerca_select_geo_citta_sopra').html("");$('#ricerca_select_categoria_sopra').html(html_ricerca_select_categoria_appoggio);
		$('#ricerca_select_geo_citta_sopra').html(html_ricerca_select_geo_citta_appoggio);
		if( $('#localita_footer ul').length ){
			localita_footer_content = $('#ricerca_select_geo_citta_appoggio option:not(:first-child)');
			$('#localita_footer ul').html(localita_footer_content);
			localita_footer_content = $('#localita_footer ul').html();
			$('#localita_footer').html("")
			// alert(localita_footer_content);
			
			localita_footer_content = localita_footer_content.replace(/- /g, "<span style='margin-left:5px;'></span>");
			localita_footer_content = localita_footer_content.replace(/<option/g, "<ul style=''><li><a");
			localita_footer_content = localita_footer_content.replace(/option>/g, "a></li></ul>");
			localita_footer_content = localita_footer_content.replace(/data-geo_full/g, "href");
			$('#localita_footer').html(localita_footer_content);
			/*
			localita_footer_content = html_ricerca_select_geo_citta_appoggio;
			localita_footer_content = localita_footer_content.replace("<select", "<select_appoggio");
			localita_footer_content = localita_footer_content.replace("/select", "/select_appoggio");
			localita_footer_content = $( "select_appoggio" ).html();
			$('#localita_footer ul').html(localita_footer_content);
			*/
		}
		$('#ricerca_select_geo_citta_sopra').css('margin-left', singola_lunghezza_totale_ricerca_libera_margine_singola + 'px');
		$("#ricerca_select_geo_citta_sopra").css("margin-left", singola_lunghezza_totale_ricerca_libera_margine_singola + "px");
		$("#twotabsearchtextbox").css("padding-left", doppia_lunghezza_totale_ricerca_libera_margine_doppia + "px");$("#twotabsearchtextbox").css("padding-right", "50px");
	}
	if(lunghezza_totale_finestra<tripla_lunghezza_totale_ricerca_libera_margine_tripla+singola_lunghezza_totale_ricerca_libera_margine_singola+mezza_lunghezza_totale_ricerca_libera_margine_mezza){
		var html_ricerca_select_categoria_appoggio=$('#ricerca_select_categoria_appoggio').html();var html_ricerca_select_geo_citta_appoggio=$('#ricerca_select_geo_citta_appoggio').html();$('#ricerca_select_categoria_sotto').html("");$('#ricerca_select_geo_citta_sotto').html("");$('#ricerca_select_categoria_sopra').html("");$('#ricerca_select_geo_citta_sopra').html("");$('#ricerca_select_categoria_sopra').html(html_ricerca_select_categoria_appoggio);$('#ricerca_select_geo_citta_sotto').html(html_ricerca_select_geo_citta_appoggio);$('#ricerca_select_geo_citta_sopra').css('margin-left', singola_lunghezza_totale_ricerca_libera_margine_singola + 'px');$("#ricerca_select_geo_citta_sopra").css("margin-left", singola_lunghezza_totale_ricerca_libera_margine_singola + "px");$("#twotabsearchtextbox").css("padding-left", singola_lunghezza_totale_ricerca_libera_margine_singola + "px");$("#twotabsearchtextbox").css("padding-right", "50px");
	}
	if(lunghezza_totale_finestra<doppia_lunghezza_totale_ricerca_libera_margine_doppia+mezza_lunghezza_totale_ricerca_libera_margine_mezza){
		var html_ricerca_select_categoria_appoggio=$('#ricerca_select_categoria_appoggio').html();var html_ricerca_select_geo_citta_appoggio=$('#ricerca_select_geo_citta_appoggio').html();$('#ricerca_select_categoria_sotto').html("");$('#ricerca_select_geo_citta_sotto').html("");$('#ricerca_select_categoria_sopra').html("");$('#ricerca_select_geo_citta_sopra').html("");$('#ricerca_select_categoria_sotto').html(html_ricerca_select_categoria_appoggio);$('#ricerca_select_geo_citta_sotto').html(html_ricerca_select_geo_citta_appoggio);$('#ricerca_select_geo_citta_sopra').css('margin-left', singola_lunghezza_totale_ricerca_libera_margine_singola + 'px');$("#ricerca_select_geo_citta_sopra").css("margin-left", singola_lunghezza_totale_ricerca_libera_margine_singola + "px");$("#twotabsearchtextbox").css("padding-left", "10px");$("#twotabsearchtextbox").css("padding-right", "10px");
	}
	riassegnazione_valori_selezionati_da_option_selezionata();
};