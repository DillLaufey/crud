const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");

axios
  .get(`http://localhost:3000/films/${myParam}`)
  .then((response) => {
    const titleInp = document.querySelector("#title");
    const rdInp = document.querySelector("#rd");
    const imageInp = document.querySelector("#image");
    const developerInp = document.querySelector("#developer");

    titleInp.value = response.data.title;
    rdInp.value = response.data["release-date"];
    imageInp.value = response.data.imageURL;
    developerInp.value = response.data.developer;
  })
  .catch((error) => {
    console.log(error);
  });

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInp = document.querySelector("#title");
  const rdInp = document.querySelector("#rd");
  const imageInp = document.querySelector("#image");
  const developerInp = document.querySelector("#developer");

  putData(
    titleInp.value,
    rdInp.value,
    imageInp.value,
    developerInp.value,
    myParam
  );
});
