import React,{ useState } from "react";
import Banner from "./layouts/Fashion/Components/Banner";
import NavbarGN5 from "../pages/Gn5/NavbarGN5";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import { Container, Row, Col, Card, CardBody, Button, Form, Input, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import emailjs from '@emailjs/browser';

const Fashion = () => {

  const [modalAbierto, setModalAbierto] = useState(false);
  const toggleModal = () => setModalAbierto(!modalAbierto);

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModalEmail = () => setModalOpen(!modalOpen);

  const [videoSeleccionado, setVideoSeleccionado] = useState("");

  const abrirModalConVideo = (url) => {
    setVideoSeleccionado(url);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setVideoSeleccionado("");
  };

  const datosServicios = [
    { title: "Alarmas", icon: "/assets/images/collection/ALARMAS-GN5.png", desc: "Protege tu hogar o negocio con sistemas de alarmas inteligentes que detectan intrusiones y activan respuesta inmediata. Seguridad 24/7 para prevenir riesgos y proteger lo que más importa.", url: "https://www.youtube.com/embed/t_EmOmrZPmM" },
    { title: "Automatización de puertas", icon: "/assets/images/collection/AUTOMATIZACION-PUERTAS-GN5.png", desc: "Controla accesos vehiculares y peatonales con puertas automáticas seguras y confiables. Mejora la seguridad, comodidad y control en conjuntos residenciales y empresas", url: "https://www.youtube.com/embed/ubozlxHW7QI" },
    { title: "Cámaras de seguridad", icon: "/assets/images/collection/CAMARAS-SEGURIDAD-GN5.png", desc: "Vigila tus espacios en tiempo real con sistemas CCTV de alta calidad. Obtén grabaciones claras y control total para prevenir incidentes y proteger tu propiedad..", url: "https://www.youtube.com/embed/Muxo9OqBcBQ" },
    { title: "Monitoreo virtual (app)", icon: "/assets/images/collection/Mesa de trabajo 9.png", desc: "Activa alertas de emergencia y comparte tu ubicación en tiempo real con nuestro sistema de monitoreo virtual y botón de pánico inteligente desde tu celular.", url: "https://www.youtube.com/embed/4TdMRkrAjhc" },
    { title: "Seguridad física", icon: "/assets/images/collection/SEGURIDAD-FISICA-GN5.png", desc: "Servicio profesional de vigilancia y control de accesos con personal capacitado y protocolos operativos que garantizan protección y tranquilidad permanente.", url: "https://www.youtube.com/embed/NildzO0d3NM" },
    { title: "Servicios generales", icon: "/assets/images/collection/SERVICIOS-GENERALES-GN5.png", desc: "Soluciones integrales de consejería, aseo y mantenimiento para espacios residenciales y corporativos, asegurando orden, higiene y ambientes adecuados.", url: "https://www.youtube.com/embed/ClE_608DYkg" },
  ];

  const stats = [
    { 
      num: "+120", 
      text: "clientes empresariales y residenciales atendidos satisfactoriamente" 
    },
    { 
      num: "+18", 
      text: "años de experiencia en el mercado de la seguridad privada y electrónica" 
    },
    { 
      num: "24/7", 
      text: "cobertura en monitoreo y respuesta a emergencias" 
    },
    { 
      num: "+500", 
      text: "instalaciones de cámaras y sistemas de seguridad electrónica" 
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs.send('service_4vlpaaa', 'template_miw2gy2', formData, 'wKZXLQmMaXMgFr8Kj')
      .then((res) => {
          setModalOpen(true);
          setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
          console.error("Error:", err);
      });
  };

  const isFormValid = formData.name.trim() !== "" && 
                    formData.email.trim() !== "" && 
                    formData.message.trim() !== "";
  
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/favicon.ico"} />
      </Helmet>
      <NavbarGN5 />
      <Banner />

      <div className="section-a-space" id="nosotros">
        <section className="quienes-somos-section" style={{ padding: "80px 0" }}>
          <Container>
            <Row className="align-items-center">
              {/* Columna de la Imagen */}
              <Col md="6">
                <div className="image-container">
                  <img 
                    src="/assets/images/about/NOSOTROS-SEGURIDAD-GN5.png" 
                    alt="Seguridad" 
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
              </Col>

              {/* Columna del Texto */}
              <Col md="6" className="ps-md-5">
                <div className="content">
                  <h2 className="subtitulosMontserratNegra">Quienes somos</h2>
                  <hr style={{ width: "50px", borderTop: "3px solid #000", opacity: 1 }} />
                  
                  <p className="mt-4 text-secondary textoMontserrat">
                    Somos una empresa colombiana con trayectoria comprobada en seguridad física, electrónica y consultiva.
                  </p>
                  <p className="text-secondary textoMontserrat">
                    Nacimos como Seguridades Activas y evolucionamos hacia Grupo Nivel 5 para consolidar lo mejor de nuestra historia con las nuevas oportunidades del mundo digital.
                  </p>
                  <p className="text-secondary textoMontserrat">
                    Nuestro equipo técnico, humano y estratégico trabaja con pasión por proteger lo que valoras, con soluciones hechas a tu medida.
                  </p>

                  {/* Botón que activa el Pop Up */}
                  <div className="mt-4 titulosMontserrat">
                    <button 
                      onClick={() => window.open('https://wa.me/3123352230', '_blank', 'noopener,noreferrer')}
                      style={{ 
                        backgroundColor: "#fbd317", 
                        border: "none", 
                        borderRadius: "25px", 
                        padding: "10px 30px",
                        fontWeight: "bold",
                        color: "white"
                      }}
                    >
                      Cotiza ahora
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <div className="section-a-space">
        <section className="stats-section">
          <Container>
            <Row className="justify-content-center align-items-center">
              {stats.map((item, i) => (
                <Col key={i} lg="3" md="3" sm="6" xs="12" className="stat-item textoMontserrat">
                  <h2 className="stat-number">{item.num}</h2>
                  <p className="stat-text">{item.text}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>

      <div className="section-a-space" id="servicios">
        <section className="section-b-space" style={{ backgroundColor: "#fff" }}>
          <Container>
            <div className="title1 text-center mb-5">
              <h2 className="title-inner1">Nuestros Servicios</h2>
              <hr style={{ width: "80px", margin: "10px auto", borderTop: "2px solid #000" }} />
              <p className="mt-3 text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
                Nuestro amplio catálogo y versatilidad permite ofrecer un servicio completo de seguridad, innovación y tecnología de vanguardia.
              </p>
            </div>

            <Row>
              {datosServicios.map((item, index) => (
                <Col lg="4" md="6" className="mb-4" key={index}>
                  <Card className="text-center border-1 h-100 shadow-sm" style={{ padding: "20px" }}>
                    <CardBody>
                      {/* Icono (puedes usar iconos de RemixIcon o FontAwesome) */}
                      <div className="mb-3" style={{ fontSize: "40px", color: "#fbd317" }}>
                        <i className={item.icon}></i>
                         <img 
                            src={item.icon} 
                            alt="Seguridad" 
                            className="img-fluid rounded-4 width-images-Gn5" 
                          />
                      </div>
                      <h4 className="fw-bold">{item.title}</h4>
                      <p className="text-muted small mt-4">{item.desc}</p>
                      <button 
                        onClick={() => abrirModalConVideo(item.url)}
                        style={{ 
                          backgroundColor: "#fbd317", 
                          border: "none", 
                          borderRadius: "25px", 
                          padding: "10px 30px",
                          fontWeight: "bold",
                          color: "white"
                        }}
                      >
                        Ver Video
                      </button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
              <ModalComponent isOpen={modalAbierto} toggle={cerrarModal} url={videoSeleccionado} />
            </Row>

            <div className="text-center mt-5">
              <Button 
                size="lg" 
                style={{ backgroundColor: "#fbd317", border: "none", borderRadius: "25px", padding: "12px 40px" }}
                onClick={() => window.open('https://wa.me/3123352230', '_blank', 'noopener,noreferrer')}
              >
                Cotiza ahora
              </Button>
            </div>
          </Container>
        </section>
      </div>

      <div>
        <section id="trabaja" className="trabaje-nosotros-section" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/assets/images/CONTACTO-SEGURIDAD-GN5.png')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: "130px 0",
            textAlign: "center"
          }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <h2 className="fw-bold text-dark" style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
                  Trabaje con nosotros
                </h2>
                <hr style={{ width: "60px", margin: "0 auto 20px auto", borderTop: "3px solid #000", opacity: 1 }} />
                
                <p className="lead text-dark mb-4" style={{ fontWeight: "500" }}>
                  Como franquicia, instalador, vendedor y más
                </p>

                <Button 
                  className="btn-solid"
                  style={{ 
                    backgroundColor: "#fbd317", // El rosa de tu marca
                    border: "none", 
                    borderRadius: "12px", // Bordes un poco menos redondeados según la imagen
                    padding: "15px 40px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    boxShadow: "0px 4px 15px rgba(49, 31, 37, 0.3)"
                  }}
                   onClick={() => window.open('https://wa.me/3123352230', '_blank', 'noopener,noreferrer')}
                >
                  Pregunta como
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <div id="footer">
        <footer style={{ backgroundColor: "#2d3e50", color: "white", padding: "60px 0" }}>
          <Container>
            <Row className="align-items-start">
              {/* Columna 1: Logo e Información de Contacto */}
              <Col lg="4" md="12" className="mb-4 mb-lg-0">
                <div className="footer-logo mb-4">
                  <img 
                    src="/assets/images/icon/GN5.png" 
                    alt="GN5 Logo" 
                    style={{ maxWidth: "200px" }} 
                  />
                </div>
                
                <div className="contact-info">
                  <h5 className="fw-bold mb-3" style={{ color: "white"}}>Contactanos</h5>
                  <p className="mb-2" style={{ color: "white"}}>
                    <i className="ri-whatsapp-line me-2" ></i> +57 3XX XXX XXXX
                  </p>
                  <p style={{ color: "white"}}>
                    <i className="ri-mail-line me-2"></i> XXXXXX@XXXXXX.XXX
                  </p>
                </div>
              </Col>

              {/* Columna 2: Redes Sociales */}
              <Col lg="3" md="6" className="mb-4 mb-lg-0">
                <h5 className="fw-bold mb-3" style={{ color: "white"}}>Síguenos</h5>
                <div className="social-links" style={{ display: "flex", gap: "15px", fontSize: "24px" }}>
                  <a href="https://www.facebook.com/seguridadgn5" className="text-white">
                    <img 
                      src="/assets/images/icon/FACEBOOK-GN5.png" 
                      alt="icon facebook" 
                      style={{ maxWidth: "20px" }} 
                    />
                  </a>
                  <a href=" https://www.instagram.com/seguridadgn5/" className="text-white">
                    <img 
                      src="/assets/images/icon/INSTAGRAM-GN5.png" 
                      alt="icon instagram" 
                      style={{ maxWidth: "20px" }} 
                    />
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=3159638912&text&type=phone_number&app_absent=0" className="text-white">
                    <img 
                      src="/assets/images/icon/WHATSAPP-GN5-.png" 
                      alt="icon whatsapp" 
                      style={{ maxWidth: "20px" }} 
                    />
                  </a>
                </div>
              </Col>

              {/* Columna 3: Formulario de Contacto */}
              <Col lg="5" md="6">
                <Form>
                  <FormGroup>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ingrese su nombre"
                      style={{ borderRadius: "0", marginBottom: "15px", padding: "12px" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ingrese su correo electronico"
                      style={{ borderRadius: "0", marginBottom: "15px", padding: "12px" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="message"
                      type="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escriba un mensaje"
                      style={{ borderRadius: "0", marginBottom: "20px", height: "100px", padding: "12px" }}
                    />
                  </FormGroup>
                  <Button 
                    disabled={!isFormValid}
                    style={{ 
                      backgroundColor: "#fbd317", 
                      border: "none", 
                      borderRadius: "8px", 
                      padding: "10px 40px",
                      fontWeight: "bold",
                      float: "left",
                    }}
                    onClick={enviarCorreo}
                  >
                    Enviar
                  </Button>
                </Form>
                <Modal 
                  isOpen={modalOpen} 
                  toggle={toggleModalEmail} 
                  centered={true} // Esto lo centra verticalmente en la pantalla
                  contentClassName="border-0 rounded-4 shadow-lg" // Quita bordes feos y da sombra
                >
                  {/* Header centrado y sin borde inferior */}
                  <ModalHeader 
                    toggle={toggleModalEmail} 
                    className="border-0 pb-0 d-flex justify-content-center w-100"
                  >
                    <span className="text-2xl font-bold text-slate-900 w-100 text-center">
                      ¡Mensaje enviado!
                    </span>
                  </ModalHeader>

                  <ModalBody className="text-center py-4 px-5">
                    
                    <p className="text-slate-600 leading-relaxed">
                      Gracias por contactarnos. Hemos recibido tu mensaje correctamente y te responderemos lo antes posible.
                    </p>
                  </ModalBody>

                  <ModalFooter className="border-0 pt-0 pb-4 justify-content-center">
                    <Button className="btn-modal-custom" onClick={toggleModalEmail}>
                      Entendido
                    </Button>
                  </ModalFooter>
                </Modal>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>

    </>
  );
};

export default Fashion;
