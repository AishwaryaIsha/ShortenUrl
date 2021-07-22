import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Fourthboxcontent = () => {
    return (
        <MDBContainer fluid>
            <MDBRow className="fourth-container">
                <MDBCol md="12" className="fourthbox">
                    <div className="text-center">
                        <h1>
                            Boost your links today
                        </h1>
                        <button type="button" className="fourthcontentbtn">Get Started</button>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Fourthboxcontent;