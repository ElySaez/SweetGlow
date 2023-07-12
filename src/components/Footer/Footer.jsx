import "./Footer.css"

const Footer = () => {
  return (
    <div className="container-fluid bg-light">
      <footer>
        <section className="d-flex justify-content-center p-4 border-bottom">
          <p className="text-center" style={{ color: "gray" }}> Este sitio aún está en construcción, para mayor información puedes contactarnos a contacto@sweetglow.cl </p>
        </section>
        <div className="row">
          <div className="text-center p-4" style={{ background: "lightgray" }}>
            2023 <a className="text-reset fw-bold" href="https://sweetglow.com/"> sweetglow.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;