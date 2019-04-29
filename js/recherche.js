const formSearch = $('#FormulaireRecherche');
formSearch.on('submit', function(event) {
    event.preventDefault();
    
    const recherche = formSearch.find('#recherche');
    const rechercheValeur= recherche.val();


    $.ajax({
        url : 'https://api.deezer.com/search?q='+rechercheValeur+'&output=jsonp',
        dataType : 'jsonp'
    }).done(function(musiques) {
    
        console.log(musiques);
    
        document.querySelector('#results').innerHTML =
                musiques.data.map(m => m.title).join('<br>');
    
    });
});


