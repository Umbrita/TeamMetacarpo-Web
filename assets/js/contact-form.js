(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form || !window.fetch) {
    return;
  }

  var status = form.querySelector("[data-form-status]");
  var isSpanish = document.documentElement.lang === "es";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (status) {
      status.textContent = isSpanish ? "Enviando mensaje..." : "Sending message...";
    }

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Form request failed");
        }
        form.reset();
        if (status) {
          status.textContent = isSpanish
            ? "Gracias. Tu mensaje se ha enviado."
            : "Thank you. Your message has been sent.";
        }
      })
      .catch(function () {
        if (status) {
          status.textContent = isSpanish
            ? "No se pudo enviar. Revisa la conexion e intentalo de nuevo."
            : "The message could not be sent. Check your connection and try again.";
        }
      });
  });
})();

