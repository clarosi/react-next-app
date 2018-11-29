import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const SemanticModal = (props) => {
    return (
        <Modal 
            size={props.size} 
            open={props.open} 
            onClose={props.close}
            centered={false}
            style={{height: '20%'}}
        >
          <Modal.Header>{props.title}</Modal.Header>
          <Modal.Content>
            <div>{props.question}</div>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={props.close} negative>No</Button>
            <Button onClick={props.close} positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>
    );
}

export default SemanticModal;