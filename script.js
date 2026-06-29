//DOM elements
document.getElementById("cursor").style.display = "inline-block";

//Blinking cursor effect
setInterval(function() {
  var cursor = document.getElementById("cursor");
  if (cursor.style.visibility === "hidden") {
    cursor.style.visibility = "visible";
  } else {
    cursor.style.visibility = "hidden";
  }
}, 500);

//Music player animation

//Logic to disable animations if the user prefers reduced motion

// const disableAnimations = false; // Set to true to disable animations

// if (!disableAnimations) {
//     //Blinking cursor effect
//     setInterval(function() {
//     var cursor = document.getElementById("cursor");
//     if (cursor.style.visibility === "hidden") {
//         cursor.style.visibility = "visible";
//     } else {
//         cursor.style.visibility = "hidden";
//     }
//     }, 500);
// }
// else {
//     document.getElementById("cursor").style.display = "none";
// }