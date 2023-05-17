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

    const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);
    const name = json.author;
    fetchName(name)
      .then((test) => test.json())
      .then((text) => {
        const span = document.createElement("span");
        span.classList.add("span");
        span.textContent = text.age;
        console.log(text.age);
        section.appendChild(span);
      });

    const button = document.createElement("input");
    button.value = "Refresh";
    button.type = "button";
    button.classList.add("citation__button");
    section.appendChild(button);

    button.addEventListener("click", () => {
      location.reload();
    });
  });
