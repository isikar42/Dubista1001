document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const yearElements = document.querySelectorAll('#year, #year-footer');

  yearElements.forEach((el) => {
    el.textContent = String(year);
  });
});
