// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/* Implement the indexof function for browsers not supporting it e.g. IE8 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) { return i; }
        }
        return -1;
    }
}

var setURL = null;

$( function() {
    var deleteItem = function(code, element){
        code = String(code);
        var codes = $(element).val().split(',');
        var index = codes.indexOf(code);
        if (index > -1) {
            codes.splice(index, 1);
        }
        $(element).val(codes.join(','));
        $('#hintSuccess').prop('hidden', true);
        updateComparison();
    };

    var addRemoval = function(){
        $('.removeCode').click(function(){
            deleteItem($(this).data('code'), '#codes');
        });

        $('.removeHospital').click(function(){
            deleteItem($(this).data('hospital-id'), '#hospitals');
        });
    };

    var addSorting = function() {
        var sortableHospitals = $( ".sortableHospitals" );
        var sortableCodes = $( ".sortableCodes" );
        sortableHospitals.sortable({
            stop: function( event, ui ) {
                var hospitals = [];
                $( ".sortableHospitals").children('.selection').each(function () {
                    hospitals.push($(this).data('hospital-id'));
                });
                $('#hospitals').val(hospitals.join(','));
                updateComparison();
            }
        });
        sortableHospitals.disableSelection();
        sortableCodes.sortable({
            stop: function( event, ui ) {
                var codes = [];
                $( ".sortableCodes").children('.selection').each(function () {
                    codes.push($(this).data('code'));
                });
                $('#codes').val(codes.join(','));
                updateComparison();
            }
        });
        sortableCodes.disableSelection();
    };

    var addHierarchicalSelection = function() {
        $('.hierarchicalCodeSelection').click(function(){
            var newCode = $(this).data('newcode');
            var oldCode = $(this).data('oldcode');
            var codesHidden = $('#codes');
            var codes = codesHidden.val(codesHidden.val().replace(oldCode, newCode));
            updateComparison();
            return false;
        });
    };

    function getActiveTab() {
        var activeTab = $("ul#resultsTabs li.active a")[0];
        return activeTab == undefined ? '' : activeTab.id;
    }

    /**
     * set the URL with the correct codes and hospital parameters
     * and active tab and search term.
     * Hence we can enable a reload of the page.
     */
    setURL = function(){
        var path = purl().data.attr.path;
        if(path.indexOf('system') < 0)
            return;

        var hospitals = $("#hospitals").val();
        var codes = $("#codes").val();
        var searchTermHospital = $("#hospital_search").val();
        var searchTermCodes = $("#codes_search").val();

        var params = '?codes=' + codes + '&hospitals=' + hospitals;
        params += '&activeTab=' + getActiveTab() + '&hospitalSearch=' + searchTermHospital;

        if("replaceState" in window.history)
            window.history.replaceState({}, 'DRG comparison', path + params);
        $(".lang-selection").each(function() {
            $(this).attr('href', $(this).attr('data') + params);
        });
        $(".version-selection").each(function() {
            $(this).attr('value', $(this).data('url') + params);
        });
    };

    /**
     * Get the results tab section based on the selected hospitals and codes.
     */
    var updateComparison = function(){
        var hospitals = $('#hospitals').val();
        var codes = $('#codes').val();
        var url = $('#compareUrl').val();
        $.get(url, {codes: codes, hospitals: hospitals, activeTab: getActiveTab()})
            .done(function (data) {
                $("#comparison-resultsbox").html(data);
                addRemoval();
                addSorting();
                addHierarchicalSelection();
                $("#resultsTabs li a").on('shown.bs.tab', function (e) { setURL() });
            });
        setURL();

        /* first reenable all. */
        var searchResulEntry = $(".searchResultEntry");
        searchResulEntry.removeClass('alreadySelected');
        searchResulEntry.find( ".btn" ).prop("disabled",false);
        searchResulEntry.find( ".btn" ).prop('title', I18n.t('take_over'));
        /* then disable already selected. */
        disableAlreadySelected();
    };

    var assembleArray = function(item, list){
        var temp = [];
        for (var i = 0; i < list.length; i++){
            var h = list[i];
            if(h != '' && temp.indexOf(h) == -1)
                temp.push(h);
        }
        if(temp.indexOf(item) == -1)
            temp.push(item);
        return temp.join(',')
    };

    var hospitalSelection = function() {
        var hospital_id = String($(this).data('hospital-id'));
        var hospitalsElement = $("#hospitals");
        var hospitals = hospitalsElement.val().split(',');
        hospitalsElement.val(assembleArray(hospital_id, hospitals));
        updateComparison();
        disableButton($('#hospital_' + hospital_id));
        var hospital_name = String($(this).data('hospital-display'));
        $("#takeoverItem").html(hospital_name);
        $("#hintSuccess").prop('hidden', false);
        $("html, body").animate({
            scrollTop: $("#hintSuccess").offset().top
        }, 700);
    };

    var codeSelection = function() {
        var code = String($(this).data('code'));
        var codesElement = $('#codes');
        var codes = codesElement.val().split(',');
        codesElement.val(assembleArray(code, codes));
        updateComparison();
        disableButton($('#code_' + code));
        var codeDisplay = String($(this).data('code-display'));
        $("#takeoverItem").html(codeDisplay);
        $("#hintSuccess").prop('hidden', false);
        $("html, body").animate({
            scrollTop: $("#hintSuccess").offset().top
        }, 700);
    };

    var disableAlreadySelected = function(){
        var codes = $("#codes").val().split(',');
        var hospitals = $("#hospitals").val().split(',');
        for (var i = 0; i < codes.length; i++) {
            disableButton($("#code_" + codes[i]));
        }
        for (i = 0; i < hospitals.length; i++) {
           disableButton($("#hospital_" + hospitals[i]));
        }
    } ;

    var disableButton = function(entry) {
        entry.addClass('alreadySelected');
        var button =  entry.find( ".btn" );
        button.prop("disabled",true);
        button.prop('title', I18n.t('already_in_selection'));
    };

    var search = function(e, activeTab) {
        var code = e.which;
        if(code==13) {
            $("#hospital_search").blur();
            $("#codes_search").blur();
            $(activeTab).addClass('highlightSearchResults');
            $(activeTab).removeClass('highlightSearchResults', 2000);
            $(activeTab).focus();
            setURL();
            return;
        }

        var hospitalSearch = $("#hospital_search");
        var searchTermHospital = hospitalSearch.val();
        var searchTermCodes = $('#codes_search').val();
        var searchUrl = hospitalSearch.data('search-url') + '.html';
        $.get(searchUrl, {term_hospitals: searchTermHospital, term_codes: searchTermCodes, limit: 6})
            .done(function (data) {
                $('#search-results').html(data);
                $('.nav-tabs a[href="' + activeTab + '"]').tab('show');
                $('.hospitalselection').click(hospitalSelection);
                $('.codeSelection').click(codeSelection);
                disableAlreadySelected();
                setURL();
            });
    };

    var hospitalSearch = $("#hospital_search");
    var codesSearch = $("#codes_search");

    hospitalSearch.keyup(function(e) {search(e, "#hospitalSearchResults")});
    codesSearch.keyup(function(e) {search(e, "#codeSearchResults")});

    hospitalSearch.focus(function(e) {search(e, "#hospitalSearchResults")});
    codesSearch.focus(function(e) {search(e, "#codeSearchResults")});


    addRemoval();
    addSorting();
    addHierarchicalSelection();
    // reset URL after active tab change
    $('#resultsTabs li a').on('shown.bs.tab', function (e) { setURL() });

    // trigger a hospital search if the search field for hospitals has an initial value on page load.
    if(hospitalSearch.val() != '')
        hospitalSearch.trigger( "keyup" );

    $("#deleteAllButton").on('click', function(e) {
        $("#hospitals").val('');
        $("#codes").val('');
        $("#hospital_search").val('');
        $("#codes_search").val('');
        search(e, '#hospitalSearchResults');
        updateComparison();
    })
});
