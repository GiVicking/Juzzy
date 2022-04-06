
// TOGGLE MENU
function openNav() { //Open Nav
  $("#sideNav").css({
    'height': '100%',
    'width' : '100%'
  });
}

function closeNav() { //Close nav
  $("#sideNav").css({
    'height' : '0',
    'width' : '0'
  });
}

$(".menu-icon").click(function(){
  $(this).toggleClass("rotate"); //add rotate on click
  if ( $(".menu-icon").hasClass("rotate")) {
    openNav();
  } else {
    closeNav();
  }
});
