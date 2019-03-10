$(document).ready(() => {
  function shuffle() {
    var baseattack = [4, 8, 12, 16];
    var i = 0,
      j = 0,
      temp = null;
    for (i = baseattack.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = baseattack[i];
      baseattack[i] = baseattack[j];
      baseattack[j] = temp;
    }
    return baseattack;
  }

  var attackpower = shuffle();

  $("#apollo").data({
    name: "Apollo",
    isVillian: true,
    attackpower: attackpower[0],
    healthscore: 0,
    startingHealth: 120,
    soundfile: ""
  });

  $("#starbuck").data({
    name: "Star Buck",
    isVillian: true,
    attackpower: attackpower[1],
    healthscore: 0,
    startingHealth: 100,
    soundfile: ""
  });

  $("#cylone").data({
    name: "Cylone",
    isVillian: true,
    attackpower: attackpower[2],
    healthscore: 0,
    startingHealth: 150,
    soundfile: ""
  });

  $("#numberSix").data({
    name: "NumberSix",
    isVillian: true,
    attackpower: attackpower[3],
    healthscore: 0,
    startingHealth: 180,
    soundfile: ""
  });

  var heroAttackVal = 0;
  var heroAttackBase = 0;
  var villAttackVal = 0;

  var heroStartingH = 0;
  var villStartingH = 0;
  var fightnumber = 0;
  var defenderReady = false;
  //Choose Your Fighter

  $(".port").on("click", event => {
    if ($(event.currentTarget).css("border") == "0px none rgb(255, 255, 255)") {
      $(event.currentTarget).css("border", "5px solid yellow");
      console.log(event.currentTarget);

      const $object = $(event.currentTarget);
      $object.data({ isVillian: false });
      heroStartingH = $object.data("startingHealth");
      heroAttackVal = $object.data("attackpower");
      heroAttackBase = heroAttackVal;
      $("#health").text(heroStartingH);
      $("#healthAt").text(heroAttackVal);
      $("#fight").text("Choose your Opponent!");
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
            //  .clone(true)
            .appendTo(rowArr[mycol]);
          // $(this).remove();
          mycol++;
        }
      });
    } else {
      if ($(event.currentTarget).css("border-color") == "rgb(255, 0, 0)") {
        $("#defender")
          .parent()
          .find(".port")
          .remove();
        $(event.currentTarget)
          //.clone()
          .appendTo($("#defender"));
        defenderReady = true;
        villStartingH = $(event.currentTarget).data("startingHealth");
        villAttackVal = $(event.currentTarget).data("attackpower");
        $("#healthEnemy").text(villStartingH);
        $("#healthEnemyAt").text(villAttackVal);
        $("#fight").text("Click to Attack!");
        fightnumber++;
        //  $(event.currentTarget).remove();
      }
    }
  });

  $("#fight").on("click", event => {
    if (defenderReady == false) {
      return;
    }

    //hit enemy decrease enemy health by attackpower
    villStartingH = villStartingH - heroAttackVal;
    $("#healthEnemy").text(villStartingH);

    heroAttackVal = heroAttackVal + heroAttackBase;
    heroStartingH = heroStartingH - villAttackVal;

    $("#health").text(heroStartingH);
    $("#healthAt").text(heroAttackVal);

    if (villStartingH <= 0) {
      defenderReady = false;
      $("#defender")
        .parent()
        .find(".port")
        .remove();
      if (fightnumber < 3) {
        $("#fight").text("Choose your next Opponent!");
      } else {
        $("#fight").text("You Defeated All, You Win!");
      }
    }

    if (heroStartingH <= 0) {
      $("#fight").text("Game Over, You Loose");
      defenderReady = false;
    }

    //increase attack power by base
    // write to html;

    //decrease hero health by enemy attackpower;
    //write to html
    // if healt of hero is reaches zero or less game over.
    //if health of villian is zero or less choose next villian
  });
});
