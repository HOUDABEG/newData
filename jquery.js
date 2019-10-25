$(document).ready(function () {
  if (window.jQuery) {

    //Fonction permettant de changer le cursor lors d'une requete ajax
    $(document).ajaxStart(function() {
			$(document.body).css({'cursor' : 'wait'});
		}).ajaxStop(function() {
				$(document.body).css({'cursor' : 'default'});
		});
    //Fonction permettant de mettre les bouton en jaune et d'enlever ceux deja jauni
    $(document).on("click",".criteres input[type=button]",function(){
      // On attribut l'element clicker a une variable button
  		var button = $(this);
      //On recuperer le name de l'élément cliquer dans critere
  		var critere = button.prop("name");
  		if (button.prop("name") != "buttonLocalisation") {
        //Each sert a visualiser chaque element de type input [name=buttonTYPE] et le $(this) les récupère
  			$("input[name = "+critere+"]").each(function(){
  				if($(this).css("background-color") == "rgb(255, 255, 0)" && $(this).val() != button.val()){
  					$(this).css("background-color","#FFFFFF"); //Changement de couleur
  					$(this).attr("data",""); //On enleve la valeur de l'attribut du button "data"
  				}
  			})
  		}
  		if(button.css("background-color") == "rgb(255, 255, 0)"){
  			button.css("background-color","#FFFFFF");
  			button.attr("data","");
  		}else {
  			button.css("background-color","yellow");
  			button.attr("data","check"); // On insert la valeur check dans l'attribut data
  		}
    });
      /***************************************************** */
      $(document).on("click",".menu, .menu-visible",function(){
      console.log("test");
      element = $(".menu-visible");
      container = $(".container");
      if (element.hasClass('menu-cacher')) {
        element.removeClass('menu-cacher');
        container.addClass('flou');
      }else{
        element.addClass('menu-cacher');
        container.removeClass('flou');
      }
      });


    
  }

  /*  Faire une fonction pour vérifier les boutons avant de passer a la page suivante */
  // $( ".validation" ).click(function( event ) {
  //
  //   if (!verificationAvantValidation()) {
  //     event.preventDefault();
  //   }else {
  //   }
  // });

})
//Mettre les fonctions en dehors du document ready
function verificationAvantValidation(){
  if (!checkBoutonCritere("buttonCriteres")) return false;
  if (!checkBoutonCritere("buttonAnnee")) return false;
  if (!checkBoutonCritere("buttonLocalisation")) return false;
    return true;
  // if (checkBoutonCritere("buttonCriteres") && checkBoutonCritere("buttonAnnee") && checkBoutonCritere("buttonLocalisation")) {
  //   return true;
  // }else {
  //   return false;
  // }

}
async function checkBoutonCritere (critere){
  $("input[name = "+critere+"]").each(function(){
    if ($(this).attr("data")=="check") {
      return true;
    }
  })
  return false;
}


