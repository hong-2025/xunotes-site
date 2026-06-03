(() => {
  const requested = new URLSearchParams(window.location.search).get("note");

  function addParagraphs(container, paragraphs = []) {
    paragraphs.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      container.append(paragraph);
    });
  }

  function addCodeBlocks(container, codeBlocks = []) {
    codeBlocks.forEach((text) => {
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.textContent = text;
      pre.append(code);
      container.append(pre);
    });
  }

  function render() {
    const note = XuNotesTechNotes.find(requested);
    document.title = `${note.title} | Xu Notes`;
    document.querySelector("#tech-note-title").textContent = note.title;

    const content = document.querySelector("#tech-note-content");
    content.replaceChildren();

    note.sections.forEach((section) => {
      const block = document.createElement("section");
      const heading = document.createElement("h2");
      heading.textContent = section.heading;
      block.append(heading);

      addParagraphs(block, section.paragraphs);

      if (section.steps) {
        section.steps.forEach((step) => {
          const stepBlock = document.createElement("div");
          stepBlock.className = "note-step";
          const stepTitle = document.createElement("h3");
          stepTitle.textContent = step.title;
          stepBlock.append(stepTitle);
          addParagraphs(stepBlock, step.paragraphs);
          addCodeBlocks(stepBlock, step.codeBlocks);
          addParagraphs(stepBlock, step.paragraphsAfter);
          block.append(stepBlock);
        });
      }

      if (section.bullets) {
        const list = document.createElement("ul");
        section.bullets.forEach((text) => {
          const item = document.createElement("li");
          item.textContent = text;
          list.append(item);
        });
        block.append(list);
      }

      content.append(block);
    });
  }

  document.addEventListener("DOMContentLoaded", render);
  document.addEventListener("xu-notes:language", render);
})();
