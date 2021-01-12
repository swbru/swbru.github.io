import React from 'react';
import logo from './../images/Startup-Weekend-Brussels.png';
import { Title } from "react-head";
import App from '../components/app';

const contentStyle = {
  width: '50vw',
  margin: '0 auto',
}

const logoStyle = {
  textAlign: 'center',
}

const imgStyle = {
  width: "30vw"
}

const footerStyle = {
  position: 'absolute',
  width: '100%',
  bottom: 0,
  left: 0,
  fontSize: '0.7vw',
  textAlign: 'center',
  paddingBottom: '7px',
}

const IndexPage = () => (
  <App>
    <Title>Startup Weekend Brussels</Title>
    <div style={contentStyle}>
      {/* <h1>Startup Weekend Brussels</h1> */}
      <p style={logoStyle}>
        <img src={logo} style={imgStyle} alt="Startup Weekend Brussels"/>
      </p>
      <p>Next Startup Weekend Brussels: Online Economy (coming soon)</p>
    </div>
    <footer style={footerStyle}>
      This domain is sponsored by <a href="https://www.madkings.com">MAD Kings agency</a> for the community.
    </footer>
  </App>
)

export default IndexPage;