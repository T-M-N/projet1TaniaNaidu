$(document).ready(function () {
   // alert();
$(`<button type="submit" class="refresh">Rafraîchir le musique</button>`).appendTo('#hasard');

    function aleatoire(){
        let tab = JSON.parse(localStorage.getItem('listM')) || [];
        var index = Math.floor(Math.random() * tab.length);

        $("#hasard").html(index);
    }

    aleatoire();

});