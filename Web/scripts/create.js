const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInp = document.querySelector("#title");
  const rdInp = document.querySelector("#rd");
  const imageInp = document.querySelector("#image");
  const developerInp = document.querySelector("#developer");

  postData(titleInp.value, rdInp.value, imageInp.value, developerInp.value);
});
