import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBContainer fluid className="footerbox">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="3">
              <h2 className="title">Shortly</h2>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title text-right">Features</h5>
              <div className="footerlink">
                <a href="#!"><p>Link Shortening</p></a>
                <a href="#!"><p>Brand List</p></a>
                <a href="#!"><p>Analytics</p></a>
              </div>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title text-right">Resources</h5>
              <div className="footerlink">
                <a href="#!"><p>Blog</p></a>
                <a href="#!"><p>Developer</p></a>
                <a href="#!"><p>Support</p></a>
              </div>
            </MDBCol>
            <MDBCol md="1">
              <h5 className="title text-right">Company</h5>
              <div className="footerlink">
                <a href="#!"><p>About</p></a>
                <a href="#!"><p>Our Teams</p></a>
                <a href="#!"><p>Careers</p></a>
                <a href="#!"><p>Contact</p></a>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <MDBRow className="footericon">
                <p className="iconspace">
                  <a href="#!"><img
                    src='/images/icon-facebook.svg'
                    height='30'
                    alt=''
                    loading='lazy'
                  /></a>
                  <a href="#!"><img
                    src='/images/icon-instagram.svg'
                    height='30'
                    alt=''
                    loading='lazy'
                  /></a>
                  <a href="#!"><img
                    src='/images/icon-twitter.svg'
                    height='30'
                    alt=''
                    loading='lazy'
                  /></a>
                  <a href="#!"><img
                    src='/images/icon-pinterest.svg'
                    height='30'
                    alt=''
                    loading='lazy'
                  /></a>
                </p>
                <MDBCol md="4"></MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </MDBContainer>
  );
}

export default FooterPage;