import React, {Component} from 'react';

import {connect} from 'react-redux';
import {changeUserPic} from '../../store/actions/';
import {bindFormElementValue} from '../../shared/utils/helperFunctions';
import {boxTitle_1, boxTitle_2, boxTitle_3, headerTitle_1} from '../../shared/utils/stringConstants';
import Layout from '../../hoc/Layout/';
import Box from '../UI/Box/';
import SemanticModal from '../UI/Modal/';
import {Modal, Button} from 'semantic-ui-react'

class Account extends Component {
  state = {
      size: 'tiny',
      openDelete: false,
      openUpdate: false,
      formHasError: false,
      isImgUrl_1: true,
      formData: {
        txtName: {
          elementType: 'input',
          value: 'Ian R. Claros',
          config: {
            name: 'txtName',
            type: 'text',
            placeholder: 'Enter your name.',
            maxLength: 50,
            label: 'Full Name'
          },
          validation: {
            required: true
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        },
        txtEmail: {
          elementType: 'input',
          value: 'clarosian@yahoo.com',
          config: {
            name: 'txtEmail',
            type: 'email',
            placeholder: 'Enter your email.',
            maxLength: 50,
            label: 'Email'
          },
          validation: {
            required: true,
            isValidEmail: true
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        },
        txtCurrentPassword: {
          elementType: 'input',
          value: '123456',
          config: {
            name: 'txtCurrentPassword',
            type: 'password',
            placeholder: 'Enter your current password.',
            maxLength: 50,
            label: 'Current password'
          },
          validation: {
            required: true
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        },
        txtNewPassword: {
          elementType: 'input',
          value: '654321',
          config: {
            name: 'txtNewPassword',
            type: 'password',
            placeholder: 'Enter your new password.',
            maxLength: 50,
            label: 'New password'
          },
          validation: {
            required: true
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        },
        txtConfirmPassword: {
          elementType: 'input',
          value: '654321',
          config: {
            name: 'txtConfirmPassword',
            type: 'password',
            placeholder: 'Confirm your password.',
            maxLength: 50,
            label: 'confirm password'
          },
          validation: {
            required: true,
            confirm: 'txtNewPassword'
          },
          showLabel: true,
          isValid: false,
          isTouched: false,
          validationMsg: ''
        }
      }
  };

  changeUserPicHandler = () => {
    let imgUrl;
    if (!this.state.isImgUrl_1)
      imgUrl = 'https://media.licdn.com/dms/image/C5103AQH5WDn7Y5ImIQ/profile-displayphoto-shrink_100_100/0?e=1548892800&v=beta&t=crZ-OQoJpS37yPA7j-r4Vpd8TKzrTT3bYJaGpQRM-Jk';
    else
      imgUrl = 'https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.0-1/p160x160/21728556_1556957637676019_2652855233884577784_n.jpg?_nc_cat=109&_nc_ht=scontent.fmnl6-2.fna&oh=f9cb884fe3b0f759707c318e39e9407f&oe=5C649B82';
    
    this.setState((prevState) => ({
      isImgUrl_1: !prevState.isImgUrl_1
    }));

    this.props.dispatch(changeUserPic(imgUrl));
  }

  onChangeHandler = (element) => {
    const newFormData = bindFormElementValue(element, this.state.formData);

    this.setState({formHasError: false});
    for (const key in newFormData) {      
      if (newFormData[key].validationMsg !== '') 
        this.setState({formHasError: true});
    }

    this.setState({
      formData: newFormData
    });
  }

  showHandler = (size, type) => () => {
    if (type === 'delete')
      this.setState({size, openDelete: true});
    else
      this.setState({size, openUpdate: true});
  }
  
  closeHandler = () => {
    this.setState({
      openDelete: false,
      openUpdate: false
    });
  }

  render() {
    return (
      <Layout headerTitle={headerTitle_1}>
        <div className="div_wrapper">
          <div className="left">
            <Box 
              title={boxTitle_1}
              text={"By letting us know your name, we can make your experience more personal."}
              formData={this.state.formData}
              onChange={(element) => this.onChangeHandler(element)}
            />
            <Box 
              title={boxTitle_2}
              formData={this.state.formData}
              onChange={(element) => this.onChangeHandler(element)}
              show={() => this.showHandler(this.state.size, 'update')}
              hasError={this.state.formHasError}
            />
            <Box 
              text={"We do our best to give you a great experience, we'll be sad to see you leave us."}
              show={() => this.showHandler(this.state.size, 'delete')}
            />
          </div>
          <div className="right">
            <Box 
              title={boxTitle_3}
              changeUserPic={() => this.changeUserPicHandler}
            />
          </div>
        </div>
        <SemanticModal 
          size={this.state.size}
          open={this.state.openUpdate}
          close={this.closeHandler}
          title={"Upate your account."}
          question={"Are you sure you want to update your account?"}
        />
        <SemanticModal 
          size={this.state.size}
          open={this.state.openDelete}
          close={this.closeHandler}
          title={"Delete your account."}
          question={"Are you sure you want to delete your account?"}
        />
        <style global jsx>{`
          .div_wrapper {
            display: flex;
          }
          .left {
            margin-right: 3%;
            width: 65%;
          }
          .right {
            width: 30%;
          }
        `}</style>
      </Layout>
    );
  }
}

export default connect()(Account);
