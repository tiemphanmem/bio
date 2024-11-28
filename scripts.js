function togglePopup(title, description, src) {
  const titleE = document.querySelector("#popup span");
  const descriptionE = document.querySelector("#popup p");
  const srcE = document.querySelector("#popup img");

  srcE.src = src;

  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  popup.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('popup-open');
}

function closePopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  popup.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('popup-open');
}
