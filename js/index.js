//scroll event
window.onscroll = function(){
  scrollToTop();
}
function scrollToTop() {
  if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
    document.getElementById("topButton").style.display = "block"; //display the button after scrolling
  }
  else {
    document.getElementById("topButton").style.display = "none"; //do not display button
  }
}


//tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover({placement:"top"});
});

//modal popup after clicking
var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("email");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}
