import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes } from 'utils/propTypes';

const propTypes = {
  ...GeneralPropTypes,
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  classNamePrefix: 'spinner',
  width: 80,
  height: 80,
};

const Spinner = ({
  className,
  classNamePrefix,
  width,
  height,
  dataCy,
  ...props
}) => {
  const classes = classNames(className, classNamePrefix);
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      data-cy={dataCy}
      className={classes}
      width={width}
      height={height}
      {...props}
    >
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.9166666666666666s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(30 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.8333333333333334s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(60 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.75s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(90 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.6666666666666666s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(120 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5833333333333334s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(150 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(180 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.4166666666666667s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(210 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.3333333333333333s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(240 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.25s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(270 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.16666666666666666s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(300 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.08333333333333333s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={9.4}
        ry={4.8}
        width={6}
        height={12}
        fill="currentColor"
        transform="rotate(330 50 50)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default memo(Spinner);
