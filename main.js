


// Slider
const slider = document.querySelector(".slider");
let all_item_slider = document.querySelectorAll(".slider > section");
let carousel = document.querySelector(".carousel").clientWidth; //Daryaft-e width

let get_index;    // index
all_item_slider.forEach((element, index) => {
  get_index = index;
  element.style.minWidth = carousel + "px"; //element { min-width: "|carousel|px";}
});
slider.style.width = +carousel * get_index + "px";

function setIndex() {
  let width_data;
  document.querySelector(".controls .selected").classList.remove("selected");
  all_item_slider.forEach((element) => {
    if (element) {
      width_data = element.clientWidth;
    }
  });
  slider.style.transform = "translate(" + sectionIndex * -width_data + "px)";
}

var sectionIndex = 0; //counter
document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    setIndex();
    indicator.classList.add("selected");
  });
});


const rightArrow = document.querySelector(".arrow.right");
const indicatorParents = document.querySelector(".controls ul");

rightArrow.addEventListener("click", function () {
  sectionIndex =
    sectionIndex < all_item_slider.length - 1 ? sectionIndex + 1 : 0;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});

const leftArrow = document.querySelector(".arrow.left");

leftArrow.addEventListener("click", function () {
  sectionIndex =
    sectionIndex > 0 ? sectionIndex - 1 : all_item_slider.length - 1;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
});
// end Slider














//Responsive Menu= Hamburger menu
// Assuming we want to target the first hamburger_menu element:
let hamburger_menu = document.querySelector(".hamburger_menu");
let responsive_menu = document.querySelector(".responsive_menu"); // Assuming there's only one
let close = document.querySelector(".close");

hamburger_menu.addEventListener("click", function() {
  responsive_menu.classList.add("show_menu");
  close.classList.add("show_close");
});

close.addEventListener("click", function() {
  responsive_menu.classList.remove("show_menu");
  close.classList.remove("show_close");
});