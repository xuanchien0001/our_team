const domElement = (element) => document.querySelector(element);
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    domElement(".navbar").style.backgroundColor = "#fff";
    domElement(".navbar").classList.add("fixed-top");
    domElement(".nav-brand").style.display = "none";
  } else {
    domElement(".navbar").style.backgroundColor = "transparent";
    domElement(".navbar").classList.remove("fixed-top");
    domElement(".nav-brand").style.display = "block";
  }
});
domElement("#sidebarCollapse").onclick = () => {
  domElement(".container .nav-brand").classList.toggle("d-none");
};
