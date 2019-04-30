const FormulaireRecherche = $('#FormulaireRecherche');
const SelectBox = $('#selectBox');

/*$(document).ready(function(){
    $(".btn-favoris").click(function(){
        $("span").text("Retirer du favoris");
        alert("test");
    });
});*/

FormulaireRecherche.on('submit', function(event) {
event.preventDefault();

//INPUT DE RECHERCHE
const recherche = FormulaireRecherche.find('#recherche');
const rechercheValeur = recherche.val();

//SELECT BOX
const selectOption = SelectBox.find('option:selected');
const selectValeur = selectOption.val();
console.log(selectValeur);

/*let favorisBTN = $('.btn-favoris');
console.log(favorisBTN);*/
const album = 
    $.ajax({
        url : 'https://api.deezer.com/search?q='+rechercheValeur+'&order='+selectValeur+'&output=jsonp',
        dataType : 'jsonp'
    }).done(function(musiques) {
            
        console.log(musiques);

        document.querySelector('#results').innerHTML = 

        musiques.data.map(
            m =>
                '<div class="main"><p class="album">'
                + '<img width="200px" src="'+ m.album.cover_big+ '"/>' + '<br>'
                + m.artist.name + ' : <br>' 
                + m.album.title + '</p> <br> <p class="preview">' 
                + '<audio controls src="' + m.preview +'" ></audio></p> <br> <button id="0" class="btn-favoris"><i class="fas fa-heart"></i>  <span class="text-favoris">Ajouter au favoris</span></button></div>'
                ).join("<br>");

                //MODIFICATION TEXTE APRES CLICK
                $(".btn-favoris").click(function()
                {  $(this).html(' Retirer du favoris'); //console.log("test");
            });
        }

    
    );


});


