import "./Footer.css"

const Footer = () => {
  return (
    <div className="container-fluid bg-light">
      <footer>
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