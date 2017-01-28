 $(function() {
 	(function() {
 		var vecchio_valore;
 		$("#searchDropdownBox").focus(function() {
			vecchio_valore = jquery_ucwords(this.value, true);
		}).change(function() {
			var Search_Str = $(this).val();
			var Search_Str_Vis = $('#searchDropdownBox').find('option:selected').text();
			// $("#nav-search-in-content").text(Search_Str);
			$("#nav-search-in-content").text(Search_Str_Vis);
			nuovo_valore = jquery_ucwords(this.value, true);
			nuova_text_categorie = $(".ricerca_libera").val();
			nuova_text_categorie = $(".ricerca_libera").val().replace(vecchio_valore, "");
			$(".ricerca_libera").val(nuova_text_categorie);
			
		});
 	})();
 	(function() {
 		var vecchio_valore;
 		$("#searchDropdownBoxLocalita").focus(function() {
			vecchio_valore = jquery_ucwords(this.value, true);
		}).change(function() {
			var Search_Str_Localita = $(this).val();
			var Search_Str_Localita = $(this).data('geo_indicazione');
			var Search_Str_Localita_Vis = $('#searchDropdownBoxLocalita').find('option:selected').text();
			Search_Str_Localita_Vis = Search_Str_Localita_Vis.replace("- ", "");
			$("#nav-search-in-content-localita").text(Search_Str_Localita_Vis);			
			// alert(Search_Str_Localita);
			// $("#nav-search-in-content-localita").text(Search_Str_Localita);
			nuovo_valore = jquery_ucwords(this.value, true);
			nuova_text_localita = $(".ricerca_libera").val();
			nuova_text_localita = $(".ricerca_libera").val().replace(vecchio_valore, "");
			$(".ricerca_libera").val(nuova_text_localita);
			// ricerca_libera();
		});
 	})();
 });