(() => {
  const requested = new URLSearchParams(window.location.search).get("asset");

  function render() {
    const investment = XuNotesInvestments.find(requested);
    document.title = `${investment.name} | Xu Notes`;
    document.querySelector("#investment-title").textContent =
      investment.code ? `${investment.name} ${investment.code}` : investment.name;
    document.querySelector("#investment-status").textContent = investment.status;

    const tags = document.querySelector("#investment-tags");
    tags.replaceChildren();
    investment.tags.forEach((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      tags.append(item);
    });
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener("xu-notes:language", render);
})();
