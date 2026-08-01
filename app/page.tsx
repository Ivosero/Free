const BOOKING_URL = "https://book.peek.com/";

function BellIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="hero">
      <img
        className="hero__image"
        src="/referencia-cliente.png"
        alt="Vista aérea de un hotel junto al mar, imagen de referencia provista por el cliente"
      />
      <div className="hero__shade" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Camelia Hotel, inicio">
          <span className="brand__mark">C</span>
          <span className="brand__name">CAMELIA</span>
          <span className="brand__type">HOTEL</span>
        </a>

        <div className="topbar__actions">
          <a className="phone" href="tel:+18001234567" aria-label="Llamar al 800 123 4567">
            <span aria-hidden="true">☎</span>
            <span>800 123 4567</span>
          </a>
          <a
            className="booking"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Reservar ahora en PeekPro, se abre en una pestaña nueva"
          >
            <BellIcon />
            <span>RESERVAR AHORA</span>
          </a>
        </div>
      </header>

      <section className="content" id="inicio" aria-labelledby="hero-title">
        <p className="eyebrow">Tu refugio frente al mar</p>
        <h1 id="hero-title">Confort sin igual</h1>
        <div className="wave" aria-hidden="true">∿∿∿</div>
        <p className="subtitle">Viví una experiencia de lujo inolvidable</p>
        <a
          className="booking booking--mobile"
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
        >
          <BellIcon />
          <span>RESERVAR AHORA</span>
        </a>
      </section>

      <p className="demo-note">Prototipo · texto, logo, teléfono y enlace reemplazables</p>
    </main>
  );
}
