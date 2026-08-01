"use client";

import { useEffect, useState } from "react";

const BOOKING_URL = "https://book.peek.com/";

type Language = "en" | "es" | "zh";

const copy = {
  en: {
    label: "Language",
    home: "Camelia Hotel, home",
    call: "Call 800 123 4567",
    book: "BOOK NOW",
    bookingLabel: "Book now on PeekPro, opens in a new tab",
    eyebrow: "Your sanctuary by the sea",
    title: "Unparalleled comfort",
    subtitle: "Embrace the ultimate luxury experience",
    note: "Prototype · text, logo, phone, video and link can be replaced",
  },
  es: {
    label: "Idioma",
    home: "Camelia Hotel, inicio",
    call: "Llamar al 800 123 4567",
    book: "RESERVAR AHORA",
    bookingLabel: "Reservar ahora en PeekPro, se abre en una pestaña nueva",
    eyebrow: "Tu refugio frente al mar",
    title: "Confort sin igual",
    subtitle: "Viví una experiencia de lujo inolvidable",
    note: "Prototipo · texto, logo, teléfono, video y enlace reemplazables",
  },
  zh: {
    label: "语言",
    home: "山茶花酒店，首页",
    call: "致电 800 123 4567",
    book: "立即预订",
    bookingLabel: "立即在 PeekPro 预订，将在新标签页中打开",
    eyebrow: "您的海滨静谧居所",
    title: "无与伦比的舒适",
    subtitle: "尽享极致奢华体验",
    note: "演示版本 · 文字、标志、电话、视频和链接均可替换",
  },
} satisfies Record<Language, Record<string, string>>;

function BellIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </svg>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  }, [language]);

  return (
    <main className="hero">
      <video
        className="hero__media"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-fallback.png"
        aria-hidden="true"
      >
        <source src="/hero-resort.mp4" type="video/mp4" />
      </video>
      <div className="hero__shade" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label={text.home}>
          <span className="brand__mark">C</span>
          <span className="brand__name">CAMELIA</span>
          <span className="brand__type">HOTEL</span>
        </a>

        <div className="topbar__actions">
          <label className="language-picker">
            <span className="sr-only">{text.label}</span>
            <span aria-hidden="true">◎</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
              aria-label={text.label}
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="zh">中文</option>
            </select>
          </label>
          <a className="phone" href="tel:+18001234567" aria-label={text.call}>
            <span aria-hidden="true">☎</span>
            <span>800 123 4567</span>
          </a>
          <a
            className="booking"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={text.bookingLabel}
          >
            <BellIcon />
            <span>{text.book}</span>
          </a>
        </div>
      </header>

      <section className="content" id="home" aria-labelledby="hero-title">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1 id="hero-title">{text.title}</h1>
        <div className="wave" aria-hidden="true">∿∿∿</div>
        <p className="subtitle">{text.subtitle}</p>
        <a
          className="booking booking--mobile"
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          aria-label={text.bookingLabel}
        >
          <BellIcon />
          <span>{text.book}</span>
        </a>
      </section>

      <p className="demo-note">{text.note}</p>
    </main>
  );
}
