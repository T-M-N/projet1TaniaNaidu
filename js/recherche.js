const FormulaireRecherche = $('#FormulaireRecherche');
let select = $("#select");

FormulaireRecherche.on('submit', function(event) {
    event.preventDefault();
    
    const recherche = FormulaireRecherche.find('#recherche');
    const rechercheValeur = recherche.val();

    let selectValeur = $( "select option:selected" ).val();
    console.log(selectValeur);

    $.ajax({
        url : 'https://api.deezer.com/search?q='+rechercheValeur+'&order=RATING_ASC&output=jsonp',
        dataType : 'jsonp'
    }).done(function(musiques) {
    
        console.log(musiques);
    
        document.querySelector('#results').innerHTML = 
     /* "<p> Les titre : " + musiques.data.map(m => m.title)
      + "</p><p> Les album : " + musiques.data.map(m => m.album.title) + "</p>";*/

       musiques.data.map(
            m => 
            '<div class="main"><p class="album">'
             + m.album.cover_big + '<br>'
              + m.album.title + ' : ' + 
              m.artist.name + '</p> <p class="preview">' + 
              m.preview + '</p> </div>').join("<br>");
    }
    
    );
});


