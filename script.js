const revealElements = document.querySelectorAll(".reveal");
const cards = document.querySelectorAll(".card");

function reveal() {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("active");
    }
  });

  cards.forEach((card, i) => {
    if (card.getBoundingClientRect().top < trigger) {
      setTimeout(() => {
        card.classList.add("show");
      }, i * 120);
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();