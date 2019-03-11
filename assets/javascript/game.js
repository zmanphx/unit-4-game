$(document).ready(() => {
  var onplaying = true;
  var onpause = false;

  function shuffle() {
    var baseattack = [4, 8, 12, 16, 20];
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
    startingHealth: 200,
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
  var winning = 0;
  var losses = 0;
  //Choose Your Fighter

  reset();

  $("#wins").text(winning);
  $("#loss").text(losses);

  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
      this.sound.play();
    };

    this.stop = function() {
      this.sound.pause();
    };
  }

  var introSound = new sound("assets/javascript/bsgtheme.MP3");
  var bsgAlive = new sound("assets/javascript/bsgAlive.MP3");
  var bsgmerge = new sound("assets/javascript/Merged_bsgth_bsgal.MP3");

  function reset() {
    heroAttackVal = 0;
    heroAttackBase = 0;
    villAttackVal = 0;

    heroStartingH = 0;
    villStartingH = 0;
    fightnumber = 0;
    defenderReady = false;

    attackpower = shuffle();

    $("#apollo").data({ attackpower: attackpower[0] });

    $("#starbuck").data({ attackpower: attackpower[1] });

    $("#cylone").data({ attackpower: attackpower[2] });

    $("#numberSix").data({ attackpower: attackpower[3] });

    WinLoss("");

    $("#fight").text("Let's Play");
    $jb1 = $("#jb1").clone(true, true);
  }

  function WinLoss(result) {
    if (result === "w") {
      winning++;
    }
    if (result === "l") {
      losses++;
    }

    $("#wins").text(winning);
    $("#loss").text(losses);
  }

  $(".port").on("click", function() {
    if ($(event.currentTarget).css("border") == "0px none rgb(255, 255, 255)") {
      $(event.currentTarget).css("border", "5px solid yellow");
      console.log(event.currentTarget);

       bsgmerge.play();
     

      const $object = $(event.currentTarget);
      $object.data({ isVillian: false });
      heroStartingH = $object.data("startingHealth");
      heroAttackVal = $object.data("attackpower");
      heroAttackBase = heroAttackVal;
      $("#health").text(heroStartingH);
      $("#healthAt").text(heroAttackVal);
      $("#fight").text("Choose your Opponent!");

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

          $(this).appendTo(rowArr[mycol]);

          mycol++;
        }
      });
    } else {
      if ($(event.currentTarget).css("border-color") == "rgb(255, 0, 0)") {
        if (heroStartingH <= 0) {
          return;
        }
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

  $("#fight").on("click", function() {
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
        WinLoss("w");
      }
    }

    if (heroStartingH <= 0) {
      WinLoss("l");
      defenderReady = false;
      $("#fight").text("Game Over, You Loose");

      WinLoss("");
    }
  });

  $("#reset").on("click", function() {
    WinLoss("");
    setTimeout(function() {
      $("#jb1").remove();
      $jb1.appendTo(".jumbotron");
      reset();
    });
  });

  var $jb1 = $("#jb1").clone(true, true);
});
