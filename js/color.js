/*
 * script qui associe la couleur sélectionnée à un élément du dessin
 */
    var colorSelected="#B3B3B3";
    //récupère sous forme de tableau tous les éléments avec la classe couleur
    var color = document.getElementsByClassName('color');
    //récupère sous forme de tableau tous les éléments avec la classe section (dessin)
    var section = document.getElementsByClassName('section');

// boucle permettant de récupérer le code couleur de la couleur sélectionnée pendant de clic
    for (i=0; i<color.length; i++){
        color[i].addEventListener("click",function(){
          colorSelected=this.style.fill; // le code couleur de l'élément est récupéré
          $("#couleur path").attr('class','color');
          $(this).attr('class','color, stroke'); // ajout d'une classe pour mettre une bordure rouge sur la couleur sélectionnée
        },true);
    }

// boucle qui permet d'attribuer la couleur sélectionnée précédemment à l'élément lors du clic de l'utilisateur
    for (i=0; i<section.length; i++){
        section[i].addEventListener("click",function(){
            this.style.fill=colorSelected;
            },true);
    }
