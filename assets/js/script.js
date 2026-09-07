



/**
 * navbar toggle
 */

const translations = {
  sr: {
    title: "Fight House - Kuća borilačkih sportova",
    nav: ["Termini", "Treneri", "Sala", "Kontakt"],
    heroTitle: "Aktivan um, snažno telo, nepobediv duh",
    heroSubline: "Zakoračite u svet borilačkih veština",
    welcomeTitle: "Dobrodošli u Fight House, kuću borilačkih sportova!",
    welcomeText: "Koncept našeg rada jeste stvaranje jedne prijatne i zdrave zajednice gde ljudi mogu da kroz borilačke sportove podignu nivo svog fizičkog zdravlja, pokrenu se i osećaju se dobro u svojoj koži! Fight House je klub rekreativnog karaktera gde osobe svih nivoa, bilo da su početnici ili oni naprednije tehnike, dolaze kako bi naučili i usavršili svoju tehniku kik boksa i boksa kao i podigli svoju snagu i izdržljivost, bez pritiska od takmičenja. A za one najhrabrije uvek postoje termini gde mogu da se oprobaju i upuste u sparing! U našim treninzima ćete pronaći savršen balans između izazova i zabave, stvarajući zdravu naviku koja postaje deo vašeg svakodnevnog života.",
    classesLabel: "Termini",
    classesTitle: "Časovi za svaki cilj",
    classTitles: ["Rekreativni boks", "CardioBox", "Rekreativni kikboks", "Jutarnji boks", "Muay Thai"],
    classDescriptions: [
      "Rekreativni boks je program namenjen svima koji žele da nauče osnove boksa, bez pritiska, bez rizika i bez obaveznih borbi. Na ovom programu ćete naučiti pravilnu tehniku udaraca, gard, kretanje i odbrane, kroz treninge koji podižu kondiciju i jačaju telo. Ne morate imati nikakvo prethodno iskustvo, mi vodimo ceo proces i pazimo da sve radite bezbedno.",
      "CardioBox je naš najdinamičniji program. Spoj udaračkog i treninga snage koji topi stres, jača telo i puni glavu dobrim osećajem. Kombinacije udaraca, vežbe snage i kružne runde koje se smenjuju, nadopunjuju i nikada nisu iste. Ovo je savršen izbor ako ste se zasitili teretane, statičnih sprava i praznog vežbanja bez rezultata.",
      "Rekreativni kik boks je program za sve koji žele da nauče da kombinuju udarce rukama i nogama kroz trening koji razvija snagu, koordinaciju i pokretljivost. Ovde ćete naučiti tehnike udaraca nogom, pravilno postavljanje, balans i povezivanje udaraca u kombinacije. Trening je dinamičan i izazovan, ali uvek prilagođen vašem tempu i mogućnostima.",
      "Jutarnji boks je program za one koji žele da započnu dan jasno, snažno i bez stresa. Trening traje taman koliko treba da vas razmrda, pokrene i podigne energiju. Bez žurbe, bez galame i bez čekanja da prođe dan da biste mislili na sebe. Učite osnove boksa, gradite kondiciju i punite telo dobrim osećajem pre nego što radni dan uzme maha.",
      "Muay Thai je dinamična borilačka veština koja, pored udaraca pesnicama i nogama, uključuje i laktove i kolena. Upravo ta kombinacija čini ga jednim od najkompletnijih borilačkih sportova. Trening razvija snagu, kondiciju, tehniku i sigurnost kroz rad na različitim vrstama udaraca i borbi iz blizine."
    ],
    day: "Dan", time: "Vreme",
    pricingLabel: "Članarina", pricingTitle: "Jedna cena za sve grupne programe", pricingIntro: "Transparentno, jednostavno i bez skrivenih troškova.",
    monthly: "Mesečni paket", perMonth: "mesečno", pricingFeatures: ["Pristup svim grupnim treninzima", "Bez dodatnih doplata po terminu", "Program prilagođen rekreativcima"], pricingNote: "Početak članarine je moguć bilo kog dana u mesecu.",
    session: "termin", fitpassPeriod: "Cardio Box preko FitPass-a", fitpassFeatures: ["Jedan program spada u FitPass", "Proverite slobodno mesto pre treninga"], fitpassNote: "FitPass važi za Cardio Box termin.",
    firstKicker: "Početak bez pritiska", firstTitle: "Spremni da krenete?", firstText: "Borilački sportovi se ne upoznaju za jedan trening. Zato savetujemo da dođete na nekoliko termina, upoznate ritam rada, trenere i atmosferu, pa tek onda realno osetite da li je ovo pravi sport za vas.", firstBullets: ["Bez pritiska i bez takmičarskog očekivanja.", "Treninzi su prilagođeni rekreativcima.", "Najbolji osećaj dobijate posle 5-6 dolazaka."], firstButton: "Javi se za prvi dolazak", firstNote: "Objasnićemo vam kada da dođete, šta da ponesete i koji termin je najbolji za početak.", firstDetails: "Pojedinačan dolazak je 500 RSD ako želite prvo da probate jedan termin, bez obaveze učlanjenja.", callClub: "Pozovi klub",
    recreational: "Rekreativci", recreationalText: "Mi smo jedan od retkih klubova koji rade isključivo sa rekreativcima. Ovde ne morate nikome ništa da dokazujete, osim sami sebi.", recreationalQuote: "Borilački sportovi nisu rezervisani isključivo za profesionalce. Samo je teško pronaći klub koji to zaista razume.", coaches: "Treneri", coachTitles: ["Trener boksa i kikboksa", "Trener Muay Thai-ja", "Trener boksa"], statsTitle: "Fight House u brojkama", stats: ["Srećnih članova!", "Termina nedeljno", "Trenera", "Članarina za sve programe"], gallery: "Galerija", weekdays: ["Pon.", "Uto.", "Sre.", "Cet.", "Pet."], footerHours: "Ponedeljak - Petak", contact: "Kontaktiraj nas", backTop: "Nazad na vrh"
  },
  en: {
    title: "Fight House - Combat Sports Club", nav: ["Schedule", "Coaches", "Gym", "Contact"], heroTitle: "An active mind, a strong body, an unstoppable spirit", heroSubline: "Step into the world of combat sports", welcomeTitle: "Welcome to Fight House, a combat sports club!", welcomeText: "Our work is built around creating a welcoming and healthy community where people can improve their physical health through combat sports, get moving and feel good in their own skin. Fight House is a recreational club for every level, from complete beginners to more experienced athletes who want to improve their boxing and kickboxing technique, strength and endurance without the pressure of competition. For those ready for an extra challenge, we also offer sessions where you can try sparring. Our training gives you the perfect balance of challenge and fun, creating a healthy habit that becomes part of everyday life.", classesLabel: "Schedule", classesTitle: "Classes for every goal", classTitles: ["Recreational Boxing", "CardioBox", "Recreational Kickboxing", "Morning Boxing", "Muay Thai"], classDescriptions: ["Recreational boxing is for anyone who wants to learn the fundamentals of boxing without pressure, risk or mandatory fights. You will learn proper punching technique, guard, movement and defense through workouts that improve fitness and strengthen the body. No previous experience is required; we guide the whole process and make sure you train safely.", "CardioBox is our most dynamic program: a combination of striking and strength training that melts away stress, strengthens the body and leaves you feeling great. Punch combinations, strength exercises and circuit rounds keep changing and never feel the same. It is perfect if you are tired of the gym, static machines and exercise without results.", "Recreational kickboxing is for anyone who wants to combine punches and kicks through training that develops strength, coordination and mobility. You will learn kicking techniques, balance, positioning and how to connect strikes into combinations. Training is dynamic and challenging, but always adapted to your pace and ability.", "Morning boxing is for people who want to start the day clear, strong and stress-free. The workout lasts just long enough to wake you up, get you moving and raise your energy. Learn the fundamentals of boxing, build fitness and feel good before the workday gets going.", "Muay Thai is a dynamic martial art that includes elbows and knees alongside punches and kicks. This combination makes it one of the most complete combat sports. Training develops strength, fitness, technique and confidence through different strikes and close-range work."], day: "Day", time: "Time", pricingLabel: "Membership", pricingTitle: "One price for all group programs", pricingIntro: "Transparent, simple and with no hidden costs.", monthly: "Monthly package", perMonth: "per month", pricingFeatures: ["Access to all group training", "No extra charges per session", "Program designed for recreational athletes"], pricingNote: "Membership can start on any day of the month.", session: "session", fitpassPeriod: "Cardio Box through FitPass", fitpassFeatures: ["One program is included in FitPass", "Check availability before training"], fitpassNote: "FitPass is valid for the Cardio Box session.", firstKicker: "A pressure-free start", firstTitle: "Ready to get started?", firstText: "You do not get to know a combat sport in one workout. We recommend coming to a few sessions, getting to know the pace, coaches and atmosphere, and then deciding whether this is the right sport for you.", firstBullets: ["No pressure and no expectation to compete.", "Training is adapted for recreational athletes.", "You will feel the best after 5-6 visits."], firstButton: "Ask about your first visit", firstNote: "We will explain when to come, what to bring and which session is best for your start.", firstDetails: "A single visit is 500 RSD if you want to try one session before joining.", callClub: "Call the club", recreational: "Recreational athletes", recreationalText: "We are one of the few clubs working exclusively with recreational athletes. Here, you do not have to prove anything to anyone but yourself.", recreationalQuote: "Combat sports are not reserved for professionals. It is just hard to find a club that truly understands that.", coaches: "Coaches", coachTitles: ["Boxing and kickboxing coach", "Muay Thai coach", "Boxing coach"], statsTitle: "Fight House in numbers", stats: ["Happy members!", "Sessions per week", "Coaches", "One membership for all programs"], gallery: "Gallery", weekdays: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri."], footerHours: "Monday - Friday", contact: "Contact us", backTop: "Back to top"
  },
  ru: {
    title: "Fight House - клуб боевых видов спорта", nav: ["Расписание", "Тренеры", "Зал", "Контакты"], heroTitle: "Активный ум, сильное тело, непобедимый дух", heroSubline: "Добро пожаловать в мир боевых видов спорта", welcomeTitle: "Добро пожаловать в Fight House, клуб боевых видов спорта!", welcomeText: "Мы создаём дружелюбное и здоровое сообщество, где каждый может улучшить физическую форму с помощью боевых видов спорта, больше двигаться и чувствовать себя уверенно. Fight House — клуб для любителей любого уровня: от новичков до тех, кто хочет улучшить технику бокса и кикбоксинга, силу и выносливость без давления соревнований. Для тех, кто готов к дополнительному вызову, есть тренировки со спаррингом. Наши занятия помогают найти идеальный баланс между вызовом и удовольствием и превратить тренировки в полезную привычку.", classesLabel: "Расписание", classesTitle: "Тренировки для любой цели", classTitles: ["Любительский бокс", "CardioBox", "Любительский кикбоксинг", "Утренний бокс", "Муай-тай"], classDescriptions: ["Любительский бокс подходит всем, кто хочет изучить основы бокса без давления, риска и обязательных боёв. Вы освоите правильную технику ударов, защиту, движение и работу ног, улучшая выносливость и укрепляя тело. Предыдущий опыт не требуется — мы сопровождаем вас на каждом этапе и следим за безопасностью.", "CardioBox — наша самая динамичная программа: сочетание ударной и силовой тренировки, которое снимает стресс, укрепляет тело и заряжает энергией. Комбинации ударов, силовые упражнения и круговые раунды постоянно меняются, поэтому тренировки никогда не бывают одинаковыми.", "Любительский кикбоксинг помогает научиться сочетать удары руками и ногами, развивая силу, координацию и подвижность. Вы освоите технику ударов ногами, баланс и соединение ударов в комбинации. Тренировка динамичная и challenging, но всегда адаптирована под ваш темп и возможности.", "Утренний бокс поможет начать день ясно, уверенно и без стресса. Тренировка разбудит вас, даст энергию и поможет развить выносливость до начала рабочего дня.", "Муай-тай — динамичное боевое искусство, включающее удары локтями и коленями наряду с ударами руками и ногами. Тренировки развивают силу, выносливость, технику и уверенность."], day: "День", time: "Время", pricingLabel: "Абонемент", pricingTitle: "Одна цена для всех групповых программ", pricingIntro: "Прозрачно, просто и без скрытых расходов.", monthly: "Месячный пакет", perMonth: "в месяц", pricingFeatures: ["Доступ ко всем групповым тренировкам", "Без доплат за отдельное занятие", "Программа для любителей"], pricingNote: "Абонемент можно начать в любой день месяца.", session: "занятие", fitpassPeriod: "Cardio Box по FitPass", fitpassFeatures: ["Одна программа доступна по FitPass", "Уточните наличие мест до тренировки"], fitpassNote: "FitPass действует на занятие Cardio Box.", firstKicker: "Начало без давления", firstTitle: "Готовы начать?", firstText: "Невозможно познакомиться с боевыми видами спорта за одну тренировку. Советуем посетить несколько занятий, почувствовать темп, познакомиться с тренерами и атмосферой, а затем решить, подходит ли вам этот спорт.", firstBullets: ["Без давления и ожидания участия в соревнованиях.", "Тренировки адаптированы для любителей.", "Лучшее ощущение появляется после 5–6 посещений."], firstButton: "Узнать о первом посещении", firstNote: "Мы расскажем, когда прийти, что взять с собой и какое занятие лучше выбрать для начала.", firstDetails: "Разовое посещение стоит 500 RSD, если вы хотите сначала попробовать тренировку без обязательства вступать в клуб.", callClub: "Позвонить в клуб", recreational: "Для любителей", recreationalText: "Мы один из немногих клубов, которые работают только с любителями. Здесь вам не нужно ничего доказывать никому, кроме себя.", recreationalQuote: "Боевые виды спорта предназначены не только для профессионалов. Просто трудно найти клуб, который действительно это понимает.", coaches: "Тренеры", coachTitles: ["Тренер по боксу и кикбоксингу", "Тренер по муай-тай", "Тренер по боксу"], statsTitle: "Fight House в цифрах", stats: ["Счастливых клиентов!", "Занятий в неделю", "Тренера", "Один абонемент для всех программ"], gallery: "Галерея", weekdays: ["Пн.", "Вт.", "Ср.", "Чт.", "Пт."], footerHours: "Понедельник - пятница", contact: "Свяжитесь с нами", backTop: "Наверх"
  }
};

const languageSelectors = {
  nav: ".navbar-link", classTitles: ".card-title", classDescriptions: ".card-text", coachTitles: ".coach-title", stats: ".stats-label", pricingFeatures: ".pricing-features li", firstBullets: ".first-training-list li"
};

const firstTrainingOpenLabels = {
  sr: "Pogledaj napomenu ispod",
  en: "See the note below",
  ru: "Посмотреть примечание ниже"
};

let currentLanguage = "sr";

const setText = (selector, values) => document.querySelectorAll(selector).forEach((element, index) => {
  if (values[index] !== undefined) element.textContent = values[index];
});

const setCardDescription = (values) => document.querySelectorAll(languageSelectors.classDescriptions).forEach((element, index) => {
  const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode && values[index] !== undefined) textNode.textContent = `\n                    ${values[index]}\n                    `;
});

const applyLanguage = (language) => {
  const copy = translations[language] || translations.sr;
  currentLanguage = translations[language] ? language : "sr";
  document.documentElement.lang = currentLanguage;
  document.title = copy.title;
  setText(languageSelectors.nav, copy.nav);
  setText(languageSelectors.classTitles, copy.classTitles);
  setCardDescription(copy.classDescriptions);
  setText(".coach-title", copy.coachTitles);
  setText(".stats-label", copy.stats);
  setText(".first-training-list li", copy.firstBullets);
  setText("#home .hero-title", [copy.heroTitle]);
  setText("#home .hero-subline", [copy.heroSubline]);
  setText("#about .section-title", [copy.welcomeTitle]);
  setText("#about .section-text", [copy.welcomeText]);
  setText("#class .section-subtitle", [copy.classesLabel]);
  setText("#class .section-title", [copy.classesTitle]);
  document.querySelectorAll(".card-text table").forEach(table => {
    table.querySelectorAll("th").forEach((cell, index) => {
      cell.textContent = index === 0 ? copy.day : copy.time;
    });
    table.querySelectorAll("tbody tr").forEach((row, index) => {
      if (row.cells[0]) row.cells[0].textContent = copy.weekdays[index];
    });
  });
  setText("#clanarina .section-subtitle", [copy.pricingLabel]);
  setText("#clanarina .section-title", [copy.pricingTitle]);
  setText(".pricing-intro", [copy.pricingIntro]);
  setText(".pricing-badge", [copy.monthly]);
  setText(".pricing-period", [copy.perMonth, copy.fitpassPeriod]);
  setText(".pricing-features li", copy.pricingFeatures.concat(copy.fitpassFeatures));
  setText(".pricing-note", [copy.pricingNote, copy.fitpassNote]);
  setText(".pricing-value span", ["RSD", copy.session]);
  setText(".first-training-kicker", [copy.firstKicker]);
  setText("#prvi-trening .section-title", [copy.firstTitle]);
  setText("#prvi-trening .section-text", [copy.firstText]);
  setText(".first-training-btn", [copy.firstButton]);
  setText(".first-training-note", [copy.firstNote]);
  setText("#first-training-details p", [copy.firstDetails]);
  setText(".first-training-call-btn", [copy.callClub]);
  setText("#rekreativci-section .section-title", [copy.recreational]);
  setText("#rekreativci-section .section-text", [copy.recreationalText]);
  setText("#rekreativci-section .h3", [copy.recreationalQuote]);
  setText("#treneri-container .about-content > .rekreativci .h2", [copy.coaches]);
  setText("#treneri-container .stats-section .section-title", [copy.statsTitle]);
  setText("#sala .section-title", [copy.gallery]);
  setText(".footer-brand-title", [copy.footerHours]);
  setText(".footer-list-title", [copy.contact]);
  const backTopLink = document.querySelector("[data-back-top-btn]");
  if (backTopLink) backTopLink.setAttribute("aria-label", copy.backTop);
  document.querySelectorAll(".language-button").forEach(button => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("fight-house-language", currentLanguage);
};

document.querySelectorAll(".language-button").forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

applyLanguage(localStorage.getItem("fight-house-language") || "sr");


/**
 * first training CTA note
 */
const firstTrainingTrigger = document.querySelector("[data-first-training-trigger]");
const firstTrainingDetails = document.querySelector("#first-training-details");

if (firstTrainingTrigger && firstTrainingDetails) {
  firstTrainingTrigger.addEventListener("click", function () {
    const isOpen = !firstTrainingDetails.hidden;

    firstTrainingDetails.hidden = isOpen;
    firstTrainingTrigger.setAttribute("aria-expanded", String(!isOpen));
    firstTrainingTrigger.textContent = isOpen ? translations[currentLanguage].firstButton : firstTrainingOpenLabels[currentLanguage];
  });
}

/**
 * goatcounter engagement tracking
 */

const trackGoatEvent = function (path, title) {
  if (!window.goatcounter || !window.goatcounter.count) return;

  window.goatcounter.count({
    path,
    title,
    event: true,
    no_session: true,
  });
};
 
const engagementTimers = [
  { seconds: 15, path: "stay_15s", title: "15 sekundi" },
  { seconds: 30, path: "stay_30s", title: "30 sekundi" },
  { seconds: 60, path: "stay_60s", title: "60 sekundi" },
  { seconds: 120, path: "stay_120s", title: "120 sekundi" },
];

engagementTimers.forEach(({ seconds, path, title }) => {
  window.setTimeout(function () {
    if (document.visibilityState === "visible") {
      trackGoatEvent(path, title);
    }
  }, seconds * 1000);
});


/**
 * header & back top btn active
 */



const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollY = window.scrollY;

  // toggle "solid" look after scrolling past 100px
  if (currentScrollY >= 100) {
    if (header) header.classList.add("active");
    if (backTopBtn) backTopBtn.classList.add("active");
  } else {
    if (header) header.classList.remove("active");
    if (backTopBtn) backTopBtn.classList.remove("active");
  }

  // hide on scroll down, show on scroll up
  if (header) {
    const scrollingDown = currentScrollY > lastScrollY;
    const pastThreshold = currentScrollY > 120; // don't hide near the very top

    if (scrollingDown && pastThreshold) {
      header.classList.add("nav-hidden");
    } else {
      header.classList.remove("nav-hidden");
    }
  }

  lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
});

/**
 * stats counters
 */
const counterElems = document.querySelectorAll("[data-counter]");

if (counterElems.length) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setCounterValue = function (elem, value) {
    const suffix = elem.dataset.suffix || "";
    elem.textContent = `${value}${suffix}`;
  };

  const animateCounter = function (elem) {
    const target = Number(elem.dataset.target) || 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = function (now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      setCounterValue(elem, current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCounterValue(elem, target);
      }
    };

    requestAnimationFrame(tick);
  };

  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    counterElems.forEach(elem => setCounterValue(elem, Number(elem.dataset.target) || 0));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counterElems.forEach(elem => observer.observe(elem));
  }
}
