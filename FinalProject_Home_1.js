function changeVideoSize(size, sizeIt, sizeVid, pid){
if(size == 'larger'){
    document.getElementById(sizeVid).style.width = "900px";                  // Change width of video
    document.getElementById(sizeVid).style.height = "550px";                 // Change height of video
    document.getElementById(pid).innerHTML = "Cursor OFF Video to Reduce";   // Instruction what to do with cursor
    document.getElementById(sizeIt).style.height = "2175px";                 // Change height in #main_box in CSS file
  }
else {
    document.getElementById(sizeVid).style.width = "300px";                  // Change back width of video
    document.getElementById(sizeVid).style.height = "150px";                 // Change back height of video
    document.getElementById(pid).innerHTML = "Cursor OVER Video to Enlarge"; // Instruction what to do with cursor
    document.getElementById(sizeIt).style.height = "1776px";                 // Change back height in #main_box in CSS file
  }
}
