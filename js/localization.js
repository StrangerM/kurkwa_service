'use strict';

const languages = {
  en: {
    welcome: "Welcome to Personal agency",
    description: "We work in all countries of the European Union, both long-term and short-term. \nWe will look forward to cooperation.",
    contactTitle: "Contact info:",
    contactDirectorTitle: "Organization manager:",
    contactDirectorName: "Shumkin Ondra",
    contactDirectorTel: "+420775074436",
    contactAssistantTitle: "Technical assistant:",
    contactAssistantName: "Darina Tovstoles",
    contactAssistantTel: "+380678339527",
    servicesTitle: "Our Services",
    service1Title: "Quality Services",
    service1Description: "We provide sorting, quality control, packing, rework, visual inspection, assembling, and disassembling of the product.",
    service2Title: "Operators for production",
    service2Description: "We provide super-qualified operators for all types of production and warehouse.",
    service3Title: "CO2 Welding & Advice",
    service3Description: "Our workers have big experience in CO2 welding.",
    service4Title: "SMD component soldering",
    service4Description: "We provide all soldering like SMD components, BGA, and through-hole component sets."
  },
  
  cs: {
    welcome: "Vítejte v Personal agency",
    description: "Pracujeme na všech zemí Evropské unie jak dlouhodobě ták aj krátkodobé. \nBudeme se těšit na spolupráci.",
    contactTitle: "Kontaktní informace:",
    contactDirectorTitle: "Manažer organizace:",
    contactDirectorName: "Šumkin Ondrá",
    // contactDirectorTel: "+420775074436",
    contactAssistantTitle: "Technický asistent:",
    contactAssistantName: "Darina Tovstoles",
    // contactAssistantTel: "+380678339527",
    servicesTitle: "Poskytujeme",
    service1Title: "Kvalitní služby",
    service1Description: "Provádíme třídění, kontrolu kvality, balení, přepracování, vizuální kontrolu, montáž a demontáž produktu.",
    service2Title: "Operátoři pro výrobu",
    service2Description: "Poskytujeme superkvalifikované operátory pro všechny typy výroby a skladu.",
    service3Title: "Svářeč C02",
    service3Description: "Naši pracovníci mají bohaté zkušenosti se svařováním CO2.",
    service4Title: "Pájení SMD součástek",
    service4Description: "Poskytujeme veškeré pájení jako SMD součástky, BGA a sady součástek s průchozími otvory."
  }
};

function setLanguage(lang) {
  const language = languages[lang];
  document.getElementById('welcome').innerText = language.welcome;
  document.getElementById('description').innerText = language.description;
  document.getElementById('contact-director-title').innerText = language.contactDirectorTitle;
  document.getElementById('contact-director-name').innerText = language.contactDirectorName;
  // document.getElementById('contact-director-tel').innerText = language.contactDirectorTel;
  document.getElementById('contact-assistant-title').innerText = language.contactAssistantTitle;
  document.getElementById('contact-assistant-name').innerText = language.contactAssistantName;
  // document.getElementById('contact-assistant-tel').innerText = language.contactAssistantTel;
  document.getElementById('services-title').innerText = language.servicesTitle;
  document.getElementById('service-1-title').innerText = language.service1Title;
  document.getElementById('service-1-description').innerText = language.service1Description;
  document.getElementById('service-2-title').innerText = language.service2Title;
  document.getElementById('service-2-description').innerText = language.service2Description;
  document.getElementById('service-3-title').innerText = language.service3Title;
  document.getElementById('service-3-description').innerText = language.service3Description;
  document.getElementById('service-4-title').innerText = language.service4Title;
  document.getElementById('service-4-description').innerText = language.service4Description;

  document.getElementById('lang-img').src = 'img/lang/' + lang + '.png';
};

setLanguage('cs');
