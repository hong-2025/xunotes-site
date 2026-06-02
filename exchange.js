document.querySelector("#message-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector("button");
  const status = document.querySelector("#form-status");
  const language = XuNotes.getLanguage();
  const apiUrl = window.XU_NOTES_CONFIG.messageApiUrl;

  status.textContent = "";
  button.disabled = true;
  button.textContent = XuNotes.translate("exchange.submitting", language);

  try {
    if (!apiUrl) throw new Error("Message API is not configured.");
    const response = await fetch(`${apiUrl}/api/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: form.message.value,
        website: form.website.value,
      }),
    });
    if (!response.ok) throw new Error("Message submission failed.");
    status.textContent = XuNotes.translate("exchange.success", language);
    form.reset();
    window.setTimeout(() => window.location.reload(), 1400);
  } catch {
    status.textContent = XuNotes.translate("exchange.error", language);
    button.disabled = false;
    button.textContent = XuNotes.translate("exchange.submit", language);
  }
});
