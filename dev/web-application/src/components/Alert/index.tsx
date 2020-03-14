import React, { useEffect, useState } from 'react';
import { Container } from './index.styles';

enum TypeAlert{
    success = '#3fff3f',
    warning = '#ffff3f',
    error = '#ff3f3f'
}

interface Props {
    message: string;
    type?: 'success' | 'warning' | 'error';
  }


function Alert({
  message, type = 'success',
}:Props): React.ReactElement {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(message !== '');
    setTimeout(() => {
      setShow(false);
    }, 6000);
  }, [message]);

  return (
    <Container background={TypeAlert[type]} show={show}>
      <div className="type" />
      <p>{message}</p>
    </Container>
  );
}

export default Alert;
