function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

$(document).ready(function () {
  $(".menu-burger__header").click(function () {
    $(".menu-burger__header").toggleClass("open-menu");
    $(".header__nav").toggleClass("open-menu");
    $("body").toggleClass("fixed-page");
  });
});
