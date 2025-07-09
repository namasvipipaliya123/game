import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next'; 
import './TirangaNavbar.css';

const TirangaNavbar = () => {
  const { t } = useTranslation(); 

  return (
    <Navbar className="tiranga-navbar" expand="lg">
      <Container className="tiranga-container">
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100">
        
          <Navbar.Brand href="/" className="mb-2 mb-sm-0">
            <img
              src="/img/logo.png"  
              alt="Tiranga Logo"
              className="tiranga-logo-img"
            />
          </Navbar.Brand>

          <Button variant="primary" className="tiranga-button">
            {t("navbar.v")} <FiChevronDown />
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default TirangaNavbar;
