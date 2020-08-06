import React from 'react';
import PropTypes from 'prop-types';
import { FiLoader } from 'react-icons/fi';

import { Container } from './styles';

const Loading = ({ text = 'Loading...' }) => (
  <Container>
    <div>
      <FiLoader />
    </div>
    {text}
  </Container>
);

export default Loading;

Loading.propTypes = {
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: 'Loading...',
};
