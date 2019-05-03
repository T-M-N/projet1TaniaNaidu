'use strict';
$(document).ready(function () {
  let tab = JSON.parse(localStorage.getItem('listM')) || [];

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
              <button type="submit" class="btnFavoris">
              <i class="fas fa-heart-broken"></i> Retirer des favoris
              </button>
          </div>
      </div>`).data('m', m)
      .appendTo('#afficher');
  }

  $("#afficher").on("click", ".btnFavoris", fonctionBtnRetirerFavoris);
});