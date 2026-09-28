const I18N = {
en: {
  "contact.addr": "Address",
  "contact.cta": "Call now to book",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 7:00 AM – 5:00 PM<br>Sat: 7:00 AM – 6:00 PM<br>Sun: closed",
  "contact.kicker": "Come see us",
  "contact.phone": "Phone",
  "contact.title": "Book your repair",
  "faq.a1": "Monday to Friday, 7:00 AM to 5:00 PM, and Saturday 7:00 AM to 6:00 PM. Closed Sundays.",
  "faq.a2": "Yes — cars, SUVs and light trucks of all makes, with quality parts.",
  "faq.a3": "We hook your vehicle up to our electronic diagnostic equipment, explain the problem and confirm the price before any repair.",
  "faq.a4": "Appointments are recommended — call (509) 327-5667 or drop by during opening hours.",
  "faq.kicker": "Good to know",
  "faq.q1": "What are your opening hours?",
  "faq.q2": "Do you service all vehicle brands?",
  "faq.q3": "How does a diagnostic work?",
  "faq.q4": "Do I need an appointment?",
  "faq.title": "Frequently asked questions",
  "footer.tag": "Auto repair & maintenance · Spokane, Washington",
  "gallery.c1": "Engine diagnostics, done properly",
  "gallery.c2": "Clean bays, the right equipment",
  "gallery.c3": "Brake service, inspected with care",
  "gallery.kicker": "The shop in action",
  "gallery.title": "A tidy shop, careful work",
  "hero.cta1": "Book a repair",
  "hero.cta2": "See services",
  "hero.kicker": "Spokane, Washington · Auto repair you can trust",
  "hero.sub": "Wayne's Gold Seal Auto Repair keeps Spokane drivers rolling with honest auto maintenance and repair — over 90% of customers come back, because the work is done right the first time.",
  "hero.title": "Fixed right<br>the first time.",
  "nav.call": "(509) 327-5667",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",
  "nav.gallery": "Gallery",
  "nav.reviews": "Reviews",
  "nav.services": "Services",
  "nav.why": "Why us",
  "reviews.kicker": "What drivers say",
  "reviews.more": "5.0 out of 5 from 11 Google reviews — see what Spokane drivers say about us",
  "reviews.title": "Rated 5.0 on Google",
  "services.kicker": "What we do",
  "services.s1d": "Scheduled maintenance and general repairs for cars, SUVs and light trucks of all makes.",
  "services.s1t": "General Maintenance & Repair",
  "services.s2d": "We find the real problem with modern diagnostic equipment instead of guessing.",
  "services.s2t": "Engine Diagnostics",
  "services.s3d": "Pads, rotors and full brake system inspection — your safety first.",
  "services.s3t": "Brake Service",
  "services.s4d": "Recharge, leak detection and A/C repair for comfort in every season.",
  "services.s4t": "A/C Service & Repair",
  "services.s5d": "Automatic transmission service and repair from an experienced local shop.",
  "services.s5t": "Transmissions",
  "services.s6d": "Quality oil changes, tire sales, rotation and balancing under one roof.",
  "services.s6t": "Oil Changes & Tires",
  "services.title": "Full-service auto care under one roof",
  "stats.diag": "electronic diagnostics",
  "stats.diagNum": "100%",
  "stats.hours": "weekdays 7–5, Sat till 6",
  "stats.hoursNum": "Mon – Sat",
  "stats.makes": "makes & models serviced",
  "stats.makesNum": "All",
  "stats.quote": "quote before every repair",
  "stats.quoteNum": "Clear",
  "walkin.w1d": "Sat 7am – 6pm",
  "walkin.w1t": "Mon – Fri 7am – 5pm",
  "walkin.w2d": "Full-service auto care",
  "walkin.w2t": "Maintenance & repair",
  "walkin.w3d": "Cars, SUVs, light trucks",
  "walkin.w3t": "All makes",
  "why.intro": "Everyone wants a mechanic they can trust. Wayne's Gold Seal has served Spokane for over 15 years — clear explanations, fair prices and repairs done right the first time. That's why more than 90% of customers return.",
  "why.kicker": "Why choose us",
  "why.l1d": "No comebacks, no guesswork — the job is done properly, once.",
  "why.l1t": "Fix it right the first time",
  "why.l2d": "We explain what is needed — and what isn't.",
  "why.l2t": "Honest diagnosis",
  "why.l3d": "The price is confirmed before we touch your car.",
  "why.l3t": "Clear quote",
  "why.l4d": "On Northwest Blvd, easy to reach, open Saturdays.",
  "why.l4t": "Spokane's local shop",
  "why.title": "The mechanic you can trust"
}};

const lang = "en";

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Wayne's Gold Seal Auto Repair — Auto Repair in Spokane, WA | Trusted Mechanics";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
