import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import {css} from '@emotion/core';
import PropTypes from 'prop-types';

import {colors} from '../../global/colors';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = props => (
  <SyncLoader
    data-testid="loading"
    loading={true}
    css={override}
    size={props.size}
    color={props.color}
  />
);

Loading.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Loading.defaultProps = {
  size: 9,
  color: colors.primary,
};

export default Loading;
