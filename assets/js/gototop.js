$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).pageYOffset > 150){
      $('#topBtn').fadeIn();
      $('#topBtn').style.display = "flex";
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
