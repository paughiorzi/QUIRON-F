import { Carousel } from "react-bootstrap";
export default function Nosotros() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¡Bienvenidos!</h3>
          <p>Dirijase a "Merch" para empezar la compra.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nuestros productos</h3>
          <p>Encontraras toda nuestra indumentaria y accesorios.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ve a Carrito</h3>
          <p>Y finaliza la compra.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
