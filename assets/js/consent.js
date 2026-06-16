(function () {
  if (document.cookie.indexOf("tm_analytics=") !== -1) {
    return;
  }

  var banner = document.createElement("div");
  banner.className = "consent-banner";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-label", "Analytics consent");

  var message = document.createElement("p");
  message.textContent = document.documentElement.lang === "es"
    ? "Usamos analitica anonima para entender el trafico del sitio."
    : "We use anonymous analytics to understand site traffic.";

  var accept = document.createElement("button");
  accept.type = "button";
  accept.textContent = document.documentElement.lang === "es" ? "Aceptar" : "Accept";

  var decline = document.createElement("button");
  decline.type = "button";
  decline.textContent = document.documentElement.lang === "es" ? "Rechazar" : "Decline";

  function setConsent(value) {
    document.cookie = "tm_analytics=" + value + "; path=/; max-age=15552000; SameSite=Lax";
    banner.remove();
    if (value === "accepted") {
      window.location.reload();
    }
  }

  accept.addEventListener("click", function () {
    setConsent("accepted");
  });

  decline.addEventListener("click", function () {
    setConsent("declined");
  });

  banner.appendChild(message);
  banner.appendChild(accept);
  banner.appendChild(decline);
  document.body.appendChild(banner);
})();

