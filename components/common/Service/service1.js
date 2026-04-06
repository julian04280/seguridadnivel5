import React from "react";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
} from "../../../services/script";
import { Container, Row, Col } from "reactstrap";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgFreeShipping,
    title: "Mas de 120",
    service: "Clientes empresariales y residenciales atendidos satisfactoriamente",
  },
  {
    link: svgservice,
    title: "Servicio 24 X 7 ",
    service: "Cobertura en monitore y respuesta a emergencias",
  },
  {
    link: svgoffer,
    title: "Mas de 500",
    service: "500 instalaciones de cámaras y sistemas de seguridad electrónica",
  },
];

const ServiceLayout = ({ sectionClass }) => {
  return (
    <Container>
      <section className={sectionClass}>
        <Row>
          {Data.map((data, index) => {
            return (
              <Col md="4" className="service-block" key={index}>
                <MasterServiceContent
                  link={data.link}
                  title={data.title}
                  service={data.service}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};

export default ServiceLayout;
