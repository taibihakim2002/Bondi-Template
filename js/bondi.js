let pag = document.querySelector(".pagination");

let pagArray = Array.from(pag.children);
pagArray.forEach((e) => {
  e.onclick = function (el) {
    el.preventDefault();
    pagArray.forEach((k) => {
      k.classList.remove("disabled");
    });
    e.classList.add("disabled");
  };
});

let searchInputContainer = document.querySelector(".s");
let searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", function () {
  if (searchInputContainer.style.width === "200px") {
    searchInputContainer.style.width = "0px";
  }
  else {
    searchInputContainer.style.width = "200px";
  }
});
