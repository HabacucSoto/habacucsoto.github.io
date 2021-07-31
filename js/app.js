// scroll to menu
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});



// menudetected
window.addEventListener("scroll", function(){
  var pt1 = document.getElementById("pt1");
  var pt2 = document.getElementById("pt2");
  var pt3 = document.getElementById("pt3");
  var pt4 = document.getElementById("pt4");
  if(this.window.scrollY > -1 && this.window.scrollY < 500){
    pt1.classList.add("activo")

    pt2.classList.remove("activo");
    pt3.classList.remove("activo");
    pt4.classList.remove("activo");
  }else if(this.window.scrollY > 500 && this.window.scrollY < 1200){
    pt1.classList.remove("activo");
    pt2.classList.add("activo");

    pt3.classList.remove("activo");
    pt4.classList.remove("activo");
  }else if(this.window.scrollY > 1200 && this.window.scrollY < 1650){
    pt2.classList.remove("activo");
    pt3.classList.add("activo");

    pt1.classList.remove("activo");
    pt4.classList.remove("activo");
  }else if(this.window.scrollY > 1650 && this.window.scrollY < 2000){
    pt3.classList.remove("activo");
    pt4.classList.add("activo");

    pt1.classList.remove("activo");
    pt2.classList.remove("activo");
  }
});


