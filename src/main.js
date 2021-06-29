import Planet from "./js/planets.js";
import "bootstrap";
import "./css/styles.css";
import $ from "jquery";

$(document).ready(function () {
  $("#galactic").submit((event) => {
    event.preventDefault();
    let age = $("#userAge").val();
    let planet = $("#planet").val();
    let lifeEx = 72;
    let galacticAge;
    switch (planet) {
    case "mercury":
      galacticAge = new Planet(age, lifeEx);
      $("#spaceAge").text(galacticAge.mercuryAge());
      $("#thePlanet").text(galacticAge.mercuryExp());
      break;
    case "mars":
      galacticAge = new Planet(age, lifeEx);
      $("#spaceAge").text(galacticAge.marsAge());
      $("#thePlanet").text(galacticAge.mercuryExp());
      break;
    case "venus":
      galacticAge = new Planet(age, lifeEx);
      $("#spaceAge").text(galacticAge.venusAge());
      $("#thePlanet").text(galacticAge.venusExp());
      break;
    case "jupiter":
      galacticAge = new Planet(age, lifeEx);
      $("#spaceAge").text(galacticAge.jupiterAge());
      $("#thePlanet").text(galacticAge.jupiterExp());
      break;
    default:
      $(".results").text("Please enter your age/planet!!");
      break;
    }
    $("#enter").hide();
    $("#galactic").hide();
    $(".results").fadeIn();
  });
  $("#again").click(function (event) {
    event.preventDefault();
    $(".results").hide();
    $("#galactic").fadeIn();
    $("#enter").fadeIn();
    $("#planet").val("");
  });
});
