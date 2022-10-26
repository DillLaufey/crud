axios
  .get("http://localhost:3000/films")
  .then((response) => {
    const arrayData = response.data;
    const parentGrid = document.querySelector("#parentGrid");

    arrayData.forEach((element) => {
      console.log(element);

      const outerDiv = document.createElement("a");
      outerDiv.setAttribute(
        "class",
        "max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl flex flex-col"
      );

      outerDiv.setAttribute("href", `./detail.html?id=${element.id}`);

      const cardImage = document.createElement("img");
      cardImage.setAttribute("class", "h-auto  w-full");
      cardImage.setAttribute("src", element.imageURL);
      cardImage.setAttribute("alt", element.title);

      outerDiv.append(cardImage);

      const innerDiv = document.createElement("div");
      innerDiv.classList.add("p-5");

      const cardTitle = document.createElement("p");
      cardTitle.setAttribute("class", "text-medium mb-5 text-gray-700");
      cardTitle.innerText = element.title;

      const link = document.createElement("a");
      link.setAttribute(
        "class",
        "w-full block text-center rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
      );
      link.setAttribute(
        "href",
        `http://127.0.0.1:5500/Web/update.html?id=${element.id}`
      );
      link.innerText = "Update";

      innerDiv.append(cardTitle, link);
      outerDiv.append(innerDiv);
      parentGrid.append(outerDiv);
    });
  })
  .catch((error) => {
    console.log(error);
    // console.log(error.response.status);
  });
