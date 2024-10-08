window.addEventListener("scroll", () => {
  // header scroll change
  let header = document.querySelector("header");
  (header.offsetHeight < window.scrollY) ? header.classList.add("header-change") : header.classList.remove("header-change");
});

//rifgtbar toggle
let pull = document.querySelector("header #pull");
pull.onclick = () => {
  let rbar = document.querySelector(".rightbar");
  rbar.classList.add("on");
  window.addEventListener("mouseup", (e) => {
    if(e.target != rbar && e.target.parentNode.parentNode.parentNode != rbar){
      rbar.classList.remove("on");
    }
  });
};