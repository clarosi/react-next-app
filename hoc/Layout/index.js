import React from 'react';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import { Container, Divider } from 'semantic-ui-react';

const Layout = (props) => (
  <Container>
      <Header title={props.headerTitle} />
      <Divider />
      {props.children}
      <Divider />
      <Footer />
      <style global jsx>{`
        .container {
          background-color: #f7f4f4;
        }
      `}</style>
  </Container>
)

export default Layout