var myIndex3 = 0;
var firstRun = 0;
carousel3();

function carousel3() {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > x.length) {myIndex3 = 1}    
  x[myIndex3-1].style.display = "block";  
  if(firstRun == 0) {
  setTimeout(carousel3, 4000); // Change image every 3 seconds
  firstRun = 1;
  }
  else{
    setTimeout(carousel3, 3000); // Change image every 3 seconds
  }
}