var slide = document.getElementsByClassName("slide");
var div = document.getElementById("block2");
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

for (let i = 0; i < slide.length; i++) {
  slide[i].onclick = function () {
    // đổi màu tất cả thành màu trắng
    for (let j = 0; j < slide.length; j++) {
      slide[j].style.opacity = 0.5;
    }
    this.style.opacity = 1;
    conten(i);
  };
}

var slideimg = document.getElementById("imgslide");
function conten(number) {
  slideimg.style.animation = " none";
  slideimg.offsetHeight;
  switch (number) {
    case 0:
      slideimg.style.backgroundImage = "url('img/sample-1 1.png')";

    case 1:
      slideimg.style.backgroundImage = "url('img/sample-1 1.png')";
      break;
    case 2:
      slideimg.style.backgroundImage = "url('img/sample-1 1.png')";
      break;
  }
  slideimg.style.animation = "slide-in 1s forwards";
}
