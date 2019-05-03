'use strict';
$(document).ready(function () {
    const FormulaireRecherche = $('#FormulaireRecherche');
    const SelectBox = $('#selectBox');

    FormulaireRecherche.on('submit', function (event) {
        event.preventDefault();

        const recherche = FormulaireRecherche.find('#recherche');
        const rechercheValeur = recherche.val();

        const selectOption = SelectBox.find('option:selected');
        const selectValeur = selectOption.val();

        $.ajax({
            url: 'https://api.deezer.com/search?q=' + rechercheValeur + '&order=' + selectValeur + '&output=jsonp',
            dataType: 'jsonp'
        }).done(function (musiques) {
            let template = $(document.createDocumentFragment());
            for (let i = 0; i < musiques.data.length; i++) {
                let m = musiques.data[i];
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
                            <button type="submit" class="btnFavoris">
                                <i class="fas fa-heart"></i> Ajouter au favoris
                            </button>
                        </div>
                    </div>`)
                    .data('m', m)
                    .appendTo(template);
            }
            $('#results').html(template);
        });

    });

    $("#results").on("click", ".btnFavoris", fonctionBtnRetirerRecherche);
});