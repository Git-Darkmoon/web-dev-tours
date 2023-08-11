// Navbar

const back_btn = document.querySelector(".menu_back_btn");
const burger_btn = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

const API_URL = "https://www.course-api.com/react-tours-project";

async function dameTuCosita() {
  const data = await fetch(API_URL);
  const transform = await data.json();

  console.log(transform);
  transform.map((eachTour) => {
    const { name, info, image, price } = eachTour;
    generateTours(name, info, image, price);
  });
}

dameTuCosita();

burger_btn.addEventListener("click", () => {
  menu.classList.add("openMenu");
  body.classList.add("openMenu");
});
back_btn.addEventListener("click", () => {
  menu.classList.remove("openMenu");
  body.classList.remove("openMenu");
});

// Tours data:

const container = document.querySelector(".toursData");

const generateTours = (name, info, image, price) => {
  container.innerHTML += `

  <article class="card">
  <picture class="img_card_container"><img src="${image}" alt="" /></picture>
  <h2>${name}</h2>
  <p class="desc">${info.slice(0, 200)}</p>
  <h4 class="price">$ ${price}</h4>
</article>
  `;
};
