 "use client";

import Image from "next/image";
import { useState } from "react";

const carriers = [
  "Progressive", "Stillwater", "Bristol West", "National General",
  "One Alliance North America", "Kemper", "Cabrillo Coastal",
  "Aegis General", "Pacific Specialty", "California FAIR Plan",
  "LightSpeed", "Delos", "Obie", "SageSure", "Foremost Flood",
  "Selective Flood", "American Modern", "Bamboo"
];

const content = {
  en: {
    nav: ["Home", "Insurance", "About", "Partners", "FAQ", "Contact"],
    heroKicker: "Serving California Since 2000",
    heroTitle: "Trusted by California Families & Businesses Since 2000",
    heroText:
      "Providing reliable Home, Auto, Commercial, Flood, and SR-22 insurance with personalized service and competitive rates throughout Sacramento and surrounding communities.",
    quote: "Get a Free Quote",
    call: "Call (916) 391-7447",
    trust: "A local agency with more than two decades of experience helping clients protect what matters most.",
    servicesTitle: "Insurance Solutions for Real Life",
    servicesText: "Coverage for your vehicle, home, business and specialty needs—guided by a local insurance professional.",
    aboutTitle: "Personal Service. Local Expertise.",
    aboutText:
      "Punjab Insurance is an independent insurance agency serving individuals, families and businesses throughout the Sacramento region and surrounding communities. We help clients compare coverage options and find solutions that fit their needs and budget.",
    meetTitle: "Meet Kamalpreet Kaur",
    meetRole: "Insurance Broker",
    meetText:
      "Kamalpreet is dedicated to helping clients make confident insurance decisions through responsive service, practical guidance and personalized coverage options.",
    partnersTitle: "Our Insurance Partners",
    partnersText:
      "We work with a broad range of insurance carriers and specialty markets. Carrier availability varies by product, eligibility and underwriting.",
    officeTitle: "Visit Our Office",
    officeText: "Conveniently located in Elk Grove, serving Sacramento and surrounding communities.",
    hours: "Monday–Friday • 9:00 AM–5:00 PM",
    contactTitle: "Let's Protect What Matters Most",
    contactText: "Tell us what you need and our team will get back to you.",
    footer: "Punjab Insurance • 9299 E Stockton Blvd #30, Elk Grove, CA 95624"
  },
  pa: {
    nav: ["ਮੁੱਖ ਪੰਨਾ", "ਇਨਸ਼ੋਰੈਂਸ", "ਸਾਡੇ ਬਾਰੇ", "ਸਾਥੀ", "ਸਵਾਲ", "ਸੰਪਰਕ"],
    heroKicker: "2000 ਤੋਂ ਕੈਲੀਫੋਰਨੀਆ ਵਿੱਚ ਸੇਵਾ",
    heroTitle: "2000 ਤੋਂ ਕੈਲੀਫੋਰਨੀਆ ਦੇ ਪਰਿਵਾਰਾਂ ਅਤੇ ਕਾਰੋਬਾਰਾਂ ਦਾ ਭਰੋਸੇਮੰਦ ਸਾਥੀ",
    heroText:
      "ਸੈਕਰਾਮੈਂਟੋ ਅਤੇ ਆਸ-ਪਾਸ ਦੇ ਇਲਾਕਿਆਂ ਵਿੱਚ ਘਰ, ਆਟੋ, ਕਮਰਸ਼ੀਅਲ, ਫਲੱਡ ਅਤੇ SR-22 ਇਨਸ਼ੋਰੈਂਸ ਲਈ ਨਿੱਜੀ ਸੇਵਾ ਅਤੇ ਮੁਕਾਬਲੇ ਵਾਲੀਆਂ ਦਰਾਂ।",
    quote: "ਮੁਫ਼ਤ ਕੋਟ ਲਵੋ",
    call: "ਕਾਲ ਕਰੋ (916) 391-7447",
    trust: "ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ ਤਜਰਬੇ ਵਾਲੀ ਸਥਾਨਕ ਇਨਸ਼ੋਰੈਂਸ ਏਜੰਸੀ।",
    servicesTitle: "ਤੁਹਾਡੀ ਜ਼ਿੰਦਗੀ ਲਈ ਇਨਸ਼ੋਰੈਂਸ ਹੱਲ",
    servicesText: "ਆਟੋ, ਘਰ, ਕਾਰੋਬਾਰ ਅਤੇ ਖਾਸ ਲੋੜਾਂ ਲਈ ਕਵਰੇਜ—ਸਥਾਨਕ ਇਨਸ਼ੋਰੈਂਸ ਮਾਹਿਰ ਦੀ ਰਹਿਨੁਮਾਈ ਨਾਲ।",
    aboutTitle: "ਨਿੱਜੀ ਸੇਵਾ। ਸਥਾਨਕ ਤਜਰਬਾ।",
    aboutText:
      "Punjab Insurance ਇੱਕ ਸੁਤੰਤਰ ਇਨਸ਼ੋਰੈਂਸ ਏਜੰਸੀ ਹੈ ਜੋ ਸੈਕਰਾਮੈਂਟੋ ਖੇਤਰ ਅਤੇ ਆਸ-ਪਾਸ ਦੇ ਇਲਾਕਿਆਂ ਵਿੱਚ ਵਿਅਕਤੀਆਂ, ਪਰਿਵਾਰਾਂ ਅਤੇ ਕਾਰੋਬਾਰਾਂ ਦੀ ਸੇਵਾ ਕਰਦੀ ਹੈ।",
    meetTitle: "ਕਮਲਪ੍ਰੀਤ ਕੌਰ ਨੂੰ ਮਿਲੋ",
    meetRole: "ਇਨਸ਼ੋਰੈਂਸ ਬ੍ਰੋਕਰ",
    meetText:
      "ਕਮਲਪ੍ਰੀਤ ਨਿੱਜੀ ਸੇਵਾ, ਸਪਸ਼ਟ ਰਹਿਨੁਮਾਈ ਅਤੇ ਗਾਹਕਾਂ ਦੀਆਂ ਲੋੜਾਂ ਅਨੁਸਾਰ ਕਵਰੇਜ ਵਿਕਲਪਾਂ ਰਾਹੀਂ ਭਰੋਸੇ ਨਾਲ ਇਨਸ਼ੋਰੈਂਸ ਫੈਸਲੇ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।",
    partnersTitle: "ਸਾਡੇ ਇਨਸ਼ੋਰੈਂਸ ਸਾਥੀ",
    partnersText:
      "ਅਸੀਂ ਕਈ ਇਨਸ਼ੋਰੈਂਸ ਕੈਰੀਅਰਾਂ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਮਾਰਕੀਟਾਂ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਾਂ। ਉਪਲਬਧਤਾ ਉਤਪਾਦ, ਯੋਗਤਾ ਅਤੇ ਅੰਡਰਰਾਈਟਿੰਗ ਅਨੁਸਾਰ ਬਦਲ ਸਕਦੀ ਹੈ।",
    officeTitle: "ਸਾਡੇ ਦਫ਼ਤਰ ਆਓ",
    officeText: "ਐਲਕ ਗਰੋਵ ਵਿੱਚ ਸੁਵਿਧਾਜਨਕ ਸਥਾਨ, ਸੈਕਰਾਮੈਂਟੋ ਅਤੇ ਆਸ-ਪਾਸ ਦੇ ਇਲਾਕਿਆਂ ਦੀ ਸੇਵਾ।",
    hours: "ਸੋਮਵਾਰ–ਸ਼ੁੱਕਰਵਾਰ • ਸਵੇਰੇ 9:00–ਸ਼ਾਮ 5:00",
    contactTitle: "ਜੋ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਹੈ, ਉਸਦੀ ਰੱਖਿਆ ਕਰੀਏ",
    contactText: "ਆਪਣੀ ਲੋੜ ਦੱਸੋ ਅਤੇ ਸਾਡੀ ਟੀਮ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੇਗੀ।",
    footer: "Punjab Insurance • 9299 E Stockton Blvd #30, Elk Grove, CA 95624"
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "pa">("en");
  const t = content[lang];

  const serviceCards = [
    ["🚗", lang === "en" ? "Auto Insurance" : "ਆਟੋ ਇਨਸ਼ੋਰੈਂਸ", "Protect your vehicle and drive with confidence."],
    ["🏠", lang === "en" ? "Home Insurance" : "ਹੋਮ ਇਨਸ਼ੋਰੈਂਸ", "Coverage designed to protect your home and belongings."],
    ["🏢", lang === "en" ? "Commercial Insurance" : "ਕਮਰਸ਼ੀਅਲ ਇਨਸ਼ੋਰੈਂਸ", "Insurance solutions for your business and its risks."],
    ["📄", lang === "en" ? "SR-22 Insurance" : "SR-22 ਇਨਸ਼ੋਰੈਂਸ", "Help navigating SR-22 filing and insurance requirements."],
    ["🌊", lang === "en" ? "Flood & Specialty" : "ਫਲੱਡ ਅਤੇ ਸਪੈਸ਼ਲਟੀ", "Specialty property and flood coverage options."]
  ];

  return (
    <main>
      <div className="topbar">
        <div>Serving Sacramento & Surrounding Communities</div>
        <div className="toplinks"><span>Mon–Fri 9:00 AM–5:00 PM</span><a href="tel:+19163917447">(916) 391-7447</a></div>
      </div>

      <header className="header">
        <a href="#" className="brand" aria-label="Punjab Insurance home">
          <span className="logoMark"><span>PI</span></span>
          <span><strong>Punjab Insurance</strong><small>Insurance Agency</small></span>
        </a>
        <nav className="nav">
          {t.nav.map((item, i) => <a key={item} href={["#home","#insurance","#about","#partners","#faq","#contact"][i]}>{item}</a>)}
        </nav>
        <div className="headerActions">
          <button className="lang" onClick={() => setLang(lang === "en" ? "pa" : "en")}>{lang === "en" ? "ਪੰਜਾਬੀ" : "English"}</button>
          <a className="button small" href="#quote">{t.quote}</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="heroOverlay" />
        <Image src="/images/office-exterior.jpeg" alt="Punjab Insurance office in Elk Grove" fill priority sizes="100vw" className="heroImage" />
        <div className="heroContent">
          <div className="eyebrow">{t.heroKicker}</div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="heroButtons">
            <a className="button gold" href="#quote">{t.quote}</a>
            <a className="button outline" href="tel:+19163917447">{t.call}</a>
          </div>
          <div className="heroTrust"><span>✓ 20+ Years Experience</span><span>✓ Independent Agency</span><span>✓ Personalized Service</span></div>
        </div>
      </section>

      <section className="trustStrip"><div>Since 2000</div><div>Local Expertise</div><div>Multiple Markets</div><div>Personalized Service</div><div>Fast Quotes</div></section>

      <section id="insurance" className="section">
        <div className="sectionHeading"><div className="eyebrow dark">Insurance Coverage</div><h2>{t.servicesTitle}</h2><p>{t.servicesText}</p></div>
        <div className="cards">{serviceCards.map(([icon, title, desc]) => <article className="card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{desc}</p><a href="#quote">Learn more →</a></article>)}</div>
      </section>

      <section id="about" className="splitSection">
        <div className="photoGrid">
          <div className="photo tall"><Image src="/images/office-interior.jpeg" alt="Punjab Insurance office interior" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="photo"><Image src="/images/office-entrance.jpeg" alt="Punjab Insurance office entrance" fill sizes="(max-width: 800px) 50vw, 25vw" /></div>
        </div>
        <div className="splitCopy"><div className="eyebrow dark">Why Punjab Insurance</div><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="checkList"><div>✓ Serving California since 2000</div><div>✓ Independent insurance agency</div><div>✓ Competitive coverage options</div><div>✓ Local, responsive service</div></div></div>
      </section>

      <section className="brokerSection">
        <div><div className="eyebrow">Your Local Insurance Professional</div><h2>{t.meetTitle}</h2><h3>{t.meetRole}</h3><p>{t.meetText}</p><a className="textLink" href="#quote">{t.quote} →</a></div>
        <div className="brokerPlaceholder"><div className="initials">KK</div><span>Professional photo coming soon</span></div>
      </section>

      <section id="partners" className="section partners"><div className="sectionHeading"><div className="eyebrow dark">Our Markets</div><h2>{t.partnersTitle}</h2><p>{t.partnersText}</p></div><div className="carrierGrid">{carriers.map(c => <div className="carrier" key={c}>{c}</div>)}</div></section>

      <section className="officeSection"><div className="officeCopy"><div className="eyebrow dark">Come See Us</div><h2>{t.officeTitle}</h2><p>{t.officeText}</p><strong>9299 E Stockton Blvd #30<br/>Elk Grove, CA 95624</strong><p>{t.hours}</p><a className="button dark" href="https://www.google.com/maps/search/?api=1&query=9299+E+Stockton+Blvd+%2330+Elk+Grove+CA+95624" target="_blank" rel="noreferrer">Get Directions</a></div><div className="officePhoto"><Image src="/images/office-exterior.jpeg" alt="Punjab Insurance storefront" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></section>

      <section id="quote" className="quoteSection"><div><div className="eyebrow">Start Today</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="quoteButtons"><a className="button gold" href="mailto:punjabinsurance7212@gmail.com?subject=Punjab%20Insurance%20Quote%20Request">{t.quote}</a><a className="button outline" href="tel:+19163917447">{t.call}</a></div></div><div className="quoteCard"><label>Name<input placeholder="Your name"/></label><label>Phone<input type="tel" placeholder="Your phone"/></label><label>Email<input type="email" placeholder="Your email"/></label><label>Insurance Type<select><option>Auto</option><option>Home</option><option>Commercial</option><option>SR-22</option><option>Flood / Specialty</option></select></label><button className="button gold full" onClick={() => alert("Thank you! Please call (916) 391-7447 or email punjabinsurance7212@gmail.com to complete your quote request.")}>Request Quote</button><small>This first version uses a simple contact experience. We’ll connect a secure form/email service before launch.</small></div></section>

      <section id="faq" className="faq section"><div className="sectionHeading"><div className="eyebrow dark">Questions</div><h2>Frequently Asked Questions</h2></div><details><summary>What types of insurance do you offer?</summary><p>We offer Auto, Home, Commercial, SR-22, Flood and specialty insurance options through a range of authorized markets.</p></details><details><summary>Do you serve customers outside Elk Grove?</summary><p>Yes. Punjab Insurance is located in Elk Grove and serves Sacramento and surrounding communities, subject to product availability and licensing requirements.</p></details><details><summary>How do I request a quote?</summary><p>Call (916) 391-7447 or use the quote section above. We’ll gather the information needed to identify suitable coverage options.</p></details></section>

      <footer id="contact" className="footer"><div><a className="brand footerBrand" href="#"><span className="logoMark"><span>PI</span></span><span><strong>Punjab Insurance</strong><small>Insurance Agency</small></span></a><p>{t.footer}</p></div><div><h4>Contact</h4><a href="tel:+19163917447">(916) 391-7447</a><a href="mailto:punjabinsurance7212@gmail.com">punjabinsurance7212@gmail.com</a></div><div><h4>Hours</h4><p>Monday–Friday<br/>9:00 AM–5:00 PM</p></div></footer>
      <div className="copyright">© {new Date().getFullYear()} Punjab Insurance. All rights reserved.</div>
    </main>
  );
}
