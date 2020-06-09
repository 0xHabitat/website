import React from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/src/components/Navbar';
import Logo from 'common/src/components/UIElements/Logo';
import { Container } from './navbar.style';
import LogoImage from 'common/src/assets/image/agency/logo.png';

const Navbar = ({ navbarStyle, logoStyle }) => {
  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="#"
          logoSrc={LogoImage}
          title="Deora"
          logoStyle={logoStyle}
        />
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: '70px',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
  },
};

export default Navbar;
