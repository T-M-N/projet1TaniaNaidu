$(document).ready(function () {

  let tab = JSON.parse(localStorage.getItem('listM')) || [];
  console.log(tab);
  //boucle sur tab 
  for (let m of tab) {
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
                  <span class="text-favoris">Retirer des favoris</span>
              </button>
          </div>
      </div>`).data('m', m)
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
        // localStorage.removeItem('listM');
      }
    }

    localStorage.setItem('listM', JSON.stringify(tab));

  });
});