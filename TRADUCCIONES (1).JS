// Diccionario de traducciones para index.html, torre5.html y torre6.html
const translations = {
  es: {
    "header": "ISG AVENIDA CONSITUCION 34",
    "welcome-msg": "BIENVENIDOS A VUESTRO APARTMENTO, AQUI ENCONTRAR LOS VIDEOS EXPLICATIVOS DEL USO DE ELECTRODOMESTICOS",
    "apartment5": "APARTAMENTO 5",
    "apartment6": "APARTAMENTO 6",
    "exclusive": "ISG EXCLUSIVE",
    "coffee-title": "Cafetera / Coffee maker",
    "coffee-es": "En este video os mostramos como usar nuestra cafetera.",
    "washer-title": "Lavadora y Secadora / Washer and Dryer",
    "washer-es": "En este video os mostramos como usar la lavadora y secadora.",
    "dishwasher-title": "Lavavajillas / Dishwasher",
    "dishwasher-es": "En este video os mostramos como usar la lavavajilla.",
    "hob-title": "Vitroceramica / Electric Hob",
    "hob-es": "En este video os mostramos como usar nuestra vitroceramica."
  },
  en: {
    "header": "ISG AVENUE CONSTITUTION 34",
    "welcome-msg": "WELCOME TO YOUR APARTMENT, HERE YOU CAN FIND VIDEOS EXPLANATORY OF HOW TO USE APPLIANCES.",
    "apartment5": "APARTMENT 5",
    "apartment6": "APARTMENT 6",
    "exclusive": "ISG EXCLUSIVE",
    "coffee-title": "Coffee maker",
    "coffee-es": "In this video we show you how to use our coffee maker.",
    "washer-title": "Washer and Dryer",
    "washer-es": "In this video we show you how to use the washer and dryer.",
    "dishwasher-title": "Dishwasher",
    "dishwasher-es": "In this video we show you how to use the dishwasher.",
    "hob-title": "Electric Hob",
    "hob-es": "In this video we show you how to use our electric hob."
  },
  fr: {
    "header": "ISG AVENUE CONSTITUTION 34",
    "welcome-msg": "BIENVENUE DANS VOTRE APPARTEMENT, VOUS TROUVEREZ ICI DES VIDÉOS EXPLICATIVES SUR L'UTILISATION DES APPAREILS",
    "apartment5": "APPARTEMENT 5",
    "apartment6": "APPARTEMENT 6",
    "exclusive": "ISG EXCLUSIVE",
    "coffee-title": "Cafetière",
    "coffee-es": "Dans cette vidéo, nous vous montrons comment utiliser la cafetière.",
    "washer-title": "Lave-linge et sèche-linge",
    "washer-es": "Dans cette vidéo, nous vous montrons comment utiliser le lave-linge et le sèche-linge.",
    "dishwasher-title": "Lave-vaisselle",
    "dishwasher-es": "Dans cette vidéo, nous vous montrons comment utiliser le lave-vaisselle.",
    "hob-title": "Plaque électrique",
    "hob-es": "Dans cette vidéo, nous vous montrons comment utiliser notre plaque électrique."
  }
};

// Cambia el idioma de la página según el parámetro 'lang'
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key] !== undefined && translations[lang][key] !== "") {
      el.textContent = translations[lang][key];
      el.style.display = "";
    } else {
      el.style.display = "none";
      console.warn("No hay traducción para clave:", key, "en idioma:", lang);
    }
  });
}

window.addEventListener('DOMContentLoaded', function() {
  setLanguage('es');

  // Conecta los botones por JS en vez de onclick
  document.querySelectorAll('.btn-idioma[data-lang]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
});