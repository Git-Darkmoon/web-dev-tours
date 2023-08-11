// Navbar

const back_btn = document.querySelector(".menu_back_btn")
const burger_btn = document.querySelector(".burger")
const menu = document.querySelector(".menu")

burger_btn.addEventListener("click", () => {
  menu.classList.add("openMenu")
})
back_btn.addEventListener("click", () => {
  menu.classList.remove("openMenu")
})

// Tours data:

const container = document.querySelector(".toursData")

tours.map((eachTour) => {
  const { name, info, image, price } = eachTour

  container.innerHTML += `
  
  <article class="card">
  <picture class="img_card_container"><img src="${image}" alt="" /></picture>

  <h2>${name}</h2>
  <p class="desc">${info.slice(0, 200)}</p>
  <h4 class="price">$ ${price}</h4>
</article>
  `
})
