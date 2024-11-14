document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử ellipse12 và ellipse13
  const ellipse12 = document.getElementById("ellipse12");
  const ellipse13 = document.getElementById("ellipse13");

  // Hàm xử lý khi click vào ellipse12
  ellipse12.addEventListener("click", function () {
    ellipse12.classList.add("selected");
    ellipse13.classList.remove("selected");
  });

  // Hàm xử lý khi click vào ellipse13
  ellipse13.addEventListener("click", function () {
    ellipse13.classList.add("selected");
    ellipse12.classList.remove("selected");
  });
});

document.querySelector(".cvv-input").addEventListener("input", function () {
  var cvvInput = this;
  var cvvError = document.querySelector(".cvv-error");

  // Lấy giá trị nhập vào
  var cvvValue = cvvInput.value;

  // Kiểm tra nếu giá trị không phải là số hợp lệ hoặc có hơn 3 chữ số
  if (!/^\d{1,3}$/.test(cvvValue)) {
    cvvError.style.display = "inline"; // Hiển thị thông báo lỗi
  } else {
    cvvError.style.display = "none"; // Ẩn thông báo lỗi
  }
});

// Lắng nghe sự kiện click cho từng nút
document.querySelector(".rec61").addEventListener("click", function () {
  alert("");
});

document.querySelector(".rec60").addEventListener("click", function () {
  alert("");
});

document.querySelector(".rec22").addEventListener("click", function () {
  alert("");
});

document.querySelector(".group52").addEventListener("click", function () {
  alert("");
});

function returnhome() {
  window.location.href = "../homePage.html";
}
