const Footer = () => (
  <footer id="Footer" className="snow">
    <div className="halo smush">
      <div className="firs-section">
        <div className="glyphsSprite p p-logo" />

        <p>©2020 Pablopvsky. Todos los derechos reservados</p>
      </div>
      <div className="contact-section">
        <ul className="page-footer-follow nav-list">
          <li className="item">
            <a
              aria-label="Instagram de Pablopvsky"
              rel="noopener"
              href="https://www.instagram.com/pablopvsky"
              target="_blank"
            >
              <div className="glyphsSprite instagram" />
            </a>
          </li>
          <li className="item">
            <a
              aria-label="Twitter de Pablopvsky"
              rel="noopener"
              href="https://www.twitter.com/pablopvsky"
              target="_blank"
            >
              <div className="glyphsSprite twitter" />
            </a>
          </li>

          <li className="item">
            <a
              aria-label="Youtube de Pablopvsky"
              rel="noopener"
              href="https://www.youtube.com/channel/UCSghzBQY3TRlRv3l_T141Qg?sub_confirmation=1"
              target="_blank"
            >
              <div className="glyphsSprite youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
