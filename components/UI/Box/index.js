import React from 'react';

import {connect} from 'react-redux';
import {Container, Button, Message, Image} from 'semantic-ui-react';
import {boxTitle_1, boxTitle_2, boxTitle_3} from '../../../shared/utils/stringConstants';
import FormElement from '../FormElement/';

const Box = (props) => {
  return (
    <div className="box">
      <div className="alert">
        {props.title ? <h2>{props.title}</h2> : null}
        {props.text ? <p>{props.text}</p> : null}

        {props.formData && props.title === boxTitle_1 ?
          <div>
            <FormElement 
              id={props.formData.txtName.config.name}
              formData={props.formData.txtName}
              onChange={(element) => props.onChange(element)}
            />
            <FormElement 
              id={props.formData.txtEmail.config.name}
              formData={props.formData.txtEmail}
              onChange={(element) => props.onChange(element)}
            />
          </div>
          :
          null
        }

        {props.formData && props.title === boxTitle_2 ?
          <div>
            <FormElement 
              id={props.formData.txtCurrentPassword.config.name}
              formData={props.formData.txtCurrentPassword}
              onChange={(element) => props.onChange(element)}
            />
            <FormElement 
              id={props.formData.txtNewPassword.config.name}
              formData={props.formData.txtNewPassword}
              onChange={(element) => props.onChange(element)}
            />
            <FormElement 
              id={props.formData.txtConfirmPassword.config.name}
              formData={props.formData.txtConfirmPassword}
              onChange={(element) => props.onChange(element)}
            />
            <Button 
              content={props.hasError ? 'Form Error' : 'Update password'}
              color={props.hasError ? 'red' : 'blue'}
              onClick={props.show()}
              disabled={props.hasError}
            />
          </div>
          :
          null
        }

        {props.title === boxTitle_3 ?
          <React.Fragment>
            <div className="img_wrapper">       
              <div className="div_leftImg">
                <Image src={props.imgUrl} size='small' />
              </div>
              <div>
                <Image 
                  src={props.imgUrl}
                  size="mini" 
                  circular  
                  verticalAlign="top"             
                  />
              </div>
              
            </div>
            <div style={{
              display: 'block',
              marginTop: '10px'
              }}
            >
                <a onClick={props.changeUserPic()} href="javascript:void(0)">Change user pic</a>
            </div>
          </React.Fragment>
          :
          null
        }

        {!props.title ?
          <a onClick={props.show()} href="javascript:void(0)">Delete account</a>
          :
          null
        }
      </div>
      <style global jsx>{`
        .box {
          padding: 20px 0 20px 0;
        }
        .alert {
          background-color: #ffffff;
        }
        .img_wrapper {
          display: flex
        }
        .div_leftImg {
          width: 70%
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

export default connect(mapStateToProps)(Box);
