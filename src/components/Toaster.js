import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from 'styled-components';

import theme from 'styles/theme';
import { StyledToast } from 'styles/components/StyledToast';
import Icon from 'components/Icon';

export const ToasterContext = React.createContext();

const propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  theme: theme,
};

const Toaster = props => {
  const [visible, setVisible] = useState(false);
  const [toastConfig, setToastConfig] = useState({});
  const [toastTimeout, setToastTimeout] = useState(null);

  const showToast = ({ text, type }) => {
    setToastConfig({ text: text, type: type });
    setVisible(true);
    clearTimeout(toastTimeout);
    setToastTimeout(
      setTimeout(() => {
        setVisible(false);
      }, 5000)
    );
  };

  return (
    <ToasterContext.Provider value={{ toast: showToast }}>
      <React.Fragment>
        <div>{props.children}</div>
        {visible && <Toast {...props} {...toastConfig} />}
      </React.Fragment>
    </ToasterContext.Provider>
  );
};

Toaster.propTypes = propTypes;
Toaster.defaultProps = defaultProps;

export const ToastType = Object.freeze({
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
});

const toastPropTypes = {
  theme: PropTypes.shape({}),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(ToastType)).isRequired,
};

const toastDefaultProps = {
  theme: theme,
};

const Toast = ({ text, type, theme }) => {
  const classes = classNames('toast', type.toLowerCase());
  const iconName = {
    [ToastType.INFO]: 'info-button',
    [ToastType.SUCCESS]: 'ok-circled',
    [ToastType.WARNING]: 'attention',
    [ToastType.ERROR]: 'attention-circled',
  }[type];

  return (
    <StyledToast theme={theme}>
      <div className={classes}>
        <Icon name={iconName} size="medium" />
        <span>{text}</span>
      </div>
    </StyledToast>
  );
};

StyledToast.displayName = 'StyledToast';

Toast.propTypes = toastPropTypes;
Toast.defaultProps = toastDefaultProps;

export default memo(withTheme(Toaster));
