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
    if (i == 3) window.location.href = "login.html";
  };
}
document.getElementById("Logo").onclick = function () {
  window.location.href = "homePage.html";
};

var moreinfor = document.getElementsByClassName("moreinfor");
var infor = document.getElementById("inforProduct");
var contains = document.getElementById("contain");
for (let i = 0; i < moreinfor.length; i++) {
  moreinfor[i].onclick = function (event) {
    event.stopPropagation(); // Ngăn sự kiện click lan truyền lên document
    switch (i) {
      case 1:
        document.querySelector("#inforProduct img").src = "img/7.png";
        break;
      case 2:
        document.querySelector("#inforProduct img").src = "img/8..png";
        break;
    }
    infor.style.display = "block"; // Hiển thị khối khi nhấp vào nút "moreinfor"
    contains.style.opacity = 0.5;
    // Thêm sự kiện click ngoài khối khi hiển thị
    document.addEventListener("click", outsideClickListener);
  };
}

function outsideClickListener(event) {
  // Kiểm tra nếu nhấp ngoài khối
  if (!infor.contains(event.target)) {
    console.log("Bạn đã nhấp ra ngoài khối!");
    infor.style.display = "none"; // Ẩn khối khi nhấp ra ngoài
    contains.style.opacity = 1;
    // Loại bỏ sự kiện click ngoài khối sau khi ẩn khối
    document.removeEventListener("click", outsideClickListener);
  }
}
var signIn = document.querySelectorAll(".login button");
for (let i = 0; i < signIn.length; i++) {
  signIn[i].onclick = function () {
    window.location.href = "login.html";
  };
}
