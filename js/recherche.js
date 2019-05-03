'user strict';

const FormulaireRecherche = $('#FormulaireRecherche');
const SelectBox = $('#selectBox');

FormulaireRecherche.on('submit', function (event) {
    event.preventDefault();

    //INPUT DE RECHERCHE
    const recherche = FormulaireRecherche.find('#recherche');
    const rechercheValeur = recherche.val();

    //SELECT BOX
    const selectOption = SelectBox.find('option:selected');
    const selectValeur = selectOption.val();
    console.log(selectValeur);

    $.ajax({
        url: 'https://api.deezer.com/search?q=' + rechercheValeur + '&order=' + selectValeur + '&output=jsonp',
        dataType: 'jsonp'
    }).done(function (musiques) {
        console.log(musiques);

        let template = $(document.createDocumentFragment());
        for (let i = 0; i < musiques.data.length; i++) {
            let m = musiques.data[i];

            //console.log('musique', i, m);   

            $(`<div class="container">
                    <div  class="main">
                    <div class="album">
                        <div class="enligne"> <img width="150px" src="${m.album.cover_big}"/><br></div>
                        <div class="enligne"><span class="nomArtiste">Artiste : </span>${m.artist.name}<br>
                        <span class="nomArtiste">Titre : </span>${m.title}<br>
                        <span class="nomArtiste">Album : </span>${m.album.title}<br></div>
                    </div>
                    <div class="preview">
                        <audio controls src="${m.preview}" width="700" height="350"></audio>
                    </div><br>
                            <button type="submit" class="btn-favoris">
                                <i class="fas fa-heart"></i>
                                <span class="text-favoris">Ajouter au favoris</span>
                            </button>
                        </div>
                    </div>`)
                .data('m', m)
                .appendTo(template);
        }

        $('#results').html(template); // ...
    });

});


$("#results").on("click", ".btn-favoris", function () {

    let $button = $(this);
    let m = $button.parents('.container').data('m');

    console.log('récupéré', m);

    let tab = [];
    if (localStorage.getItem('listM') == null) {
        alert("c'est vide");

        tab.push(m);
        localStorage.setItem('listM', JSON.stringify(tab));
    } 
    else {
        tab = JSON.parse(localStorage.getItem('listM'));

        let supprime = false;

        for (let i = 0; i < tab.length; i++) {
            // Si l'élément cliqué était déjà en favoris, on l'en supprime
            if (tab[i].id === m.id) {
               tab.splice(i, 1);
               supprime = true;
               break;
            }
        }
       
        // Si l'élément cliqué n'était pas encore en favoris, on l'ajoute
        if (supprime === false) {
            tab.push(m);
            $button.text('SUPPRIMER DES FAVS');
        }
        localStorage.setItem('listM', JSON.stringify(tab));
    }
});