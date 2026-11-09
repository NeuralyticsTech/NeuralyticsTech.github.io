// Navigation and content remain usable with JavaScript disabled.
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

// Webmail and the visible address also work without a configured mail app.
document.querySelectorAll("[data-copy-email]").forEach((button) => {
  if (!navigator.clipboard?.writeText) return;
  button.hidden = false;
  button.addEventListener("click", async () => {
    const status = document.querySelector(".contact-status");
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      status.textContent =
        "Email address copied. Paste it into your email service.";
    } catch {
      status.textContent =
        "Copy is unavailable in this browser. Select the email address above, or use Open Gmail.";
    }
  });
});
