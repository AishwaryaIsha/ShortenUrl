import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBCollapse
} from 'mdb-react-ui-kit';


export function Header() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand className="navBarLayout">
          <img
            src='/images/logo.svg'
            height='30'
            alt=''
            loading='lazy'
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarCenteredExample'
          aria-controls='navbarCenteredExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0 toggleNav'>
            <div className='d-flex input-group w-auto container-fluid' >
              <button type="button" className="navBarLogin">Features</button>
            </div>
            <div className='d-flex input-group w-auto container-fluid' >
              <button type="button" className="navBarLogin">Pricing</button>
            </div>
            <div className='d-flex input-group w-auto container-fluid' >
              <button type="button" className="navBarLogin">Resource</button>
            </div>
            <hr />
            <div className='d-flex input-group w-auto container-fluid' >
              <button type="button" className="navBarLogin">Login</button>
            </div>
            <div className='d-flex input-group w-auto container-fluid' >
              <button type="button" className="navBarBtn">Sign Up</button>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;





