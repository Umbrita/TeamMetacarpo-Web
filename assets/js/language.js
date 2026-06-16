(function () {
  var links = document.querySelectorAll(".language-switcher a[lang]");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      document.cookie = "tm_lang=" + encodeURIComponent(link.lang) + "; path=/; max-age=86400; SameSite=Lax";
    });
  });

  if (window.location.pathname !== "/" || document.cookie.indexOf("tm_lang=") !== -1) {
    return;
  }

  var preferred = navigator.language && navigator.language.toLowerCase().indexOf("es") === 0 ? "es" : "en";
  var target = "/" + preferred + "/";
  var fallback = document.querySelector('.language-switcher a[lang="' + preferred + '"]');

  if (fallback) {
    window.location.replace(target);
  }
})();

