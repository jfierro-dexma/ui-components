import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from 'styled-components';

import theme from 'styles/theme';
import { StyledToast } from 'styles/components/StyledToast';

export const ToastContext = React.createContext();

const propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  theme: theme,
};

const ToastProvider = props => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  });

  const showToast = text => {
    setText(text);
    setVisible(true);
  };

  return (
    <ToastContext.Provider value={{ showToast: showToast }}>
      <React.Fragment>
        <div>{props.children}</div>
        {visible && <Toast {...props} text={text} />}
      </React.Fragment>
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = propTypes;
ToastProvider.defaultProps = defaultProps;

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

StyledToast.displayName = 'StyledToast';

Toast.propTypes = toastPropTypes;
Toast.defaultProps = toastDefaultProps;

export default memo(withTheme(ToastProvider));
