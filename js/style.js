var score = 0
$('[class^=cir]').click(function(evt){
  var num = $(this).attr("data-label")
  // console.log(num)
  score += parseInt(num*10)
  updateGame()
})
function updateGame(){
  $(".score").text("Score: "+ score)
}

function resetGame(){
  score = 0
  updateGame()
  $(".spot").remove()
  $(".target").removeClass("moving")

}

$(window).keydown(function(evt){
  if(evt.key == "r"){
    resetGame()
  }
  if(evt.key == "c"){
    $(".target").toggleClass("moving")
  }
})
$(window).mousemove(function(evt){
  $(".mouseText").text(`Position: ${evt.pageX}, ${evt.pageY}`)
  $(".mouseSymbol").css("left", evt.pageX+"px")
                  .css("top", evt.pageY+"px")
})
$(".target").click(function(evt) {
  var spot = $("<div class='spot'></div>");
  spot.css("left", evt.pageX - $(this).offset().left + "px").css("top", evt.pageY - $(this).offset().top + "px");
  $(this).append(spot);
});
