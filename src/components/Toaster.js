import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from 'styled-components';

import { assert } from 'utils/assert';
import theme from 'styles/theme';
import { StyledToast } from 'styles/components/StyledToast';
import Icon from 'components/Icon';

export const ToastType = Object.freeze({
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
});

export class ToastConfig {
  constructor(text, type) {
    assert(typeof text === 'string');
    assert(type in ToastType);

    this.text = text;
    this.type = type;
  }
}

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
  const [toastConfig, setToastConfig] = useState(
    new ToastConfig('', ToastType.INFO)
  );
  const [toastTimeout, setToastTimeout] = useState(null);

  const showToast = toastConfig => {
    setToastConfig(toastConfig);
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
        {visible && <Toast {...props} toastConfig={toastConfig} />}
      </React.Fragment>
    </ToasterContext.Provider>
  );
};

Toaster.propTypes = propTypes;
Toaster.defaultProps = defaultProps;

const toastPropTypes = {
  toastConfig: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}),
};

const toastDefaultProps = {
  toastConfig: new ToastConfig('Default text error!', ToastType.ERROR),
  theme: theme,
};

const Toast = ({ toastConfig, theme }) => {
  const classes = classNames('toast', toastConfig.type.toLowerCase());
  const iconName = {
    [ToastType.INFO]: 'info-button',
    [ToastType.SUCCESS]: 'ok-circled',
    [ToastType.WARNING]: 'attention',
    [ToastType.ERROR]: 'attention-circled',
  }[toastConfig.type];

  return (
    <StyledToast theme={theme}>
      <div className={classes}>
        <Icon name={iconName} size="medium" />
        <span>{toastConfig.text}</span>
      </div>
    </StyledToast>
  );
};

StyledToast.displayName = 'StyledToast';

Toast.propTypes = toastPropTypes;
Toast.defaultProps = toastDefaultProps;

export default memo(withTheme(Toaster));
