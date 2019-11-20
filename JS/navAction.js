  const mqL = window.matchMedia("(min-width:1024px)");
  const mqM = window.matchMedia("(min-width:768px) and (max-width:1024px)");
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (mqL.matches) {
          if (currentScrollPos <= 0) {
    document.getElementById("navbar").style.top = "0";
  document.getElementById("nav-logo").style.display = "none";
          } else {
    document.getElementById("navbar").style.top = "-32px";
  document.getElementById("clearNav").style.paddingLeft = "0";
  document.getElementById("nav-logo").style.display = "block";
}
}
        if (mqM.matches) {
          if (currentScrollPos <= 0 && mqM.matches) {
    document.getElementById("navbar").style.top = "0";
  document.getElementById("media-nav-img").style.display = "flex";
  document.getElementById("nav-logo").style.display = "none";
          } else {
    document.getElementById("navbar").style.top = "-32px";
  document.getElementById("media-nav-img").style.display = "none";
  document.getElementById("nav-logo").style.display = "block";
}
}
prevScrollpos = currentScrollPos;
}