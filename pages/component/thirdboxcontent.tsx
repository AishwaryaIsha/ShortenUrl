import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Thirdboxcards from "./thirdboxcards";

const Thirdboxcontent = () => {
  return (
    <MDBContainer fluid className="third-container">
      <div className="third-container-margin">
        <MDBRow >
          <MDBCol md='4' >
          </MDBCol>
          <MDBCol md='4' >
            <div className="text-center">
              <h1>
                Advanced Statistics
              </h1>
              <p>Track how your link is performing accross the web with</p>
              <p>our advanced statistics dashboard.</p>
            </div>
          </MDBCol>
          <MDBCol md='4' >
          </MDBCol>
        </MDBRow>
        <MDBRow>

        </MDBRow>

      </div>
      <Thirdboxcards />
    </MDBContainer>
  );
}

export default Thirdboxcontent;