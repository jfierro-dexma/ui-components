import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from 'styled-components';

import theme from 'styles/theme';
import { StyledToast } from 'styles/components/StyledToast';

const toastPropTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.shape({}),
};

const toastDefaultProps = {
  text: 'Default text error!',
  theme: theme,
};

const Toast = ({ text, theme }) => {
  const classes = classNames('toast');
  return (
    <StyledToast theme={theme}>
      <span className={classes}>{text}</span>
    </StyledToast>
  );
};

const propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  theme: theme,
};

const ToastProvider = props => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  });

  if (!visible) {
    return <div>{props.children}</div>;
  }
  return (
    <React.Fragment>
      <div>{props.children}</div>
      <Toast {...props} />
    </React.Fragment>
  );
};

StyledToast.displayName = 'StyledToast';

Toast.propTypes = toastPropTypes;
Toast.defaultProps = toastDefaultProps;

ToastProvider.propTypes = propTypes;
ToastProvider.defaultProps = defaultProps;

export default memo(withTheme(ToastProvider));
