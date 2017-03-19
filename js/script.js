$( document ).ready(function() {

var tab_dessin=["baleine","ane","hibou","perroquet"];
var option="";

// boucle qui affiche tous les dessins disponibles
    for(i=0; i<tab_dessin.length;i++){
        option+='<li><img alt="'+tab_dessin[i]+'" src="images/'+tab_dessin[i]+'.svg"/></li>';
    }
    $("#choice").html(option);

// au moment du clic sur l'un des dessin
$("#choice img").click(function(){
	$("#choice img").css({"background":"transparent"});
      $("#choice img").removeClass("selected");
      $("#choice li").css({"borderColor":"#75A0C6"});
      $(this).addClass("selected").css({"background":"#FFD367"});
      $(this).parent().css({"borderColor":"#FFD367"});
	// affiche le dessin en svg, le script et la partie téléchargement du dessin     
      $("#droit").css("display","block");
      $("#couleur").load("images/palette.svg");
      var dessin=$(this).attr("alt");
      $("#svg").load("index_"+dessin);
      $.getScript("js/color.js");
      $("#download").show();
	$("#reset").css("display","block");

// attribue le dessin à l'auteur du dessin sélectionné
      var tab={"baleine":"nathanfz","ane":"dear_theophilus","hibou":"loveandread","perroquet":"margaux"};
      tab_url={"baleine":"https://openclipart.org/user-detail/nathanfz","ane":"https://openclipart.org/user-detail/dear_theophilus","hibou":"https://openclipart.org/user-detail/loveandread","perroquet":"http://margauxgirard.fr/"};
      for(var key in tab)
      {
        if(key==dessin)
	  {
            var value = tab[key];
        	var url= tab_url[key];
        	$("#auteur").html('<p>Dessin réalisé par <a href="'+url+'" target="_blank" >'+ value+ '</a></p>');
        }
      }
});

// fonction de réinitialisation du dessin
        var reset = document.getElementById('reset');

        function reset(){
            colorSelected="#B3B3B3";
            section.style.fill=colorSelected;
        }

        reset.addEventListener("click",function(){
            for (i=0; i<section.length; i++){
                section[i].style.fill="#B3B3B3";
            }
        },true);

// fonction qui télécharge l'image sur le serveur local de l'utilisateur
        $("#download").click(function(){
           var d= {
                'download_file':$("#filename").val(),
                'content': $("#svg").html(),
            };
            $.post("php/register.php",d,function(data){
              $("#test").html(data);
              var name=$("#test").text();
              if (data!=""){
              window.location = 'php/download.php?file='+name;
            }
            else{
              alert("problème");
            }
          });
        });
});
