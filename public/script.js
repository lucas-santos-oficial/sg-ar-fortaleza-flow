(function () {
  "use strict";

  var PHONE = "5585997668216";
  var MESSAGE =
    "Olá! Gostaria de solicitar um orçamento para manutenção do meu ar-condicionado.";
  var URL = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(MESSAGE);

  var links = document.querySelectorAll("[data-wa]");
  for (var i = 0; i < links.length; i++) {
    links[i].href = URL;
    links[i].rel = "noopener";
    links[i].target = "_blank";
  }

  // Accordion: keep only one FAQ item open at a time
  var items = document.querySelectorAll(".faq__item");
  for (var j = 0; j < items.length; j++) {
    items[j].addEventListener("toggle", function () {
      if (!this.open) return;
      for (var k = 0; k < items.length; k++) {
        if (items[k] !== this) items[k].open = false;
      }
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
