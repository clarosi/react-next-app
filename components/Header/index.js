import React, {Component} from 'react';

import {connect} from 'react-redux';
import { Header, Image } from 'semantic-ui-react';

const Headers = (props) => {
    return (
        <div className="wrapper">
            <Header as="h1">{props.title}</Header>
            <div className="text-right">
                <Image 
                    src={props.imgUrl}
                    size="mini" 
                    circular  
                    verticalAlign="top"             
                 />
            </div>
            <style global jsx>{`
                .wrapper {
                    padding-top: 2rem;
                }
                .header {
                    float: left;
                }
            `}</style>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        imgUrl: state.imgUrl
    };
};

export default connect(mapStateToProps)(Headers);