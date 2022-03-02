import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <br />
          <br />
          <h5 className="text-uppercase">Gimnasio QUIRON Fuerza</h5>
          <p className="pieDePagina">
            - En el polvo de la derrota y en los laureles de la victoria, se
            puede encontrar gloria si uno dio su mejor esfuerzo. -{" "}
            <strong>Eric Liddell</strong>
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h6 className="text-uppercase fw-bold mb-4">Links utiles</h6>
          <p>
            <a href="#!" className="text-reset">
              Sedes
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Planes
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Novedades
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Solicitar Baja
            </a>
          </p>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Contacto</h5>
          <ul className="list-unstyled">
            <li>Calle 70 N° 1386 e/ 22 y 23, La Plata. </li>
            <li>info@quiron.com </li>
            <li>+ 54 221 5687 188 </li>
            <li>+ 54 221 5687 829 </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>
  </footer>
);

export default Footer;
