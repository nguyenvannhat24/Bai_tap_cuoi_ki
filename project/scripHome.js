var slide = document.getElementsByClassName("slide");
var div = document.getElementById("block2");
var menu = document.getElementsByClassName("Menu");
var subcategory = document.getElementsByName("subcategory");
var Size = document.getElementsByName("Size");
var color = document.getElementsByName("Color");
var clear = document.getElementById("clear");
var signin = document.getElementsByClassName("singin");

for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function () {
    // đổi màu tất cả thành màu trắng
    for (let j = 0; j < menu.length; j++) {
      menu[j].style.color = "white";
    }
    this.style.color = "red";
    if (i == menu.length - 1) window.location.href = "ConsumersPage.html";
    if (i == 4) {
      sessionStorage.setItem("isLoggedIn", "false");
      window.location.href = "homePage.html";
    }
    if (i == 2)
      window.location.href =
        "cuoioiioioioi ki/toolbox-quickorder/myaccount.html";
    if (i == 0) window.location.href = "openMenu.html";
  };
}

window.onload = function () {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    for (let i = 0; i < menu.length; i++) {
      menu[i].style.display = "none"; // Ẩn phần tử menu
    }
    for (let j = 0; j < signin.length; j++) {
      signin[j].style.fontSize = "12px";
      signin[j].style.display = "block"; // Hiển thị phần tử signin.
    }
    document.getElementById("giohang").style.display = "flex";
  }
};

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
// phần thêm giỏ hàng
function addCart() {
  var quantity = document.getElementsByClassName("quantity");
  var mycart = document.getElementById("mycart");
  var soluong = 0;
  for (let i = 0; i < quantity.length; i++) {
    soluong = soluong + parseInt(quantity[i].value, 10);
  }
  console.log(soluong);
  mycart.textContent = "Tổng số lượng: (" + soluong + ")";
}

function xoa() {
  var subcategory = document.getElementsByName("subcategory");
  var Size = document.getElementsByName("Size");
  var color = document.getElementsByName("Color");
  var clear = document.getElementById("clear");
  clear.onclick = function () {
    color.forEach((radio) => (radio.checked = false));
    Size.forEach((radio) => (radio.checked = false));
    subcategory.forEach((radio) => (radio.checked = false));
  };
}

// phần check loign
var Name = document.getElementById("Name");
var Passwork = document.getElementById("Password");
var btnLogin = document.getElementById("btnLogin");
btnLogin.onmousedown = function () {
  // Kiểm tra xem có bỏ trống cái nào không
  if (Name.value.trim() === "" || Passwork.value.trim() === "") {
    if (Name.value.trim() === "") {
      Name.style.border = "2px solid red";
      Name.focus();
    } else {
      Name.style.border = "";
    }

    if (Passwork.value.trim() === "") {
      Passwork.style.border = "2px solid red";
      Passwork.focus();
    } else {
      Passwork.style.border = "";
    }
  } else {
    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href = "homePage.html";
  }
};
function returnHome() {
  window.location.href = "homePage.html";
}
function maskets() {
  window.location.href = "Product-icon.html";
}
// // Hàm đăng xuất
// function logout() {
//   sessionStorage.removeItem("isLoggedIn");
//   window.location.href = "login.html"; // Chuyển về trang đăng nhập
// }
// document.getElementById("Logo").onclick = function () {
//   window.location.href = "homePage.html";
// };
function product() {
  window.location.href = "openMenu.html";
}
