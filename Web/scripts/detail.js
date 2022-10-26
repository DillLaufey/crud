const param = new URLSearchParams(window.location.search);

id = param.get("id");
axios.get(`http://localhost:3000/films/${id}`).then((res) => {
  console.log(res);
  const mainDiv = document.querySelector(".detailContainer");
  const card = document.createElement("div");
  const title = document.createElement("p");
  title.innerHTML = res.data.title;
  const image = document.createElement("img");
  image.setAttribute("src", res.data.imageURL);
  const date = document.createElement("p");
  date.innerHTML = res.data["release-date"];
  const developer = document.createElement("p");
  developer.innerHTML = res.data.developer;

  const updateBtn = document.createElement("a");
  updateBtn.setAttribute("class", "");
  updateBtn.setAttribute("href", `./update.html?id=${id}`);
  updateBtn.innerHTML = "Update";
  const deleteBtn = document.createElement("a");
  deleteBtn.setAttribute("href", `./delete.html?id=${id}`);
  deleteBtn.innerHTML = "Delete";

  card.append(title, image, date, developer, updateBtn, deleteBtn);
  mainDiv.append(card);
});
