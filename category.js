(() => {
  const requested = new URLSearchParams(window.location.search).get("category");
  const category = XuNotes.categoryKeys.includes(requested) ? requested : "investment";

  function render() {
    const title = XuNotes.translate(`categories.${category}`);
    document.title = `${title} | Xu Notes`;
    document.querySelector("#category-title").textContent = title;
    document.querySelector("#category-description").textContent =
      XuNotes.translate(`categoryDescriptions.${category}`);
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener("xu-notes:language", render);
})();
