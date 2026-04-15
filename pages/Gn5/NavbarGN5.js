import React, { useState } from "react";
import LogoImage from "../../components/headers/common/logo"
import { Navbar, Nav, NavItem, NavLink, Container, Button, NavbarToggler, Collapse } from "reactstrap";

const NavbarGN5 = () => {

  const [isOpen, setIsOpen] = useState(false);

  // 2. Función para alternar el estado
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar 
      expand="md" 
      dark 
      className="navbar-transparent fixed-top" 
      style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)' }}
    >
      <Container>
        <LogoImage logo={"logo-blanco.png"} />
        
        {/* 3. El botón de "hamburguesa" que aparece en móviles */}
        <NavbarToggler onClick={toggle} />

        {/* 4. El contenido que se colapsará */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto align-items-center" navbar>
            <NavItem>
              <NavLink href="#nosotros" className="text-white subtitulosMontserrat">Nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#servicios" className="text-white subtitulosMontserrat">Servicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#trabaja" className="text-white subtitulosMontserrat">Trabaja con Nosotros</NavLink>
            </NavItem>
            <NavItem className="ms-3">
              <NavLink href="#footer" className="text-white p-0">
                <Button color="primary" className="btn-gn5-custom subtitulosMontserrat">
                  Contactanos
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarGN5;