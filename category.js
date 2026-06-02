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

    if (category !== "investment") {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = XuNotes.translate("categoryPage.empty");
      list.append(empty);
      return;
    }

    XuNotesInvestments.all().forEach((investment) => {
      const card = document.createElement("a");
      card.className = "article-card investment-card";
      card.href = `./investment.html?asset=${investment.id}`;

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

      const summary = document.createElement("p");
      summary.textContent = investment.summary;

      const action = document.createElement("span");
      action.className = "card-action";
      action.textContent = XuNotes.translate("investment.viewDetails");

      card.append(heading, tags, summary, action);
      list.append(card);
    });
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener("xu-notes:language", render);
})();
