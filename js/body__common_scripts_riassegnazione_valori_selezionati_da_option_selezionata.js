function riassegnazione_valori_selezionati_da_option_selezionata() {
	// var Search_Str = $("#searchDropdownBox").val();
	var Search_Str = $('#searchDropdownBox').find('option:selected').text();
	$("#nav-search-in-content").text(Search_Str);
	var Search_Str_Localita = $("#searchDropdownBoxLocalita").val();
	var Search_Str_Localita = $('#searchDropdownBoxLocalita option:selected').data('geo_indicazione');
	$("#nav-search-in-content-localita").text(Search_Str_Localita);
}