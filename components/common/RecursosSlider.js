import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import { Slider4 } from "../../services/script";

const RecursosSlider = () => {
  const images = Array.from({ length: 16 }, (_, i) => ({
    src: `/assets/images/recursos/recurso_${(i + 1).toString().padStart(2, '0')}.jpeg`,
    alt: `Recurso ${i + 1}`
  }));

  return (
    <section className="section-b-space">
      <Container>
        <Row>
          <Col md="12">
            <div className="title1 text-center mb-5">
              <h2 className="title-inner1">Nuestros Recursos</h2>
              <hr style={{ width: "80px", margin: "10px auto", borderTop: "2px solid #000" }} />
              <p className="letra-quienes-somos-20 mt-3 text-muted">
                Conoce más sobre nuestras instalaciones, equipos y personal altamente capacitado.
              </p>
            </div>
            <Slider {...Slider4} infinite={true} className="slide-4 no-arrow">
              {images.map((img, index) => (
                <div key={index} className="px-2">
                  <div className="category-block">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="img-fluid rounded-4 shadow-sm"
                      style={{ 
                        width: '100%', 
                        height: '250px', 
                        objectFit: 'cover',
                        borderRadius: '15px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RecursosSlider;
