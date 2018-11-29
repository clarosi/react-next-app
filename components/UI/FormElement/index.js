import React from 'react';

import { Input } from 'semantic-ui-react'

const FormElement = ({id, formData, onChange}) => {
    const showErrorHandler = () => {
        const errorMsg = (
            <div style={{color: '#dc143c'}}>
                {formData.validation && !formData.isValid ? formData.validationMsg : null}
            </div>
        );
        return errorMsg;
    }

    const formTempleteHandler = () => {
        let formTemplete = null;

        switch (formData.elementType) {
            case ('input'):
                formTemplete = (
                    <div style={{marginBottom: '20px'}}>
                        { formData.showLabel ?
                            <div></div>
                            :
                            null
                        }
                        <Input 
                            size="large"
                            fluid
                            {...formData.config}
                            value={formData.value}
                            onChange={(event) => onChange({event, id})}
                            onBlur={(event) => onChange({event, id, blur: true})}
                        />
                        {showErrorHandler()}
                    </div>
                );
                break;     
            default:
                formTemplete = null;
                break;
        }
        return formTemplete;
    }

    return (
        <React.Fragment>
            {formTempleteHandler()}
        </React.Fragment>
    );
}

export default FormElement;