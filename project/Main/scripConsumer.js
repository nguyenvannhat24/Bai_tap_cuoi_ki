var subcategory = document.getElementsByName("subcategory");
var Size = document.getElementsByName("Size");
var color = document.getElementsByName("Color");
var clear = document.getElementById("clear");
clear.onclick = function () {
  color.forEach((radio) => (radio.checked = false));
  Size.forEach((radio) => (radio.checked = false));
  subcategory.forEach((radio) => (radio.checked = false));
};
var menu = document.getElementsByClassName("Menu");
for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function () {
    // đổi màu tất cả thành màu trắng
    for (let j = 0; j < menu.length; j++) {
      menu[j].style.color = "white";
    }
    this.style.color = "red";
  };
}
