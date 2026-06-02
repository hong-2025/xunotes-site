(() => {
  const requested = new URLSearchParams(window.location.search).get("asset");

  function render() {
    const investment = XuNotesInvestments.find(requested);
    document.title = `${investment.name} | Xu Notes`;
    document.querySelector("#investment-title").textContent =
      investment.code ? `${investment.name} ${investment.code}` : investment.name;
    document.querySelector("#investment-status").textContent = investment.status;
    document.querySelector("#investment-summary").textContent = investment.summary;

    const tags = document.querySelector("#investment-tags");
    tags.replaceChildren();
    investment.tags.forEach((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      tags.append(item);
    });

    const thesis = document.querySelector("#investment-thesis");
    thesis.replaceChildren();
    investment.thesis.forEach((item) => {
      const entry = document.createElement("li");
      entry.textContent = item;
      thesis.append(entry);
    });
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener("xu-notes:language", render);
})();
