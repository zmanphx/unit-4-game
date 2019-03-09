$(document).ready(() => {
  $("#apollo").data({
    name: "Apollo",
    isVillian: true,
    attackpower: 0,
    healthscore: 0,
    startingHealth: 120,
    soundfile: ""
  });

  $("#starbuck").data({
    name: "Star Buck",
    isVillian: true,
    attackpower: 0,
    healthscore: 0,
    startingHealth: 100,
    soundfile: ""
  });

  $("#cylone").data({
    name: "Cylone",
    isVillian: true,
    attackpower: 0,
    healthscore: 0,
    startingHealth: 150,
    soundfile: ""
  });

  $("#numberSix").data({
    name: "NumberSix",
    isVillian: true,
    attackpower: 0,
    healthscore: 0,
    startingHealth: 180,
    soundfile: ""
  });

  //Choose Your Fighter

  $(".port").on("click", event => {
    if ($(event.currentTarget.style.border == "")) {
      $(event.currentTarget).css("border", "5px solid yellow");
      console.log(event.currentTarget);

      const $object = $(event.currentTarget);
      $object.data({ isVillian: false });

      // $('#starbuck').clone().appendTo($('#r2c2'));
      // $('#starbuck').remove();
      var r2c2 = $("#r2c2");
      var r2c3 = $("#r2c3");
      var r2c4 = $("#r2c4");

      var rowArr = [r2c2, r2c3, r2c4];
      var mycol = 0;
      $(".port").each(function() {
        console.log($(this.style.border));

        if (this.style.border == "") {
          this.style.border = "5px solid red";
          console.log(rowArr[0]);
          // $(this).clone().appendTo($('#r2c2'));

          $(this)
            .clone()
            .appendTo(rowArr[mycol]);
          $(this).remove();
          mycol++;
        }
      });
    } else {
      console.log(event.currentTarget);
      $(event.currentTarget).clone().appendTo($("#defender"));
      $(event.currentTarget).remove();
    } 
  });




});
