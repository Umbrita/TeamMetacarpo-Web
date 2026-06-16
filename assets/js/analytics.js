(function () {
  var currentScript = document.currentScript;
  var measurementId = currentScript ? currentScript.getAttribute("data-ga-id") : "";

  if (!measurementId || document.cookie.indexOf("tm_analytics=accepted") === -1) {
    return;
  }

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: true
  });
})();

