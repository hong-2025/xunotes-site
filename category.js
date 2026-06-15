(() => {
  const requested = new URLSearchParams(window.location.search).get("category");
  const category = XuNotes.categoryKeys.includes(requested) ? requested : "investment";

  function render() {
    const title = XuNotes.translate(`categories.${category}`);
    document.title = `${title} | Xu Notes`;
    document.querySelector("#category-title").textContent = title;
    document.querySelector("#category-description").textContent =
      XuNotes.translate(`categoryDescriptions.${category}`);
    renderArticles();
  }

  function renderArticles() {
    const list = document.querySelector("#article-list");
    list.replaceChildren();

    if (category === "technology") {
      XuNotesTechNotes.all().forEach((note) => {
        const card = document.createElement("article");
        card.className = "article-card knowledge-card";

        const title = document.createElement("h2");
        const link = document.createElement("a");
        link.href = `./tech-note.html?note=${note.id}`;
        link.textContent = note.title;
        title.append(link);

        const meta = document.createElement("p");
        meta.className = "knowledge-meta";
        meta.textContent = XuNotes.translate("techNote.meta");

        const action = document.createElement("a");
        action.className = "card-action";
        action.href = `./tech-note.html?note=${note.id}`;
        action.textContent = XuNotes.translate("techNote.viewDetails");

        card.append(title, meta, action);
        list.append(card);
      });
      return;
    }

    if (category === "food") {
      const card = document.createElement("article");
      card.className = "article-card knowledge-card";

      const title = document.createElement("h2");
      const link = document.createElement("a");
      link.href = "./recipes.html";
      link.textContent = XuNotes.translate("recipe.sectionTitle");
      title.append(link);

      const meta = document.createElement("p");
      meta.className = "knowledge-meta";
      meta.textContent = XuNotes.translate("recipe.sectionMeta");

      const action = document.createElement("a");
      action.className = "card-action";
      action.href = "./recipes.html";
      action.textContent = XuNotes.translate("recipe.viewRecipes");

      card.append(title, meta, action);
      list.append(card);
      return;
    }

    if (category === "summary") {
      XuNotesSummaries.all().forEach((summary) => {
        const card = document.createElement("article");
        card.className = "article-card summary-card";

        const content = document.createElement("p");
        content.textContent = summary;

        card.append(content);
        list.append(card);
      });
      return;
    }

    if (category !== "investment") {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = XuNotes.translate("categoryPage.empty");
      list.append(empty);
      return;
    }

    XuNotesInvestments.all().forEach((investment) => {
      const card = document.createElement("article");
      card.className = "article-card investment-card";

      const heading = document.createElement("div");
      heading.className = "investment-heading";

      const title = document.createElement("h2");
      title.textContent = investment.name;
      if (investment.code) {
        const code = document.createElement("span");
        code.className = "investment-code";
        code.textContent = investment.code;
        title.append(" ", code);
      }

      const status = document.createElement("span");
      status.className = "status-pill";
      status.textContent = investment.status;
      heading.append(title, status);

      const tags = document.createElement("div");
      tags.className = "tag-list";
      investment.tags.forEach((tag) => {
        const item = document.createElement("span");
        item.textContent = tag;
        tags.append(item);
      });

      const thesisTitle = document.createElement("h3");
      thesisTitle.className = "investment-thesis-title";
      thesisTitle.textContent = XuNotes.translate("investment.thesis");

      const thesis = document.createElement("ol");
      thesis.className = "investment-thesis-list";
      investment.thesis.forEach((item) => {
        const entry = document.createElement("li");
        entry.textContent = item;
        thesis.append(entry);
      });

      const action = document.createElement("a");
      action.className = "card-action";
      action.href = `./investment.html?asset=${investment.id}`;
      action.textContent = XuNotes.translate("investment.viewDetails");

      card.append(heading, tags, thesisTitle, thesis, action);
      list.append(card);
    });
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener("xu-notes:language", render);
})();
