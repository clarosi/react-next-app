export const validateFormElement = (element, formData = []) => {
  let result = [true, ''];

  if (element.validation.isValidEmail) {
    const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(element.value);
    const msg = `${!valid ? 'Please enter valid email.' : ''}`;
    result = !valid ? [valid, msg] : result;
  }

  if (element.validation.confirm) {
    const valid = element.value.trim() === formData[element.validation.confirm].value;
    const msg = `${!valid ? 'Password didn\'t match.' : ''}`;
    result = !valid ? [valid, msg] : result;
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== '';
    const msg = `${!valid ? 'This field is required.' : ''}`;
    result = !valid ? [valid, msg] : result;
  }

  return result;
};

export const bindFormElementValue = (element, formData, value = '') => {
  const newFormData = {...formData};
  const newElement = {...newFormData[element.id]};
  //
  if (value === '') {
    if (newElement.config.type === 'number') {
      const regex = /^[0-9]*$/;
      if(regex.test(element.event.target.value) ) {
        newElement.value = element.event.target.value;
      }
      else {
        newElement.value = '';
      }
    }
    else {
      newElement.value = element.event.target.value;
    }
  }
  else {
    newElement.value = value;
  }
  //
  let result = validateFormElement(newElement, formData);
  newElement.isValid = result[0];
  newElement.validationMsg = result[1];
  newElement.isTouched = element.blur;
  //
  newFormData[element.id] = newElement;
  //
  return newFormData;
};