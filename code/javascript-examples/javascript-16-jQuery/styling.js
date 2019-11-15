$(document).ready(function(){
  $("#style-div").addClass("blue");

  $("h1, h2, p").removeClass("blue");
  $("h1, h2, p").toggleClass("blue");

  console.log($("p").css("background-color"));

  $("p").css("background-color", "yellow");
  $("p").css({"background-color": "yellow", "font-size": "200%"});
});