$(document).ready(function () {
    $("#hasard").html(
        `<button type="submit" class="btn-refresh"><i class="fas fa-heart-broken"></i> Choisir une autre musique</button>`
    );
    function aleatoire() {
      
            let tab = JSON.parse(localStorage.getItem('listM')) || [];
            
            let index = Math.floor(Math.random() * tab.length);
            
            if (tab) { 

            let m = tab[index];

            $(`<div class="container">
                    <div  class="main">
                        <div class="album">
                            <img width="200px" src="${m.album.cover_big}"/><br>
                            <span class="nomArtiste">Artiste : ${m.artist.name}</span><br>
                            <span class="nomArtiste">Titre : ${m.title}</span><br>
                            <span class="nomArtiste">Album : ${m.album.title}</span><br>
                        </div>
                         <div class="preview">
                                <audio controls src="${m.preview}"></audio>
                        </div><br>
                        <button type="submit" class="btn-favoris">
                        <i class="fas fa-heart"></i>
                        <span class="text-favoris">Retirer des favoris</span>
                    </button>
                        </div>
                    </div>`)
                    .data('m', m)
                    .prependTo("#hasard");
           	}
           
        
    }

    aleatoire();
    
    $("#hasard").on("click", ".btn-favoris", function () {
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