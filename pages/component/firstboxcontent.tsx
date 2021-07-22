import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Firstboxcontent = () => {
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size='md' className='box_container box_1 col-example'>
            <MDBRow>
              <MDBCol md='2' ></MDBCol>
              <MDBCol md='8'>
                <div className="contentSpace">
                  <div className="content">
                    <h1>
                      More than just
                    </h1>
                    <h1>
                      shorter links
                    </h1>
                    <p>Build your Brand's recognnition and get detailed</p>
                    <p>insights on how your link is performing.</p>
                  </div>
                </div>
                <MDBRow>
                  <MDBCol md='3'>
                    <button type="button" className="firstcontentbtn">Get Started</button>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md='1'></MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol size='md' className='box_container box_2 col-example'>
            <img
              src='/images/illustration-working.svg'
              alt=''
              loading='lazy'
              className='image'
            />
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Firstboxcontent;