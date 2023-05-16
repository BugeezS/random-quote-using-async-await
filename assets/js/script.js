const section = document.querySelector(".citation");

fetch("https://thatsthespir.it/api")
  .then((Response) => Response.json())
  .then((json) => {
    const picture = document.createElement("img");
    picture.src = json.photo;
    picture.classList.add("citation__photo");
    section.appendChild(picture);

    const quote = document.createElement("p");
    quote.textContent = json.quote;
    quote.classList.add("citation__quote");
    section.appendChild(quote);

    const author = document.createElement("p");
    author.textContent = json.author;
    author.classList.add("citation__author");
    section.appendChild(author);

    const button = document.createElement("input");
    button.value = "Refresh";
    button.type = "button";
    button.classList.add("citation__button");
    section.appendChild(button);

    button.addEventListener("click", () => {
      location.reload();
    });
  });
