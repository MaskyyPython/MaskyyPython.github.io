document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    let header = document.querySelector('header');
    header.classList.remove('hide');

    window.onscroll = function () {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop < lastScrollTop) {
            header.classList.remove('hide');
        } else {
            header.classList.add('hide');
        }
        lastScrollTop = currentScrollTop;
    };

    // Sélectionnez tous les boutons avec la classe 'btn_img'
    var btns = document.getElementsByClassName("image-container");
    var span = document.getElementsByClassName('close');

    // Fonction pour ouvrir le modal correspondant
    var openModal = function () {
        var modalId = this.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        modal.style.display = "block";

    }

    // Attachez l'événement click à chaque bouton
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', openModal);
    }

    var closeModal = function () {
        var modalId = this.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        modal.style.display = "none";
    }

    // Attachez l'événement click à chaque élément <span>
    for (var i = 0; i < span.length; i++) {
        span[i].addEventListener('click', closeModal);
    }


    // Gestionnaire d'événements pour fermer les modals
    window.onclick = function (event) {
        var modals = document.getElementsByClassName('modal');
        for (var i = 0; i < modals.length; i++) {
            if (event.target == modals[i]) {
                modals[i].style.display = "none";
            }
        }
    }
    
    var images = [
        "images/pub/doliprane.png",
        "images/pub/roymerlin.png",
        "images/pub/avion.png",
        "images/pub/promo.png",
		"images/pub/macron.png"
    ];

    var x = 0; // Index de l'image actuelle

    // Fonction pour changer l'image de la bannière
    function changeBanniereImage() {
        if (x === images.length - 1) {
            x = 0;
        } else {
            x = x + 1;
        }
        document.getElementById("banniereImage").src = images[x];
    }

    // Appel initial de la fonction pour charger la première image
    changeBanniereImage();

    // Changement de l'image toutes les x secondes
    setInterval(changeBanniereImage, 3*1000); // 5000 millisecondes = 5 secondes
});
