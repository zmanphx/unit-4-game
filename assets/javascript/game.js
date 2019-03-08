$(document).ready(() => {
  
  

 $('#apollo').data({"name":'Apollo',"isVillian":true,"attackpower":0, "healthscore": 0,"startingHealth":120, "soundfile":"" });
 
 $('#starbuck').data({"name":'Star Buck',"isVillian":true,"attackpower":0, "healthscore": 0,"startingHealth":100, "soundfile":"" });

 $('#cylone').data({"name":'Cylone',"isVillian":true,"attackpower":0, "healthscore": 0,"startingHealth":150, "soundfile":"" });
 
 $('#numberSix').data({"name":"NumberSix","isVillian":true,"attackpower":0, "healthscore": 0,"startingHealth":180, "soundfile":"" });





//Choose Your Fighter

$('.port').on('click', event => {
    $(event.currentTarget).css('border','5px solid red')
     console.log(event.currentTarget);
       
     const $object = $(event.currentTarget);
     console.log($('#apollo').data("isVillian"));
     $object.data({"startingHealth":25});
      
      
       console.log($('#apollo').data("startingHealth"));
       console.log($('#numberSix').data("startingHealth"))
  });









});
