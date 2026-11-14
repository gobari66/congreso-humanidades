/* Configuración rápida del sitio */
const CONGRESS_CONFIG = {
  // Cambia este valor por el correo oficial para recibir solicitudes.
  email: "contacto@tudominio.org"
};

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const contactEmail = document.getElementById("contact-email");
  if (contactEmail) {
    contactEmail.textContent = CONGRESS_CONFIG.email + " ↗";
    contactEmail.href = "mailto:" + CONGRESS_CONFIG.email;
  }

  const form = document.getElementById("interest-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Solicitud de información — Tercer Congreso Internacional");
      const body = encodeURIComponent(
        "Nombre: " + data.get("nombre") + "\n" +
        "Correo: " + data.get("correo") + "\n" +
        "Interés de participación: " + data.get("participacion") + "\n\n" +
        "Solicito información sobre el Tercer Congreso Internacional."
      );
      window.location.href = "mailto:" + CONGRESS_CONFIG.email + "?subject=" + subject + "&body=" + body;
      const note = document.getElementById("form-note");
      if (note) note.textContent = "Se ha preparado un mensaje en tu aplicación de correo. Confirma el envío desde allí.";
    });
  }
});
