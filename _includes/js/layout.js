
// function to scroll page when user scrolls
window.onscroll = function() {scrollFunction()};


var header = document.getElementById("header");
var sticky = header.offsetTop;


//
function scrollFunction() {

  if (window.pageYOffset > sticky) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
}
