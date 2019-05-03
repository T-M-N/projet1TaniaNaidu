$(document).ready(function () {

  let tab = JSON.parse(localStorage.getItem('listM')) || [];
  console.log(tab);
  //boucle sur tab 
  for (let m of tab) {
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
              <i class="fas fa-heart-broken"></i>
                  <span class="text-favoris">Retirer des favoris</span>
              </button>
          </div>
      </div>`
    ).data('m', m)
    .appendTo('#afficher');
  }

    
  $("#afficher").on("click", ".btn-favoris", function () {
    //$(this).html("retirer");
     alert("Recharger la page");
    let m = $(this).parents('.container').data('m');

    //console.log('récupéré', m);

    let tab = JSON.parse(localStorage.getItem('listM')) || [];

    for (let i = 0; i < tab.length; i++) {
      if (tab[i].id === m.id) {
        tab.splice(i, 1);
        i--;
      }
    }

    localStorage.setItem('listM', JSON.stringify(tab));

  });
});
