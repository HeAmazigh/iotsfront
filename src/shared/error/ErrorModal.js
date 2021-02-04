import React from 'react';

import Model from '../UIElements/Model/Model';
import Button from '../UIElements/Button/Button';

const ErrorModal = props => {
  return (
    <Model
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Model>
  );
};

export default ErrorModal;
