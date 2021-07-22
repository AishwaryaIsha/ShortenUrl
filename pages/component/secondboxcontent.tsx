import React, { Component } from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

interface IProps {
}
interface IState {
  inputUrl?: string;
  urlList?: Object;
  text?: boolean;
  mainBtnText? :boolean;
  inputError?: string;
}
class Secondboxcontent extends React.Component<IProps, IState> {
  documentData: any;
  localData: Array<string> = [];
  oldKey: any;
  constructor(props: {}) {
    super(props)

    this.state = {
      inputUrl: '',
      urlList: '',
      text: true,
      mainBtnText: false,
      inputError: ""
    }
  }
  changeHandler = (e: { target: { name: any; value: any; }; }) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validate = () => {
    let inputError = "";
    if (!this.state.inputUrl || this.state.inputUrl == "") {
      inputError = "Please give a input"
      this.setState({ inputError });
      return false;
    } else if (this.state.inputUrl.length > 0 && this.state.inputUrl.includes('www')) {
      inputError = "Invallid URL"
      this.setState({ inputError });
      return false;
    } else {
      inputError = "";
      this.setState({ inputError });
      return true;
    }
  };

  submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const isValid = this.validate();
    if (isValid) {
      this.setState({mainBtnText : true});
      axios.post('https://api.shrtco.de/v2/shorten?url=' + this.state.inputUrl)
        .then(urldata => {
          this.localData.push(urldata.data);
          localStorage.setItem('document', JSON.stringify(this.localData));
          if (localStorage.getItem('document')) {
            this.setState({
              urlList: this.localData,
              mainBtnText : false
            })
          }
        })
        .catch(error => {
          this.setState({mainBtnText :false});
          console.log(error);
        })
    }
  }

  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
    if (this.documentData) {
      this.localData.push(...this.documentData);
    }
    if (localStorage.getItem('document')) {
      this.setState({
        urlList: this.localData
      })
    }

  }

  changeText = (key: any) => {
    if (this.oldKey) {
      const oldList: Object | undefined = this.state.urlList;
      oldList?.map((items: any) => {
        if (items?.result?.code === this.oldKey) {
          items.ok = true;
        }
      })
    }
    const newList: Object | undefined = this.state.urlList;
    newList?.map((item: any) => {
      if (item?.result?.code === key) {
        item.ok = false
        if(this.state.text === true){
        this.setState({ text: false });
        }else{
          this.setState({ text: true });
        }
      }
    })
    this.oldKey = key;
  }


  render() {
    const { inputUrl } = this.state;
    const { urlList } = this.state;
    const { text } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <MDBContainer fluid>
          <MDBRow className="second-container" >
            <MDBCol md='2' ></MDBCol>
            <MDBCol md='8' className="secondbox" ><MDBRow>
              <MDBCol md='1' ></MDBCol>
              <MDBCol md='8' className="input" >
                <div className="form-group">
                  <input
                    type="text"
                    name="inputUrl"
                    value={inputUrl}
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="shorten a link here ..."
                    onChange={this.changeHandler}
                    style={this.state.inputError ? { borderColor: "red", borderWidth: 2 } : { border: "black" }}
                  />
                </div>
                {this.state.inputError ? <div style={{ fontSize: 20, color: "red" }}>{this.state.inputError}</div>
                  : null}
              </MDBCol>
              <MDBCol md='2' className="input" >
                <button type="submit" className="secondcontentbtn">{this.state.mainBtnText ? "Shotening..." : "Shorten It!"}</button>
              </MDBCol>
              <MDBCol md='1' ></MDBCol>
            </MDBRow>
            </MDBCol>
            <MDBCol md='2' ></MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid className="urlList">
          {urlList &&
            urlList.map((_urlList: { code: React.Key | null | undefined; result: { original_link: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; full_short_link: {} | null | undefined; code: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; ok: any; }) => {
              return (
                <MDBRow key={_urlList.result.code}>
                  <MDBCol md='2' ></MDBCol>
                  <MDBCol md='8'>
                    <div className="shadow p-3 mb-3 bg-white rounded overflow-hidden">
                      <MDBRow>
                        <MDBCol md='8' className="originalUrl" >{_urlList?.result?.original_link}</MDBCol>
                        <MDBCol md='3' className="shortLink" >{_urlList?.result?.full_short_link}</MDBCol>
                        <MDBCol md='1'>
                          <button
                            type="button"
                            className={_urlList.ok ? "listcontentbtn" : "listcontentbtnchk"}
                            onClick={(e) => {
                              navigator.clipboard.writeText(_urlList?.result?.full_short_link);
                              this.changeText(_urlList.result.code)
                            }}
                          >{_urlList.ok ? "copy" : "copied!"}</button></MDBCol>
                      </MDBRow>
                    </div>
                  </MDBCol>
                  <MDBCol md='2' ></MDBCol>
                </MDBRow>
              );
            })}
        </MDBContainer>


      </form>
    );
  }
}

export default Secondboxcontent;
