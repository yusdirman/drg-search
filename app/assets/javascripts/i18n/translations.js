var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"},"not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken"}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"drg_search":"DRG Search","contact":"Contakt","bern":"Berne","legal_link":"https://www.admin.ch/gov/en/start/terms-and-conditions.html"},"de":{"drg_search":"DRG Fallzahlsuche","language_selection":"Sprachauswahl","foph":"BAG","foph_long":"Bundesamt für Gesundheit","foph_department":"Direktionsbereich Kranken- und Unfallversicherung\u003cbr/\u003e Abteilung Versicherungsaufsicht\u003cbr/\u003e Sektion Datenmanagement und Statistik\u003cbr/\u003e","admin_ch":"Bundesverwaltung","edi":"EDI","edi_long":"Eidgenössisches Departement des Innern EDI","legal":"Rechtliches","legal_link":"https://www.admin.ch/gov/de/start/rechtliches.html","drg_version":"DRG Version","system_selection":"Auswahl Anwendungsjahr / SwissDRG Version","hospital_search":"Spitalsuche","hospital_search_placeholder":"Name oder Adresse der Klinik","number_search":"Suche nach Diagnosengruppe","number_search_placeholder":"Krankheitsbild, Diagnose oder Behandlung, MDC- oder DRG- Name","search_results":"Suchresultate","hospitals":"Spitäler","diagnosis_group":"Diagnosengruppe","num_cases":"Fallzahlen","mdc":"Major Diagnostic Category","mdcs":"MDCs Major Diagnostic Categories","adrgs":"Basis-DRGs","adrg":"Basis-DRG","drgs":"DRGs - Fallpauschalen","drg":"Diagnostic Related Group / Fallpauschale","comparison_table":"Fallzahlen nach Spital","contact":"Kontakt","please_search":"Bitte geben Sie einen Suchbegriff ein.","search":"Suche","no_search_results":"Es konnten keine Suchergebnisse zum eingegebenen Begriff gefunden werden.","help":"Hilfe","documentation":"Dokumentation","take_over_hospital":"Dieses Spital in die Analyse übernehmen","take_over_code":"Diese Fallzahl in die Analyse übernehmen","take_over":"Übernehmen","application_year":"Abrechnungstarif aus dem Jahr ","data_from":"Kennzahlen berechnet mit Daten aus dem Jahr","additional_data_plural":"und zusätzlichen Vergleichsdaten aus den Jahren","additional_data_singular":"und zusätzlichen Vergleichsdaten aus dem Jahr","pick_at_least_one":"Wählen Sie mindestens ein Spital und eine Diagnosengruppe zum Vergleich.","remove_from_comparison":"Aus dem Vergleich entfernen","selection":"Auswahl","time_series_chart_title":"Zeitlicher Verlauf der Fallzahlen","year":"Jahr","no_value":"Keine Angaben","only_one_year":"Für dieses Anwendungsjahr sind nur Vergleichsdaten von einem Jahr vorhanden. Ein zeitlicher Vergleich ist daher nicht möglich. Bitte wählen Sie dazu ein anderes Anwendungsjahr.","data_year":"Datenjahr","partition_A":"Andere Partition","partition_O":"Operative Partition","partition_M":"Medizinische Partition","search_hospitals_drgs":"Suche Spitäler und DRG Fallzahlen","relevant_code":"Relevante Diagnose / Behandlung u.A.","back":"Zurück","delete_all":"Auswahl löschen","bern":"Bern","num_cases_bar":"Visualisierung der Fallzahlen des aktuellsten Jahres","num_cases_tabular":"Tabelarische Ansicht der Fallzahlen des aktuellsten Jahres","already_in_selection":"Dieses Element wurde bereits in die Auswahl übernommen.","successfull_take_over":"\u003cspan id='takeoverItem'\u003e\u003c/span\u003e wurde erfolgreich in die Auswahl übernommen","show_all_hospitals_from_service":"Zeige alle Spitäler, welche diese Leistung anbieten.","show_all_services_from_hospital":"Zeige alle Leistungen an, welche dieses Spital anbietet.","level":"Ebene: "},"fr":{"drg_search":"Recherche du nombre de cas par DRG","language_selection":"Choix de la langue","foph":"OFSP","foph_long":"Office fédéral de la santé publique","foph_department":"Unité de direction Assurance maladie et accidents\u003cbr/\u003e Division Surveillance de l'assurance\u003cbr/\u003e Section Gestion des données et statistique\u003cbr/\u003e","admin_ch":"Administration fédérale","edi":"DFI","edi_long":"Département fédéral de l'Intérieur DFI","legal":"Informations juridiques","bern":"Berne","legal_link":"https://www.admin.ch/gov/fr/accueil/conditions-utilisation.html","drg_version":"Version DRG","system_selection":"Choix de l'année d'application / Version SwissDRG","hospital_search":"Recherche d'hôpital","hospital_search_placeholder":"Nom ou adresse de la clinique","number_search":"Recherche par groupe diagnostique","number_search_placeholder":"Tableau clinique, diagnostic ou traitement","search_results":"Résultats de la recherche","hospitals":"Hôpitaux","diagnosis_group":"Groupe diagnostique","num_cases":"Nombre de cas","mdcs":"MDC Catégorie majeure de diagnostics (Major Diagnostic Category)","adrgs":"DRG de base","adrg":"DRG de base","drgs":"Forfait par cas DRG","comparison_table":"Nombre de cas par hôpital","contact":"Contact","please_search":"Veuillez entrer un terme de recherche","search":"Recherche","no_search_results":"Aucun résultat ne correspond au terme de recherche entré","help":"Aide","documentation":"Documentation","take_over_hospital":"Ajouter cet hôpital","take_over_code":"Ajouter ce groupe diagnostique à l'analyse","take_over":"Ajouter","application_year":"Tarif de facturation de l'année","data_from":"Chiffres-clés calculés sur la base des données de l'année ","additional_data_plural":"et comparés aux données des années ","additional_data_singular":"et comparés aux données de l'année ","pick_at_least_one":"Choisissez au moins un hôpital et un groupe diagnostique pour la comparaison.","remove_from_comparison":"Retirer de la comparaison","selection":"Sélection","time_series_chart_title":"Evolution temporelle du nombre de cas","year":"Année","no_value":"Aucune information","only_one_year":"Pour cette année d'application, seules les données d'une année sont disponibles. Une comparaison dans le temps des données n'est donc pas possible. Veuillez choisir une autre année d'application.","data_year":"Année de données","partition":"Partition","partition_A":"Autre partition","partition_O":"Partition opératoire","partition_M":"Partition médicale","search_hospitals_drgs":"Recherche d'hôpitaux et du nombre de cas par DRG","relevant_code":"Diagnostic / Traitement pertinent (entre autres)","back":"Retour","delete_all":"Effacer la sélection","num_cases_bar":"Visualisierung der Fallzahlen des aktuellsten Jahres","num_cases_tabular":"Tabelarische Ansicht der Fallzahlen des aktuellsten Jahres","already_in_selection":"Dieses Element wurde bereits in die Auswahl übernommen.","successfull_take_over":"\u003cspan id='takeoverItem'\u003e\u003c/span\u003e wurde erfolgreich in die Auswahl übernommen"},"it":{"bern":"Berna","drg_search":"Ricerca numero di casi per DRG","language_selection":"Selezione della lingua","foph":"UFSP","foph_long":"Ufficio federale della sanità pubblica","foph_department":"Unità di direzione assicurazione malattia e infortunio\u003cbr/\u003e Divisione vigilanza delle assicurazioni\u003cbr/\u003e Sezione Gestione dei dati e statistica\u003cbr/\u003e","admin_ch":"Amministrazione federale","edi":"DFI","edi_long":"Dipartimento federale dell'interno DFI","legal":"Basi legali","legal_link":"https://www.admin.ch/gov/it/pagina-iniziale/basi-legali.html","drg_version":"Versione DRG","system_selection":"Selezione dell'anno di applicazione / Versione SwissDRG","hospital_search":"Ricerca ospedali","hospital_search_placeholder":"Nome o indirizzo della clinica","number_search":"Ricerca grupp diagnostico","number_search_placeholder":"Quadro clinico, diagnosi o trattamento","search_results":"Risultati di ricerca","hospitals":"Ospedali","diagnosis_group":"Gruppo diagnostico","num_cases":"Numero di casi","mdcs":"MDC Categoria diagnostica principale (Major Diagnostic Category)","adrgs":"DRG di base","adrg":"DRG di base","drgs":"Importi forfettari per caso DRG","comparison_table":"Numero di casi per ospedale","contact":"Contatto","please_search":"Immettere un termine di ricerca","search":"Ricerca","no_search_results":"Nessun risultato trovato per il termine di ricerca immesso.","help":"Guida","documentation":"Documentazione","take_over_hospital":"Aggiungere questo ospedale all'analisi","take_over_code":"Aggiungere questo gruppo diagnostico all'analisi","take_over":"Aggiungere","application_year":"Tariffa di fatturazione dell'anno","data_from":"Cifre chiave calcolate con i dati dell'anno ","additional_data_plural":"e confrontate con i dati degli anni","additional_data_singular":"e confrontate con i dati dell'anno","pick_at_least_one":"Scegliere almeno un ospedale e un gruppo diagnostico per il confronto.","remove_from_comparison":"Eliminare dal confronto","selection":"Selezione","time_series_chart_title":"Cronologia del numero di casi","year":"Anno","no_value":"Nessuna informazione","only_one_year":"Per quest'anno di applicazione sono disponibili i dati comparativi di un solo anno. Il confronto temporale dei dati non è possibile. Scegliere un altro anno di applicazione.","data_year":"Anno di dati","partition":"Partizione","partition_A":"Altra partizione","partition_O":"Partizione chirurgica","partition_M":"Partizione medica","search_hospitals_drgs":"Ricerca di ospedali e di numero di casi per DRG","relevant_code":"Diagnosi / trattamento rilevante (fra le altre cose)","back":"Indietro","delete_all":"Auswahl löschen","num_cases_bar":"Visualisierung der Fallzahlen des aktuellsten Jahres","num_cases_tabular":"Tabelarische Ansicht der Fallzahlen des aktuellsten Jahres","already_in_selection":"Dieses Element wurde bereits in die Auswahl übernommen.","successfull_take_over":"\u003cspan id='takeoverItem'\u003e\u003c/span\u003e wurde erfolgreich in die Auswahl übernommen"}};