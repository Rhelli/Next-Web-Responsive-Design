function showMobNav() {
  var x = document.getElementById("mobNav");
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function hideMobNav() {
  var j = document.getElementById("mobNav");
  if (j.style.display == "flex") {
    j.style.display = "none";
  } else {
    j.style.display = "flex";
  }
}  