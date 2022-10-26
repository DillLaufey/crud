function postData(ptitle, prd, pimageURL, pdeveloper) {
  axios
    .post("http://localhost:3000/films", {
      title: ptitle, // hard coded value
      "release-date": prd,
      imageURL: pimageURL,
      developer: pdeveloper,
    })
    .then((response) => {
      window.location.replace("http://127.0.0.1:5500/Web/index.html");
    })
    .catch((error) => {
      console.log(error);
    });
}

function putData(ptitle, prd, pimageURL, pdeveloper, pid) {
  axios
    .put(`http://localhost:3000/films/${pid}`, {
      title: ptitle, // hard coded value
      "release-date": prd,
      imageURL: pimageURL,
      developer: pdeveloper,
    })
    .then((response) => {
      window.location.replace("http://127.0.0.1:5500/Web/index.html");
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteData(pid) {
  axios
    .delete(`http://localhost:3000/films/${pid}`)
    .then((response) => {
      window.location.replace("http://127.0.0.1:5500/Web/index.html");
    })
    .catch((error) => {
      console.log(error);
    });
}
