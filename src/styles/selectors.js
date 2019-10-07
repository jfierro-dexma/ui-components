import get from 'lodash/get';

const propFromTheme = (theme, prop) => get(theme, `theme.${prop}`);

const padding = props => propFromTheme(props, 'padding');
const margin = props => propFromTheme(props, 'padding');
const border = props => propFromTheme(props, 'border');
const borderRadius = props => propFromTheme(props, 'borderRadius');

const fontSize = props => propFromTheme(props, 'fontSize');
const fontColor = props => propFromTheme(props, 'fontColor');
const fontColorActive = props => propFromTheme(props, 'fontColorActive');
const fontWeightBold = props => propFromTheme(props, 'fontWeightBold');

const iconSize = props => propFromTheme(props, 'iconSize');
const iconColor = props => propFromTheme(props, 'iconColor');
const iconColorActive = props => propFromTheme(props, 'iconColorActive');

const backgroundColor = props => propFromTheme(props, 'backgroundColor');
const backgroundColorSelected = props =>
  propFromTheme(props, 'backgroundColorSelected');
const backgroundColorActive = props =>
  propFromTheme(props, 'backgroundColorActive');
const backgroundColorHover = props =>
  propFromTheme(props, 'backgroundColorHover');
const backgroundColorFocused = props =>
  propFromTheme(props, 'backgroundColorFocused');

const gray300 = props => propFromTheme(props, 'gray300');
const successColor = props => propFromTheme(props, 'successColor');
const warningColor = props => propFromTheme(props, 'warningColor');
const errorColor = props => propFromTheme(props, 'errorColor');

const componentHeight = props => propFromTheme(props, 'component.height');

export {
  padding,
  margin,
  border,
  borderRadius,
  fontSize,
  fontColor,
  fontColorActive,
  fontWeightBold,
  iconSize,
  iconColor,
  iconColorActive,
  backgroundColor,
  backgroundColorSelected,
  backgroundColorActive,
  backgroundColorHover,
  backgroundColorFocused,
  componentHeight,
  gray300,
  successColor,
  warningColor,
  errorColor,
};
