document.querySelector("#admin-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const status = document.querySelector("#admin-status");
  const list = document.querySelector("#admin-list");
  const apiUrl = window.XU_NOTES_CONFIG.messageApiUrl;
  const token = document.querySelector("#admin-token").value;

  status.textContent = "";
  list.replaceChildren();

  try {
    if (!apiUrl) throw new Error("Message API is not configured.");
    const response = await fetch(`${apiUrl}/api/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error("Unable to load messages.");
    const messages = await response.json();
    if (!messages.length) {
      status.textContent = XuNotes.translate("admin.empty");
      return;
    }
    messages.forEach((item) => {
      const article = document.createElement("article");
      article.className = "admin-message";
      const message = document.createElement("p");
      const time = document.createElement("time");
      message.textContent = item.message;
      time.dateTime = item.created_at;
      time.textContent = new Date(item.created_at).toLocaleString();
      article.append(message, time);
      list.append(article);
    });
  } catch {
    status.textContent = XuNotes.translate("admin.error");
  }
});
