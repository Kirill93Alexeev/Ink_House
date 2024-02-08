// получить данные из БД
import { data as art } from "/data.js";

// рендер карточки
renderCard(art);

// передать карточки из БД в карточки
function renderCard(data) {
  data.forEach((el) => {
    createCard(el);
  });
}

// отобразить карточки на странице
function createCard(obj) {
  const container = document.querySelector(".catalog");

  // создаем карточку
  const card = document.createElement("article");
  card.className = "card";

  // создаем картинку
  const img = document.createElement("img");
  img.setAttribute("src", obj.image);
  img.className = "card__img";

  // // создаем текстовый блок
  let card_text = document.createElement("div");
  card_text.className = "card__text";

  card_text.innerHTML = `
        <p class="card__author">${obj.artist}</p>
        <p class="card__name">${obj.title}</p>
        <p class="card__material">${obj.material}</p>
        <p class="card__cost">${obj.price} руб</p>
        <button class="btn btn_full-width">В корзину</button>
        `;

  container.append(card); //выводим карточку
  card.append(img, card_text); //выводим картинку, текстовый блок
}
let filterCard = document.querySelector(".catalog");
let buttons = document.querySelectorAll(".filter__btn");




for (let el of buttons) {
  el.addEventListener("click", function () {
    remove();
    let btnId = el.getAttribute("id").toLowerCase();
    let newData = art.filter((el) => el.country.toLowerCase() == btnId);
    filterCard.innerHTML = "";
    renderCard(newData);
    console.log(newData);
    el.classList.add("active");
  });
}

function remove() {
  for (let el of buttons) {
   el.classList.remove('active')
  }
}
