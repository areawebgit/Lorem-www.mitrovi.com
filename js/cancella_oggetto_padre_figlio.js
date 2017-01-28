$( ".cancella_oggetto_padre_figlio" ).click(function( event ) {
	var id_contenuto = $(this).attr("id");
	var id_contenuto_array = id_contenuto.split("|");
	
	var url = id_contenuto_array[0];
	
	var padre = id_contenuto_array[1];
	
	var figlio = id_contenuto_array[2];
	var figlio_contenitore = figlio;
	// alert(figlio);
	if(figlio=="immagini_gallery"){
		figlio = "img_gallery";
	}
	// alert(figlio);
	
	var operazione = id_contenuto_array[3];
	var operazione_descr;
	if(operazione=="del"){
		operazione_descr = " di cancellazione";
		operazione_operativita = "cancella";
	}
	if(operazione=="mod"){
		operazione_descr = " di modifica";
		operazione_operativita = "modifica";		
	}
	if(operazione=="ins"){
		operazione_descr = " di inserimento";
		operazione_operativita = "inserimento";		
	}
	
	var id = id_contenuto_array[4];
	var url_rewrite_aziende = id_contenuto_array[5];
	var lang = id_contenuto_array[6];
	
	// INIZIO CONFERMA ALERT
		var conferma_alert;
		var r = confirm("Conferma azione" + operazione_descr);
		if (r == true) {
			conferma_alert = "ok";
		} else {
			conferma_alert = "ko";
		}
	// FINE CONFERMA ALERT
	
	if(conferma_alert=="ok"){
		// INIZIO OPERATIVITà CONFERMATA, IRREVERSIBILE
			// alert("INIZIO cancellazione oggetto - VALORI: " + padre + "|" + figlio + "|" + operazione + "|" + id);
			event.preventDefault();
			// $( this ).hide();
			// var oggetto_da_operare = figlio + "_" + id;
			var oggetto_da_operare = figlio_contenitore + "_" + id;
			// alert(oggetto_da_operare);
			
			/*
			var jqxhr = $.ajax( url + "/assets/example.php" )
			.done(function() {
				// alert(oggetto_da_operare);
				$("#" + oggetto_da_operare).hide("slow");
				// alert( "success" );
			})
			.fail(function() {
				$("#" + oggetto_da_operare).show();
				// alert( "error" );
			})
			.always(function() {
				// alert( "complete" );
			});
			*/
			url_operazione = url + "/assets/" + operazione_operativita + "_oggetto_padre_figlio.php?padre=" + padre + "&figlio=" + figlio + "&id=" + id;
			// alert(url_operazione);
			url_nuovo_anteprima = url + "/" + lang + "/" + url_rewrite_aziende + "/?anteprima_scheda_aziende=ok&" + $.now();
			// alert(url_nuovo_anteprima);			
			$.ajax({
				method: "GET",
				url: url_operazione,
				data: { nomevariabile1: "valorevariabile1", nomevariabile2: "valorevariabile2" }
			})
			.done(function( msg ) {
				// alert(msg);
				if(msg=="ok"){
					$("#" + oggetto_da_operare).hide("slow");
					$(".anteprima_informazioni").attr("href", url_nuovo_anteprima);
				}else if(msg=="ko"){
					$("#" + oggetto_da_operare).show();
				}else{
					alert("\t E' occorso un errore, ripetere l'operazione. \t \n \t Contattare il sito qualora l'errore dovesse durare per molto tempo. \t");
				}
				// alert( "Data Saved: " + msg );
			});
			// $("#" + oggetto_da_operare).hide();
			// alert("FINE cancellazione oggetto - VALORI: " + padre + "|" + figlio + "|" + operazione + "|" + id);
		// FINE OPERATIVITà CONFERMATA, IRREVERSIBILE
	}else{
		// INIZIO OPERATIVITà ANNULLATA
		// FINE OPERATIVITà ANNULLATA
		alert("Azione annullata come da richiesta");	
	}
});