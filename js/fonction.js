function fonctionBtnRetirerHome() {
    let $button = $(this);
    let m = $button.parents('.container').data('m');
    let tab = [];
    if (localStorage.getItem('listM') == null) {
        tab.push(m);
        localStorage.setItem('listM', JSON.stringify(tab));
    } else {
        tab = JSON.parse(localStorage.getItem('listM'));
        let supprime = false;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id === m.id) {
                tab.splice(i, 1);
                supprime = true;
                break;
            }
        }

        if (supprime === false) {
            tab.push(m);
        }
        localStorage.setItem('listM', JSON.stringify(tab));
    }

    $button.toggleClass("active");

    if ($button.hasClass("active")) {
        $button.html('<i class="fas fa-heart"></i> Ajouter au favoris');
    } else {
        $button.html('<i class="fas fa-heart-broken"></i> Retirer des favoris');
    }
}

function fonctionBtnRetirerRecherche() {
    let $button = $(this);
    let m = $button.parents('.container').data('m');
    let tab = [];
    if (localStorage.getItem('listM') == null) {
        tab.push(m);
        localStorage.setItem('listM', JSON.stringify(tab));
    } else {
        tab = JSON.parse(localStorage.getItem('listM'));
        let supprime = false;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id === m.id) {
                tab.splice(i, 1);
                supprime = true;
                break;
            }
        }

        if (supprime === false) {
            tab.push(m);
        }
        localStorage.setItem('listM', JSON.stringify(tab));
    }

    $button.toggleClass("active");

    if ($button.hasClass("active")) {
        $button.html('<i class="fas fa-heart-broken"></i> Retirer des favoris');
    } else {
        $button.html('<i class="fas fa-heart"></i> Ajouter au favoris');
    }
}

function fonctionBtnRetirerFavoris() {
    let $button = $(this);
    let m = $button.parents('.container').data('m');
    let tab = [];
    if (localStorage.getItem('listM') == null) {
        tab.push(m);
        localStorage.setItem('listM', JSON.stringify(tab));
    } else {
        tab = JSON.parse(localStorage.getItem('listM'));
        let supprime = false;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id === m.id) {
                tab.splice(i, 1);
                supprime = true;
                break;
            }
        }

        if (supprime === false) {
            tab.push(m);
        }
        localStorage.setItem('listM', JSON.stringify(tab));
    }
    
    $button.toggleClass("active");

    if ($button.hasClass("active")) {
        $button.html('<i class="fas fa-heart"></i> Ajouter au favoris');
    } else {
        $button.html('<i class="fas fa-heart-broken"></i> Retirer des favoris');
    }

}
