import ThemeBuilder, {
  ThemeDefaultVars,
  ThemeVars
} from 'react-suite/build/modules/theme/ThemeBuilder';

let defaults: ThemeDefaultVars = {
  darkMode: false,

  defaultColor: '#3084cf',
  primaryColor: '#7367F0',
  dangerColor: '#EA5455',
  warningColor: '#F8D800',
  infoColor: '#0396FF',
  successColor: '#28C76F',

  textShadowColor: '#000',
  shadowColor: '#000',

  textColor: '#222',
  textSecondaryColor: '#4c547a',

  textActiveColor: '#4363cf',
  textActiveSecondaryColor: 'rgba(255,255,255,0.7)',

  backgroundColor: '#f0f9fb',
  backgroundSecondaryColor: '#d2ecfb',

  backgroundDarkenColor: '#000',

  borderColor: '#f9f9f9',
  borderSecondaryColor: '#fafafa'
};
let theme: ThemeVars = ThemeBuilder.build(defaults);
export default theme;
