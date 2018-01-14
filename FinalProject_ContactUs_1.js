
//---------- for-loop & if...else if...else statements: requirements for Final Project -------------------------*

function changeWidth() {  

  var imgs_ = document.images;

  for (var i = 2; i < 8; i++){     // for-loop: requirement for Final Project
        imgs_[i].style.width = 0.11*screen.availWidth + "px";  // Images width and height loaded set to images
	    imgs_[i].style.height = 0.11*screen.availWidth + "px";
  }
 
 }

function worksOver(image_) {      // if...else if...else statements: required for Final Project

if(image_ === 1){
       document.getElementById("img_1").src = document.images[2].src //  Images/img_1.jpg in imgs_[2] array
 }
else if(image_ === 2){
       document.getElementById("img_1").src = document.images[3].src //  Images/img_2.jpg in imgs_[3] array
 }
else if(image_ === 3){
       document.getElementById("img_1").src = document.images[4].src //  Images/img_3.jpg in imgs_[4] array
 }
else if(image_ === 4){
       document.getElementById("img_1").src = document.images[5].src //  Images/img_4.jpg in imgs_[5] array
 } 
else if(image_ === 5){
       document.getElementById("img_1").src = document.images[6].src //  Images/img_5.jpg in imgs_[6] array
 }
else {
       document.getElementById("img_1").src = document.images[7].src //  Images/img_6.jpg in imgs_[7] array
 }

} 
 
function worksOut(){
       document.getElementById("img_1").src =  "Images/stock-photo-20436670-boy-smiling-after-hitting-pinata.jpg"; // document.images[0].src - does not work on this line because 
}                                                                                                                  // it would be a getElementById() calling upon itself


//----------- Form Validation: requirement for Final Project -------------*

//Advanced Email Check credit-
//By JavaScript Kit (http://www.javascriptkit.com)
//Over 200+ free scripts here!

var testresults
function checkemail(){

// --------- Integrated Forms code from Lab 21 ------------* 

    var x = document.forms["validation"]["firstName"].value;
    if (x == null || x == "") {
        alert("First name needs to be filled out");
        return false;
    }
	x = document.forms["validation"]["lastName"].value;
    if (x == null || x == "") {
        alert("Last name needs to be filled out");
        return false;
    }
	x = document.forms["validation"]["emailcheck"].value;
    if (x == null || x == "") {
        alert("Email needs to be filled out");
        return false;
 

		}

// ---------------------------------------------------------*
	
var str=document.validation.emailcheck.value
var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if (filter.test(str)){
  alert("Thank you for subscribing");
  testresults=true
}
else{
  alert("Please input a valid email address!")
  testresults=false;
}
return (testresults)
}

function checkbae(){
  if (document.layers||document.getElementById||document.all) {
	return checkemail()
}
  else {
	return true
 }
}		


//----------------- Change Background colors in div in class: main_box -----------------*
//------------------- myFunction is part of Event Listener function on the HTML file --*

function myFunction(w1, pid, cid1, cid2, cid3, cid4) {

      document.getElementById("w1").style.backgroundColor = 'purple';
	  document.getElementById('pid').innerHTML = "Change the background color of this webpage to white or gold?";	  
      document.getElementById('pid').style.color = "white";
      document.getElementById('cid1').style.color = "white";
      document.getElementById('cid2').style.color = "white";
      document.getElementById('cid3').style.color = "white";	  
      document.getElementById('cid4').style.color = "white";	  
}
function myFunction1(w1, pid, cid1, cid2, cid3, cid4) {

      document.getElementById("w1").style.backgroundColor = 'white';
      document.getElementById('pid').innerHTML = "Change the background color of this webpage to purple or gold?";
      document.getElementById('pid').style.color = "purple";
      document.getElementById('cid1').style.color = "purple";
      document.getElementById('cid2').style.color = "purple";
      document.getElementById('cid3').style.color = "purple";	  
      document.getElementById('cid4').style.color = "purple";	
}	
function myFunction2(w1, pid, cid1, cid2, cid3, cid4) {

      document.getElementById("w1").style.backgroundColor = 'gold';
      document.getElementById('pid').innerHTML = "Change the background color of this webpage to purple or white?";
      document.getElementById('pid').style.color = "black";
      document.getElementById('cid1').style.color = "black";
      document.getElementById('cid2').style.color = "black";
      document.getElementById('cid3').style.color = "black";	  
      document.getElementById('cid4').style.color = "black";	
}
