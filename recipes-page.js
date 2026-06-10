function renderRecipes() {
  const list = document.querySelector("#recipe-list");
  list.replaceChildren();

  XuNotesRecipes.all().forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "article-card knowledge-card";

    const title = document.createElement("h2");
    const link = document.createElement("a");
    link.href = `./recipe.html?recipe=${recipe.id}`;
    link.textContent = recipe.title;
    title.append(link);

    const meta = document.createElement("p");
    meta.className = "knowledge-meta";
    meta.textContent = `${XuNotes.translate("recipe.source")}：${recipe.source}`;

    const action = document.createElement("a");
    action.className = "card-action";
    action.href = `./recipe.html?recipe=${recipe.id}`;
    action.textContent = XuNotes.translate("recipe.viewDetails");

    card.append(title, meta, action);
    list.append(card);
  });
}

document.addEventListener("DOMContentLoaded", renderRecipes);
document.addEventListener("xu-notes:language", renderRecipes);
