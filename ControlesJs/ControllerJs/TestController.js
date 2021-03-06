﻿
var testController = new function() {
    var that = this;

    // les données, initialisées avec les valeurs par défaut, et avec les commentaires associés
    that.data = {
        idBouton: null, // id du bouton qui va déclencher l'action de test
        idLibelle: null, // id du libelle ou sera affiché les logs de l'action
        donnees: null, // liste de int
        bouttonId: null
    };

    // fonction d'initialisation du controller
    that.init = function (data) {
        // on ajoute dans that.data les données passées en paramètre
        that.data = $.extend(true, {}, that.data, data);

        // initialisation des événements 
        if (!!that.data.idBouton) {
            var bouton = $("#" + that.data.idBouton);
            bouton.click(function()
            {
                action();
                return false;
            });
        }
        if (!!that.data.bouttonId) {
            var btn = $("#" + that.data.bouttonId);
            btn.click(function () {
                secondeAction();
                return false;
            });
        }
    };

    // evenement click sur le bouton
    function action() {
        var lblResultat = $("#" + that.data.idLibelle);
        var now = new Date();
        // on affiche juste la date pour cet exemples
        lblResultat.append("<br/>" + now);
    };


    function secondeAction() {
        var lblResultat = $("#" + that.data.idLibelle);
        // on affiche juste le tableau pour cet exemples
        lblResultat.append("<br/>" + JSON.stringify(that.data.donnees));
    };
};