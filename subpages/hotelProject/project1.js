document.getElementById("title").innerHTML = document.title;

//Constuctor Objects
function Hotels(name, star, roomsTotal, roomsBooked){
  this.names = name;
  this.stars = star;
  this.rooms = roomsTotal;
  this.booked = roomsBooked;
  this.checkAval = function() {
    return this.rooms - this.booked;
  }
};
var hote0 = new Hotels("Sakura Hotel", "&#9734 &#9734 &#9734 &#9734 &#9734", 101, 1);
var hote1 = new Hotels("Plumeria Hotel", "&#9734 &#9734", 84, 1);
var hote2 = new Hotels("WaterLily Hotel", "&#9734 &#9734 &#9734 &#9734", 57, 1);
var hote3 = new Hotels("Orchid Hotel", "&#9734 &#9734 &#9734", 43, 1);

//Loop hotels 10times
var count;
var bookedSakura;
var leftSakura;
var bookedPlumeria;
var leftPlumeria;
var bookedWater;
var leftWater;
var bookedOrchid;
var leftOrchid;
for (count = 0; count < 10; count++) {
  var ranNum = Math.round(Math.random()*3);
  console.log(ranNum);
    switch (ranNum) {
      case (0):
        bookedSakura = hote0.booked;
        leftSakura = hote0.checkAval();
        hote0.booked++;
        break;

      case (1):
        bookedPlumeria = hote1.booked;
        leftPlumeria = hote1.checkAval();
        hote1.booked++;
        break;

      case (2):
        bookedWater = hote2.booked;
        leftWater = hote2.checkAval();
        hote2.booked++;
        break;

      case (3):
        bookedOrchid = hote3.booked;
        leftOrchid = hote3.checkAval();
        hote3.booked++;
        break;
      default: "Error";
    };

//use function to display info
  function getResult(hotelName, hotelStars, hotelRoom, hotelBooked, hotelLeft){
    var msg = "<b>" + hotelName + "</b><br/>" + hotelStars +  "<br/>Total Rooms: " + hotelRoom + "<br/> Rooms booked: " + hotelBooked + "<br/> Available rooms: " + hotelLeft;
    return msg;
    }
  var infoSakura = getResult("Sakura Hotel", "&#9734 &#9734 &#9734 &#9734 &#9734", 101, bookedSakura, leftSakura);
  document.getElementById("sakura").innerHTML = infoSakura;
  var infoPlumeria = getResult("Plumeria Hotel", "&#9734 &#9734", 84, bookedPlumeria, leftPlumeria);
  document.getElementById("plumeria").innerHTML = infoPlumeria;
  var infoWater = getResult("WaterLily Hotel", "&#9734 &#9734 &#9734 &#9734", 57, bookedWater, leftWater);
  document.getElementById("water").innerHTML = infoWater;
  var infoOrchid = getResult("Orchid Hotel", "&#9734 &#9734 &#9734", 43, bookedOrchid, leftOrchid);
  document.getElementById("orchid").innerHTML = infoOrchid;
};

//date
var today = new Date();
var dateNow = today.toDateString();
document.getElementById("date").innerHTML = dateNow + " , " + document.lastModified;


//load event
var popUp = "<div class='header'><a id='close' href='#'>Close X</a></div>";
popUp += "<div id='msgNote'><h2>Thank you for visiting!</h2>";
popUp += "<hr/> As a thank you, enjoy 10% off all rooms when you book with us today. <br/>Special promotion ends at 11:59pm today! <br/><br/>";
popUp += "Book your stay now!</div>";
var elNote = document.createElement("div");
elNote.setAttribute("id","note");
elNote.innerHTML = popUp;
document.body.appendChild(elNote);
function dismissNote(){
  document.body.removeChild(elNote);
}
var elClose = document.getElementById("close");
elClose.addEventListener("click",dismissNote,false);


//scroll event
window.onscroll = scrollToTop;
function scrollToTop() {
  if (document.documentElement.scrollTop > 200) { //if doesnt work for browser, document.body.scrollTop > 100
    document.getElementById("topButton").style.display = "block"; //display the button after scrolling
  }
  else {
    document.getElementById("topButton").style.display = "none"; //do not display button
  }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
};



//popup after clicking
// Get the modal1
var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("reserve1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// Get the modal2
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("reserve2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// Get the modal3
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn3 = document.getElementById("reserve3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// Get the modal4
var modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
var btn4 = document.getElementById("reserve4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal
btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
}
