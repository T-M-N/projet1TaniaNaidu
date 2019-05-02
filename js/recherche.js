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
                        <p class="album">
                            <img width="200px" src="${m.album.cover_big}"/><br>
                            <span class="nomArtiste">Artiste : ${m.artist.name}</span><br>
                            <span class="nomArtiste">Titre : ${m.title}</span><br>
                            <span class="nomArtiste">Album : ${m.album.title}</span><br>
                            <p class="preview">
                                <audio controls src="${m.preview}"></audio>
                            </p><br>
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
    ("vous avez ajouté une musique au favoris");
    let m = $(this).parents('.container').data('m');

    console.log('récupéré', m);

    let tab = [];

    if (localStorage.getItem('listM') == null) {
        alert("c'est vide");
        tab.push(m);
        localStorage.setItem('listM', JSON.stringify(tab));
   
    }else {
        tab = JSON.parse(localStorage.getItem('listM'));
        tab.push(m);
        localStorage.setItem('listM', JSON.stringify(tab));

        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id === m.id) {
                alert("il est déjà dans les favoris");
                tab.splice(i, 1);
                i--;
            }else{
                alert("il n'est pas dans vos favoris");
            }
            // else{
            //     tab.push(m);
            //     localStorage.setItem('listM', JSON.stringify(tab));
            // }
        }
    }

    
});