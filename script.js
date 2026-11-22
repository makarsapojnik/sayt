const jobCards = document.querySelectorAll(".job-card");

jobCards.forEach((card) => {
  const details = card.querySelector(".job-details");
  const hideBtn = card.querySelector(".hide-btn");
  const showBtn = card.querySelector(".show-btn");

  hideBtn.addEventListener("click", () => {
    details.hidden = true;
  });

  showBtn.addEventListener("click", () => {
    details.hidden = false;
  });
});
