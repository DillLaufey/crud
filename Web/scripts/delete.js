const myparams = new URLSearchParams(window.location.search);
let id = myparams.get("id");
console.log(id);

axios.get(`http://localhost:3000/films/${id}`).then(() => {
  const deleteBtn = document.querySelector("#deleteBtn");
  console.log(id);
  deleteBtn.addEventListener("click", () => {
    deleteData(id);
  });
});
