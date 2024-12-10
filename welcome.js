var i = 0;
var images = [];
var time = 1000;

images[0] = 'bg1.jpg';
images[1] = 'bg2.jpg';
images[2] = 'bg3.jpg';

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;


// 

// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }