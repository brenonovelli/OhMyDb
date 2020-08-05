import React from 'react';
import PropTypes from 'prop-types';
import { FiLoader } from 'react-icons/fi';

import { Container } from './styles';

const Loading = ({ status = false, text = 'Loading...' }) => (
  <Container className={status && 'active'}>
    <div>
      <FiLoader />
    </div>
    {text}
  </Container>
);

export default Loading;

Loading.propTypes = {
  status: PropTypes.bool.isRequired,
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: 'Loading...',
};
