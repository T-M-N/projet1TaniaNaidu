const formSearch = $('#FormulaireRecherche');
const recherche = $(formSearch).find('#recherche');

$(formSearch).on('submit', function(event) {
    event.preventDefault();

    const rech= $(recherche).val();

   alert(rech);

});


$.ajax({
    url : 'https://api.deezer.com/search?q=eminem&output=jsonp',
    dataType : 'jsonp'
}).done(function(musiques) {

    console.log(musiques);

    document.querySelector('#results').innerHTML =
            musiques.data.map(m => m.title).join('<br>');

});