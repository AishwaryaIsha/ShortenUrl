import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const Thirdboxcards = () => {
  return (

    <MDBRow >
      <MDBCol md="1"></MDBCol>
      <MDBCol md="3">
        <MDBRow className="card1">
          <div className="pinImage">
            <MDBCardBody>
              <img
                src='/images/icon-brand-recognition.svg'
                height='30'
                alt=''
                loading='lazy'
                className="pin"
              />
            </MDBCardBody>
          </div>
          <MDBCard>
            <MDBCardBody className="cardBox">
              <a href='#!' className='activator waves-effect waves-light mr-4'>
                <MDBIcon icon='share-alt' className='black-text' />
              </a>
              <MDBCardTitle>Brand Recognition</MDBCardTitle>

              <MDBCardText>
                Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBCol>
      <MDBCol md="1" className="card2hr">
        <hr />
      </MDBCol>
      <MDBCol md="3">
        <MDBRow className="card2">
          <div className="pinImage">
            <MDBCardBody>
              <img
                src='/images/icon-detailed-records.svg'
                height='30'
                alt=''
                loading='lazy'
                className="pin"
              />
            </MDBCardBody>
          </div>
          <MDBCard >
            <MDBCardBody className="cardBox">
              <a href='#!' className='activator waves-effect waves-light mr-4'>
                <MDBIcon icon='share-alt' className='black-text' />
              </a>
              <MDBCardTitle>Detailed Records</MDBCardTitle>
              <MDBCardText>
                Gain insights into who is clicking your links. knowing when and where people engage with your content helps inform better decisions.

              </MDBCardText>

            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBCol>
      <MDBCol md="1" className="card3hr">
        <hr />
      </MDBCol>
      <MDBCol md="3">
        <MDBRow className="card3">
          <div className="pinImage">
            <MDBCardBody>
              <img
                src='/images/icon-fully-customizable.svg'
                height='30'
                alt=''
                loading='lazy'
                className="pin"
              />
            </MDBCardBody>
          </div>
          <MDBCard>
            <MDBCardBody className="cardBox">
              <a href='#!' className='activator waves-effect waves-light mr-4'>
                <MDBIcon icon='share-alt' className='black-text' />
              </a>
              <MDBCardTitle>Fully Customizable</MDBCardTitle>

              <MDBCardText>
                Improve brand awareness and content discoverability through customizable links supercharging audience engagement.
              </MDBCardText>

            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBCol>

    </MDBRow>
  );
}

export default Thirdboxcards;