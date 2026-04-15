import { Col, Container, Row } from "reactstrap";

const MasterBanner = ({ img, title, desc, link, classes, btn, btnClass }) => {
  
  return (
    <div>
      <div className={`home ${img} ${classes ? classes : "text-center"}`}>
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                <div>
                  <h4 className="titulosMontserrat">{title}</h4>
                  <h1 className="titulosExtraBold mb-4">{desc}</h1>
                  
                  <button
                    onClick={() => window.open('https://wa.me/3203162423', '_blank', 'noopener,noreferrer')} 
                    className={`subtitulosMontserrat btn ${btnClass ? btnClass : "btn-solid"}`}
                    style={{ border: 'none' }} // Para que parezca un botón de diseño
                  >
                    {btn ? btn : "Escribenos"}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MasterBanner;