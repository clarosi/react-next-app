import React, {Component} from 'react';

import {connect} from 'react-redux';
import Account from '../components/Account/';
import Head from 'next/head';

const Index = () => {
    return (
     <div>
      <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css"
            integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B"
            crossOrigin="anonymous"
          />
          <link 
            rel="stylesheet" 
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
          />
      </Head>
      <Account />
     </div>
    );
}

export default Index;
