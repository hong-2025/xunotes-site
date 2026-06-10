(() => {
  const requested = new URLSearchParams(window.location.search).get("recipe");

  function addInfoRow(card, label, value) {
    const row = document.createElement("div");
    row.className = "recipe-info-row";

    const term = document.createElement("h2");
    term.textContent = label;

    const detail = document.createElement("p");
    detail.textContent = Array.isArray(value) ? value.join("，") : value;

    row.append(term, detail);
    card.append(row);
  }

  function render() {
    const recipe = XuNotesRecipes.find(requested);
    document.title = `${recipe.title} | Xu Notes`;
    document.querySelector("#recipe-title").textContent = recipe.title;

    const content = document.querySelector("#recipe-content");
    content.replaceChildren();

    const card = document.createElement("section");
    card.className = "recipe-card";

    addInfoRow(card, XuNotes.translate("recipe.ingredients"), recipe.ingredients);
    addInfoRow(card, XuNotes.translate("recipe.seasonings"), recipe.seasonings);

    const process = document.createElement("div");
    process.className = "recipe-process";
    const processTitle = document.createElement("h2");
    processTitle.textContent = XuNotes.translate("recipe.process");
    const steps = document.createElement("ol");
    recipe.process.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      steps.append(item);
    });
    process.append(processTitle, steps);
    card.append(process);

    addInfoRow(card, XuNotes.translate("recipe.source"), recipe.source);

    content.append(card);
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener("xu-notes:language", render);
})();
