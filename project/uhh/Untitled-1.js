document.querySelectorAll(".btn").forEach(function (button) {
  button.addEventListener("click", function () {
    alert(button.textContent + " clicked");
  });
});

document.querySelector(".group52").addEventListener("click", function () {
  alert("Group 52 clicked");
});

document.querySelector(".group53").addEventListener("click", function () {
  alert("Group 53 clicked");
});

document.querySelector(".rec61").addEventListener("click", function () {
  alert("Rec61 clicked");
});

document.querySelector(".rec60").addEventListener("click", function () {
  alert("Rec60 clicked");
  // window.location.href = '';
});

document.querySelector(".rec22").addEventListener("click", function () {
  alert("Rec22 clicked");
  // window.location.href = '';
});

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    alert(`Searching for: ${searchTerm}`);
  } else {
    alert("Please enter a search term!");
  }
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchButton.click();
  }
});
function returnhome() {
  window.location.href = "../homePage.html";
}
